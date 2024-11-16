// Styles
import styles from "./page.module.scss";

// Components
import PageTitle from "@/src/components/pageTitle/pageTitle";
import BucurestiulDupaCutremur from "@/src/components/ce-facem/bucurestiulDupaCutremur/bucurestiulDupaCutremur";
import OrdinulCriminal from "@/src/components/ce-facem/ordinulCriminal/ordinulCriminal";
import MemorialulLuiUrsu from "@/src/components/ce-facem/memorialulLuiUrsu/memorialulLuiUrsu";
import Implicate from "@/src/components/homepage/implica-te/implicate";
import Title from "@/src/components/title/title";
import Image from "next/image";
import Paragraph from "@/src/components/paragraph/paragraph";
import { Link } from "@/src/i18n/routing";
import Button from "@/src/components/button/button";

// Utilities
import { projects } from "@/utilities/projects";
import { useTranslations } from "next-intl";

export default function CeFacem() {
   const t = useTranslations("projectsPage");

   return (
      <div>
         <PageTitle
            title={t('title')}
            description={t('description')}
         />
         <BucurestiulDupaCutremur />
         <OrdinulCriminal />
         <MemorialulLuiUrsu />

         {/* TODO: UNCOMMENT THIS SECTION AFTER FIRST PROTOTYPE */}
         {/* <div className={styles.projects}>
            <Title size="small">{t('moreOthers')}</Title>
            <Paragraph>
               {t('projectsCollectionDescription')}
            </Paragraph>
            <div>
               {projects.map((project) => {
                  return (
                     <Link
                        href={""}
                        className={styles.project}
                        key={project.id}
                     >
                        <Image src={project.image} alt="" />
                        <h1>{project.name}</h1>
                        <Button size="small" model="primary">
                           <Paragraph>{t('findOutMore')}</Paragraph>
                        </Button>
                     </Link>
                  );
               })}
            </div>
         </div> */}

         <Implicate />
      </div>
   );
}
