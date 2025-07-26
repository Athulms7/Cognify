
import { Coursedata } from "@/app/api/contents/route"
import { CourseType } from "@/lib/types"
export  default async function Coursecard(){
    const data:[]=await Coursedata("cmdh1ofyk0000t5vw70wnknpm")
    console.log(data)
    return(
        <div>
            {/* {data.map((course:CourseType)=>{
                <div>{course.title}</div>
            })} */}
            {JSON.stringify(data)}
        </div>
    )
}