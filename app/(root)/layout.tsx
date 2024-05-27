import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
}
