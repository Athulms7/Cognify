"use client";

import { signOut } from "next-auth/react";
import { toast } from "sonner";

export default function SignoutButton() {
  
  return (
    <button
      onClick={() =>{
         toast.success("Signed Out Succesfully")
         signOut({ callbackUrl: "/landingpage" })}}
      className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
    >
      Sign Out
    </button>
  );
}