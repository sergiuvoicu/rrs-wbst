// Styles
import styles from "./page.module.scss";

// Components
import PageTitle from "@/components/pageTitle/pageTitle";
import BucurestiulDupaCutremur from "@/components/ce-facem/bucurestiulDupaCutremur/bucurestiulDupaCutremur";
import OrdinulCriminal from "@/components/ce-facem/ordinulCriminal/ordinulCriminal";
import MemorialulLuiUrsu from "@/components/ce-facem/memorialulLuiUrsu/memorialulLuiUrsu";
import Implicate from "@/components/homepage/implica-te/implicate";

export default function CeFacem() {
   return (
      <div>
         <PageTitle
            title="Ce facem în Re:Rise?"
            description="Re:rise este o asociație care reduce vulnerabilitatea seismică în România, conectând persoanele expuse riscului cu resursele disponibile. Organizația implementează 5 soluții, inclusiv un Registru Digital al Utilajelor pentru forțele de intervenție, un Sistem de Mapare Rapidă cu Drone pentru autorități și WiFi Mesh-ul Salvatorului pentru comunicarea între salvatori și victime."
         />
         <BucurestiulDupaCutremur />
         <OrdinulCriminal />
         <MemorialulLuiUrsu />
         <div className={styles.projects}></div>

         <Implicate />
      </div>
   );
}
