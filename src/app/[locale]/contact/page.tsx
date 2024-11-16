"use client";
// Styles
import styles from "./page.module.scss";

// Components
import ReCAPTCHA from "react-google-recaptcha";
import PageTitle from "@/src/components/pageTitle/pageTitle";
import FormSection from "@/src/components/formSection/formSection";
import Input from "@/src/components/input/input";
import Button from "@/src/components/button/button";
import Implicate from "@/src/components/homepage/implica-te/implicate";
import Paragraph from "@/src/components/paragraph/paragraph";
import Recaptcha from "@/src/components/recaptcha/recaptcha";

// Utilities
import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const recaptchaRef = useRef<ReCAPTCHA | null>(null);
   const t = useTranslations("contactPage");


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
            name: t('contactForm.validationMessages.mandatoryField'),
         }));
         canSendForm = false;
      }

      if (formData.email == "") {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            email: t('contactForm.validationMessages.mandatoryField'),
         }));
         canSendForm = false;
      } else if (!emailRegex.test(formData.email)) {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            email: t('contactForm.validationMessages.invalidEmail'),
         }));
         canSendForm = false;
      }

      if (formData.message == "") {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            message: t('contactForm.validationMessages.mandatoryField'),
         }));
         canSendForm = false;
      }

      if (!recaptchaRef.current?.getValue()) {
         setFormErrors((prevErrors) => ({
            ...prevErrors,
            token: t('contactForm.validationMessages.mandatoryField'),
         }));
         canSendForm = false;
      }

      if (canSendForm) {
         try {
            setIsLoading(true);
            const response = await fetch("/api/send-email", {
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
            title={t('title')}
            description={t('description')}
         />

         <div className={styles.wrapper}>
            <form>
               <FormSection>
                  <Input
                     type="text"
                     label={t('contactForm.inputLabels.name')}
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
                     label={t('contactForm.inputLabels.email')}
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
                     label={t('contactForm.inputLabels.message')}
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
                     {formData.message.length} / {t('contactForm.constraints.messageMaximumLength')}
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
                        <Paragraph>{t('contactForm.submitButtonLabel')}</Paragraph>
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
                  ? t('contactForm.submission.success')
                  : t('contactForm.submission.fail')}
            </h1>
         </div>

         <Implicate />
      </div>
   );
}
