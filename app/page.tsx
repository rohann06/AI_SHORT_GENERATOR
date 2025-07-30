"use client";
import LandingNav from "./components/[LandingPage]/LandingNav";
import HeroSection from "./components/[LandingPage]/HeroSection";
import React from "react";
import Feedbacks from "./components/[LandingPage]/Feedbacks";

export default function Home() {
  return (
    <div className="bg-[#121726]">
      <LandingNav />
      <HeroSection />
      <Feedbacks />
    </div>
  );
}
