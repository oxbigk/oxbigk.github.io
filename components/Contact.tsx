import { DATA } from "@/helper/constant";
import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

const ContactSection: React.FC = () => (
  <section
    id="contact"
    className="px-4 md:px-6 py-20 md:py-40 bg-[#F5F5F5] border-t border-black/5"
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-[1200px] mx-auto text-center"
    >
      <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#EB3A14] mb-6">
        Status: Available
      </p>
      <h2 className="text-5xl md:text-9xl font-semibold tracking-tighter uppercase mb-10 md:mb-12 leading-none text-[#111111]">
        Let&apos;s Work
        <br />
        Together
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
        <a
          href={`mailto:${DATA.email}`}
          className="group flex items-center gap-3 text-lg md:text-2xl font-mono border-b border-black/20 pb-1 hover:border-[#EB3A14] hover:text-[#EB3A14] transition-all"
        >
          <Mail className="w-4 h-4 md:w-5 md:h-5" /> {DATA.email}
        </a>
      </div>
      <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-left border-t border-black/5 pt-12">
        <div>
          <h4 className="font-mono text-[10px] uppercase text-[#555555] mb-3">
            Socials
          </h4>
          <a
            href={DATA.linkedin}
            target="_blank"
            className="block text-sm md:text-base font-medium hover:text-[#EB3A14] transition-colors mb-1"
          >
            LinkedIn
          </a>
          <a
            href={DATA.github}
            target="_blank"
            className="block text-sm md:text-base font-medium hover:text-[#EB3A14] transition-colors"
          >
            GitHub
          </a>
        </div>
        <div>
          <h4 className="font-mono text-[10px] uppercase text-[#555555] mb-3">
            Location
          </h4>
          <p className="text-sm md:text-base font-medium">Lagos, Nigeria</p>
          <p className="text-sm md:text-base font-medium text-[#555555]">
            Remote (Global)
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[10px] uppercase text-[#555555] mb-3">
            Stack
          </h4>
          <p className="text-sm md:text-base font-medium">React / Next.js</p>
          <p className="text-sm md:text-base font-medium">
            React Native / Typescript
          </p>
          <p className="text-sm md:text-base font-medium">Golang / Node.js</p>
          <p className="text-sm md:text-base font-medium">Nest.js / Solidity</p>
        </div>
        <div className="col-span-2 md:col-span-1 flex items-end justify-center md:justify-end mt-4 md:mt-0">
          <MagneticButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 md:w-12 md:h-12 border border-black/10 bg-white rounded-full flex items-center justify-center hover:bg-[#EB3A14] hover:text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
