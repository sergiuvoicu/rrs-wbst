// Styles
import styles from "./page.module.scss";

// Components
import HeroSection from "@/components/homepage/hero-section/heroSection";
import CineSuntem from "../components/homepage/cine-suntem/cineSuntem";
import CeFacem from "../components/homepage/ce-facem/ceFacem";
import Contact from "@/components/homepage/contact/contact";
import Implicate from "@/components/homepage/implica-te/implicate";

export default function Acasa() {
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
