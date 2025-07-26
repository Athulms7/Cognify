import { authOptions } from "@/lib/auth";
import SignoutButton from "@/components/signoutbutton";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import WelcomeBanner from "../_components/welcomebanner";
import Coursecard from "../_components/courses";
import CreateCourseCard from "../_components/coursecard";




export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  
  
    
  if (!session || !session.user) {
    return redirect("/signin");
  }
  const id:string=session?.user.id
  
  

  return (
    <div className="flex flex-col items-center justify-center  w-screen">
      <div className=" justify-center">
      <WelcomeBanner session={session}/>
      <SignoutButton />
      <CreateCourseCard/>
      <Coursecard/>

      </div>
      
    </div>
  );
}
