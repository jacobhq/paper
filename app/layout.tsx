import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Paper - Flashcards But Better",
  description: "Applying spaced repetition and principles from psychology to make revision addictive and fun.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
      {children}
      </body>
      </html>
    </ClerkProvider>
  );
}
