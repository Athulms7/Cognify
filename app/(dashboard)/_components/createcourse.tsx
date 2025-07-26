import { Plus } from "lucide-react";
import Link from "next/link";

export  function CreateCourseCard() {
  return (
    <Link href={"/create"}>
    <div className="border w-60 hover:border-blue-500 hover:shadow-blue-500/50 hover:shadow-lg 
               cursor-pointer  border-dashed border-gray-500 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-black text-white min-h-[300px]">
      <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center mb-4">
        <Plus size={24} /> 
      </div>
      <h2 className="text-lg font-semibold">Create Course</h2>
      <p className="text-gray-400 text-sm mt-1 mb-4">
        Start building your next study material
      </p>
      <button className="text-xs bg-blue-900 text-blue-400 rounded-full px-3 py-1">
        1 credits left
      </button>
    </div>
    </Link>
  );
}

