import CameraCoverImage from "@/assets/camera/coverimage.jpeg";
import Camera1 from "@/assets/camera/javohir-qosimov-render1.jpg";
import Camera2 from "@/assets/camera/javohir-qosimov-render2.jpg";
import Camera3 from "@/assets/camera/javohir-qosimov-render3.jpg";
import Camera4 from "@/assets/camera/javohir-qosimov-render4.jpg";
import Camera5 from "@/assets/camera/javohir-qosimov-render5.jpg";

import Sword4 from "@/assets/ekskalibur/javohir-qosimov-test4.jpg";
import Sword3 from "@/assets/ekskalibur/javohir-qosimov-test3.jpg";
import Sword5 from "@/assets/ekskalibur/javohir-qosimov-test5.jpg";
import Sword6 from "@/assets/ekskalibur/javohir-qosimov-test6.jpg";
import SwordVideo from "@/assets/ekskalibur/animation.mp4";
import SwordCoverImage from "@/assets/ekskalibur/coverimage.jpeg";

interface IProject {
  projectName: string;
  projectBigImage: string;
  projectLeftTexts: {
    title: string;
    subtitle: string;
  };
  projectRightTexts: {
    title: string;
  };
  createdBy: string;
  sliderImages: string[];
}

const mockProjectData: IProject[] = [
  {
    projectName: "camera",
    projectBigImage: CameraCoverImage,
    projectLeftTexts: {
      title: "Studio Mega is a brand design",
      subtitle:
        "With simplicity, flexibility, and maintainability in mind we built a website uniquely mega.",
    },
    projectRightTexts: {
      title:
        "Powered by a Craft CMS back-end the website is easy to manage and update. There are several customizable content blocks that can be added and rearranged to make case studies be presented in a meaningful way.",
    },
    createdBy: "Javohir qosimov",
    sliderImages: [Camera1, Camera2, Camera3, Camera4, Camera5],
  },
  {
    projectName: "Sword",
    projectBigImage: SwordCoverImage,
    projectLeftTexts: {
      title: "Studio Mega is a brand design",
      subtitle:
        "With simplicity, flexibility, and maintainability in mind we built a website uniquely mega.",
    },
    projectRightTexts: {
      title:
        "Powered by a Craft CMS back-end the website is easy to manage and update. There are several customizable content blocks that can be added and rearranged to make case studies be presented in a meaningful way.",
    },
    createdBy: "Javohir qosimov",
    sliderImages: [SwordVideo, Sword3, Sword4, Sword5, Sword6],
  },
];

export { mockProjectData };
