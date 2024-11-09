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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
                  target="_top"
                  href={`mailto:${socials.email}`}
                  aria-label="email-ul membrului"
               >
                  <Button size="small" model="primary">
                     <FontAwesomeIcon icon={faEnvelope}/>
                  </Button>
               </Link>
               <Link
                  href={socials.linkedin}
                  target="_blank"
                  aria-label="link către profilul de linkedin al membrului"
               >
                  <Button size="small" model="primary">
                     <FontAwesomeIcon icon={faLinkedinIn} />
                  </Button>
               </Link>
               <Link
                  href={socials.instagram}
                  target="_blank"
                  aria-label="link către profilul de instagram al membrului"
               >
                  <Button size="small" model="primary">
                     <FontAwesomeIcon icon={faInstagram}  />
                  </Button>
               </Link>

               <Link
                  href={socials.facebook}
                  target="_blank"
                  aria-label="link către profilul de facebook al membrului"
               >
                  <Button size="small" model="primary">
                     <FontAwesomeIcon icon={faFacebookF} size="sm" fixedWidth />
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
}
