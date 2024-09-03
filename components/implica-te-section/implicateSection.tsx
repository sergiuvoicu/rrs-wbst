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
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import animation from "../../assets/800_600.gif";

export default function ImplicateSection() {
   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <div className={styles.left}>
               <Image src={animation} alt="sad"></Image>
               <Link href={pages.implicaTe}>
                  <Button size="medium" type="primary">
                     <Paragraph>Implică-te!</Paragraph>
                  </Button>
               </Link>
            </div>
            <div className={styles.right}>
               <Link href={pages.implicaTe}>
                  <h3>Devino voluntar!</h3>
               </Link>
               <Link href={pages.implicaTe}>
                  <h3>Donează!</h3>
               </Link>
               <Link href={pages.implicaTe}>
                  <h3>Redirecționează!</h3>
               </Link>
               <Paragraph>Și, urmărește-ne pe social media!</Paragraph>
               <div>
                  <Link href={socials.linkedin} target="_blank">
                     <Button size="small" type="secondary">
                        <Image src={linkedin} alt=""></Image>
                     </Button>
                  </Link>
                  <Link href={socials.instagram} target="_blank">
                     <Button size="small" type="secondary">
                        <Image src={instagram} alt=""></Image>
                     </Button>
                  </Link>

                  <Link href={socials.facebook} target="_blank">
                     <Button size="small" type="secondary">
                        <Image src={facebook} alt=""></Image>
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
