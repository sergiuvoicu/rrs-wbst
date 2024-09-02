// Styles
import styles from "./heroSection.module.scss";

// Assets
import backgroundImage from "../../../assets/heroSection.jpg";
import email from "../../../assets/email_white.svg";
import facebook from "../../../assets/facebook_white.svg";
import linkedin from "../../../assets/linkedin_white.svg";
import instagram from "../../../assets/instagram_white.svg";
import excavator from "../../../assets/excavator.png";

// Components
import Image from "next/image";
import Title from "@/components/title/title";
import Paragraph from "@/components/paragraph/paragraph";
import Button from "@/components/button/button";
import Link from "next/link";

// Utilities
import { socials } from "@/utilities/socials";

export default function HeroSection() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>
            <Title size="large">#ReDU - Registrul digital al utilajelor</Title>
            <Paragraph>
               #ReDU (Registrul Digital al Utilajelor) este un proiect în mai
               multe etape ce presupune crearea unei hărți în timp real cu toate
               utilajele pregătite pentru eliberarea căilor de acces după
               cutremur, salvarea persoanelor de sub dărâmături și punerea în
               siguranță a structurilor afectate.
            </Paragraph>
            <div>
               <Button size="small" type="primary">
                  <Paragraph>Află mai multe!</Paragraph>
               </Button>
               <Paragraph>Și urmărește-ne pe ►</Paragraph>
               <div>
                  <Link href={`mailto:${socials.email}`}>
                     <Button size="small" type="primary">
                        <Image src={email} alt=""></Image>
                     </Button>
                  </Link>
                  <Link href={socials.instagram} target="_blank">
                     <Button size="small" type="primary">
                        <Image src={instagram} alt=""></Image>
                     </Button>
                  </Link>
                  <Link href={socials.linkedin} target="_blank">
                     <Button size="small" type="primary">
                        <Image src={linkedin} alt=""></Image>
                     </Button>
                  </Link>
                  <Link href={socials.facebook} target="_blank">
                     <Button size="small" type="primary">
                        <Image src={facebook} alt=""></Image>
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
         <Image src={excavator} alt="excavator" className={styles.exacavator} />
         <Image
            src={backgroundImage}
            alt=""
            className={styles.backgroundImage}
            unoptimized
         />
         <div className={styles.band}>
            <Title size="small">Fii pregătit în caz de cutremur!</Title>
         </div>
      </div>
   );
}