import { useEffect, useState } from "react";
import { Coursedata } from "@/app/api/contents/route";
import { CourseCard } from "./coursecard";

interface Course {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export default async function CourseList() {

  const courses: [] = await Coursedata("cmdh1ofyk0000t5vw70wnknpm");
  console.log(courses);

  return (
    <div className="grid grid-cols-3 gap-5 ">
      {courses.map((course: any) => (
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
