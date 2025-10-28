import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollSmoother);

export default function About() {
    useGSAP(() => {
    });

  return (
    <div> 
    </div>
  )
}
