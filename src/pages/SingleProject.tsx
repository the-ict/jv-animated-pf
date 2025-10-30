import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { mockProjectData } from "@/constants/data";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function SingleProject() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const ProjectData = mockProjectData[Number(location.pathname.split("/")[2])];
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -------------------
      // 🚀 Opening animations
      // -------------------

      // Dastlab CSS orqali boshlang‘ich holat
      gsap.set(".intro-header", { y: -80, opacity: 0 });
      gsap.set(".hero-img", { scale: 1.2, opacity: 0 });
      gsap.set(".intro-text", { y: 50, opacity: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.to(".intro-header", { y: 0, opacity: 1 })
        .to(".hero-img", { scale: 1, opacity: 1 }, "-=0.5")
        .to(".intro-text", { y: 0, opacity: 1, stagger: 0.2 }, "-=0.5");

      // -------------------
      // 🌊 Scroll-trigger animations
      // -------------------
      gsap.utils.toArray(".fade-in-section").forEach((el: any) => {
        gsap.set(el, { y: 50, opacity: 0 });

        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        });
      });

      // Footer text
      gsap.set(".footer-title", { scale: 0.5, opacity: 0 });
      gsap.to(".footer-title", {
        scrollTrigger: {
          trigger: ".footer-title",
          start: "top 80%",
        },
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!wrapperRef.current) return;

    const container = wrapperRef.current;
    const scrollAmount = container.offsetWidth;

    if (direction === "left") {
      setCurrentSlide((prev) => Math.max(0, prev - 1));
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      setCurrentSlide((prev) =>
        Math.min(ProjectData.sliderImages.length - 1, prev + 1)
      );
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* HEADER */}
      <section className="flex justify-between px-[200px] py-[50px] intro-header">
        <div className="flex items-end gap-10">
          <h1 className="text-4xl cursor-pointer transition-all duration-300">
            JA <br /> VOH <br /> IR'S.
          </h1>
          <h1 className="uppercase text-2xl text-black font-bold">Camera</h1>
        </div>

        <div
          className="w-15 h-15 cursor-pointer border-white border-2 hover:border-black flex items-center justify-center rounded-full"
          onClick={() => window.location.replace("/")}
        >
          <ArrowLeft />
        </div>
      </section>

      {/* HERO IMAGE */}
      <section>
        <img
          src={ProjectData.projectBigImage}
          alt=""
          className="w-full h-[60vh] object-contain hero-img"
        />
      </section>

      {/* ABOUT SECTION */}
      <section className="px-[200px] py-[50px] grid grid-cols-[40%_40%_20%] gap-10 intro-text fade-in-section">
        <div>
          <h1 className="text-2xl">{ProjectData.projectLeftTexts.title}</h1>
          <br />
          <p>{ProjectData.projectLeftTexts.subtitle}</p>
        </div>

        <div>
          <p>{ProjectData.projectRightTexts.title}</p>
        </div>

        <div>
          <h1>{ProjectData.projectName}</h1>
          <p>{ProjectData.createdBy}</p>
        </div>
      </section>

      {/* SLIDER SECTION */}
      <section className="w-full grid grid-cols-[80%_20%] gap-10 px-[200px] fade-in-section">
        <div
          className="w-full overflow-hidden border-2 border-gray-200 rounded"
          ref={wrapperRef}
        >
          <div className="relative w-full h-[60vh] overflow-hidden">
            <div
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{
                width: `${ProjectData.sliderImages.length * 100}%`,
                transform: `translateX(-${
                  (currentSlide * 100) / ProjectData.sliderImages.length
                }%)`,
              }}
            >
              {ProjectData.sliderImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0"
                  style={{
                    width: `${100 / ProjectData.sliderImages.length}%`,
                  }}
                >
                  {
                    image.endsWith(".mp4") ? (
                      <video src={image} autoPlay loop muted className="w-full h-full object-contain" />
                    ) : (
                      <img src={image} alt="" className="w-full h-full object-contain" />
                    )
                  }
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-10">
          <div className="flex items-center gap-10">
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => handleScroll("left")}
            />
            <p>
              {currentSlide + 1}/{ProjectData.sliderImages.length}
            </p>
            <ArrowRight
              className="cursor-pointer"
              onClick={() => handleScroll("right")}
            />
          </div>

          <h1 className="font-bold w-[200px]">
            Start with an idea and make it better
          </h1>
        </div>
      </section>

      {/* FOOTER TITLE */}
      <section className="flex items-center justify-center">
        <h1 className="text-[100px] scale-x-170 uppercase text-black footer-title [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
          Camera
        </h1>
      </section>
    </div>
  );
}
