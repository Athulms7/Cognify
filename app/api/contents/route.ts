import axios from "axios"
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';



export async function GET(req:NextRequest) {
  // const headersList = headers();
  // const userId = (await headersList).get("id") || "";
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("id") || "";

  const courses = await prisma.course.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      description:true,
      createdAt: true,
      videos: {
        orderBy: {
          order: "asc",
        },
        select: {
          id: true,
          title: true,
          url: true,
          thumbnail: true,
          order: true,
          createdAt: true,
        },
      },
    },
  });

  return Response.json({ courses });
}



export async  function Coursedata(id:string){
  
    const resp=await axios.get("http://localhost:3000/api/contents",{
      params:{id},
    })
    return resp.data.courses

}

