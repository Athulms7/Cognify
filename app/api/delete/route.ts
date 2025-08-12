import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);

    const courseid = body.id?.trim();

    if (!courseid) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 });
    }

    const exists = await prisma.course.findUnique({
      where: { id: courseid },
    });

    if (!exists) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    await prisma.courseVideo.deleteMany({
      where: { courseId: courseid },
    });

    await prisma.course.delete({
      where: { id: courseid },
    });

    return NextResponse.json({ msg: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting course:", error);
    return NextResponse.json({ error: "Failed to delete course" }, { status: 500 });
  }
}


export async function Deletecourse(courseid:string) {

    const resp=await axios.delete("http://localhost:3000/api/delete",{
        data:{id:courseid}
    })
    return await resp.data
    
}