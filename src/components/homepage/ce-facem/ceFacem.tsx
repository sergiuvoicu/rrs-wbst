"use client";

// Styles
import styles from "./cefacem.module.scss";

// Assets
import background from "@/assets/heroSection.jpg";

// Components
import Image from "next/image";
import Title from "../../title/title";
import { Link } from "@/src/i18n/routing";
import Paragraph from "@/src/components/paragraph/paragraph";
import Button from "@/src/components/button/button";

// Utilities
import { useState } from "react";
import { pages } from "@/utilities/pages";
import { projects } from "@/utilities/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export default function CeFacem() {
   const [projectsList, setProjects] = useState(projects.slice(0, 7));
   const t = useTranslations("homepage.projectsSection");

   function prevSlide() {
      setProjects((prevProjects) =>
         prevProjects.map((project) => ({
            ...project,
            id: (project.id + 1) % projectsList.length,
         }))
      );
   }

   function nextSlide() {
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
         <Image src={background} alt={t('backgroundAlternativeText')}/>
         <div>
            <Title size="small">{t("title")}</Title>
            <Paragraph>{t("description")}</Paragraph>
            <Link href={pages.ceFacem} aria-label={t("projectsPage.ariaLabel")}>
               <Button size="small" model="primary">
                  <Paragraph>{t("projectsPage.label")}</Paragraph>
               </Button>
            </Link>
         </div>
         <div className={styles.carousel}>
            {projectsList.map((project) => {
               return (
                  <Link
                     target={project.externalURL ? "_blank" : "_self"}
                     href={
                        project.externalURL ??
                        `${pages.ceFacem}/${project.id}`
                     }
                     key={project.id}
                     data-slide-position={project.id}
                     className={styles.slide}
                  >
                     <Image src={project.image} alt={t(project.nameIntlKey)} />
                     <h1>{t(project.nameIntlKey)}</h1>
                  </Link>
               );
            })}
            <div className={styles.controls}>
               <Button model="primary" size="small" onClick={prevSlide}>
                  <FontAwesomeIcon icon={faCaretLeft} />
               </Button>
               <Button model="primary" size="small" onClick={nextSlide}>
                  <FontAwesomeIcon icon={faCaretRight} />
               </Button>
            </div>
         </div>
      </div>
   );
}
