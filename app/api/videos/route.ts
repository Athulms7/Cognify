import { prisma } from "@/lib/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); 
    console.log(body)
    const courseid = body.id;

    const data = await prisma.courseVideo.findMany({
      where: {
        courseId: courseid,
      },
      select: {
        id: true,
        title: true,
        url: true,
        thumbnail: true,
        order: true,
        createdAt: true,
      },
      orderBy: {
        order: "asc",
      },
    });

    return NextResponse.json({ videos:data });
  } catch (error) {
    console.error("Error fetching course videos:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}


export async function Getvideos(courseid:string) {
 const resp=await axios.post("http://localhost:3000/api/videos",{
        id:courseid
 })   
 return await resp.data.videos
}