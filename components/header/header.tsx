"use client";
// Styles
import styles from "./header.module.scss";

// Components
import Link from "next/link";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";
import Image from "next/image";

// Utilities
import { useEffect, useState } from "react";
import { pages } from "@/utilities/pages";

// Assets
import logo from "../../assets/logo_white.svg";

export default function Header() {
   const [scrollPosition, setScrollPosition] = useState<number>(0);
   const [screenWidth, setScreenWidth] = useState<number>(0);
   const [isMobileNavigation, setIsMobileNavigation] = useState<boolean>(false);

   const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
   };

   const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
   };

   useEffect(() => {
      updateScrollPosition();
      updateScreenWidth();

      window.addEventListener("scroll", updateScrollPosition);
      window.addEventListener("resize", updateScreenWidth);

      return () => {
         window.removeEventListener("scroll", updateScrollPosition);
         window.removeEventListener("resize", updateScreenWidth);
      };
   }, []);

   return (
      <header
         className={styles.container}
         style={
            scrollPosition > 40
               ? { backgroundColor: "var(--tertiary-orange)" }
               : { backgroundColor: "transparent" }
         }
      >
         <div
            className={styles.overlay}
            style={{
               display:
                  screenWidth < 660 && isMobileNavigation ? "block" : "none",
            }}
         />
         <div className={styles.wrapper}>
            <Link href={pages.acasa}>
               <Image
                  src={logo}
                  alt=""
                  height={scrollPosition > 40 ? 50 : 80}
               />
            </Link>
            <button
               onClick={() => {
                  setIsMobileNavigation((prevState) => !prevState);
               }}
               data-is-mobile-navigation={isMobileNavigation ? "true" : "false"}
            >
               <div className={styles.line} />
               <div className={styles.line} />
               <div className={styles.line} />
            </button>
            <nav
               style={{
                  right: isMobileNavigation ? "0px" : "-100%",
               }}
            >
               <Link
                  href={pages.cineSuntem}
                  onClick={() => {
                     setIsMobileNavigation((prevState) => !prevState);
                  }}
               >
                  <Paragraph>Cine suntem?</Paragraph>
               </Link>
               <Link
                  href={pages.ceFacem}
                  onClick={() => {
                     setIsMobileNavigation((prevState) => !prevState);
                  }}
               >
                  <Paragraph>Ce facem?</Paragraph>
               </Link>
               <Link
                  href={pages.contact}
                  onClick={() => {
                     setIsMobileNavigation((prevState) => !prevState);
                  }}
               >
                  <Paragraph>Contactează-ne</Paragraph>
               </Link>
               <Button
                  size="small"
                  type={`${screenWidth < 660 ? "primary" : scrollPosition > 40 ? "secondary" : "primary"}`}
               >
                  <Link
                     href={pages.implicaTe}
                     onClick={() => {
                        setIsMobileNavigation((prevState) => !prevState);
                     }}
                  >
                     <Paragraph
                        style={
                           screenWidth < 660
                              ? { color: "white" }
                              : scrollPosition > 40
                                ? { color: "var(--black)" }
                                : { color: "white" }
                        }
                     >
                        Implică-te
                     </Paragraph>
                  </Link>
               </Button>
            </nav>
         </div>
      </header>
   );
}
