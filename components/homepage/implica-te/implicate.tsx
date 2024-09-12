// Styles
import styles from "./implicate.module.scss";

// Components
import ImplicateSection from "@/components/implica-te-section/implicateSection";
import Title from "@/components/title/title";
import Paragraph from "@/components/paragraph/paragraph";

export default function Implicate() {
   return (
      <div className={styles.wrapper}>
         <Title size="small">Cum poti ajuta?</Title>
         <Paragraph>
            Ne-am obișnuit să vorbim despre cutremur cu un fatalism parcă nativ.
            Închidem subiectul cât mai repede, fie cu un „Doamne ferește”, fie
            cu un aforism despre destin sau cu o glumă detașată. Poate că e și
            normal, având în vedere că se împlinesc 14 ani de la ultimul
            cutremur notabil care a avut loc la noi, cel din octombrie 2004, și
            singurul prin care a trecut generația tânără. Iar la o magnitudine
            de 6,0 grade acela a fost doar un simplu test al reacțiilor,
            înregistrându-se zero pagube.
         </Paragraph>
         <ImplicateSection />
      </div>
   );
}
