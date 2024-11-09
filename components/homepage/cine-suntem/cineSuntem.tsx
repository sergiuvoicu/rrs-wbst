// Styles
import styles from "./cineSuntem.module.scss";

// Components
import Title from "@/components/title/title";
import Paragraph from "@/components/paragraph/paragraph";

// Utilities
import { members } from "@/utilities/members";
import Member from "@/components/member/member";

export default function CineSuntem() {
   return (
      <div className={styles.wrapper}>
         <Title size="small">Cine suntem?</Title>
         <Paragraph>
            Asociația pentru Reducerea Riscului Seismic (Re:Rise) este răspunsul
            oamenilor la nevoia urgentă de scădere a vulnerabilității seismice
            din România. Re:Rise funcționează ca o punte de legătură între
            persoanele expuse riscului seismic și, pe de altă parte, resursele
            tehnologice, financiare, administrative și umane aflate la
            dispoziție.
         </Paragraph>

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
