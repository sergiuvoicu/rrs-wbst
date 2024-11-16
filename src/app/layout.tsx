// Styles
import "./globals.scss";

// Utilities
import React from "react";

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return children;
}
