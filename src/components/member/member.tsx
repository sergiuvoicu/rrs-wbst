// Styles
import styles from "./member.module.scss";

// Utilities
import { IMember } from "@/utilities/members";
import { socials } from "@/utilities/socials";

// Components
import Image from "next/image";
import { Link } from "@/src/i18n/routing";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";

// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import Socials from "../socials/socials";

export default function Member(props: IMember & { detailed: boolean }) {
   const t = useTranslations("aboutPage.member");

   return (
      <div className={styles.wrapper} data-is-detailed={props.detailed}>
         <div className={styles.image}>
            <Image
               src={props.image}
               alt={`${props.name}, ${t('portraitAlternativeText')}`}
            />
         </div>
         <div className={styles.content}>
            <Paragraph>{props.name}</Paragraph>
            {/* {props.detailed && <Paragraph>{props.description}</Paragraph>} */}
            <Socials items={socials} />
         </div>
      </div>
   );
}
