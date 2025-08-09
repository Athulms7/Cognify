import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  description: string;
  date: string;
  courseid:string
}

export  function CourseCard({ title, description, date,courseid }: CourseCardProps) {
  return (
    <Link href={`/course?courseid=${courseid}`}>
    <div className="bg-black  hover:border-blue-500 hover:shadow-blue-500/50 hover:shadow-lg 
               cursor-pointer text-white border border-neutral-800 rounded-xl p-4 space-y-3 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
          <span role="img" aria-label="books">📚</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
            <CheckCircle size={16} />
            Ready
          </div>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>

      {/* Title + Description */}
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mt-2">
        <button className="bg-white text-black text-sm px-3 py-1 rounded-md font-medium">Publish</button>
        <button className="bg-red-600 text-white text-sm px-3 py-1 rounded-md font-medium">Delete</button>
        <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md font-medium">Start</button>
      </div>
    </div>
    </Link>
  );
}
