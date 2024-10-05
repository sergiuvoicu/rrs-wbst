// Styles
import styles from "./memorialulLuiUrsu.module.scss";

// Components
import Title from "@/components/title/title";
import Paragraph from "@/components/paragraph/paragraph";
import Button from "@/components/button/button";
import Link from "next/link";
import Image from "next/image";

// Assets
import autoportrete from "../../../assets/memorialulLuiUrsu.png";

export default function MemorialulLuiUrsu() {
   return (
      <div className={styles.container}>
         <Image src={autoportrete} alt="" />
         <Title size="small">Memorialul lui Ursu</Title>
         <Paragraph>
            De profesie inginer, dar în fapt un adevărat polimat,
            <b>
               Gheorghe Ursu este primul om care a tras un semnal de alarmă
               public cu privire la vulnerabilitatea seismică a Bucureștiului.
            </b>
            <br /> Printr-o scrisoare trimisă către Radio Europa Liberă, a
            denunțat faptul că, după cutremurul din 1977, reparațiile au fost
            sistate prematur, la ordinul direct al lui Ceaușescu,
            <b>
               lăsând populația Bucureștiului expusă în fața unui viitor
               cutremur
            </b>
            . Pentru gestul său de a spune adevărul și pentru că nu a acceptat
            să se dezică de spusele sale, a sfârșit torturat și, în cele din
            urmă, <b> ucis de securitate pe 17 noiembrie 1985. </b>
         </Paragraph>
         <Link href={""}>
            <Button size="medium" model="primary">
               <Paragraph>Află mai multe</Paragraph>
            </Button>
         </Link>
      </div>
   );
}
