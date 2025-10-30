import Camera1 from "@/assets/camera/javohir-qosimov-render1.jpg";
import Camera2 from "@/assets/camera/javohir-qosimov-render2.jpg";
import Camera3 from "@/assets/camera/javohir-qosimov-render3.jpg";
import Camera4 from "@/assets/camera/javohir-qosimov-render4.jpg";
import Camera5 from "@/assets/camera/javohir-qosimov-render5.jpg";
import CameraReference1 from "@/assets/camera/reference/leartes-studios-sm-camera-01-render01 (1).jpg";
import CameraReference2 from "@/assets/camera/reference/leartes-studios-sm-camera-01-render03.jpg";
import CameraReference3 from "@/assets/camera/reference/leartes-studios-sm-camera-01-render04.jpg";
import CameraReference4 from "@/assets/camera/reference/leartes-studios-sm-camera-01-render05.jpg";
import CameraReference5 from "@/assets/camera/reference/leartes-studios-sm-camera-01-render07.jpg";

import Sword4 from "@/assets/ekskalibur/javohir-qosimov-test4.jpg";
import Sword3 from "@/assets/ekskalibur/javohir-qosimov-test3.jpg";
import Sword5 from "@/assets/ekskalibur/javohir-qosimov-test5.jpg";
import Sword6 from "@/assets/ekskalibur/javohir-qosimov-test6.jpg";
import SwordVideo from "@/assets/ekskalibur/animation.mp4";
import SwordReference1 from "@/assets/ekskalibur/references/Copilot_20251017_135208.png";
import SwordReference2 from "@/assets/ekskalibur/references/Copilot_20251017_135323.png";
import SwordReference3 from "@/assets/ekskalibur/references/Copilot_20251017_135604.png";

import Guitar from "@/assets/guitar/javohir-qosimov-1 (1).jpg";
import Guitar1 from "@/assets/guitar/javohir-qosimov-2.jpg";
import Guitar2 from "@/assets/guitar/javohir-qosimov-3.jpg";
import Guitar3 from "@/assets/guitar/javohir-qosimov-4.jpg";
import GuitarReference1 from "@/assets/guitar/references/Vintage_V100GT_Reissued_Electric_Guitar_Gold_Top_Bridge_1024x1024 (1).jpg";
import GuitarReference2 from "@/assets/guitar/references/Vintage_V100GT_Reissued_Electric_Guitar_Gold_Top_Bridge_1024x1024.jpg";
import GuitarReference3 from "@/assets/guitar/references/gibson_les_paul_r8_1958_reissue_custom_shop_10.jpg";
import GuitarReference4 from "@/assets/guitar/references/m1000x1000.jpg";
import GuitarReference5 from "@/assets/guitar/references/maxresdefault.jpg";

import Itachi from "@/assets/itachi/itachi.jpeg";
import Itachi1 from "@/assets/itachi/javohir-qosimov-back.webp";
import Itachi2 from "@/assets/itachi/javohir-qosimov-front.webp";
import Itachi3 from "@/assets/itachi/javohir-qosimov-left-right.webp";
import Itachi4 from "@/assets/itachi/javohir-qosimov-uchiha-itachi.webp";
import ItachiReferences1 from "@/assets/itachi/references/1669667088_9-7fon-club-p-itachi-kadri-iz-anime-31.jpg";
import ItachiReferences2 from "@/assets/itachi/references/1678773218_zefirka-club-p-malenkii-itachi-na-avu-84.jpg";
import ItachiReferences3 from "@/assets/itachi/references/6027711245.jpg";
import ItachiReferences4 from "@/assets/itachi/references/ItyPfXARBXI.jpg";
import ItachiReferences5 from "@/assets/itachi/references/maxresdefault (1).jpg";

import Pain from "@/assets/pain/javohir-qosimov-cylces-render.webp";
import Pain1 from "@/assets/pain/javohir-qosimov-cylces-render1.webp";
import Pain2 from "@/assets/pain/javohir-qosimov-test1-1.webp";
import Pain3 from "@/assets/pain/javohir-qosimov-test1-topology.webp";
import Pain4 from "@/assets/pain/javohir-qosimov-test1.webp";
import Pain5 from "@/assets/pain/pain.jpeg";
import PainReference1 from "@/assets/pain/references/1394822346_tendo_pain_1_.jpg";
import PainReference2 from "@/assets/pain/references/af85281d5b9fa1e5b738f84ce5f26b79.jpg";
import PainReference3 from "@/assets/pain/references/carlos-cruz-1012-fullrevealnaruto-10-5000x.jpg";
import PainReference4 from "@/assets/pain/references/carlos-cruz-1012-fullrevealnaruto-12-5000x.jpg";
import PainReference5 from "@/assets/pain/references/carlos-cruz-1012-fullrevealnaruto-6-5000x.jpg";
import PainReference6 from "@/assets/pain/references/collage-maker-02-jun-2023-12-10-am-4332.jpg";
import PainReference7 from "@/assets/pain/references/f8b38f97d89616648f03e9ea08d7b470.jpg";
import PainReference8 from "@/assets/pain/references/maxresdefault (1).jpg";
import PainReference9 from "@/assets/pain/references/png_clipart_pain_naruto_uzumaki_yahiko_itachi_uchiha_nagato_naruto.png";

import Piano1 from "@/assets/piano/javohir-qosimov-1.jpg";
import Piano2 from "@/assets/piano/javohir-qosimov-2.jpg";
import Piano3 from "@/assets/piano/javohir-qosimov-3.jpg";
import PianoMain from "@/assets/piano/piano.jpeg";
import PianoReference1 from "@/assets/piano/references/2.jpg";
import PianoReference2 from "@/assets/piano/references/3.jpg";
import PianoReference3 from "@/assets/piano/references/4.jpg";

interface IProject {
  projectName: string;
  projectLeftTexts: {
    title: string;
    subtitle: string;
  };
  projectRightTexts: {
    title: string;
  };
  createdBy: string;
  sliderImages: string[];
  referenceImages: string[];
}

const mockProjectData: IProject[] = [
  {
    projectName: "Camera",
    projectLeftTexts: {
      title: "Professional DSLR Camera 3D Visualization",
      subtitle:
        "This realistic 3D camera model was created with precise attention to surface detail, lighting, and materials to closely resemble a professional DSLR device. It showcases accurate proportions and photorealistic reflections.",
    },
    projectRightTexts: {
      title:
        "The goal of this project was to achieve a cinematic-quality render that could be used for advertising or product visualization. Each component — lens, buttons, and textures — was modeled and shaded manually to achieve a lifelike appearance.",
    },
    createdBy: "Javohir Qosimov",
    sliderImages: [Camera1, Camera2, Camera3, Camera4, Camera5],
    referenceImages: [
      CameraReference1,
      CameraReference2,
      CameraReference3,
      CameraReference4,
      CameraReference5,
    ],
  },
  {
    projectName: "Piano",
    projectLeftTexts: {
      title: "Grand Piano 3D Model — Elegant Design and Realistic Materials",
      subtitle:
        "A highly detailed 3D model of a classical grand piano, designed to capture both the elegance and complexity of the instrument. From polished wood textures to metallic strings, each element is carefully crafted.",
    },
    projectRightTexts: {
      title:
        "This project demonstrates advanced modeling and texturing techniques to create a photorealistic result. The piano model can be used in animations, architectural scenes, or product advertisements.",
    },
    createdBy: "Javohir Qosimov",
    sliderImages: [Piano1, Piano2, Piano3],
    referenceImages: [PianoReference1, PianoReference2, PianoReference3, PianoMain],
  },
  {
    projectName: "Sword",
    projectLeftTexts: {
      title: "Excalibur Sword — Fantasy Weapon Design",
      subtitle:
        "Inspired by legendary fantasy swords, this 3D model focuses on balance between realistic metallic textures and artistic detailing. The shape, engravings, and materials were created to emphasize power and elegance.",
    },
    projectRightTexts: {
      title:
        "Modeled and rendered in Blender, this sword includes both static and animated versions. The animation demonstrates the sword’s light reflections and physical presence in motion, designed for use in games or cinematic sequences.",
    },
    createdBy: "Javohir Qosimov",
    sliderImages: [SwordVideo, Sword3, Sword4, Sword5, Sword6],
    referenceImages: [SwordReference1, SwordReference2, SwordReference3],
  },
  {
    projectName: "Guitar",
    projectLeftTexts: {
      title: "Vintage Electric Guitar — Realistic Product Model",
      subtitle:
        "A detailed recreation of a classic electric guitar with high-resolution textures and precise lighting setup. The goal was to reproduce the worn metallic parts and wooden surface characteristics authentically.",
    },
    projectRightTexts: {
      title:
        "Every part of the instrument, including the bridge, strings, and body curvature, was modeled manually. Rendered using physically based materials to highlight subtle imperfections that make the guitar feel real.",
    },
    createdBy: "Javohir Qosimov",
    sliderImages: [Guitar, Guitar1, Guitar2, Guitar3],
    referenceImages: [
      GuitarReference1,
      GuitarReference2,
      GuitarReference3,
      GuitarReference4,
      GuitarReference5,
    ],
  },
  {
    projectName: "Itachi",
    projectLeftTexts: {
      title: "Uchiha Itachi — Character Sculpt and Render",
      subtitle:
        "A 3D fan art of Uchiha Itachi from Naruto, sculpted and textured to capture his cold yet emotional expression. The project focuses on character realism, anatomy, and detailed clothing simulation.",
    },
    projectRightTexts: {
      title:
        "The model was created using Blender’s sculpting tools and rendered with realistic lighting setups. Emphasis was placed on accurate hair shaping, facial details, and Uchiha clan elements to keep the original anime spirit intact.",
    },
    createdBy: "Javohir Qosimov",
    sliderImages: [Itachi4,Itachi1, Itachi2, Itachi3],
    referenceImages: [
      ItachiReferences1,
      ItachiReferences2,
      ItachiReferences3,
      ItachiReferences4,
      ItachiReferences5,
      Itachi,
    ],
  },
  {
    projectName: "Pain",
    projectLeftTexts: {
      title: "Pain — Realistic 3D Character Fan Art",
      subtitle:
        "A detailed recreation of Pain from the Naruto universe, focusing on realistic materials and emotional lighting. The model represents strength, spirituality, and intensity through visual storytelling.",
    },
    projectRightTexts: {
      title:
        "Each part — from his cloak and piercings to his eyes — was sculpted and textured with precision. The final renders were composed using cinematic lighting to emphasize mood and dramatic contrast.",
    },
    createdBy: "Javohir Qosimov",
    sliderImages: [Pain, Pain1, Pain2, Pain3, Pain4, Pain5],
    referenceImages: [
      PainReference1,
      PainReference2,
      PainReference3,
      PainReference4,
      PainReference5,
      PainReference6,
      PainReference7,
      PainReference8,
      PainReference9,
    ],
  },
];


export { mockProjectData };
