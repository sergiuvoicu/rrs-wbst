// Styles
import styles from "./ordinulCriminal.module.scss";

// Components
import Image from "next/image";
import Title from "@/src/components/title/title";
import Paragraph from "@/src/components/paragraph/paragraph";
import Button from "@/src/components/button/button";
import { Link } from "@/src/i18n/routing";

// Assets
import { useTranslations } from "next-intl";
import poster from "@/assets/ordinulCriminal.png";
import { pages } from "@/utilities/pages";

export default function OrdinulCriminal() {
   const t = useTranslations("projectsPage.thirdProject");

   return (
      <div className={styles.container}>
         <Image src={poster} alt={t("imageAlternativeText")} />
         <div>
            <Title size="small">{t("title")}</Title>
            <Paragraph>
               {t("description.firstSection")}
               <br />
               <br />
               {t("description.secondSection")}
               <br />
               <br />
               {t("description.thirdSection")}
            </Paragraph>
            <Link target="_blank" href={pages.ordinulCriminal}>
               <Button size="medium" model="secondary">
                  <Paragraph>{t("findOutMore")}</Paragraph>
               </Button>
            </Link>
         </div>
      </div>
   );
}
