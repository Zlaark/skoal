"use client";

import React from "react";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-[#02040a]">
      <Hero />
      <Hero />
      {/* Additional sections can be added here */}
    </main>
  );
};

export default Home;
