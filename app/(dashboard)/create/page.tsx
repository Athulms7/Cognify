
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const options = [
  { id: "exam", label: "Exam", icon: "/icons/exam.png" },
  { id: "job", label: "Job Interview", icon: "/icons/job.png" },
  { id: "practice", label: "Practice", icon: "/icons/practice.png" },
  { id: "coding", label: "Coding Prep", icon: "/icons/coding.png" },
];

export default function StudyPurposeSelector() {
  const [selected, setSelected] = useState("");
    const navigate=useRouter();
  const handleSelect = (label:string) => {
    setSelected(label);
    console.log(selected)
  };

  const handleContinue = () => {
    console.log("Selected Purpose:", selected);
    if (!selected){
      toast.success("select an item")
      console.log("select an item")
    }

    
    // navigate.push("/topic")
    // Proceed to next step or save the selection
  };

  return (
    <div className="h-130 ml-50 mt-20 bg-white text-black border-2 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-2">Create Your Study Material</h1>
      <p className="text-gray-400 mb-8">Follow the steps to generate personalized study content</p>

      {/* Progress Indicator */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">1</div>
        <div className="w-10 h-1 bg-gray-600"></div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white">2</div>
      </div>

      <h2 className="text-xl font-semibold mb-6">What's the purpose of your study material?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mb-8 text-black">
        {options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleSelect(opt.label)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg border transition text-black duration-200 ${
              selected === opt.label ? "hover:shadow-gray-600 bg-gray-700 border-4 border-blue-700" : "border-gray-700 bg-gray-800 "
            }`}
          >
            <img src={opt.icon} alt={opt.label} className="w-16 h-16 mb-2" />
            <span className="font-medium text-white text-lg">{opt.label}</span>
          </button>
        ))}
      </div>
        <Link href={{
          pathname:"/topic",
          query:{
            selected:selected
          }
        }} >
      <button
        onClick={handleContinue}
        disabled={!selected}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded disabled:opacity-50"
      >
        Continue
      </button>
      </Link>
    </div>
  );
}

