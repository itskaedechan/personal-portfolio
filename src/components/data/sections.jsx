import MyProjects from "../sections/MyProjects";
import Skills from "../sections/Skills";
import LetsConnect from "../sections/LetsConnect";
import CraftDedication from "../sections/CraftDedication";

export const sections = [
  { id: "projects", title: "My Projects", component: <MyProjects /> },
  { id: "skills", title: "Skills", component: <Skills /> },
  { id: "connect", title: "Let's Connect", component: <LetsConnect /> },
  { id: "craft", title: "Craft & Dedication", component: <CraftDedication /> },
];
