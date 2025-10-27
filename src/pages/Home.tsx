import TextPressure from "@/components/TextPressure";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AboutNavigationLink from "@/components/AboutNavigationLink";

gsap.registerPlugin(useGSAP);

interface IPage {
  title: string;
  url: string;
}

const pages: IPage[] = [
  {
    title: "Know who i am",
    url: "/about-me",
  },
  {
    title: "Camera",
    url: "/camera",
  },
];

export default function Home() {
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.from(".hello-text", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1,
      });

      gsap.to(".big-title", {
        opacity: 1,
        duration: 1,
      });

      gsap.to(".socials", {
        opacity: 1,
        duration: 2,
      });

      gsap.to(".projects", {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });

      gsap.to(".links", {
        opacity: 1,
        duration: 5,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      className="min-h-screen relative bg-[#4901ff] text-[#ffffff]"
      ref={containerRef}
    >
      <div className="absolute bottom-30 left-20">
        <h1
          ref={logoRef}
          className={`text-4xl scale-x-[1.80] cursor-pointer opacity-0 transition-all duration-300 text-border-shadow big-title ${
            isMouseEntered ? "text-[#4901ff]" : ""
          }`}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseLeave={() => setIsMouseEntered(false)}
        >
          JA <br />
          VOH <br />
          IR'S.
        </h1>
      </div>

      <div className="absolute bottom-10 left-13 flex items-center gap-5 links opacity-0 z-10">
        <div>
          <AboutNavigationLink containerRef={containerRef} logoRef={logoRef}>
            3d Modeler & Junior 3d Character Artist
          </AboutNavigationLink>

          <AboutNavigationLink containerRef={containerRef} logoRef={logoRef}>
            Qosimov Javohir
          </AboutNavigationLink>
        </div>

        <div>
          <AboutNavigationLink containerRef={containerRef} logoRef={logoRef}>
            javohir@gmail.com
          </AboutNavigationLink>

          <AboutNavigationLink containerRef={containerRef} logoRef={logoRef}>
            +998971234567
          </AboutNavigationLink>
        </div>

        <div>
          <AboutNavigationLink containerRef={containerRef} logoRef={logoRef}>
            Men haqimda &
          </AboutNavigationLink>

          <AboutNavigationLink containerRef={containerRef} logoRef={logoRef}>
            Tajribam
          </AboutNavigationLink>
        </div>
      </div>

      <div className="absolute top-20 right-20 h-[calc(100vh-100px)] overflow-y-auto opacity-0 projects">
        {pages.map((project, index) => (
          <div
            style={{ position: "relative", height: "300px" }}
            className="w-[120vh] px-10"
            onClick={() => (window.location.href = project.url)}
          >
            <TextPressure
              text={project.title}
              key={index}
              className="cursor-pointer"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#000"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
        ))}
      </div>

      <div className="absolute right-12 bottom-10 flex items-start flex-col gap-3 socials opacity-0">
        <div className="text-white flex items-center gap-[10px] cursor-pointer transition-all duration-300 text-sm line-through group">
          <i className="fa-brands fa-linkedin group-hover:scale-130 transition-all duration-300"></i>
          <p>Linkedin</p>
        </div>

        <div className="text-white flex items-center gap-[10px] cursor-pointer transition-all duration-300 text-sm line-through group">
          <i className="fa-brands fa-telegram group-hover:scale-130 transition-all duration-300"></i>
          <p>Telegram</p>
        </div>

        <div className="text-white flex items-center gap-[10px] cursor-pointer transition-all duration-300 text-sm line-through group">
          <i className="fa-brands fa-artstation group-hover:scale-130 transition-all duration-300"></i>
          <p>Artstation</p>
        </div>
      </div>
    </div>
  );
}
