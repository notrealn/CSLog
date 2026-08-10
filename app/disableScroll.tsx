"use client";

import { useEffect } from "react";

export default function DisableScrollInput() {
  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      const activeEl = document.activeElement as HTMLInputElement | null;

      // Check if the currently focused element is a number input
      if (activeEl && activeEl.getAttribute("type") === "number") {
        activeEl.blur(); // Instantly removes focus to let the page scroll
      }
    };

    // Keep passive: true (default) so browser scrolling remains perfectly smooth
    document.addEventListener("wheel", handleGlobalWheel);
    return () => document.removeEventListener("wheel", handleGlobalWheel);
  }, []);

  return null;
}
