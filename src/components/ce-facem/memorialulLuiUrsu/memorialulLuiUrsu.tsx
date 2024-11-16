// Styles
import styles from "./memorialulLuiUrsu.module.scss";

// Components
import Title from "@/src/components/title/title";
import Paragraph from "@/src/components/paragraph/paragraph";
import Button from "@/src/components/button/button";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";

// Assets
import autoportrete from "@/assets/memorialulLuiUrsu.png";
import { pages } from "@/utilities/pages";
import { useTranslations } from "next-intl";

export default function MemorialulLuiUrsu() {
   const t = useTranslations("projectsPage.secondProject");

   return (
      <div className={styles.container}>
         <Image src={autoportrete} alt={t("imageAlternativeText")} />
         <Title size="small">{t("title")}</Title>
         <Paragraph>
            {t("description.unbolded1")}
            <b>{t("description.bolded1")}</b>
            <br /> {t("description.unbolded2")}
            <b>{t("description.bolded2")}</b>
            {t("description.unbolded3")}
            <b> {t("description.bolded3")} </b>
         </Paragraph>
         <Link target="_blank" href={pages.memorialulLuiUrsu}>
            <Button size="medium" model="primary">
               <Paragraph>{t("findOutMore")}</Paragraph>
            </Button>
         </Link>
      </div>
   );
}
