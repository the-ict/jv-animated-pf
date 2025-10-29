import { ArrowLeft, ArrowRight } from "lucide-react";

import Image from "@/assets/image.jpg";
import PortfolioImage1 from "@/assets/camera/javohir-qosimov-render1.jpg";
import PortfolioImage2 from "@/assets/camera/javohir-qosimov-render2.jpg";
import PortfolioImage3 from "@/assets/camera/javohir-qosimov-render3.jpg";
import PortfolioImage4 from "@/assets/camera/javohir-qosimov-render4.jpg";
import PortfolioImage5 from "@/assets/camera/javohir-qosimov-render5.jpg";
import { useRef, useState } from "react";

const swiperImages = [
  PortfolioImage1,
  PortfolioImage2,
  PortfolioImage3,
  PortfolioImage4,
  PortfolioImage5,
];

export default function SingleProject() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!wrapperRef.current) return;

    const container = wrapperRef.current;
    const scrollAmount = container.offsetWidth;

    if (direction === "left") {
      setCurrentSlide((prev) => Math.max(0, prev - 1));
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      setCurrentSlide((prev) => Math.min(swiperImages.length - 1, prev + 1));
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="min-h-screen relative">
      <section className="flex justify-between px-[200px] py-[50px]">
        <div className="flex items-end gap-10">
          <h1 className={`text-4xl cursor-pointer transition-all duration-300`}>
            JA <br />
            VOH <br />
            IR'S.
          </h1>

          <h1 className=" uppercase text-2xl text-black font-bold">Camera</h1>
        </div>

        <div className="w-15 h-15 cursor-pointer border-white border-2 hover:border-black flex items-center justify-center rounded-full" onClick={() => window.location.replace("/")}>
          <ArrowLeft />
        </div>
      </section>

      <section>
        <img src={Image} alt="" className="w-full h-[60vh] object-cover" />
      </section>

      <section className="px-[200px] py-[50px] grid grid-cols-[40%_40%_20%] gap-10">
        <div>
          <h1 className="text-2xl">
            Studio Mega is a brand design agency based in Portland, Oregon.
          </h1>
          <br />
          <p>
            With simplicity, flexibility, and maintainability in mind we built a
            website uniquely mega.
          </p>
        </div>

        <div>
          <p>
            Powered by a Craft CMS back-end the website is easy to manage and
            update. There are several customizable content blocks that can be
            added and rearranged to make case studies be presented in a
            meaningful way.
          </p>
        </div>

        <div>
          <h1>www.studiomega.com</h1>
          <p>Studio Mega</p>

          <b>Agency:</b>
          <p>Van Holtz Co</p>

          <b>Lead Front-end Developer:</b>
          <p>Eric Van Holtz</p>

          <b>Lead Back-end Developer:</b>
          <p>Eric Van Holtz</p>
        </div>
      </section>

      <section className="w-full grid grid-cols-[80%_20%] gap-10 px-[200px]">
        <div
          className="w-full overflow-hidden border-2 border-gray-200 rounded"
          ref={wrapperRef}
        >
          <div className="relative w-full h-[60vh] overflow-hidden">
            <div 
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{
                width: `${swiperImages.length * 100}%`,
                transform: `translateX(-${(currentSlide * 100) / swiperImages.length}%)`
              }}
            >
              {swiperImages.map((image, index) => (
                <div 
                  key={index}
                  className="w-full h-full flex-shrink-0"
                  style={{
                    width: `${100 / swiperImages.length}%`
                  }}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
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
              {currentSlide + 1}/{swiperImages.length}
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

      <section className="flex items-center justify-center">
        <h1 className="text-[100px] scale-x-170 uppercase text-black [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
          Camera
        </h1>
      </section>
    </div>
  );
}
