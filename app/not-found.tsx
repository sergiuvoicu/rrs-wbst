// Styles
import styles from "./not-found.module.scss";

// Components
import PageTitle from "@/components/pageTitle/pageTitle";
import Button from "@/components/button/button";
import Paragraph from "@/components/paragraph/paragraph";
import Link from "next/link";

// Utilities
import { pages } from "@/utilities/pages";

export default function NotFound() {
   return (
      <div className={styles.container}>
         <PageTitle title="Ups..." />
         <h1>404</h1>
         <Paragraph>
            Se pare că ai ajuns într-un loc secret... dar e atât de secret,
            încât nici noi nu știm unde e! Nu te îngrijora, nu e vina ta. Poate
            că pagina pe care o cauți s-a ascuns bine, poate că s-a rătăcit prin
            hățișurile internetului, cine știe?
         </Paragraph>
         <Link href={pages.acasa}>
            <Button type="primary" size="medium">
               <Paragraph>Întoarce-te în siguranță!</Paragraph>
            </Button>
         </Link>
      </div>
   );
}
