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

export default function Contact() {
   const recaptchaRef = useRef<ReCAPTCHA | null>(null);

   interface IFormData {
      name: string | null;
      email: string | null;
      message: string | null;
      token: string | null;
   }

   const [formData, setFormData] = useState<IFormData>({
      name: "",
      email: "",
      message: "",
      token: "",
   });

   function onVerify(event?: React.MouseEvent<HTMLButtonElement>) {
      event?.preventDefault();

      setFormData({
         ...formData,
         name: formData.name == "" ? null : formData.name,
         email: formData.email == "" ? null : formData.email,
         message: formData.message == "" ? null : formData.message,
      });

      recaptchaRef.current?.reset();
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
                     }}
                     error={formData.name == null && "eroarea de mesaj"}
                  />
                  <Input
                     type="text"
                     label="Adresa ta de e-mail"
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setFormData({ ...formData, email: event.target.value });
                     }}
                     error={formData.email == null && "eroarea de mesaj"}
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
                     }}
                     error={formData.message == null && "eroarea de mesaj"}
                  />
                  <ReCAPTCHA
                     ref={recaptchaRef}
                     sitekey="6Lc4kUkqAAAAAGwnWD193kSP2DI0rWsPhNAonG-r"
                     onChange={(token) => {
                        if (token) {
                           setFormData({ ...formData, token: token });
                        }
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
                  </Button>
               </FormSection>
            </form>
         </div>

         <Implicate />
      </div>
   );
}
