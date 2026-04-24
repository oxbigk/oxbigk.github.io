import { DATA } from "@/helper/constant";

const Footer: React.FC = () => (
  <footer className="bg-[#111111] py-6 text-center">
    <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
      © 2025 {DATA.name}.
    </p>
  </footer>
);

export default Footer;
