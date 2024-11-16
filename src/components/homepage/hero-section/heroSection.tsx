// Styles
import styles from "./heroSection.module.scss";

// Assets
import excavator from "@/assets/excavator.png";

// Components
import Image from "next/image";
import Title from "@/src/components/title/title";
import Paragraph from "@/src/components/paragraph/paragraph";
import Button from "@/src/components/button/button";
import { Link } from "@/src/i18n/routing";

// Utilities
import { useTranslations } from "next-intl";
import { socials } from "@/utilities/socials";
import { pages } from "@/utilities/pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
   faFacebookF,
   faInstagram,
   faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Socials from "../../socials/socials";

export default function HeroSection() {
   const t = useTranslations("homepage.heroSection");

   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>
            <Title size="large">{t("title")}</Title>
            <Paragraph>{t("description")}</Paragraph>
            <div>
               <Link href={pages.ceFacem}>
                  <Button size="small" model="primary">
                     <Paragraph>{t("moreDetailsButton")}</Paragraph>
                  </Button>
               </Link>
               <Paragraph>{t("findOutMoreOn")}</Paragraph>
               <Socials items={socials} />
            </div>
         </div>
         <Image src={excavator} alt={t('backgroundAlternativeText')} className={styles.exacavator} />
         <div className={styles.backgroundImage} />
         <div className={styles.band}>
            <Title size="small">{t("bannerText")}</Title>
         </div>
      </div>
   );
}
