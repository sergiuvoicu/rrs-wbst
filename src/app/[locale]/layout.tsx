// Styles
import "../globals.scss";

// Utilities
import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

// Components
import BaseLayout from "@/src/components/base-layout/base-layout";

export const metadata: Metadata = {
   title: "Re:rise",
   description: "Generated by create next app",
};

export function generateStaticParams() {
   return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
   children,
   params: { locale },
}: Readonly<{
   children: React.ReactNode;
   params: { locale: string };
}>) {
   // Ensure that the incoming `locale` is valid
   if (!routing.locales.includes(locale as any)) {
      notFound();
   }
   setRequestLocale(locale);
   return <BaseLayout locale={locale}>{children}</BaseLayout>;
}