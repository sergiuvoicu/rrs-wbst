"use client";

// Styles
import styles from "./button.module.scss";

type ButtonTypes = JSX.IntrinsicElements["button"] & {
   size: "small" | "medium" | "large";
   model: "primary" | "secondary";
};

const buttonHeightsList = {
   small: 45,
   medium: 55,
   large: 75,
};

export default function Button(props: ButtonTypes) {
   const buttonHeight = buttonHeightsList[props.size];

   return (
      <button
         style={{ height: buttonHeight }}
         className={`${styles.button} ${props.className} ${props.model == "primary" ? styles.primary : styles.secondary}`}
         onClick={props.onClick}
      >
         {props.children}
      </button>
   );
}
