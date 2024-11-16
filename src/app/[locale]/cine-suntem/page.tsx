// Styles
import styles from "./page.module.scss";

// Components
import PageTitle from "@/src/components/pageTitle/pageTitle";
import Implicate from "@/src/components/homepage/implica-te/implicate";
import Member from "@/src/components/member/member";

// Utilities
import { members } from "@/utilities/members";
import { useTranslations } from "next-intl";

export default function CineSuntem() {
   const t = useTranslations("aboutPage");

   return (
      <div className={styles.container}>
         <PageTitle title={t("title")} description={t("description")} />
         <div className={styles.members}>
            {members.map((member) => {
               return (
                  <Member
                     key={member.name}
                     name={member.name}
                     description={member.description}
                     image={member.image}
                     email={member.email}
                     instagramLink={member.instagramLink}
                     facebookLink={member.facebookLink}
                     linkedinLink={member.linkedinLink}
                     detailed
                  />
               );
            })}
         </div>
         <Implicate />
      </div>
   );
}
