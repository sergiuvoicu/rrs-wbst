// Styles
import styles from "./input.module.scss";

// Assets
import checkmark from "../../assets/checkmark.svg";

// Components
import Image from "next/image";
type InputProps = JSX.IntrinsicElements["input"] & {
   label: string;
};

export default function Input(props: InputProps) {
   const { ...rest } = props;
   return props.type == "checkbox" ? (
      <label className={styles.checkboxWrapper}>
         <input type="checkbox" name={props.name} id={props.name} />
         <span>{props.label}</span>
         <Image
            src={checkmark}
            alt="checkmark"
            draggable="false"
            loading="lazy"
         />
      </label>
   ) : (
      <div className={styles.inputWrapper}>
         <input name={props.name} id={props.name} placeholder="" {...rest} />
         <label htmlFor={props.name}>{props.label}</label>
      </div>
   );
}
