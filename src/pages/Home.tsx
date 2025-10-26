import ProfileImage from "../assets/javohir-image.jpg";
import TextPressure from "@/components/TextPressure";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

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

      gsap.to(".profile-image", {
        opacity: 1,
        duration: 1,
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
      <div className="p-[50px] grid grid-cols-[60%_40%]">
        <div className="mt-40">
          <img
            src={ProfileImage}
            alt="Profile Image"
            className="profile-image opacity-0 w-[350px] h-[350px] cursor-pointer transition-all duration-500 rounded-[175px] hover:rounded-[20px]"
          />

          <p className="text-gray-200 w-[300px] absolute left-28 text-sm mt-3 scale-x-140 hello-text lh-[1.5]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem id corrupti nam asperiores blanditiis fugit omnis
            totam necessitatibus. Vel dolorum non hic molestias nihil impedit
            excepturi sunt aliquid laudantium tempore!
          </p>
        </div>

        <div className="absolute bottom-20 left-20">
          <h1
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

        <div className="absolute left-12 bottom-10 flex items-center gap-5 socials opacity-0">
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

        <div className="absolute top-20 right-20 h-[calc(100vh-100px)] overflow-y-auto opacity-0 projects">
          {["Project1", "Project2", "Project3", "Project4", "Project5"].map(
            (project, index) => (
              <div
                style={{ position: "relative", height: "300px" }}
                className="w-[120vh] px-10"
              >
                <TextPressure
                  text={project}
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
            )
          )}
        </div>
      </div>
    </div>
  );
}
