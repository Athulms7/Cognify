
import {authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

import { Buttongenerate } from "../_components/inputfield"


export default async  function Topicselection(){

    const session= await getServerSession(authOptions)
    const userid:string=session?.user.id!
    
   
    return(<div>
        <div className="m-20 ml-50 flex justify-center align-center text-centre ">
        
        <Buttongenerate userId={userid}/>  
        </div>
       
    </div>)
}