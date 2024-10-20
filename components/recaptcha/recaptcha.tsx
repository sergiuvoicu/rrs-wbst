// Styles
import styles from "./recaptcha.module.scss";

// Utilities
import { LegacyRef, forwardRef } from "react";

// Components
import ReCAPTCHA from "react-google-recaptcha";

type IReCaptchaPropsType = {
   onChange: (token: any) => void;
   error: string | null | false;
};

const ReCaptcha = forwardRef<ReCAPTCHA, IReCaptchaPropsType>((props, ref) => {
   return (
      <div className={styles.wrapper}>
         <ReCAPTCHA
            ref={ref}
            sitekey="6Lc4kUkqAAAAAGwnWD193kSP2DI0rWsPhNAonG-r"
            onChange={props.onChange}
         />
         {props.error && <p>{props.error}</p>}
      </div>
   );
});

export default ReCaptcha;

// export default function Recaptcha(props: IReCaptchaPropsType) {
//    return (
//       <div className={styles.wrapper}>
//          <ReCAPTCHA
//             ref={props.ref}
//             sitekey="6Lc4kUkqAAAAAGwnWD193kSP2DI0rWsPhNAonG-r"
//             onChange={props.onChange}
//          />
//          {props.error && <p>{props.error}</p>}
//       </div>
//    );
// }
