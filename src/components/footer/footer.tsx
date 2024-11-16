// Styles
import styles from "./footer.module.scss";

// Assets
import logo from "@/assets/logo_white.svg";

// Components
import Image from "next/image";
import Paragraph from "../paragraph/paragraph";
import { Link } from "@/src/i18n/routing";
import Title from "../title/title";

//Utilities
import { useTranslations } from "next-intl";
import { socials } from "@/utilities/socials";
import { pages } from "@/utilities/pages";
import Socials from "../socials/socials";

export default function Footer() {
   const t = useTranslations("layout.footer");

   return (
      <footer className={styles.footer}>
         <Link href={pages.acasa} aria-label={t("links.homepage.ariaLabel")}>
            <Image src={logo} alt={t("logoAlternativeText")} />
         </Link>
         <div>
            <div className={styles.links}>
               <Title size="small">{t("title")}</Title>
               <Link
                  href={pages.cineSuntem}
                  aria-label={t("links.aboutPage.ariaLabel")}
               >
                  <Paragraph>{t("links.aboutPage.label")}</Paragraph>
               </Link>
               <Link
                  href={pages.ceFacem}
                  aria-label={t("links.projectsPage.ariaLabel")}
               >
                  <Paragraph>{t("links.projectsPage.label")}</Paragraph>
               </Link>
               <Link
                  href={pages.implicaTe}
                  aria-label={t("links.supportUsPage.ariaLabel")}
               >
                  <Paragraph>{t("links.supportUsPage.label")}</Paragraph>
               </Link>
               <Link
                  href={pages.contact}
                  aria-label={t("links.contactPage.ariaLabel")}
               >
                  <Paragraph>{t("links.contactPage.label")}</Paragraph>
               </Link>
            </div>
            <div className={styles.socials}>
               <Title size="small">{t("socialsLabel")}</Title>
               <Socials items={socials} model="secondary" showLabels />
            </div>
         </div>
         <span>
            <Link
               href={pages.termeniSiConditii}
               aria-label={t("links.termsAndConditions.ariaLabel")}
            >
               <Paragraph>{t("links.termsAndConditions.label")}</Paragraph>
            </Link>
            <Link
               href={pages.politicaDeConfidentialitate}
               aria-label={t("links.privacyPolicy.ariaLabel")}
            >
               <Paragraph>{t("links.privacyPolicy.label")}</Paragraph>
            </Link>
            <Paragraph>
               {t("copyright")}
               <Link
                  href={pages.dezvoltatori}
                  aria-label={t("links.developersPage.ariaLabel")}
               >
                  {t("links.developersPage.label")}
               </Link>
            </Paragraph>
         </span>
      </footer>
   );
}
