// Styles
import styles from "./member.module.scss";

// Utilities
import { IMember } from "@/utilities/members";
import { socials } from "@/utilities/socials";

// Components
import Image from "next/image";
import Link from "next/link";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";

// Assets
import email from "../../assets/email_white.svg";
import instagram from "../../assets/instagram_white.svg";
import facebook from "../../assets/facebook_white.svg";
import linkedin from "../../assets/linkedin_white.svg";

export default function Member(props: IMember & { detailed: boolean }) {
   return (
      <div className={styles.wrapper} data-is-detailed={props.detailed}>
         <div className={styles.image}>
            <Image
               src={props.image}
               alt={`${props.name}, membru al echipei Re:Rise`}
            />
         </div>
         <div className={styles.content}>
            <Paragraph>{props.name}</Paragraph>
            {props.detailed && <Paragraph>{props.description}</Paragraph>}
            <div>
               <Link
                  href={socials.linkedin}
                  target="_blank"
                  aria-label="link către profilul de linkedin al membrului"
               >
                  <Button size="small" model="primary">
                     <Image src={linkedin} alt="linkedin" />
                  </Button>
               </Link>
               <Link
                  target="_top"
                  href={`mailto:${socials.email}`}
                  aria-label="email-ul membrului"
               >
                  <Button size="small" model="primary">
                     <Image src={email} alt="email" />
                  </Button>
               </Link>
               <Link
                  href={socials.instagram}
                  target="_blank"
                  aria-label="link către profilul de instagram al membrului"
               >
                  <Button size="small" model="primary">
                     <Image src={instagram} alt="instagram" />
                  </Button>
               </Link>

               <Link
                  href={socials.facebook}
                  target="_blank"
                  aria-label="link către profilul de facebook al membrului"
               >
                  <Button size="small" model="primary">
                     <Image src={facebook} alt="facebook" />
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
}
