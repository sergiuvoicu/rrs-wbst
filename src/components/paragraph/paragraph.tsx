// Styles
import styles from "./paragraph.module.scss";

interface ParagraphProps {
   className?: string;
   children: React.ReactNode;
   style?: React.CSSProperties;
}

export default function Paragraph(props: ParagraphProps) {
   return (
      <p
         className={`${styles.paragraph} ${props.className}`}
         style={props.style}
      >
         {props.children}
      </p>
   );
}
