import { DATA } from "@/helper/constant";
import React from "react";

const SkillItem: React.FC<{ skill: string }> = ({ skill }) => (
  <>
    <span className="mx-4 md:mx-8">{skill}</span>
    <span className="text-[#EB3A14]">•</span>
  </>
);

const SkillsMarquee: React.FC = () => (
  <div className="py-6 md:py-8 bg-[#111111] text-white overflow-hidden border-y border-white/10 select-none">
    <div className="flex whitespace-nowrap">
      {/* Two identical sets side by side; CSS translates the pair by -50% to loop seamlessly */}
      <div className="flex animate-marquee font-mono text-xs md:text-sm uppercase tracking-[0.3em]">
        {DATA.skills.map((skill) => (
          <SkillItem key={`a-${skill}`} skill={skill} />
        ))}
        {DATA.skills.map((skill) => (
          <SkillItem key={`b-${skill}`} skill={skill} />
        ))}
      </div>
    </div>
  </div>
);
export default SkillsMarquee;
