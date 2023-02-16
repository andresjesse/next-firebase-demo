"use client";

import firebaseConfig from "@/config/firebaseConfig";
import { Center, useMantineTheme } from "@mantine/core";
import { FirebaseAppProvider } from "reactfire";
import "./globals.css";
import RootStyleRegistry from "./RootStyleRegistry";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const theme = useMantineTheme();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <RootStyleRegistry>
            <Center mih="100vh" bg={theme.colors.gray[2]}>
              {children}
            </Center>
          </RootStyleRegistry>
        </FirebaseAppProvider>
      </body>
    </html>
  );
}
