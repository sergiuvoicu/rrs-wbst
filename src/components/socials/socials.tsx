import { Link } from "@/src/i18n/routing";
import Button from "../button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../paragraph/paragraph";
import { socials } from "@/utilities/socials";
import {
   IconDefinition,
   faFacebookF,
   faInstagram,
   faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import styles from "./socials.module.scss";
import { pages } from "@/utilities/pages";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface ISocial {
   icon: IconDefinition;
   model?: "primary" | "secondary";
   size?: "small" | "medium" | "large";
   href: string;
   target?: string;
   label: string;
   iconSize?: SizeProp;
   ariaLabelKey?: string;
}

interface ISocialsComponent {
   items: ISocial[];
   model?: "primary" | "secondary";
   size?: "small" | "medium" | "large";
   showLabels?: boolean;
}
export default function Socials({
   items,
   showLabels,
   model,
   size,
}: ISocialsComponent) {
   const t = useTranslations("socials");
   const stylisedItems = items.map((item) => ({
      ...item,
      model: model ?? "primary",
      size: size ?? "medium",
   }));
   return (
      <div className={styles.links}>
         {stylisedItems.map((item, index) => (
            <Link
               key={index}
               href={item.href}
               target={item.target ?? "_self"}
               aria-label={t(item.ariaLabelKey)}
            >
               <Button size={item.size} model={item.model}>
                  <FontAwesomeIcon
                     size={item.iconSize ?? "sm"}
                     icon={item.icon}
                  />
               </Button>
               {showLabels && (
                  <div>
                     <Paragraph>{item.label}</Paragraph>
                  </div>
               )}
            </Link>
         ))}
      </div>
   );
}
