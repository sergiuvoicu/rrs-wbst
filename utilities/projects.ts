import one from "../assets/projects/1.webp";
import doi from "../assets/projects/2.jpg";
import trei from "../assets/projects/3.jpg";
import patru from "../assets/projects/4.jpg";
import cinci from "../assets/projects/5.webp";
import sase from "../assets/projects/6.jpeg";
import { pages } from "./pages";

interface IProject {
   id: number;
   name: string;
   image: any;
   externalURL?: string;
}

export const projects: IProject[] = [
   {
      id: 1,
      name: "ReDU - Registrul digital al utilajelor",
      image: one,
   },
   {
      id: 2,
      name: "Ordinul Criminal",
      image: doi,
      externalURL: pages.ordinulCriminal,
   },
   {
      id: 3,
      name: "Memorialul lui Ursu",
      image: trei,
      externalURL: pages.memorialulLuiUrsu
   },
   {
      id: 4,
      name: "ReDU - Registrul digital al utilajelor",
      image: patru,
   },
   {
      id: 5,
      name: "ReDU - Registrul digital al utilajelor",
      image: cinci,
   },
   {
      id: 6,
      name: "ReDU - Registrul digital al utilajelor",
      image: sase,
   },
   {
      id: 7,
      name: "ReDU - Registrul digital al utilajelor",
      image: one,
   },
   {
      id: 8,
      name: "ReDU - Registrul digital al utilajelor",
      image: one,
   },
   {
      id: 9,
      name: "ReDU - Registrul digital al utilajelor",
      image: one,
   },
   {
      id: 11,
      name: "ReDU - Registrul digital al utilajelor",
      image: one,
   },
   {
      id: 12,
      name: "ReDU - Registrul digital al utilajelor",
      image: one,
   },
   {
      id: 13,
      name: "ReDU - Registrul digital al utilajelor",
      image: one,
   },
];
