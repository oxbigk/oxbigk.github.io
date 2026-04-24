import {
  BarChart3,
  CreditCard,
  List,
  Scroll,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { PortfolioData } from "./type";

const DATA: PortfolioData = {
  name: "Michael Esenwa",
  role: "Fullstack Engineer",
  location: "Lagos, Nigeria",
  email: "michael.esenwa@yahoo.com",
  github: "https://github.com/kcmikee",
  linkedin: "http://linkedin.com/in/kachukwu-michael-esenwa/",
  summary:
    "Delivering high-performance web & mobile applications across fintech and Web3.",
  skills: [
    "React.js",
    "React Native",
    "Next.js",
    "Golang",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Solidity",
    "GraphQL",
  ],
  experience: [
    {
      role: "Mobile & Frontend Lead",
      company: "Kite App",
      period: "Jan 2025 — Present",
      points: [
        "Integrated APIs for virtual USD/EUR/NGN wallets supporting 10k+ weekly transactions.",
        "Migrated the platform to a new KYC provider, raising verification success rates by 40%.",
      ],
    },
    // {
    //   role: "Frontend Engineer",
    //   company: "Folio HQ",
    //   period: "Jan 2023 — Dec 2024",
    //   points: [
    //     "Implemented real time blockchain data displays for deposit and withdrawal flows",
    //     "Integrated live chat over WebSockets, improving support response time by 50%.",
    //   ],
    // },
    {
      role: "Frontend Developer",
      company: "Zoropay",
      period: "Aug 2021 — Dec 2024",
      points: [
        "Built a self service loan repayment portal that reduced customer support requests by 50%.",
        "Developed dashboards used by 20+ partner institutions to track user activity in real time.",
      ],
    },
    {
      role: "React Native Developer",
      company: "Zedna Technology",
      period: "Nov 2019 — Aug 2021",
      points: [
        "Built reusable React Native UI components and managed a consistent design system.",
        "Partnered with product and design teams to deliver smooth user experiences.",
      ],
    },
  ],
  projects: [
    {
      id: "kite",
      title: "Kite App",
      category: "Fintech Mobile App",
      description:
        "Virtual wallet platform supporting multi-currency payments. Built for high-volume transactions with React Native.",
      tech: ["React Native", "Next.js", "Zustand", "React Query", "Axios"],
      icon: Smartphone,
      // image:
      //   "https://placehold.co/1600x1000/111/FFF?text=Kite+App&font=playfair",
      link: "https://www.kitefinance.io/",
      image: `https://raw.githubusercontent.com/oxbigk/images/refs/heads/main/Screenshot%202026-01-06%20at%202.51.07%20PM.png`,
    },
    {
      id: "foliohq",
      title: "Folio HQ",
      category: "Fintech",
      description:
        "Buy, sell, and securely store Crypto securely with Folio. Pay utility bills, recharge airtime, and purchase data with crypto.",
      tech: ["Next.js", "TypeScript", "REST APIs", "Tailwind"],
      icon: BarChart3,
      // image:
      //   "https://placehold.co/1600x1000/111/FFF?text=Folio+HQ&font=playfair",
      image:
        "https://raw.githubusercontent.com/oxbigk/images/refs/heads/main/Screenshot%202024-07-03%20at%203.22.28%20PM.png",
      link: "https://www.foliohq.io/",
    },
    {
      id: "zoropay",
      title: "Zoropay",
      category: "EdTech Platform",
      description:
        "A platform that provide loans and saving opportunities for parents with a steady income to pay their children's school fees.",
      tech: ["React", "Styled component", "Redux", "Axios"],
      icon: CreditCard,
      image: `https://raw.githubusercontent.com/oxbigk/images/refs/heads/main/h800-1447811viQQ8kAM.jpg`,
      // image:
      //   "https://placehold.co/1600x1000/111/FFF?text=Zoropay&font=playfair",
    },
    {
      id: "edumate",
      title: "Edumate",
      category: "Dapp App",
      description: "Blockchain powered education platform",
      tech: ["Next.js", "Solidity", "Wagmi", "Tailwind"],
      icon: Scroll,
      image:
        "https://raw.githubusercontent.com/oxbigk/images/refs/heads/main/Screenshot%202025-01-15%20at%204.50.56%20PM.png",
      link: "https://edumate-six.vercel.app/",
    },
    {
      id: "lajuirenFilm",
      title: "Laju Iren Film",
      category: "Movies",
      description:
        "An independent film making company that specializes in telling inspiring stories, creatively and professionally.",
      tech: ["React", "Tailwind"],
      icon: ShieldCheck,
      image:
        "https://raw.githubusercontent.com/oxbigk/images/refs/heads/main/Screenshot%202025-10-07%20at%203.10.16%20PM.png",
      link: "https://www.lajuirenfilms.com/",
    },
    {
      id: "gotodo",
      title: "Go-Todo",
      category: "Backend Development",
      description:
        "A simple todo manager application built with Golang and PostgreSQL.",
      tech: ["Golang", "PostgreSQL", "Chi"],
      icon: List,
      image:
        "https://placehold.co/1600x1000/111/FFF?text=Go-Todo&font=playfair",
      link: "https://github.com/kcmikee/taskmanager-api",
    },
  ],
};

export { DATA };
