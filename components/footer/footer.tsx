// Styles
import styles from "./footer.module.scss";

// Assets
import logo from "../../assets/logo_white.svg";
import email from "../../assets/email.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";

// Components
import Image from "next/image";
import Paragraph from "../paragraph/paragraph";
import Link from "next/link";
import Title from "../title/title";
import Button from "../button/button";

//Utilities
import { socials } from "@/utilities/socials";
import { pages } from "@/utilities/pages";

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <Link href={pages.acasa} aria-label="link către pagina principală">
            <Image
               src={logo}
               alt="logo-ul organizației non-guvernamentale Re:Rise"
            />
         </Link>
         <div>
            <div className={styles.links}>
               <Title size="small">Navighează mai ușor!</Title>
               <Link
                  href={pages.cineSuntem}
                  aria-label={`link către pagina "cine suntem?"`}
               >
                  <Paragraph>Cine suntem?</Paragraph>
               </Link>
               <Link
                  href={pages.ceFacem}
                  aria-label={`link către pagina "ce facem?"`}
               >
                  <Paragraph>Ce facem?</Paragraph>
               </Link>
               <Link
                  href={pages.implicaTe}
                  aria-label={`link către pagina "implică-te!"`}
               >
                  <Paragraph>Implică-te!</Paragraph>
               </Link>
               <Link
                  href={pages.contact}
                  aria-label={`link către pagina "contact"`}
               >
                  <Paragraph>Contact</Paragraph>
               </Link>
            </div>
            <div className={styles.socials}>
               <Title size="small">Unde ne găsești?</Title>
               <Link
                  href={`mailto:${socials.email}`}
                  aria-label="email-ul oficial al organizației non-guvernamentale Re:Rise"
               >
                  <Button size="small" type="secondary">
                     <Image src={email} alt="email" />
                  </Button>
                  <Paragraph>{socials.email}</Paragraph>
               </Link>
               <Link
                  href={socials.instagram}
                  target="_blank"
                  aria-label="pagina oficială de instagram a organizației non-guvernamentale Re:Rise"
               >
                  <Button size="small" type="secondary">
                     <Image src={instagram} alt="logo instagram" />
                  </Button>
                  <Paragraph>{socials.instagram.slice(12)}</Paragraph>
               </Link>
               <Link
                  href={socials.linkedin}
                  target="_blank"
                  aria-label="pagina oficială de linkedin a organizației non-guvernamentale Re:Rise"
               >
                  <Button size="small" type="secondary">
                     <Image src={linkedin} alt="logo linkedin" />
                  </Button>
                  <Paragraph>{socials.linkedin.slice(12)}</Paragraph>
               </Link>
               <Link
                  href={socials.facebook}
                  target="_blank"
                  aria-label="pagina oficială de facebook a organizației non-guvernamentale Re:Rise"
               >
                  <Button size="small" type="secondary">
                     <Image src={facebook} alt="logo facebook" />
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
               aria-label="link către termeni și condiții"
            >
               <Paragraph>Politica de confidențialitate</Paragraph>
            </Link>
            <Paragraph>
               @2024 - All rights reserverd - See who designed & developed this
               website{" "}
               <Link
                  href={pages.dezvoltatori}
                  aria-label={`link către pagina "dezvoltatorii"`}
               >
                  ► here
               </Link>
            </Paragraph>
         </span>
      </footer>
   );
}
