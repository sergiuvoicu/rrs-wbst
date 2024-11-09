// Styles
import styles from "./footer.module.scss";

// Assets
import logo from "../../assets/logo_white.svg";

// Components
import Image from "next/image";
import Paragraph from "../paragraph/paragraph";
import Link from "next/link";
import Title from "../title/title";
import Button from "../button/button";

//Utilities
import { socials } from "@/utilities/socials";
import { pages } from "@/utilities/pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <Link href={pages.acasa} aria-label="link către pagina principală">
            <Image src={logo} alt="logo" />
         </Link>
         <div>
            <div className={styles.links}>
               <Title size="small">Navighează mai ușor!</Title>
               <Link
                  href={pages.cineSuntem}
                  aria-label="link către pagina cine suntem"
               >
                  <Paragraph>Cine suntem?</Paragraph>
               </Link>
               <Link
                  href={pages.ceFacem}
                  aria-label="link către pagina ce facem"
               >
                  <Paragraph>Ce facem?</Paragraph>
               </Link>
               <Link
                  href={pages.implicaTe}
                  aria-label="link către pagina implică-te"
               >
                  <Paragraph>Implică-te!</Paragraph>
               </Link>
               <Link
                  href={pages.contact}
                  aria-label="link către pagina contact"
               >
                  <Paragraph>Contact</Paragraph>
               </Link>
            </div>
            <div className={styles.socials}>
               <Title size="small">Unde ne găsești?</Title>
               <Link
                  target="_top"
                  href={`mailto:${socials.email}`}
                  aria-label="email de contact"
               >
                  <Button size="small" model="secondary">
                     <FontAwesomeIcon icon={faEnvelope} />
                  </Button>
                  <Paragraph>{socials.email}</Paragraph>
               </Link>
               <Link
                  href={socials.instagram}
                  target="_blank"
                  aria-label="link către pagina de instagram"
               >
                  <Button size="small" model="secondary">
                     <FontAwesomeIcon icon={faInstagram} />
                  </Button>
                  <Paragraph>{socials.instagram.slice(12)}</Paragraph>
               </Link>
               <Link
                  href={socials.linkedin}
                  target="_blank"
                  aria-label="link către pagina de linkedin"
               >
                  <Button size="small" model="secondary">
                     <FontAwesomeIcon icon={faLinkedinIn} />
                  </Button>
                  <Paragraph>{socials.linkedin.slice(12)}</Paragraph>
               </Link>
               <Link
                  href={socials.facebook}
                  target="_blank"
                  aria-label="link către pagina de facebook"
               >
                  <Button size="small" model="secondary">
                     <FontAwesomeIcon icon={faFacebookF} fixedWidth/>
                  </Button>
                  <Paragraph>{socials.facebook.slice(12)}</Paragraph>
               </Link>
            </div>
         </div>
         <span>
            <Link
               href={pages.termeniSiConditii}
               aria-label="link către termeni și condiții"
            >
               <Paragraph>Termeni și condiții</Paragraph>
            </Link>
            <Link
               href={pages.politicaDeConfidentialitate}
               aria-label="link către politica de condifențialitate"
            >
               <Paragraph>Politica de confidențialitate</Paragraph>
            </Link>
            <Paragraph>
               @2024 - All rights reserverd - See who designed & developed this
               website{" "}
               <Link
                  href={pages.dezvoltatori}
                  aria-label="link către pagina dedicată dezvoltatorilor site-ului"
               >
                  ► here
               </Link>
            </Paragraph>
         </span>
      </footer>
   );
}
