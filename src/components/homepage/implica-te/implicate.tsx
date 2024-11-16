// Styles
import styles from "./implicate.module.scss";

// Components
import ImplicateSection from "@/src/components/implica-te-section/implicateSection";
import Title from "@/src/components/title/title";
import Paragraph from "@/src/components/paragraph/paragraph";
import { useTranslations } from "next-intl";

export default function Implicate() {
   const t = useTranslations("homepage.supportUsSection");

   return (
      <div className={styles.wrapper}>
         <Title size="small">{t("title")}</Title>
         <Paragraph>{t("description")}</Paragraph>
         <ImplicateSection />
      </div>
   );
}
