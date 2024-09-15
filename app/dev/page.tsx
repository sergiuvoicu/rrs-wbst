"use client";
import Button from "@/components/button/button";
import ImplicateSection from "@/components/implica-te-section/implicateSection";
import Member from "@/components/member/member";
import Paragraph from "@/components/paragraph/paragraph";
import Title from "@/components/title/title";

import { members } from "@/utilities/members";
export default function Dev() {
   async function makeApiCall() {
      try {
         const response = await fetch("../api/example", {
            method: "POST",
         });

         if (!response.ok) {
            throw new Error("Network response was not ok");
         }
      } catch (error) {
         console.error("There was a problem with the fetch operation:", error);
      }
   }

   return (
      <>
         <Button type="primary" size="small">
            <p>Small Button</p>
         </Button>
         <br />
         <br />
         <Button type="primary" size="medium">
            <p>Medium Button</p>
         </Button>
         <br />
         <br />
         <Button type="primary" size="large">
            <p>Large Button</p>
         </Button>
         <br />
         <br />
         <Button type="secondary" size="small">
            <p>Small Button</p>
         </Button>
         <br />
         <br />
         <Button type="secondary" size="medium">
            <p>Medium Button</p>
         </Button>
         <br />
         <br />
         <Button type="secondary" size="large">
            <p>Large Button</p>
         </Button>
         <Title size="large">#ReDU - Registrul digital al utilajelor</Title>
         <Title size="small">
            Cine suntem? #ReDU - Registrul digital al utilajelor #ReDU
         </Title>
         <Paragraph>
            Asociația pentru Reducerea Riscului Seismic (Re:Rise) este răspunsul
            oamenilor la nevoia urgentă de scădere a vulnerabilității seismice
            din România. Re:Rise funcționează ca o punte de legătură între
            persoanele expuse riscului seismic și, pe de altă parte, resursele
            tehnologice, financiare, administrative și umane aflate la
            dispoziție.
         </Paragraph>
         {members.map((member) => {
            return (
               <>
                  <Member
                     name={member.name}
                     image={member.image}
                     description={member.description}
                     email={member.email}
                     instagramLink={member.instagramLink}
                     facebookLink={member.facebookLink}
                     linkedinLink={member.linkedinLink}
                     detailed={true}
                  />
                  <Member
                     name={member.name}
                     image={member.image}
                     description={member.description}
                     email={member.email}
                     instagramLink={member.instagramLink}
                     facebookLink={member.facebookLink}
                     linkedinLink={member.linkedinLink}
                     detailed={false}
                  />
               </>
            );
         })}
         <button onClick={makeApiCall}>
            apasa aici ca sa faci rost de serverul ala pe care incerci sa il
            faci haha
         </button>
         <ImplicateSection />;
      </>
   );
}
