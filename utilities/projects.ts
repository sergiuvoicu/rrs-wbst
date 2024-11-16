import one from "../assets/projects/1.webp";
import doi from "../assets/projects/2.jpg";
import trei from "../assets/projects/3.jpg";
import patru from "../assets/projects/4.jpg";
import cinci from "../assets/projects/5.webp";
import sase from "../assets/projects/6.jpeg";
import { pages } from "./pages";

interface IProject {
   id: number;
   nameIntlKey: string;
   descriptionIntlKey?: string;
   image: any;
   externalURL?: string;
}

export const projects: IProject[] = [
   {
      id: 1,
      nameIntlKey: "redu.name",
      descriptionIntlKey: "redu.description",
      image: one,
   },
   {
      id: 2,
      nameIntlKey: "ordinulCriminal.name",
      image: doi,
      externalURL: pages.ordinulCriminal,
   },
   {
      id: 3,
      nameIntlKey: "memorialulLuiUrsu.name",
      image: trei,
      externalURL: pages.memorialulLuiUrsu,
   },
   {
      id: 4,
      nameIntlKey: "bucurestiulDupaCutremur.name",
      image: patru,
      externalURL: pages.dupaCutremur
   },
];
