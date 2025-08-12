-- DropForeignKey
ALTER TABLE "CourseVideo" DROP CONSTRAINT "CourseVideo_courseId_fkey";

-- AddForeignKey
ALTER TABLE "CourseVideo" ADD CONSTRAINT "CourseVideo_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
