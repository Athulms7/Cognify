import axios from "axios"
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';


export async function GET() {
  const headersList = headers();
  const userId = (await headersList).get("id") || "";

  const courses = await prisma.course.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
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
        headers:{
            id:id
        }
    })
    return resp.data.courses

}
