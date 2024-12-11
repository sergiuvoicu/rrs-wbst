// Styles
import styles from "./recaptcha.module.scss";

// Utilities
import { forwardRef } from "react";

// Components
import ReCAPTCHA from "react-google-recaptcha";

type IReCaptchaPropsType = {
   onChange: (token: any) => void;
   error: string | null | false;
};

const siteKey = process.env.GOOGLE_RECAPTCHA_TOKEN

const ReCaptcha = forwardRef<ReCAPTCHA, IReCaptchaPropsType>((props, ref) => {
   return (
      <div className={styles.wrapper}>
         <ReCAPTCHA
            ref={ref}
            sitekey={siteKey ?? ""}
            onChange={props.onChange}
         />
         {props.error && <p>{props.error}</p>}
      </div>
   );
});

ReCaptcha.displayName = 'ReCaptcha'
export default ReCaptcha;
