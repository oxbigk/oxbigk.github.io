import { DATA } from "@/helper/constant";
import MagneticButton from "./MagneticButton";

const NavBar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full px-4 md:px-6 py-5 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
    <a
      href="#"
      className="font-mono text-sm font-semibold uppercase tracking-widest hover:text-[#EB3A14] transition-colors pointer-events-auto"
    >
      {DATA.name.split(" ")[0]}
      <br />
      {DATA.name.split(" ")[1]}
    </a>
    <div className="flex items-center gap-4 md:gap-10 pointer-events-auto">
      <div className="hidden md:flex gap-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
        <a
          href="#work"
          className="font-mono text-xs uppercase tracking-widest hover:text-[#EB3A14] transition-colors"
        >
          Work
        </a>
        <a
          href="#about"
          className="font-mono text-xs uppercase tracking-widest hover:text-[#EB3A14] transition-colors"
        >
          About
        </a>
        <a
          href="#ai"
          className="font-mono text-xs uppercase tracking-widest hover:text-[#EB3A14] transition-colors"
        >
          AI
        </a>
      </div>
      <MagneticButton
        href="#contact"
        className="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#EB3A14] hover:text-white transition-colors duration-200 shadow-lg"
      >
        Contact
      </MagneticButton>
    </div>
  </nav>
);

export default NavBar;
