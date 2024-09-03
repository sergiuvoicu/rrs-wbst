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
               <Link href={socials.linkedin} target="_blank">
                  <Button size="small" type="primary">
                     <Image src={linkedin} alt=""></Image>
                  </Button>
               </Link>
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

               <Link href={socials.facebook} target="_blank">
                  <Button size="small" type="primary">
                     <Image src={facebook} alt=""></Image>
                  </Button>
               </Link>
            </div>
         </div>
      </div>
   );
}
