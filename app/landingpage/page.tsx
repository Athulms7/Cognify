import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { Coursedata } from "../api/contents/route"
import { searchYouTube } from "../api/youtube/route"
import { useState } from "react"
import { Input } from "@/components/input"
import { Createcourses } from "../api/generatecourse/route"
import { CourseType } from "@/lib/types"
import CourseList from "../(dashboard)/_components/courses"

export default async function landingpage(){
    const session = await getServerSession(authOptions)
    console.log("hii",session?.user.id)
    
    
    
    //@ts-ignore
    // const course=await Createcourses(title,session?.user.id)
    // console.log(course)

    

    

    return(
      
        <div>
          <CourseList/>
          {/* {JSON.stringify(data)} */}
            ladingpageeee
            <iframe id="player"  width="100" height="150"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  ></iframe>
  
<Input/>

        </div>
    )
}

function handleSubmit(){

}



