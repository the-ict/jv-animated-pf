import type React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { XIcon } from "lucide-react";

interface Props {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
  logoRef: React.RefObject<HTMLHeadingElement | null>;
}

const AboutBackgroundContent = () => (
  <div className="flex flex-col md:flex-row gap-20 max-w-6xl text-gray-100">
    <div className="w-full md:w-2/3 leading-relaxed space-y-6">
      <h2 className="text-3xl font-bold mb-4 text-white tracking-wide">
        About Me
      </h2>
      <p>
        I worked in{" "}
        <span className="font-semibold text-blue-200">CAD modeling</span>
        for 2 years where I learned to collaborate with teams and work
        effectively under deadlines.
      </p>

      <p>
        However, I realized that wasn’t the creative path I truly wanted to
        pursue. Outside of work, I began learning{" "}
        <span className="font-semibold text-blue-200">
          3D modeling and animation
        </span>
        , spending countless hours improving my artistic and technical skills.
      </p>

      <p>
        Over time, my knowledge of 3D modeling grew significantly, and I
        developed a passion for{" "}
        <span className="font-semibold text-blue-200">character creation</span>—
        from sculpting to texturing and rendering.
      </p>

      <p>
        Now, I’m fully focused on continuing my career in
        <span className="font-semibold text-blue-200"> 3D Character Art</span>,
        combining technical precision with creativity to bring characters to
        life.
      </p>
    </div>

    <div className="w-full md:w-1/3 space-y-4 text-sm text-gray-300">
      <h3 className="text-xl font-semibold text-white border-b border-gray-500 pb-1">
        Experience
      </h3>
      <div>
        <p className="font-semibold text-blue-200">3D CAD Modeler</p>
        <p className="text-gray-300">Rubber Art · Part-time</p>
        <p className="text-gray-400">Oct 2023 — May 2025 · 1 yr 8 mos</p>
        <p className="text-gray-400">
          Kokand, Fergana Region, Uzbekistan · On-site
        </p>
      </div>

      <div className="pt-2 border-t border-gray-700">
        <p className="italic text-gray-400">
          “From precision engineering to creative character design — a journey
          of turning logic into art.”
        </p>
      </div>
    </div>
  </div>
);

export default function AboutNavigationLink({
  children,
  containerRef,
  logoRef,
}: Props) {
  const [showAboutContent, setShowAboutContent] = useState(false);

  const bgRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    gsap.fromTo(
      logoRef.current,
      {
        y: "0vh",
        scaleX: 1.8,
      },
      {
        y: "-70vh",
        duration: 0.5,
        ease: "power1.intOut",
        scaleX: 1.8,
      }
    );

    setShowAboutContent(true);
  };

  useEffect(() => {
    if (!showAboutContent && logoRef.current) {
      gsap.to(logoRef.current, {
        y: 0,
        scaleX: 1.8,
        duration: 0.3,
      });
    }

    if (showAboutContent && logoRef.current) {
      gsap.to(bgRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        duration: 1,
        ease: "power2.inOut",
        opacity: 1,
        delay: 1,
      });
    }
  }, [showAboutContent]);

  return (
    <>
      <div
        onClick={handleClick}
        className="text-sm cursor-pointer text-gray-200 font-bold hover:text-blue-50 transition-colors"
      >
        {children}
      </div>

      {showAboutContent && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-[100px] z-20 opacity-0"
          ref={bgRef}
        >
          <AboutBackgroundContent />
          <div
            onClick={() => setShowAboutContent(false)}
            className="absolute top-10 right-10 cursor-pointer p-3 border border-gray-200 rounded-full x"
          >
            <XIcon />
          </div>
        </div>
      )}
    </>
  );
}
