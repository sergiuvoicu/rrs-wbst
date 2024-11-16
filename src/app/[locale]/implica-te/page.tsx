// Components

import PageTitle from "@/src/components/pageTitle/pageTitle";
import SocialMedia from "@/src/components/socialMedia/socialMedia";
import { useTranslations } from "next-intl";

export default function ImplicaTe() {
   const t = useTranslations("supportUsPage");

   return (
      <div>
         <PageTitle
            title={t('title')}
            description={t('description')}
         />

         <SocialMedia />
      </div>
   );
}
