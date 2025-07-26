"use client"
import { useState } from "react"

export function Input(){
    const [topic,setTopic]=useState("")
    return(
          <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="What do you want to learn?"
    value={topic}
    onChange={(e) => setTopic(e.target.value)}
  />
  <button type="submit">Generate Course</button>
</form>
    )
}
function handleSubmit(){
  
    
}