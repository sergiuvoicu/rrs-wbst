// Styles
import styles from "./page.module.scss";

// Components
import PageTitle from "@/components/pageTitle/pageTitle";
import BucurestiulDupaCutremur from "@/components/ce-facem/bucurestiulDupaCutremur/bucurestiulDupaCutremur";
import OrdinulCriminal from "@/components/ce-facem/ordinulCriminal/ordinulCriminal";
import MemorialulLuiUrsu from "@/components/ce-facem/memorialulLuiUrsu/memorialulLuiUrsu";
import Implicate from "@/components/homepage/implica-te/implicate";
import Title from "@/components/title/title";
import Image from "next/image";
import Paragraph from "@/components/paragraph/paragraph";
import Link from "next/link";
import Button from "@/components/button/button";

// Utilities
import { projects } from "@/utilities/projects";

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

         {/* TODO: UNCOMMENT THIS SECTION AFTER FIRST PROTOTYPE */}
         {/* <div className={styles.projects}>
            <Title size="small">Plus multe altele!</Title>
            <Paragraph>
               Ne-am obișnuit să vorbim despre cutremur cu un fatalism parcă
               nativ
            </Paragraph>
            <div>
               {projects.map((project) => {
                  return (
                     <Link
                        href={""}
                        className={styles.project}
                        key={project.id}
                     >
                        <Image src={project.image} alt="" />
                        <h1>{project.name}</h1>
                        <Button size="small" model="primary">
                           <Paragraph>Află mai multe</Paragraph>
                        </Button>
                     </Link>
                  );
               })}
            </div>
         </div> */}

         <Implicate />
      </div>
   );
}
