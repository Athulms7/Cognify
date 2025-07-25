"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {

  return (
    <div>
      koii 
      <button onClick={()=>signIn("google")}>hiii</button>
    </div>
  );
}
