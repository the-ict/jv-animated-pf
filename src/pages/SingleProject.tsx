import { ArrowLeft, ArrowRight, Backpack, ChevronLeft } from "lucide-react";
import Image from "@/assets/image.jpg";

export default function SingleProject() {
  return (
    <div className="min-h-screen relative">
      <section className="flex justify-between px-[200px] py-[50px]">
        <div className="flex items-end gap-10">
          <h1 className={`text-4xl cursor-pointer transition-all duration-300`}>
            JA <br />
            VOH <br />
            IR'S.
          </h1>

          <div>
            <p>Men haqimda</p>
            <p>& Tajribam</p>
          </div>
        </div>

        <div className="p-5 cursor-pointer">
          <ArrowLeft />
        </div>
      </section>

      <section>
        <img src={Image} alt="" className="w-full h-[60vh] object-cover" />

        <h1 className="absolute right-[200px] top-[300px] text-[100px] scale-x-170 uppercase text-white [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
          Camera
        </h1>
      </section>

      <section className="px-[200px] py-[50px] grid grid-cols-[40%_40%_20%] gap-10">
        <div>
          <h1 className="text-2xl">Studio Mega is a brand design agency based in Portland, Oregon.</h1>
          <br />
          <p>With simplicity, flexibility, and maintainability in mind we built a website uniquely mega.</p>
        </div>

        <div>
          <p>Powered by a Craft CMS back-end the website is easy to manage and update. There are several customizable content blocks that can be added and rearranged to make case studies be presented in a meaningful way.</p>
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

      <section>
        <div>
          <div className="wrapper">
            
          </div>
        </div>

        <div>
          <div>
            <ArrowLeft />
            <p>2/4</p>
            <ArrowRight />
          </div>

          <h1>Start with an idea</h1>
          
        </div>
      </section>

      <section>
          <h1 className="text-[100px] scale-x-170 uppercase text-black [text-shadow:-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]">
          Camera
        </h1>
      </section>
    </div>
  );
}
