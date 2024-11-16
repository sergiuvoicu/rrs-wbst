// Styles
import styles from "./cineSuntem.module.scss";

// Components
import Title from "@/src/components/title/title";
import Paragraph from "@/src/components/paragraph/paragraph";

// Utilities
import { useTranslations } from "next-intl";
import { members } from "@/utilities/members";
import Member from "@/src/components/member/member";

export default function CineSuntem() {
   const t = useTranslations("homepage.aboutSection");

   function shuffle(array: any[]) {
      let currentIndex = array.length;

      // While there remain elements to shuffle...
      while (currentIndex != 0) {
         // Pick a remaining element...
         let randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex--;

         // And swap it with the current element.
         [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
         ];
      }
   }
   shuffle(members);
   return (
      <div className={styles.wrapper}>
         <Title size="small">{t("title")}</Title>
         <Paragraph>{t("description")}</Paragraph>

         <div>
            {members.map((member) => {
               return (
                  <Member
                     key={member.name}
                     name={member.name}
                     image={member.image}
                     description={member.description}
                     email={member.email}
                     instagramLink={member.instagramLink}
                     facebookLink={member.facebookLink}
                     linkedinLink={member.linkedinLink}
                     detailed={false}
                  />
               );
            })}
         </div>
      </div>
   );
}
