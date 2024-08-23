// Styles
import styles from "./button.module.scss";

interface ButtonProps {
   children: React.ReactNode;
   className?: string;
   size: "small" | "medium" | "large";
   type: "primary" | "secondary";
}

const buttonHeightsList = {
   small: 45,
   medium: 55,
   large: 75,
};

export default function Button(props: ButtonProps) {
   const buttonHeight = buttonHeightsList[props.size];

   return (
      <button
         style={{ height: buttonHeight }}
         className={`${styles.button} ${props} ${props.type == "primary" ? styles.primary : styles.secondary}`}
      >
         {props.children}
      </button>
   );
}
