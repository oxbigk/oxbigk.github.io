import { DATA } from "@/helper/constant";
import React from "react";
import { motion } from "framer-motion";

const SkillsMarquee: React.FC = () => (
  <div className="py-6 md:py-8 bg-[#111111] text-white overflow-hidden border-y border-white/10 select-none">
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div
        className="flex font-mono text-xs md:text-sm uppercase tracking-[0.3em]"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {DATA.skills.map((skill) => (
              <React.Fragment key={skill}>
                <span className="mx-4 md:mx-8">{skill}</span>
                <span className="text-[#EB3A14]">•</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </div>
);
export default SkillsMarquee;
