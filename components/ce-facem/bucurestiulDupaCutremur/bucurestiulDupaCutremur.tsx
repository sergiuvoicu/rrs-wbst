// Styles
import styles from "./bucurestiulDupaCutremur.module.scss";

// Components
import Title from "@/components/title/title";
import Paragraph from "@/components/paragraph/paragraph";
import Button from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";

// Assets
import telefon from "../../../assets/bucurestiulDupaCutremur.png";

export default function BucurestiulDupaCutremur() {
   return (
      <div className={styles.container}>
         <Title size="small">
            Bucureștiul <br /> după cutremur
         </Title>
         <Paragraph>
            <Link href={""}>DupaCutremur.ro</Link> este un proiect Re:Rise și
            <Link href={""}> geo-spatial.org</Link> prin care lansăm un îndemn
            la pregătire și învățare, ilustrând atât amprenta clădirilor
            vulnerabile (RS I, U1, U2, U3, RS II), cât și aria aproximativă în
            caz de colaps a acestor clădiri, precum și segmentele de drum în
            risc de blocaj din cauza dărâmăturilor.
         </Paragraph>
         <ul>
            <li>
               Cum va arăta noua hartă a Bucureștiului post-seism? Care vor fi
               străzile blocate de dărâmături?
            </li>
            <li>
               Cum ajungem cel mai rapid la cei prinși sub dărâmături / cei care
               au nevoie de ajutor?
            </li>
            <li>
               Care sunt zonele problemă și cartierele în risc de izolare de
               echipele de intervenție?
            </li>
         </ul>
         <Link href={""}>
            <Button size="medium" type="primary">
               <Paragraph>Află mai multe!</Paragraph>
            </Button>
         </Link>
         <Image src={telefon} alt="" />
      </div>
   );
}
