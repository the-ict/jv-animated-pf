import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { useState } from "react";
import gigImage from "../assets/image.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SingleProject() {
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false);

  return (
    <div>
      <section className="flex items-start justify-between px-[200px] pt-[50px]">
        <div className="flex items-end gap-10">
          <h1
            className={`text-4xl scale-x-[1.80] text-black cursor-pointer transition-all duration-300 text-border-shadow ${
              isMouseEntered ? "text-[#4901ff]" : ""
            }`}
            onMouseEnter={() => setIsMouseEntered(true)}
            onMouseLeave={() => setIsMouseEntered(false)}
          >
            JA <br />
            VOH <br />
            IR'S.
          </h1>

          <div className="text-sm">
            <p className="cursor-pointer hover:text-[#4901ff] transition-colors">
              men haqimda
            </p>
            <p className="cursor-pointer hover:text-[#4901ff] transition-colors">
              tajribam
            </p>
          </div>
        </div>

        <div className="absolute right-[300px] top-[300px]">
          <h1
            className="text-4xl scale-x-[1.80]  cursor-pointer transition-all duration-300 big-title text-transparent"
            style={{
              color: "transparent",
              textShadow: `
              1px 1px 0 black,
              -1px 1px 0 black,
              1px -1px 0 black,
              -1px -1px 0 black `,
            }}
          >
            PROJECT NAME;
          </h1>
        </div>

        <div className="border-2 transition-all border-transparent hover:border-gray-200 p-3 rounded-full cursor-pointer">
          <XIcon />
        </div>
      </section>

      <section className="mt-[70px] w-full h-[60vh] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          <SwiperSlide className="w-full h-full">
            <img src={gigImage} alt="Project 1" className="w-full h-full object-cover" />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img src={gigImage} alt="Project 2" className="w-full h-full object-cover" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="px-[200px] pt-[50px] flex items-start gap-10">
        <div className="flex items-start gap-10">
          <div>
            <h1 className="text-2xl">
              Studio Mega is a brand design agency based in Portland, Oregon
            </h1>
            <br />
            <p className="text-sm text-black/70">
              With simplicity, flexibility, and maintainability in mind we built
              a website uniquely mega.
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
        </div>

        <div className="flex flex-col gap-4 items-start">
          <h1 className="cursor-pointer">www.studiomega.com</h1>
          <p className="cursor-pointer">Studio Mega</p>
          <p className="cursor-pointer">Agency: Van Holtz Co</p>
          <p className="cursor-pointer">
            Lead Front-end Developer: Eric Van Holtz
          </p>
        </div>
      </section>

      {/* Additional project content section - placeholder for future content */}
    </div>
  );
}
