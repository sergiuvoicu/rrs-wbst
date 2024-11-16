// Components
import PageTitle from "@/src/components/pageTitle/pageTitle";

// Utilities
import { useTranslations } from "next-intl";

export default function Dezvoltatori() {
   const t = useTranslations("developersPage");

   return (
      <div>
         <PageTitle title={t("title")} description={t("description")} />
      </div>
   );
}
