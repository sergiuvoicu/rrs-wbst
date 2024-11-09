// Styles
import styles from "./implicateSection.module.scss";

// Components
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";
import Link from "next/link";
import Image from "next/image";

// Utilities
import { socials } from "@/utilities/socials";
import { pages } from "@/utilities/pages";

// Assets
import animation from "../../assets/800_600.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebookF,
   faInstagram,
   faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function ImplicateSection() {
   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <div className={styles.left}>
               <Image src={animation} alt="animatie" />
               <Link
                  href={pages.implicaTe}
                  aria-label="link către pagina implică-te"
               >
                  <Button size="medium" model="primary">
                     <Paragraph>Implică-te!</Paragraph>
                  </Button>
               </Link>
            </div>
            <div className={styles.right}>
               <Link
                  href={pages.implicaTe}
                  aria-label="link către pagina implică-te, secțiunea devino voluntar!"
               >
                  <h3>Devino voluntar!</h3>
               </Link>
               <Link
                  href={pages.implicaTe}
                  aria-label="link către pagina implică-te, secțiunea donează!"
               >
                  <h3>Donează!</h3>
               </Link>
               <Link
                  href={pages.implicaTe}
                  aria-label="link către pagina implică-te, secțiunea redirecționează!"
               >
                  <h3>Redirecționează!</h3>
               </Link>
               <Paragraph>Și, urmărește-ne pe social media!</Paragraph>
               <div>
                  <Link
                     href={socials.linkedin}
                     target="_blank"
                     aria-label="link către pagina de linkedin"
                  >
                     <Button size="small" model="secondary">
                        <FontAwesomeIcon
                           icon={faLinkedinIn}
                           size="xl"
                           fixedWidth
                        />
                     </Button>
                  </Link>
                  <Link
                     href={socials.instagram}
                     target="_blank"
                     aria-label="link către pagina de instagram"
                  >
                     <Button size="small" model="secondary">
                        <FontAwesomeIcon
                           icon={faInstagram}
                           size="xl"
                           fixedWidth
                        />
                     </Button>
                  </Link>

                  <Link
                     href={socials.facebook}
                     target="_blank"
                     aria-label="link către pagina de facebook"
                  >
                     <Button size="small" model="secondary">
                        <FontAwesomeIcon icon={faFacebookF} />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
