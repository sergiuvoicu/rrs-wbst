"use client";
// Styles
import styles from "./styles.module.scss";

// Components
import PageTitle from "@/components/pageTitle/pageTitle";
import FormSection from "@/components/formSection/formSection";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import ReCAPTCHA from "react-google-recaptcha";
import Paragraph from "@/components/paragraph/paragraph";
import Implicate from "@/components/homepage/implica-te/implicate";

// Utilities
import { useState, useRef } from "react";
import Recaptcha from "@/components/recaptcha/recaptcha";

export default function Contact() {
   const [isLoading, setIsLoading] = useState<boolean>(false);
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
   }>({
      name: "",
      email: "",
      message: "",
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

      let canSendForm = true;
      const emailRegex =
         /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (formData.name == "") {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            name: "Acest câmp este obligatoriu",
         }));
         canSendForm = false;
      }

      if (formData.email == "") {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            email: "Acest câmp este obligatoriu",
         }));
         canSendForm = false;
      } else if (!emailRegex.test(formData.email)) {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            email: "Email-ul introdus nu este valid",
         }));
         canSendForm = false;
      }

      if (formData.message == "") {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            message: "Acest câmp este obligatoriu",
         }));
         canSendForm = false;
      }

      if (!recaptchaRef.current?.getValue()) {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            token: "Acest câmp este obligatoriu",
         }));
         canSendForm = false;
      }

      if (canSendForm) {
         try {
            setIsLoading(true);
            const response = await fetch("/api/example", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({
                  name: formData.name,
                  email: formData.email,
                  message: formData.message,
               }),
            });

            if (response.ok) {
               setIsLoading(false);
               showConfirmationModal({ type: "succes" });
               setFormData({
                  name: "",
                  email: "",
                  message: "",
               });
               recaptchaRef.current?.reset();
            } else {
               throw new Error(`error`);
            }
         } catch (error) {
            setIsLoading(false);
            showConfirmationModal({ type: "error" });
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
                     value={formData.name}
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
                     value={formData.email}
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
                     value={formData.message}
                     error={formErrors.message}
                     maxLength={1000}
                  />
                  <p className={styles.maxChars}>
                     {formData.message.length} / 1000 max. caractere
                  </p>
                  <Recaptcha
                     ref={recaptchaRef}
                     error={formErrors.token}
                     onChange={() => {
                        setFormErrors({ ...formErrors, token: null });
                     }}
                  />

                  <Button
                     size="medium"
                     model="primary"
                     onClick={(event) => {
                        onVerify(event);
                     }}
                  >
                     {isLoading ? (
                        <Paragraph>...</Paragraph>
                     ) : (
                        <Paragraph>Trimite</Paragraph>
                     )}
                  </Button>
               </FormSection>
            </form>
         </div>
         <div
            className={styles.confirmation}
            data-is-shown={confirmation.shown}
            data-type={confirmation.type}
         >
            <h1>
               {confirmation.type == "succes"
                  ? "Mesajul tău a fost trimis cu succes!"
                  : "eroare"}
            </h1>
         </div>

         <Implicate />
      </div>
   );
}
