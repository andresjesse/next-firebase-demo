"use client";

import firebaseConfig from "@/config/firebaseConfig";
import { FirebaseAppProvider } from "reactfire";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          {children}
        </FirebaseAppProvider>
      </body>
    </html>
  );
}
