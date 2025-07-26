import { useDarkMode } from "@/hooks/usedarkmode"; // adjust path if needed

export function DarkButton() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
<>
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center transition-colors duration-100 text-slate-600 dark:text-slate-300 focus-visible:outline-none hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:bg-slate-100 dark:focus-visible:bg-slate-800 disabled:text-slate-300 disabled:dark:text-slate-800 disabled:hover:bg-transparent disabled:dark:hover:bg-transparent disabled:cursor-not-allowed rounded-full p-2" aria-label="Switch theme" data-state="closed">
      
        {isDark ? (
  <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
    <path
      stroke="currentColor"
      d="M2.5 9.54c0 4.396 3.474 7.96 7.76 7.96 3.3 0 6.117-2.112 7.24-5.09a6.729 6.729 0 0 1-2.93.668c-3.809 0-6.897-3.168-6.897-7.075a7.16 7.16 0 0 1 1.448-4.337C5.375 2.232 2.5 5.543 2.5 9.541Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
    />
  </svg>
) : (
  <svg fill="none" viewBox="0 0 20 20" width="20" height="20">
    <path
      stroke="currentColor"
      d="M10 16.666v1.667m0-16.666v1.666M16.667 10h1.666M1.667 10h1.666M15 15l1.25 1.25M3.75 3.75 5 5m10 0 1.25-1.25m-12.5 12.5L5 15m9.167-5a4.167 4.167 0 1 1-8.334 0 4.167 4.167 0 0 1 8.334 0Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
    />
  </svg>
)}

      </button>
      </>
  );
}
