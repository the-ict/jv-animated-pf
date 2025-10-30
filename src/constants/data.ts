import CameraCoverImage from "@/assets/camera/coverimage.jpeg";
import Camera1 from "@/assets/camera/javohir-qosimov-render1.jpg";
import Camera2 from "@/assets/camera/javohir-qosimov-render2.jpg";
import Camera3 from "@/assets/camera/javohir-qosimov-render3.jpg";
import Camera4 from "@/assets/camera/javohir-qosimov-render4.jpg";
import Camera5 from "@/assets/camera/javohir-qosimov-render5.jpg";

const mockProjectData = [
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
];

export { mockProjectData };
