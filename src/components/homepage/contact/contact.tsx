// Styles
import styles from "./contact.module.scss";

// Components
import Paragraph from "@/src/components/paragraph/paragraph";
import Button from "@/src/components/button/button";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";

// Assets
import contact from "@/assets/contactHomepage.png";

// Utilities
import { useTranslations } from "next-intl";
import { pages } from "@/utilities/pages";
import { socials } from "@/utilities/socials";
import Socials from "../../socials/socials";

export default function Contact() {
   const t = useTranslations("homepage.contactSection");
   const mappedSocials = socials.map(social => ({...social, label: social.label.slice(social.label.indexOf("/")+1)}))
   return (
      <div className={styles.wrapper}>
         <div className={styles.hand}>
            <div />
            <div />
            <Image src={contact} alt={t('backgroundAlternativeText')} />
         </div>
         <div className={styles.content}>
            <Paragraph>{t("description")}</Paragraph>
            <Socials items={mappedSocials} size="large" showLabels/>
            <Link href={pages.contact}>
               <Button model="primary" size="medium">
                  <Paragraph>{t("contactUsButton")}</Paragraph>
               </Button>
            </Link>
         </div>
      </div>
   );
}
