import AboutNavigationLink from "@/components/AboutNavigationLink";
import ProjectNavigationLink from "@/components/ProjectNavigationLink";
import { mockProjectData } from "@/constants/data";
import TextPressure from "@/components/TextPressure";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
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
      gsap.to(".big-title", {
        opacity: 1,
        duration: 3,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      className="relative bg-linear-to-b from-blue-600 to-[#4901ff] w-full min-h-screen text-[#ffffff]"
      ref={containerRef}
    >
      <div className="absolute left-13 bottom-30 z-50 text-6xl big-title opacity-0 max-lg:top-5 max-lg:text-2xl">
        <h1 className="font-mono">JAVOHIR.S</h1>
      </div>

      <div className="absolute bottom-10 left-13 flex items-center max-lg:items-start max-lg:flex-col gap-5 links opacity-0 z-50">
        <div>
          <AboutNavigationLink logoRef={logoRef}>
            3d Modeler & Junior 3d Character Artist
          </AboutNavigationLink>

          <AboutNavigationLink logoRef={logoRef}>
            Qosimov Javohir
          </AboutNavigationLink>
        </div>

        <div>
          <AboutNavigationLink logoRef={logoRef}>
            javohirqosinov555@gmail.com
          </AboutNavigationLink>

          <AboutNavigationLink logoRef={logoRef}>
            +998916875714
          </AboutNavigationLink>
        </div>

        <div>
          <AboutNavigationLink logoRef={logoRef}>
            About me &
          </AboutNavigationLink>

          <AboutNavigationLink logoRef={logoRef}>
            Experience
          </AboutNavigationLink>
        </div>
      </div>

      <div className="flex flex-col gap-10 px-[50px] h-[90vh] overflow-y-scroll items-end max-lg:items-center max-lg:h-[80vh] max-lg:pt-[150px]">
        {mockProjectData.map((project, index) => (
          <ProjectNavigationLink url={`/projects/${index}`} key={index}>
            <div className="w-[60vw] max-lg:w-[80vw]">
              <TextPressure
                text={project.projectName}
                key={index}
                className="cursor-pointer project-text"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
              />
            </div>
          </ProjectNavigationLink>
        ))}
      </div>

      <div className="absolute right-12 bottom-10 flex items-start flex-col gap-3 socials opacity-0">
        <div
          onClick={() =>
            window.location.replace(
              "https://www.linkedin.com/in/javohir-qosimov"
            )
          }
          className="text-white flex items-center gap-[10px] cursor-pointer transition-all duration-300 text-sm line-through group"
        >
          <i className="fa-brands fa-linkedin group-hover:scale-130 transition-all duration-300"></i>
          <p>Linkedin</p>
        </div>

        <div
          onClick={() => window.location.replace("https://t.me/QosimovJavohir")}
          className="text-white flex items-center gap-[10px] cursor-pointer transition-all duration-300 text-sm line-through group"
        >
          <i className="fa-brands fa-telegram group-hover:scale-130 transition-all duration-300"></i>
          <p>Telegram</p>
        </div>

        <div
          onClick={() =>
            window.location.replace("https://www.artstation.com/haja_q7")
          }
          className="text-white flex items-center gap-[10px] cursor-pointer transition-all duration-300 text-sm line-through group"
        >
          <i className="fa-brands fa-artstation group-hover:scale-130 transition-all duration-300"></i>
          <p>Artstation</p>
        </div>
      </div>
    </div>
  );
}
