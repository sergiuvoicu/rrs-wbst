// Styles
import styles from "./pageTitle.module.scss";

// Components
import Title from "../title/title";
import Paragraph from "../paragraph/paragraph";

interface PageTitleProps {
   title: string;
   description: string;
   children?: React.ReactNode;
}

export default function PageTitle(props: PageTitleProps) {
   return (
      <div className={styles.pageTitle}>
         <Title size="large">{props.title}</Title>
         <Paragraph>{props.description}</Paragraph>
         {props.children}
      </div>
   );
}
