// Styles
import styles from "./socialMedia.module.scss";

// Components
import Title from "../title/title";
import Paragraph from "../paragraph/paragraph";
import { Link } from "@/src/i18n/routing";
import Button from "../button/button";

// Utilities
import { socials } from "@/utilities/socials";
import { pages } from "@/utilities/pages";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebookF,
   faInstagram,
   faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import Socials from "../socials/socials";

export default function SocialMedia() {
   const t = useTranslations("supportUsPage");

   return (
      <div className={styles.wrapper}>
         <Title size="small">{t("socialMediaTitle")}</Title>
         <Paragraph>{t("socialMediaDescription")}</Paragraph>
         <div className={styles.content}>
            <Socials items={socials} />
            <Link href={pages.contact}>
               <Button model="primary" size="medium">
                  <Paragraph>{t("contactUsButton")}</Paragraph>
               </Button>
            </Link>
         </div>
      </div>
   );
}
