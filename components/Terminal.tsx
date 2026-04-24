"use client";
import { DATA } from "@/helper/constant";
import { HistoryEntry } from "@/helper/type";
import { useEffect, useRef, useState } from "react";

const Terminalinterface: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      type: "system",
      content: 'System online. Try asking: "What is your main stack?"',
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history, isProcessing]);

  const handleCommand = async (cmd: string) => {
    if (!cmd.trim()) return;
    setHistory((prev) => [...prev, { type: "user", content: cmd }]);
    setInput("");
    setIsProcessing(true);
    await new Promise((r) => setTimeout(r, 600));

    let resp = "I can provide info on Skills, Experience, or specific Tech.";
    const lCmd = cmd.toLowerCase();

    if (
      lCmd.includes("stack") ||
      lCmd.includes("tech") ||
      lCmd.includes("skill")
    ) {
      resp =
        "Core: React, Next.js, React Native, NestJS, PostgreSQL. Specialized in Web3 (Solidity) and Golang.";
    } else if (
      lCmd.includes("experience") ||
      lCmd.includes("work") ||
      lCmd.includes("job")
    ) {
      resp =
        "Currently Mobile and Frontend Lead at Kite Finance. Previously Zoropay (EdTech) and Zedna technology (Fintech)."; //Folio HQ (Fintech),
    } else if (lCmd.includes("contact")) {
      resp = `Contact: ${DATA.email} | Location: ${DATA.location}`;
    }

    setHistory((prev) => [...prev, { type: "bot", content: resp }]);
    setIsProcessing(false);
  };

  const quickPrompts = ['"Core skills?"', '"Experience?"', '"Contact info?"'];

  return (
    <div className="w-full flex flex-col items-center gap-6 md:gap-8">
      <div className="w-full bg-[#0F0F0F] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono">
        <div className="bg-[#151515] px-4 py-3 flex items-center gap-4 border-b border-white/5 shrink-0">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          <div className="flex-1 text-center text-[10px] md:text-xs text-gray-500">
            michael-bot — node — 80x24
          </div>
        </div>

        <div className="p-4 md:p-6 text-xs md:text-base h-[350px] md:h-[400px] flex flex-col bg-black/50 backdrop-blur-sm">
          <div
            ref={scrollRef}
            className="space-y-3 md:space-y-4 mb-2 flex-1 overflow-y-auto scrollbar-hide"
          >
            {history.map((entry, idx) => (
              <div
                key={idx}
                className={`${
                  entry.type === "user" ? "text-white" : "text-gray-200"
                }`}
              >
                {entry.type === "system" && (
                  <div className="text-green-400/90">
                    <span className="text-[#EB3A14]">➜</span> ~ {entry.content}
                  </div>
                )}
                {entry.type === "user" && (
                  <div>
                    <span className="text-blue-400">➜</span>{" "}
                    <span className="text-gray-300">{entry.content}</span>
                  </div>
                )}
                {entry.type === "bot" && (
                  <div className="text-gray-200 border-l-2 border-[#EB3A14] pl-3 py-1">
                    {entry.content}
                  </div>
                )}
              </div>
            ))}
            {isProcessing && (
              <div className="text-gray-500 italic text-xs animate-pulse">
                Processing...
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 md:gap-3 pt-3 border-t border-white/10 shrink-0">
            <span className="text-[#EB3A14]">➜</span>
            <span className="text-blue-400">~</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
              className="bg-transparent border-none outline-none text-white w-full placeholder-gray-700 focus:placeholder-gray-600"
              placeholder="Type your question..."
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleCommand(prompt.replace(/"/g, ""))}
            className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] md:text-xs font-mono text-gray-400 transition-colors cursor-pointer"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

const Terminal: React.FC = () => (
  <section
    id="ai"
    className="bg-[#050505] text-gray-300 py-20 md:py-32 px-4 md:px-6 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>
    <div className="max-w-[1000px] mx-auto relative z-10">
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white">
            Powered
          </span>
        </div>
        <h2 className="text-3xl md:text-6xl font-semibold tracking-tighter text-white mb-4">
          Ask my AI Assistant
        </h2>
        <p className="text-gray-400 max-w-md mx-auto font-light text-sm md:text-lg">
          Query my background, tech stack, or availability.
        </p>
      </div>
      <Terminalinterface />
    </div>
  </section>
);

export default Terminal;
