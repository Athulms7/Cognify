"use client";

import { useEffect, useState } from "react";
import { CourseCard } from "./coursecard";
import { Coursedata } from "@/app/api/contents/route"; 

import { CreateCourseCard } from "./createcourse";
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export default function CourseList({user}:any) {
console.log(user)
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await Coursedata(user);
      setCourses(data);

      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" >
    <Skeleton className="h-[300px] w-60 rounded-xl" />
    <Skeleton className="h-[300px] w-60 rounded-xl" />
    <Skeleton className="h-[300px] w-60 rounded-xl" />
  </div>;

  return (
    <div>
        
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <CreateCourseCard/>
      {courses.map((course) => (
        
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description ?? "No description provided"}
          date={new Date(course.createdAt).toLocaleDateString()}
          courseid={course.id}
        />
        
      ))}
    </div>
    </div>
  );
}
