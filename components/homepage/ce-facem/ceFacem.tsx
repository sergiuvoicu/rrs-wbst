"use client";

// Styles
import styles from "./cefacem.module.scss";

// Assets
import background from "../../../assets/heroSection.jpg";
import one from "../../../assets/projects/1.webp";
import doi from "../../../assets/projects/2.jpg";
import trei from "../../../assets/projects/3.jpg";
import patru from "../../../assets/projects/4.jpg";
import cinci from "../../../assets/projects/5.webp";
import sase from "../../../assets/projects/6.jpeg";
import arrow from "../../../assets/arrow.png";

// Components
import Image from "next/image";
import Title from "../../../components/title/title";
import Paragraph from "@/components/paragraph/paragraph";
import Button from "@/components/button/button";
import Link from "next/link";

// Utilities
import { pages } from "@/utilities/pages";
import { useState } from "react";

export default function CeFacem() {
   interface IProject {
      id: number;
      name: string;
      image: any;
   }

   const [projects, setProjects] = useState<IProject[]>([
      {
         id: 1,
         name: "#ReDU - Registrul digital al utilajelor",
         image: one,
      },
      {
         id: 2,
         name: "#ReDU - Registrul digital al utilajelor",
         image: doi,
      },
      {
         id: 3,
         name: "#ReDU - Registrul digital al utilajelor",
         image: trei,
      },
      {
         id: 4,
         name: "#ReDU - Registrul digital al utilajelor",
         image: patru,
      },
      {
         id: 5,
         name: "#ReDU - Registrul digital al utilajelor",
         image: cinci,
      },
      {
         id: 6,
         name: "#ReDU - Registrul digital al utilajelor",
         image: sase,
      },
      {
         id: 7,
         name: "#ReDU - Registrul digital al utilajelor",
         image: background,
      },
      {
         id: 8,
         name: "#ReDU - Registrul digital al utilajelor",
         image: background,
      },
      {
         id: 9,
         name: "#ReDU - Registrul digital al utilajelor",
         image: background,
      },
      {
         id: 10,
         name: "#ReDU - Registrul digital al utilajelor",
         image: background,
      },
   ]);

   function nextSlide() {
      setProjects((prevProjects) =>
         prevProjects.map((project) => ({
            ...project,
            id: (project.id + 1) % projects.length,
         }))
      );
   }

   function prevSlide() {
      setProjects((prevProjects) =>
         prevProjects.map((project) => ({
            ...project,
            id: (project.id - 1 + projects.length) % projects.length,
         }))
      );
   }

   return (
      <div className={styles.container}>
         <div className={styles.background} />
         <Image src={background} alt="imagine de fundal" />
         <div>
            <Title size="small">Ce facem?</Title>
            <Paragraph>
               Asociația pentru Reducerea Riscului Seismic este răspunsul
               oamenilor la nevoia urgentă de scădere a vulnerabilității
               seismice din România. Re:Rise va funcționa ca o punte de legătură
               între persoanele expuse riscului seismic și, pe de altă parte.
            </Paragraph>
            <Link href={pages.ceFacem} aria-label="link către pagina ce facem">
               <Button size="small" type="primary">
                  <Paragraph>Descoperă toate proiectele noastre!</Paragraph>
               </Button>
            </Link>
         </div>
         <div className={styles.carousel}>
            {projects.map((project) => {
               return (
                  <div
                     key={project.name}
                     data-slide-position={project.id}
                     className={styles.slide}
                  >
                     <Image src={project.image} alt={project.name} />
                     <h1>{project.name}</h1>
                     <Link href={project.name}>
                        <Button type="primary" size="small">
                           <Paragraph>Află mai multe!</Paragraph>
                        </Button>
                     </Link>
                  </div>
               );
            })}
            <div className={styles.controls}>
               <Button type="primary" size="small" onClick={prevSlide}>
                  <Image src={arrow} alt="sageata spre stanga"></Image>
               </Button>
               <Button onClick={nextSlide} type="primary" size="small">
                  <Image src={arrow} alt="sageata spre dreapta"></Image>
               </Button>
            </div>
         </div>
      </div>
   );
}
