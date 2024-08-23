// Styles
import styles from "./paragraph.module.scss";

interface ParagraphProps {
   className?: string;
   children: React.ReactNode;
}

export default function Paragraph(props: ParagraphProps) {
   return (
      <p className={`${styles.paragraph} ${props.className}`}>
         {props.children}
      </p>
   );
}
