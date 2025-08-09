"use client"
import { Coursedata } from "@/app/api/contents/route"
import { Getvideos } from "@/app/api/videos/route"

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import {useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export  default   function(){
    // const session=await getServerSession(authOptions)
    const searchparams=useSearchParams()
    const courseid =searchparams.get("courseid") || ""
    const [videos,setvideos]=useState([])
    useEffect(()=>{
        async function data(){
const data=await Getvideos(courseid)
setvideos(data)
        }
        data()
        
    },[])
    

    return(<div className="ml-50 mt-20">
        {JSON.stringify(videos)}
    </div>)
}