"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Check if user has visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  // Prevent flash by keeping content hidden until we know status or loader is covering
  // If not mounted, render nothing (or a subtle bg) to avoid FOUC before we know if we need loader
  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* 
        Content visibility:
        When loading, we keep content hidden or rendered but invisible.
        If we unmount content, we reset state. Better to hide.
        If we use 'invisible', layout is computed but pixels not drawn.
        When loader finishes (isLoading becomes false), content becomes visible.
        The Loader's exit animation (slide up) will reveal the content.
      */}
      <div className={isLoading ? "invisible max-h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
