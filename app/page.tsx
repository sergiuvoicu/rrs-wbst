// Components
import HeroSection from "@/components/homepage/hero-section/heroSection";
import CineSuntem from "../components/homepage/cine-suntem/cineSuntem";

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
         </div>
      </div>
   );
}
