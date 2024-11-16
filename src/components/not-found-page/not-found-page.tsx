// Styles
import styles from "./not-found-page.module.scss";

// Components
import PageTitle from "@/src/components/pageTitle/pageTitle";
import Button from "@/src/components/button/button";
import Paragraph from "@/src/components/paragraph/paragraph";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { pages } from "@/utilities/pages";

export default function NotFoundPage() {
   const t = useTranslations("notFound");

   return (
      <div className={styles.container}>
         <PageTitle title={t("title")} />
         <h1>{t("code")}</h1>
         <Paragraph>{t("description")}</Paragraph>
         <Link href={pages.acasa}>
            <Button model="primary" size="medium">
               <Paragraph>{t("goBackButton")}</Paragraph>
            </Button>
         </Link>
      </div>
   );
}
