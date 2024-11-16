// Styles
import styles from "./implicateSection.module.scss";

// Components
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";

// Utilities
import { useTranslations } from "next-intl";
import { socials } from "@/utilities/socials";
import { pages } from "@/utilities/pages";

// Assets
import animation from "@/assets/800_600.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebookF,
   faInstagram,
   faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Socials from "../socials/socials";

export default function ImplicateSection() {
   const t = useTranslations("homepage.supportUsSection");

   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <div className={styles.left}>
               <Image src={animation} alt={t("backgroundAlternativeText")} />
               <Link
                  href={pages.implicaTe}
                  aria-label={t("links.supportUs.ariaLabel")}
               >
                  <Button size="medium" model="primary">
                     <Paragraph>{t("links.supportUs.label")}</Paragraph>
                  </Button>
               </Link>
            </div>
            <div className={styles.right}>
               <Link
                  href={pages.implicaTe}
                  aria-label={t("links.join.ariaLabel")}
               >
                  <h3>{t("links.join.label")}</h3>
               </Link>
               <Link
                  href={pages.paypalLink}
                  aria-label={t("links.donate.ariaLabel")}
               >
                  <h3>{t("links.donate.label")}</h3>
               </Link>
               <Link
                  href={pages.redirect}
                  aria-label={t("links.redirect.ariaLabel")}
                  target="_blank"
               >
                  <h3>{t("links.redirect.label")}</h3>
               </Link>
               <Paragraph>{t("socialsLabel")}</Paragraph>
               <Socials items={socials} model="secondary" />
            </div>
         </div>
      </div>
   );
}
