// Styles
import styles from "./bucurestiulDupaCutremur.module.scss";

// Components
import Title from "@/src/components/title/title";
import Paragraph from "@/src/components/paragraph/paragraph";
import Button from "@/src/components/button/button";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";

// Assets
import telefon from "@/assets/bucurestiulDupaCutremur.png";
import { pages } from "@/utilities/pages";
import { useTranslations } from "next-intl";

export default function BucurestiulDupaCutremur() {
   const t = useTranslations("projectsPage.firstProject");

   return (
      <div className={styles.container}>
         <Title size="small">{t("title")}</Title>
         <Paragraph>
            <Link target="_blank" href={pages.dupaCutremur}>
               DupaCutremur.ro
            </Link>{" "}
            {t("linksConnector")}
            <Link target="_blank" href={pages.geoSpatial}>
               {" "}
               geo-spatial.org
            </Link>{" "}
            {t("description")}
         </Paragraph>
         <ul>
            <li>{t("firstListItem")}</li>
            <li>{t("secondListItem")}</li>
            <li>{t("thirdListItem")}</li>
         </ul>
         <Link target="_blank" href={pages.dupaCutremur}>
            <Button size="medium" model="primary">
               <Paragraph>{t("findOutMore")}</Paragraph>
            </Button>
         </Link>
         <Image src={telefon} alt={t("imageAlternativeText")} />
      </div>
   );
}
