// Styles
import styles from "./input.module.scss";

// Assets
import checkmark from "@/assets/checkmark.svg";

// Components
import Image from "next/image";
type InputTypes = JSX.IntrinsicElements["input"] & {
   label: string;
   error?: string | null | false;
};

type TextareaTypes = JSX.IntrinsicElements["textarea"] & {
   label: string;
   type: "textarea";
   error?: string | null | false;
};

export default function Input(props: InputTypes | TextareaTypes) {
   if (props.type === "checkbox") {
      return (
         <div>
            <label
               className={`${styles.checkboxWrapper} ${props.error && styles.checkboxError}`}
            >
               <input type="checkbox" name={props.name} id={props.name} />
               <span>{props.label}</span>
               <Image
                  src={checkmark}
                  alt="checkmark"
                  draggable="false"
                  loading="lazy"
               />
            </label>
            {props.error && <p>{props.error}</p>}
         </div>
      );
   }

   if (props.type === "textarea") {
      const { ...rest } = props as TextareaTypes;
      return (
         <div
            className={`${styles.inputWrapper} ${props.error && styles.inputError}`}
         >
            <textarea
               name={props.name}
               id={props.name}
               placeholder=""
               {...rest}
            />
            <label htmlFor={props.name}>{props.label}</label>
            {props.error && <p>{props.error}</p>}
         </div>
      );
   }

   const { ...rest } = props as InputTypes;
   return (
      <div
         className={`${styles.inputWrapper} ${props.error && styles.inputError}`}
      >
         <input name={props.name} id={props.name} placeholder="" {...rest} />
         <label htmlFor={props.name}>{props.label}</label>
         {props.error && <p>{props.error}</p>}
      </div>
   );
}
