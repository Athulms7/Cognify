import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

export default async function landingpage(){
    const session = await getServerSession(authOptions)
    console.log(session?.user)
    return(
        <div>
            ladingpageeee
        </div>
    )
}