// Components
import HeroSection from "@/components/homepage/hero-section/heroSection";
import CineSuntem from "../components/homepage/cine-suntem/cineSuntem";
import ImplicateSection from "@/components/implica-te-section/implicateSection";

export default function Acasa() {
   return (
      <div>
         <HeroSection />
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <CineSuntem />
            <ImplicateSection />
         </div>
      </div>
   );
}
