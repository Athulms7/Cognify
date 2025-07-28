"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DarkButton } from "./darkbutton";





export function Appbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      {/* Appbar */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-black/70 border-b border-gray-300 dark:border-gray-700 z-50 px-4 py-3 shadow-md flex justify-between items-center">
        {/* Left: Toggle + Logo */}
        <div className="flex items-center gap-4">
          <button
            className="text-gray-800 dark:text-gray-100"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="font-bold text-2xl text-dark-blue-800">
            Cognify
          </Link>
        </div>

        {/* Right: Nav Items */}
        <nav className="flex items-center gap-5 text-gray-700 dark:text-gray-300 text-lg">
          
          
          <DarkButton />
        
          
        </nav>
      </header>

      {/* Sidebar with slide-in effect */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-40 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-16 px-6 py-4 space-y-4">
          <Link className="block text-gray-800 dark:text-gray-100 hover:text-gray-500 font-bold" href="/home" onClick={() => setIsSidebarOpen(false)}>Dashboard</Link>
          <Link className="block text-gray-800 dark:text-gray-100 hover:text-gray-500 font-bold" href="/community" onClick={() => setIsSidebarOpen(false)}>MarketPlace</Link>

          <Link className="block text-gray-800 dark:text-gray-100 hover:text-gray-500 font-bold" href="/about" onClick={() => setIsSidebarOpen(false)}>About</Link>
        </div>
      </aside>

      {/* Optional: Dark overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-opacity-30 z-30"
        ></div>
      )}
    </>
  );
}
