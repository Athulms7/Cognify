import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // SSR-safe check

  useEffect(() => {
    const themeFromStorage = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (themeFromStorage === "dark" || (!themeFromStorage && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }

    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, hasMounted]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return { isDark, toggleDarkMode };
}
