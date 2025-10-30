import type React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { XIcon } from "lucide-react";
import Resume from "@/assets/Resume.pdf";

interface Props {
  children: React.ReactNode;
  logoRef: React.RefObject<HTMLHeadingElement | null>;
}

const AboutBackgroundContent = () => (
  <div className="flex flex-col py-[40px] md:flex-row gap-10 md:gap-20 max-w-6xl w-full text-gray-100 overflow-y-auto px-4 md:px-0">
    <div className="w-full md:w-2/3 leading-relaxed space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-wide">
        About Me
      </h2>
      <p className="text-sm md:text-base">
        I worked in{" "}
        <span className="font-semibold text-blue-200">CAD modeling</span> for 2
        years where I learned to collaborate with teams and work effectively
        under deadlines.
      </p>

      <p className="text-sm md:text-base">
        However, I realized that wasn’t the creative path I truly wanted to
        pursue. Outside of work, I began learning{" "}
        <span className="font-semibold text-blue-200">
          3D modeling and animation
        </span>
        , spending countless hours improving my artistic and technical skills.
      </p>

      <p className="text-sm md:text-base">
        Over time, my knowledge of 3D modeling grew significantly, and I
        developed a passion for{" "}
        <span className="font-semibold text-blue-200">character creation</span>{" "}
        — from sculpting to texturing and rendering.
      </p>

      <p className="text-sm md:text-base">
        Now, I’m fully focused on continuing my career in
        <span className="font-semibold text-blue-200"> 3D Character Art</span>,
        combining technical precision with creativity to bring characters to
        life.
      </p>
    </div>

    {/* Right side */}
    <div className="w-full md:w-1/3 space-y-4 text-sm text-gray-300">
      <h3 className="text-lg md:text-xl font-semibold text-white border-b border-gray-500 pb-1">
        Experience
      </h3>
      <div>
        <p className="font-semibold text-blue-200 text-sm md:text-base">
          3D CAD Modeler
        </p>
        <p className="text-gray-300 text-sm">Rubber Art · Part-time</p>
        <p className="text-gray-400 text-xs md:text-sm">
          Oct 2023 — May 2025 · 1 yr 8 mos
        </p>
        <p className="text-gray-400 text-xs md:text-sm">
          Kokand, Fergana Region, Uzbekistan · On-site
        </p>
      </div>

      <div className="pt-2 border-t border-gray-700">
        <p className="italic text-gray-400 text-sm md:text-base">
          “From precision engineering to creative character design — a journey
          of turning logic into art.”
        </p>
      </div>

       <div>
        <p className="font-semibold text-blue-200 text-sm md:text-base">
          3D Modeler
        </p>
        <p className="text-gray-300 text-sm">Lola Animation – Tashkent, Uzbekistan · Part-time</p>
        <p className="text-gray-400 text-xs md:text-sm">
          September 2025 – Present
        </p>
        <p className="text-gray-400 text-xs md:text-sm">
          Tashkent, Uzbekistan · On-site
        </p>
      </div>

      <div className="pt-2 border-t border-gray-700">
        <p className="italic text-gray-400 text-sm md:text-base">
          "Embracing the intersection of precision and creativity to bring
          characters to life."
        </p>
      </div>
    </div>

    <div className="pt-3 border-t border-gray-700">
      <button className="bg-[#4901ff] w-max text-white cursor-pointer border border-white rounded-full py-3 px-6 font-bold hover:bg-white hover:text-[#4901ff] transition-all duration-300">
        <a href={Resume} download>
          Download Cv
        </a>
      </button>
    </div>
  </div>
);

export default function AboutNavigationLink({ children, logoRef }: Props) {
  const [showAboutContent, setShowAboutContent] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { y: "0vh", scaleX: 1.8 },
        { y: "-60vh", duration: 0.6, ease: "power2.inOut", scaleX: 1.8 }
      );
    }

    setShowAboutContent(true);
  };

  useEffect(() => {
    if (showAboutContent && bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { opacity: 0, backgroundColor: "rgba(0, 0, 0, 0)" },
        {
          opacity: 1,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    }

    if (!showAboutContent && logoRef.current) {
      gsap.to(logoRef.current, { y: 0, scaleX: 1.8, duration: 0.4 });
    }
  }, [showAboutContent]);

  return (
    <>
      <div
        onClick={handleClick}
        className="max-lg:text-sm text-base cursor-pointer text-gray-200 font-semibold hover:text-blue-50 transition-colors"
      >
        {children}
      </div>

      {showAboutContent && (
        <div
          ref={bgRef}
          className="fixed top-0 left-0 w-full h-full flex bg-linear-to-b from-blue-600 to-[#4901ff] flex-col md:flex-row items-center justify-center px-6 md:px-[100px] z-20 overflow-y-auto"
        >
          <AboutBackgroundContent />

          {/* Close Button */}
          <div
            onClick={() => setShowAboutContent(false)}
            className="absolute top-5 right-5 md:top-10 md:right-10 cursor-pointer p-2 md:p-3 border border-gray-200 rounded-full hover:bg-white/10 transition"
          >
            <XIcon className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      )}
    </>
  );
}
