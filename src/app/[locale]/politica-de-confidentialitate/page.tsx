// Components
import PageTitle from "@/src/components/pageTitle/pageTitle";
import { useTranslations } from "next-intl";

export default function PoliticaDeConfidentialitate() {
   const t = useTranslations("privacyPolicyPage");

   return (
      <div>
         <PageTitle
            title={t('title')}
            description={t('description')}
         />
      </div>
   );
}
