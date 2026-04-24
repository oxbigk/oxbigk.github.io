"use client";
import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Terminal from "@/components/Terminal";
import Hero from "@/components/Hero";
import SkillsMarquee from "@/components/SkillsMarquee";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/Experience";
import ContactSection from "@/components/Contact";
import NavBar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

// Canvas Background

// --- Main App Component ---

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Initial Loader Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-10000 bg-[#111111] flex flex-col justify-center items-center text-[#F5F5F5]">
        <div className="flex flex-col items-center gap-4">
          <div className="font-mono text-6xl md:text-8xl font-bold tracking-tighter">
            {Math.min(progress, 100)}%
          </div>
          <div className="w-32 h-px bg-gray-800 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-[#EB3A14]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F5] text-[#111111] min-h-screen selection:bg-[#EB3A14] selection:text-white font-sans overflow-x-hidden">
      <CustomCursor />

      {/* Navigation */}
      <NavBar />
      {/* Hero Section */}
      <Hero />

      {/* Marquee Skills */}
      <SkillsMarquee />

      {/* Experience & About */}
      <ExperienceSection />

      {/* AI Terminal Section */}
      <Terminal />

      {/* Selected Work */}
      <WorkSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
