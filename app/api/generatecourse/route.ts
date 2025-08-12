import { NextRequest, NextResponse } from "next/server";

import { searchYouTube } from "@/lib/youtube";
import { prisma } from "@/lib/prisma";
import { generateSearchQueries } from "@/lib/gemini";
import axios from "axios";
import { title } from "process";

export async function POST(req: NextRequest) {
  const { topic, userId } = await req.json();

  if (!topic || !userId) {
    return NextResponse.json({ error: "Missing topic or userId" }, { status: 400 });

  }
  const existingCourses = await prisma.course.findMany({
  where: { userId },
});

const user = await prisma.user.findUnique({
  where: { id: userId },
});

const maxCourses = user?.subscription === "pro" ? Infinity : 3;

if (existingCourses.length >= maxCourses) {
  return NextResponse.json(
    { error: "Course limit reached. Upgrade to create more." },
    { status: 403 }
  );
}



  const data = await generateSearchQueries(topic);
  const queries=data.queries
 if (queries.length === 0) {
  return NextResponse.json({ error: "AI did not return valid queries" }, { status: 500 });
}


const course = await prisma.course.create({
  data: {
    title: topic,
    description:data.description,
    userId,
  },
});

const videos = [];

for (let i = 0; i < queries.length; i++) {
  const video = await searchYouTube(queries[i]);
  if (video) {
    const saved = await prisma.courseVideo.create({
      data: {
        courseId: course.id,
        title: video.title,
        url: video.url,
        thumbnail: video.thumbnail,
        order: i + 1,
      },
    });
    videos.push(saved);
  }
}


return NextResponse.json({
  message: "Course created successfully",
  course,
  videos,
});

 
}

export async function Createcourses(topic:string,userId:string){
  console.log(userId,"lll",title)
  const response=await  axios.post("http://localhost:3000/api/generatecourse",{
    topic:topic,
    userId:userId
  })
  return  response.data
}