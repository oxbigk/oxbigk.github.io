import ParticleCanvas from "./ParticleCanvas";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowDown, Github } from "lucide-react";
import { DATA } from "@/helper/constant";

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-6 pt-20 md:pt-0 overflow-hidden">
    <ParticleCanvas />

    {/* Glow Blob */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(235,58,20,0.08)_0%,rgba(255,255,255,0)_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1] blur-[60px] animate-pulse"
    />

    <div className="max-w-[1800px] mx-auto w-full z-10 relative flex flex-col items-center text-center">
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 md:mb-12 flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm"
      >
        <div className="flex gap-1 h-3 items-center">
          <span className="w-1 h-full bg-[#EB3A14] rounded-full animate-pulse"></span>
          <span className="w-1 h-2/3 bg-[#EB3A14] rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></span>
          <span className="w-1 h-full bg-[#EB3A14] rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"></span>
        </div>
        <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#111111] font-medium">
          Open to Work
        </span>
      </motion.div>

      {/* Main Title */}
      <h1 className="text-[13vw] md:text-[10vw] leading-[0.9] font-semibold tracking-tighter text-[#111111] uppercase mix-blend-darken flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: 100, opacity: 0, filter: "blur(12px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="block"
          >
            {DATA.name.split(" ")[0]}
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: 100, opacity: 0, filter: "blur(12px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="block"
          >
            {DATA.name.split(" ")[1]}
          </motion.span>
        </div>
      </h1>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 md:mt-12 max-w-xl mx-auto"
      >
        <p className="font-sans text-base md:text-xl text-[#555555] leading-relaxed">
          Engineering scalable web and mobile applications with{" "}
          <span className="text-[#111111] font-medium">Next.js</span>,{" "}
          <span className="text-[#111111] font-medium">React Native</span>,{" "}
          <span className="text-[#111111] font-medium">Golang</span>, and{" "}
          <span className="text-[#111111] font-medium">Node.js</span>.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 md:mt-14 flex gap-4 items-center"
      >
        <MagneticButton
          onClick={() =>
            document
              .getElementById("work")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-3.5 bg-[#111111] text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#EB3A14] transition-colors duration-300 flex items-center justify-center"
        >
          View Work
        </MagneticButton>
        <MagneticButton
          href={DATA.github}
          target="_blank"
          className="p-3 border border-black/10 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center aspect-square"
        >
          <Github className="w-5 h-5 stroke-[1.5]" />
        </MagneticButton>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
    >
      <ArrowDown className="w-5 h-5 text-[#555555]/50" />
    </motion.div>
  </section>
);

export default Hero;
