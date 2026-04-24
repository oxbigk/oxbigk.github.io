import { DATA } from "@/helper/constant";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const WorkSection: React.FC = () => (
  <section
    id="work"
    className="px-4 md:px-6 py-20 md:py-32 max-w-[1800px] mx-auto"
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-black/10 pb-6"
    >
      <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase">
        Selected Work
      </h2>
      <span className="font-mono text-xs md:text-sm text-[#555555] mt-2 md:mt-0">
        (2019 — {new Date().getFullYear()})
      </span>
    </motion.div>
    <div className="space-y-20 md:space-y-32">
      {DATA.projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </section>
);

export default WorkSection;
