// Styles
import styles from "./ordinulCriminal.module.scss";

// Components
import Image from "next/image";
import Title from "@/components/title/title";
import Paragraph from "@/components/paragraph/paragraph";
import Button from "@/components/button/button";
import Link from "next/link";

// Assets
import poster from "../../../assets/ordinulCriminal.png";
import { pages } from "@/utilities/pages";

export default function OrdinulCriminal() {
   return (
      <div className={styles.container}>
         <Image src={poster} alt="" />
         <div>
            <Title size="small">Ordinul Criminal</Title>
            <Paragraph>
               La 4 luni după cutremurul din martie 1977, Nicolae Ceaușescu
               convoacă o ședință urgentă în București. Pe 4 iulie, cca. 300 de
               persoane (ingineri, arhitecți, lideri de partid și ai
               administrației locale), sunt strânși într-o sală din spatele CC
               și li se ordonă de către Ceaușescu să sisteze toate lucrările de
               consolidare la clădirile afectate de cutremur.
               <br />
               <br />
               Numai în Capitală, peste 10.000 de clădiri au fost lăsate astfel
               în vulnerabilitate.
               <br />
               <br />
               Re:Rise publică în premieră stenograma acelei ședințe și dovezile
               ordinului criminal.
            </Paragraph>
            <Link target="_blank" href={pages.ordinulCriminal}>
               <Button size="medium" model="secondary">
                  <Paragraph>Află mai multe</Paragraph>
               </Button>
            </Link>
         </div>
      </div>
   );
}
