// Styles
import styles from "./page.module.scss";

// Components
import PageTitle from "@/components/pageTitle/pageTitle";
import Implicate from "@/components/homepage/implica-te/implicate";
import Member from "@/components/member/member";

// Utilities
import { members } from "@/utilities/members";

export default function CineSuntem() {
   return (
      <div className={styles.container}>
         <PageTitle
            title="Cine suntem?"
            description="Asociația pentru Reducerea Riscului Seismic (Re:Rise) este răspunsul oamenilor la nevoia urgentă de scădere a vulnerabilității seismice din România. Re:Rise funcționează ca o punte de legătură între persoanele expuse riscului seismic și, pe de altă parte, resursele tehnologice, financiare, administrative și umane aflate la dispoziție."
         />
         <div className={styles.members}>
            {Array.from(members).map((member) => {
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
