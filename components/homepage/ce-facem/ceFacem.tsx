"use client";

// Styles
import styles from "./cefacem.module.scss";

// Assets
import background from "../../../assets/heroSection.jpg";

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
import { projects } from "@/utilities/projects";

export default function CeFacem() {
   const [projectsList, setProjects] = useState(projects.slice(0, 7));

   function nextSlide() {
      setProjects((prevProjects) =>
         prevProjects.map((project) => ({
            ...project,
            id: (project.id + 1) % projectsList.length,
         }))
      );
   }

   function prevSlide() {
      setProjects((prevProjects) =>
         prevProjects.map((project) => ({
            ...project,
            id: (project.id - 1 + projectsList.length) % projectsList.length,
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
               <Button size="small" model="primary">
                  <Paragraph>Descoperă toate proiectele noastre!</Paragraph>
               </Button>
            </Link>
         </div>
         <div className={styles.carousel}>
            {projectsList.map((project) => {
               return (
                  <Link target={project.externalURL ? "_blank" : "_self"}
                        href={project.externalURL ?? `${pages.ceFacem}/${project.name}`}
                        key={project.id}
                        data-slide-position={project.id}
                        className={styles.slide}
                  >
                     <Image src={project.image} alt={project.name} />
                     <h1>{project.name}</h1>
                  </Link>
               );
            })}
            <div className={styles.controls}>
               <Button model="primary" size="small" onClick={prevSlide}>
                  <Image src={arrow} alt="sageata spre stanga"></Image>
               </Button>
               <Button onClick={nextSlide} model="primary" size="small">
                  <Image src={arrow} alt="sageata spre dreapta"></Image>
               </Button>
            </div>
         </div>
      </div>
   );
}
