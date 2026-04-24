import { DATA } from "@/helper/constant";
import { motion } from "framer-motion";

const ExperienceSection: React.FC = () => (
  <section id="about" className="px-4 md:px-6 py-20 md:py-32 bg-white">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
      <div className="relative">
        <div className="md:sticky md:top-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase mb-6 md:mb-8">
              Career
              <br />
              Timeline
            </h2>
            <div className="w-12 md:w-16 h-1 bg-[#EB3A14] mb-6 md:mb-8"></div>
            <p className="text-[#555555] text-base md:text-lg leading-relaxed">
              {DATA.summary}
            </p>
            <div className="mt-8 md:mt-12 p-5 md:p-6 bg-[#F5F5F5] rounded-lg border border-black/5">
              <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#EB3A14] mb-3">
                Education
              </h4>
              <p className="font-semibold text-sm md:text-base">
                M.Sc Information Technology
              </p>
              <p className="text-xs md:text-sm text-[#555555]">
                Miva Open University (In View)
              </p>
            </div>
            <div className="mt-8 md:mt-4 p-5 md:p-6 bg-[#F5F5F5] rounded-lg border border-black/5">
              <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#EB3A14] mb-3">
                Education
              </h4>
              <p className="font-semibold text-sm md:text-base">
                Blockchain development
              </p>
              <p className="text-xs md:text-sm text-[#555555]">Web3Bridge</p>
            </div>
            <div className="mt-8 md:mt-4 p-5 md:p-6 bg-[#F5F5F5] rounded-lg border border-black/5">
              <h4 className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#EB3A14] mb-3">
                Education
              </h4>
              <p className="font-semibold text-sm md:text-base">B.Sc Physics</p>
              <p className="text-xs md:text-sm text-[#555555]">
                Federal University of Petroleum Resources, Effurun
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="space-y-12 md:space-y-16 border-l border-black/10 pl-6 md:pl-12 mt-4 md:mt-0">
        {DATA.experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative group"
          >
            <div className="absolute -left-[1.95rem] md:-left-13 top-1.5 md:top-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-white border-2 border-gray-300 rounded-full z-10 group-hover:border-[#EB3A14] group-hover:bg-[#EB3A14] transition-colors"></div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
              {job.role}
            </h3>
            <p className="font-mono text-xs md:text-sm text-[#555555] mt-1 mb-3 uppercase tracking-wider">
              {job.company} / {job.period}
            </p>
            <ul className="space-y-2 text-[#555555] list-disc pl-4 text-sm md:text-base marker:text-gray-300">
              {job.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
