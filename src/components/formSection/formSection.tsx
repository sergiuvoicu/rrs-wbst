// Styles
import styles from "./formSection.module.scss";

interface IFormSection {
   children: React.ReactNode;
   sectionName?: string;
}

export default function FormSection(props: IFormSection) {
   return (
      <>
         <p className={styles.title}>{props.sectionName}</p>
         <div className={styles.wrapper}>{props.children}</div>
      </>
   );
}
