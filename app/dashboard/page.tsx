import { authOptions } from "@/lib/auth";
import SignoutButton from "@/components/signoutbutton";// client component
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
    console.log(session?.user.name)
  if (!session || !session.user) {
    return redirect("/signin");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl mb-4">Welcome, {session.user.name}!</h1>
      <SignoutButton />
    </div>
  );
}
