// "use client"
// import { Createcourses } from "@/app/api/generatecourse/route";
// import { useSearchParams } from 'next/navigation'
// import { useRouter } from "next/router";

// import { useState } from "react";

// export  function  Buttongenerate({userId}:{userId:string}){
//     const searchParams = useSearchParams()
//   const coursetype = searchParams.get("selected")
//   const [loading,setloading]=useState(false)
// console.log(coursetype)
//    const [topic,settopic]=useState("")
//     return(<div>
//         <input className="w-70" type="text" placeholder="What topic Do you need to learn?" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
//                 settopic(e.target.value)
//                 console.log(topic)
//             }}></input>
//         <button className="bg-blue-400 text-secondary-foreground p-2 rounded-2xl" onClick={async()=>{
//             console.log(topic,"hiii",userId)
//             setloading(true)
//             await Createcourses(topic,userId)
//             setloading(false)
//             // router.push("/dashboard")
//         }

//         }>{loading? "generatingg...":"Generate"}</button>
        
//     </div>)
// }


"use client"

import { Createcourses } from "@/app/api/generatecourse/route";
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";

interface ButtonGenerateProps {
  userId: string;
}

export function Buttongenerate({ userId }: ButtonGenerateProps) {
  const searchParams = useSearchParams();
  const coursetype = searchParams.get("selected");
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const router=useRouter()
  const [difficulty, setDifficulty] = useState("");

  const handleGenerate = async () => {
    if (!topic || !difficulty){
        toast.success("Fill all the fields")
    }else{
        setLoading(true);
    try{const d=await Createcourses(topic, userId);}    
    catch{
        toast.error("failed to generate")
    }
   
    setLoading(false);
  }
    
  };

  return (
    <div className="p-4 flex flex-col  gap-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Create Your Study Material</h1>
      <p className="text-gray-400 mb-8">Follow the steps to generate personalized study content</p>
        <div className="flex items-center gap-4 mb-8 ml-40">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-600 text-white">1</div>
        <div className="w-10 h-1 bg-blue-600"></div>
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white">2</div>
      </div>
      <label className="text-lg font-medium">
        What would you like to learn about?
      </label>
      <textarea
        className="rounded-md p-3 bg-white text-gray-800 border border-gray-700 placeholder-gray-400"
        placeholder="E.g., Machine Learning Fundamentals, French Revolution, or paste your content here..."
        rows={4}
        onChange={(e) => setTopic(e.target.value)}
      />

      <p className="text-sm text-gray-400 -mt-2">
        Be as specific as possible for better results
      </p>

      <label className="text-md font-medium mt-2">Difficulty Level</label>
      <select
        className="p-2 rounded-md bg-white border border-gray-700 text-gray-400"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">Select difficulty level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <div className="flex justify-between mt-6">
        <button
          className="bg-transparent border border-gray-600  px-4 py-2 rounded-md"
          onClick={() => window.history.back()}
        >
          Back
        </button>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center gap-2 disabled:opacity-60"
          disabled={loading}
          onClick={handleGenerate}
        >
          {loading ? "Generating..." : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 4v16h16M4 4l16 16"/>
              </svg>
              Generate Material
            </>
          )}
        </button>
      </div>
    </div>
  );
}
