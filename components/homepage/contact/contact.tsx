// Styles
import styles from "./contact.module.scss";

// Components
import Paragraph from "@/components/paragraph/paragraph";
import Button from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";

// Assets
import contact from "../../../assets/contactHomepage.png";
import email from "../../../assets/email_white.svg";
import facebook from "../../../assets/facebook_white.svg";
import linkedin from "../../../assets/linkedin_white.svg";
import instagram from "../../../assets/email_white.svg";

// Utilities
import { pages } from "@/utilities/pages";
import { socials } from "@/utilities/socials";

export default function Contact() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.hand}>
            <div />
            <div />
            <Image src={contact} alt="" />
         </div>
         <div className={styles.content}>
            <Paragraph>
               Ne-am obișnuit să vorbim despre cutremur cu un fatalism parcă
               nativ. Închidem subiectul cât mai repede, fie cu un „Doamne
               ferește”, fie cu un aforism despre destin sau cu o glumă
               detașată. Poate că e și normal, având în vedere că se împlinesc
               14 ani de la ultimul cutremur notabil care a avut loc la noi, cel
               din octombrie 2004, și singurul prin care a trecut generația
               tânără. Iar la o magnitudine de 6,0 grade acela a fost doar un
               simplu test al reacțiilor, înregistrându-se zero pagube.
            </Paragraph>
            <div>
               <Link href={`mailto:${socials.email}`} target="_blank">
                  <Button size="large" type="primary">
                     <Image src={email} alt="" />
                  </Button>
                  <div>
                     <Paragraph>{socials.email}</Paragraph>
                  </div>
               </Link>
               <Link href={socials.linkedin} target="_blank">
                  <Button size="large" type="primary">
                     <Image src={linkedin} alt="" />
                  </Button>
                  <div>
                     <Paragraph>{socials.linkedin.slice(25)}</Paragraph>
                  </div>
               </Link>
               <Link href={socials.facebook} target="_blank">
                  <Button size="large" type="primary">
                     <Image src={facebook} alt="" />
                  </Button>
                  <div>
                     <Paragraph>{socials.facebook.slice(25)}</Paragraph>
                  </div>
               </Link>
               <Link href={socials.instagram} target="_blank">
                  <Button size="large" type="primary">
                     <Image src={instagram} alt="" />
                  </Button>
                  <div>
                     <Paragraph>{socials.instagram.slice(26)}</Paragraph>
                  </div>
               </Link>
            </div>
            <Link href={pages.contact}>
               <Button type="primary" size="medium">
                  <Paragraph>Contactează-ne!</Paragraph>
               </Button>
            </Link>
         </div>
      </div>
   );
}
