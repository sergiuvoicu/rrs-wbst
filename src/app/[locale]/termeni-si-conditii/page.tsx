// Components
import PageTitle from "@/src/components/pageTitle/pageTitle";
import { useTranslations } from "next-intl";

export default function TermeniSiConditii() {
   const t = useTranslations("termsAndConditionsPage");

   return (
      <div>
         <PageTitle
            title={t('title')}
            description={t('description')}
         />
      </div>
   );
}
