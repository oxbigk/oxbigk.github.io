import { Project } from "@/helper/type";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
  >
    <div
      className={`lg:col-span-7 overflow-hidden rounded-sm bg-gray-200 aspect-4/3 md:aspect-16/10 relative cursor-pointer ${
        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
      }`}
    >
      <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-300"></div>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 origin-center transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div
      className={`lg:col-span-5 flex flex-col gap-4 md:gap-6 ${
        index % 2 === 1 ? "lg:order-1" : "lg:order-2"
      }`}
    >
      <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#EB3A14]">
        <project.icon className="w-3 h-3 md:w-4 md:h-4" />
        <span>{project.category}</span>
      </div>
      <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter">
        {project.title}
      </h3>
      <p className="text-[#555555] text-base md:text-lg leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-1">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 md:px-3 md:py-1 border border-black/10 rounded-full text-[10px] md:text-xs font-mono uppercase text-[#555555] bg-white"
          >
            {tech}
          </span>
        ))}
      </div>
      {project?.link && (
        <MagneticButton
          href={project.link}
          target="_blank"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest mt-2 md:mt-4 hover:text-[#EB3A14] transition-colors"
        >
          View Project <ArrowUpRight className="w-4 h-4" />
        </MagneticButton>
      )}
    </div>
  </motion.div>
);
export default ProjectCard;
