// Styles
import styles from "./title.module.scss";

interface TitleProps {
   className?: string;
   children: React.ReactNode;
   size: "large" | "small";
}

export default function Title(props: TitleProps) {
   return (
      <h1
         className={`${styles.title} ${props.size == "large" ? styles.large : styles.small} ${props.className}`}
      >
         {props.children}
      </h1>
   );
}
