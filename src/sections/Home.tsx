import { personalInfo } from "../data/personal";
import { ArrowRight, Send, Terminal, Sparkles, Server, Video, Phone, Wifi, Battery, Plus } from "lucide-react";

const Home = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="py-20 md:py-28 border-b border-[#f1f5f9]">
      <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
        {/* Sub-header or small status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] text-[#16a34a] text-xs font-medium mb-6 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
          {personalInfo.currentStatus}
        </div>

        {/* Hero Title */}
        <h1 className="text-[#0f172a] text-3xl md:text-5xl font-light tracking-tight leading-tight mb-8">
          I'm <span className="serif-font font-normal">{personalInfo.shortName}</span>, who loves building{" "}
          <span className="serif-font font-normal">scalable backend architectures</span> &{" "}
          <span className="serif-font font-normal">real-time systems</span>.
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollTo("contact")}
            className="btn-pill btn-pill-primary text-sm font-medium flex items-center gap-2"
          >
            Let's Talk <ArrowRight size={14} />
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="btn-pill btn-pill-secondary text-sm font-medium"
          >
            My Services
          </button>
        </div>
      </div>

      {/* Showcase Mockups */}
      <div className="device-container mt-8">
        {/* Left Side: Mobile Mockup representing VHub Chat Client */}
        <div className="mockup-mobile mx-auto md:mx-0 shadow-lg border border-[#e2e8f0]">
          <div className="mockup-mobile-notch"></div>
          <div className="mockup-mobile-screen flex flex-col justify-between select-none">
            {/* iOS Status Bar */}
            <div className="flex items-center justify-between text-[8px] font-semibold text-[#0f172a] px-1.5 mt-0.5 z-10">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <Wifi size={8} strokeWidth={2.5} />
                <span className="text-[7px]">5G</span>
                <Battery size={9} strokeWidth={2.5} className="opacity-80" />
              </div>
            </div>

            {/* iOS App Bar Navigation Header */}
            <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2 mt-4">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-[#0066ff] flex items-center justify-center text-white text-[9px] font-bold">
                  VS
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-[#0f172a] leading-tight">VHub Chat</span>
                  <div className="flex items-center gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-[#22c55e]"></span>
                    <span className="text-[7px] text-[#22c55e] font-semibold">Active now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-[#64748b] mr-0.5">
                <Video size={10} className="hover:text-[#0066ff] cursor-pointer" />
                <Phone size={9} className="hover:text-[#0066ff] cursor-pointer" />
              </div>
            </div>

            {/* iOS Chat Feed Messages */}
            <div className="flex flex-col gap-2.5 my-auto overflow-hidden">
              {/* Received Message */}
              <div className="flex items-end gap-1.5 self-start max-w-[85%]">
                <div className="bg-white text-[#334155] border border-[#e2e8f0] px-2.5 py-1.5 rounded-2xl rounded-bl-sm text-left shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                  <p className="text-[10px] font-medium leading-normal">Online presence synced via Redis-caching.</p>
                  <span className="text-[7px] text-[#94a3b8] block mt-0.5">9:41 AM</span>
                </div>
              </div>
              
              {/* Sent Message */}
              <div className="flex items-end gap-1.5 self-end max-w-[85%]">
                <div className="bg-[#0066ff] text-white px-2.5 py-1.5 rounded-2xl rounded-br-sm text-left shadow-[0_2px_8px_rgba(0,102,255,0.12)]">
                  <p className="text-[10px] font-medium leading-normal">Typing indicator updates in O(1) time.</p>
                  <span className="text-[7px] text-white/70 block mt-0.5 text-right">9:42 AM</span>
                </div>
              </div>

              {/* Status Indicator Card */}
              <div className="bg-[#eff6ff] border border-[#bfdbfe]/60 p-2 rounded-xl text-left max-w-[90%] self-start flex items-start gap-1">
                <Sparkles size={8} className="text-[#0066ff] mt-0.5 flex-shrink-0" />
                <p className="text-[9px] text-[#1e40af] leading-tight">1M+ socket events synced without database lag.</p>
              </div>
            </div>

            {/* iOS Input & Home bar */}
            <div className="flex items-center gap-1.5 mt-auto pt-2">
              <button 
                className="w-5 h-5 rounded-full bg-[#f1f5f9] border border-transparent flex items-center justify-center text-[#64748b] hover:bg-[#e2e8f0] cursor-pointer"
                aria-label="Add media"
              >
                <Plus size={10} strokeWidth={2.5} />
              </button>
              
              <div className="flex-1 bg-white border border-[#e2e8f0] rounded-full px-2.5 py-1.5 flex items-center justify-between shadow-sm">
                <span className="text-[9px] text-[#94a3b8]">iMessage</span>
                <button className="border-none bg-transparent cursor-pointer p-0 text-[#0066ff]" aria-label="Send message">
                  <Send size={9} />
                </button>
              </div>

              {/* Home indicator bar (centered absolute on bottom) */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#cbd5e1] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Laptop Mockup representing TaskFlow/Analytics */}
        <div className="mockup-laptop">
          <div className="mockup-laptop-screen">
            <div className="mockup-laptop-inner">
              {/* Laptop mock UI header */}
              <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#eab308]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                  <span className="text-[10px] text-[#64748b] font-medium ml-2 font-mono flex items-center gap-1">
                    <Terminal size={10} /> TaskFlow_Analytics
                  </span>
                </div>
                <span className="text-[9px] font-medium px-2 py-0.5 rounded bg-[#f1f5f9] text-[#64748b]">v1.0.4</span>
              </div>

              {/* Laptop UI Dashboard content */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div className="border border-[#f1f5f9] rounded-lg p-2.5 bg-[#f8fafc]">
                  <span className="text-[9px] text-[#64748b] block mb-1">Server Response</span>
                  <span className="text-sm font-bold text-[#0f172a] block">1.2ms</span>
                  <span className="text-[8px] text-[#22c55e] font-semibold">▲ 30% faster</span>
                </div>
                <div className="border border-[#f1f5f9] rounded-lg p-2.5 bg-[#f8fafc]">
                  <span className="text-[9px] text-[#64748b] block mb-1">Database Queries</span>
                  <span className="text-sm font-bold text-[#0f172a] block">-30%</span>
                  <span className="text-[8px] text-[#22c55e] font-semibold">Redis optimization</span>
                </div>
                <div className="border border-[#f1f5f9] rounded-lg p-2.5 bg-[#f8fafc] flex flex-col justify-between">
                  <span className="text-[9px] text-[#64748b] block mb-0.5">Deployment</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#ecfdf5] text-[#059669] font-bold text-center self-start flex items-center gap-1">
                    <Server size={8} /> Active
                  </span>
                </div>
              </div>

              {/* Tasks List Table mock */}
              <div className="border border-[#f1f5f9] rounded-lg overflow-hidden flex-1 flex flex-col">
                <div className="bg-[#f8fafc] border-b border-[#f1f5f9] px-2.5 py-1.5 flex items-center justify-between text-[8px] font-semibold text-[#64748b] uppercase">
                  <span>Task Name</span>
                  <div className="flex gap-8">
                    <span>Priority</span>
                    <span>Status</span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-around px-2.5 py-1.5">
                  <div className="flex items-center justify-between border-b border-[#f8fafc] pb-1">
                    <span className="font-semibold text-[#334155] text-[9px]">Redis Caching Integration</span>
                    <div className="flex gap-4 items-center">
                      <span className="text-[8px] px-1.5 py-0.2 rounded bg-[#fef2f2] text-[#ef4444] font-medium">High</span>
                      <span className="text-[8px] text-[#22c55e] font-bold">Done</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#f8fafc] pb-1">
                    <span className="font-semibold text-[#334155] text-[9px]">LMS Payment APIs</span>
                    <div className="flex gap-4 items-center">
                      <span className="text-[8px] px-1.5 py-0.2 rounded bg-[#fffbeb] text-[#d97706] font-medium">Medium</span>
                      <span className="text-[8px] text-[#22c55e] font-bold">Done</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#334155] text-[9px]">Meta WhatsApp Webhook</span>
                    <div className="flex gap-4 items-center">
                      <span className="text-[8px] px-1.5 py-0.2 rounded bg-[#f1f5f9] text-[#64748b] font-medium">Low</span>
                      <span className="text-[8px] text-[#3b82f6] font-bold">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mockup-laptop-base">
            <div className="mockup-laptop-notch"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
