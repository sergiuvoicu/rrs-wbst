// Styles
import styles from "./page.module.scss";

// Components
import HeroSection from "@/src/components/homepage/hero-section/heroSection";
import CineSuntem from "@/src/components/homepage/cine-suntem/cineSuntem";
import CeFacem from "@/src/components/homepage/ce-facem/ceFacem";
import Contact from "@/src/components/homepage/contact/contact";
import Implicate from "@/src/components/homepage/implica-te/implicate";
import { setRequestLocale } from "next-intl/server";

export default function Acasa({
   params: { locale },
}: {
   params: { locale: string };
}) {
   setRequestLocale(locale);
   return (
      <>
         <HeroSection />
         <div className={styles.content}>
            <CineSuntem />
            <CeFacem />
            <Implicate />
            <Contact />
         </div>
      </>
   );
}
