"use client";
// Styles
import Implicate from "@/components/homepage/implica-te/implicate";
import styles from "./styles.module.scss";

// Components
import PageTitle from "@/components/pageTitle/pageTitle";
import FormSection from "@/components/formSection/formSection";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import ReCAPTCHA from "react-google-recaptcha";
import Paragraph from "@/components/paragraph/paragraph";

// Utilities
import { useState, useRef } from "react";
import Recaptcha from "@/components/recaptcha/recaptcha";

export default function Contact() {
   const recaptchaRef = useRef<ReCAPTCHA | null>(null);

   const [formErrors, setFormErrors] = useState<{
      name: string | null;
      email: string | null;
      message: string | null;
      token: string | null;
   }>({
      name: null,
      email: null,
      message: null,
      token: null,
   });

   const [formData, setFormData] = useState<{
      name: string;
      email: string;
      message: string;
      token: string;
   }>({
      name: "",
      email: "",
      message: "",
      token: "",
   });

   interface IConfirmationTypes {
      type: "succes" | "error";
   }

   type IConfirmation = IConfirmationTypes & {
      shown: boolean;
   };

   const [confirmation, setConfirmation] = useState<IConfirmation>({
      shown: false,
      type: "succes",
   });

   function showConfirmationModal({ type }: IConfirmationTypes) {
      setConfirmation({ ...confirmation, shown: true, type: type });
      setTimeout(() => {
         setConfirmation({ ...confirmation, shown: false });
      }, 4400);
   }

   async function onVerify(event?: React.MouseEvent<HTMLButtonElement>) {
      event?.preventDefault();

      formData.name == "" &&
         setFormErrors((prevErrors) => ({ ...prevErrors, name: "true" }));

      const emailRegex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      formData.email == ""
         ? setFormErrors((prevErrors) => ({ ...prevErrors, email: "true" }))
         : !emailRegex.test(formData.email) &&
           setFormErrors((prevErrors) => ({
              ...prevErrors,
              email: "not valid",
           }));

      formData.message == "" &&
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            message: "true",
         }));

      // new Promise((resolve, object) => {
      //    if (
      //       formErrors.name == null &&
      //       formErrors.email == null &&
      //       formErrors.message == null
      //    ) {
      //       resolve(null);
      //    }
      // })
      //    .then(() => {
      //       console.log("test");
      //    })
      //    .then(() => {
      //       alert("test");
      //    });

      if (
         formErrors.name == null &&
         formErrors.email == null &&
         formErrors.message == null &&
         formData.token
      ) {
         try {
            const response = await fetch("/api/example", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  name: formData.name,
                  email: formData.email,
                  message: formData.message,
                  token: formData.token,
               }),
            });

            if (response.ok) {
               alert("SUCCESS");
               setFormData({
                  name: "",
                  email: "",
                  message: "",
                  token: "",
               });
               recaptchaRef.current?.reset();
            } else {
               alert("Failed to send the message. Please try again.");
            }
         } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
         }
      }
   }

   return (
      <div>
         <PageTitle
            title="Contactează-ne!"
            description="Asociația pentru Reducerea Riscului Seismic (Re:Rise) este răspunsul oamenilor la nevoia urgentă de scădere a vulnerabilității seismice din România. Re:Rise funcționează ca o punte de legătură între persoanele expuse riscului seismic și, pe de altă parte, resursele tehnologice, financiare, administrative și umane aflate la dispoziție."
         />

         <div className={styles.wrapper}>
            <div></div>
            <form>
               <FormSection>
                  <Input
                     type="text"
                     label="Numele tău"
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, name: event.target.value });
                        formErrors.name &&
                           setFormErrors((prevErrors) => ({
                              ...prevErrors,
                              name: null,
                           }));
                     }}
                     error={formErrors.name}
                  />
                  <Input
                     type="text"
                     label="Adresa ta de e-mail"
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, email: event.target.value });
                        formErrors.email &&
                           setFormErrors((prevErrors) => ({
                              ...prevErrors,
                              email: null,
                           }));
                     }}
                     error={formErrors.email}
                  />
                  <Input
                     type="textarea"
                     label="Ce dorești să ne transmiți?"
                     onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>
                     ) => {
                        setFormData({
                           ...formData,
                           message: event.target.value,
                        });
                        formErrors.message &&
                           setFormErrors((prevErrors) => ({
                              ...prevErrors,
                              message: null,
                           }));
                     }}
                     error={formErrors.message}
                  />
                  <Recaptcha
                     ref={recaptchaRef}
                     error={formErrors.token}
                     onChange={(token) => {
                        setFormData({ ...formData, token: token });
                     }}
                  />

                  <Button
                     size="medium"
                     model="primary"
                     onClick={(event) => {
                        onVerify(event);
                     }}
                  >
                     <Paragraph>Trimite</Paragraph>
                     <div className={styles.loading}>
                        <span />
                        <span />
                        <span />
                     </div>
                  </Button>
               </FormSection>
            </form>
         </div>
         <div
            className={styles.confirmation}
            data-is-shown={confirmation.shown}
            data-type={confirmation.type}
         >
            <h1>Mesajul tău a fost trimis cu succes!</h1>
         </div>

         <Implicate />
      </div>
   );
}
