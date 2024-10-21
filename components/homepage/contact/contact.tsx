// Styles
import styles from "./contact.module.scss";

// Components
import Paragraph from "@/components/paragraph/paragraph";
import Button from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";

// Assets
import contact from "../../../assets/contactHomepage.png";

// Utilities
import { pages } from "@/utilities/pages";
import { socials } from "@/utilities/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
               <Link href={`mailto:${socials.email}`} target="_top">
                  <Button size="large" model="primary">
                     <FontAwesomeIcon icon={faEnvelope} />
                  </Button>
                  <div>
                     <Paragraph>{socials.email}</Paragraph>
                  </div>
               </Link>
               <Link href={socials.linkedin} target="_blank">
                  <Button size="large" model="primary">
                     <FontAwesomeIcon icon={faLinkedinIn} />
                  </Button>
                  <div>
                     <Paragraph>{socials.linkedin.slice(25)}</Paragraph>
                  </div>
               </Link>
               <Link href={socials.facebook} target="_blank">
                  <Button size="large" model="primary">
                     <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <div>
                     <Paragraph>{socials.facebook.slice(25)}</Paragraph>
                  </div>
               </Link>
               <Link href={socials.instagram} target="_blank">
                  <Button size="large" model="primary">
                     <FontAwesomeIcon icon={faInstagram} />
                  </Button>
                  <div>
                     <Paragraph>{socials.instagram.slice(26)}</Paragraph>
                  </div>
               </Link>
            </div>
            <Link href={pages.contact}>
               <Button model="primary" size="medium">
                  <Paragraph>Contactează-ne!</Paragraph>
               </Button>
            </Link>
         </div>
      </div>
   );
}
