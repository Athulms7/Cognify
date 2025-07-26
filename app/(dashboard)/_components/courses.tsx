"use client";

import { useEffect, useState } from "react";
import { CourseCard } from "./coursecard";
import { Coursedata } from "@/app/api/contents/route"; // move logic to utils/api file if needed
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { CreateCourseCard } from "./createcourse";
import { Skeleton } from "@/components/ui/skeleton"
interface Course {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
}

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
    // const session=getServerSession(authOptions)
      const data = await Coursedata("cmdh1ofyk0000t5vw70wnknpm");
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <CreateCourseCard/>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description ?? "No description provided"}
          date={new Date(course.createdAt).toLocaleDateString()}
        />
      ))}
    </div>
  );
}
