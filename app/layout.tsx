import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";
import {TooltipProvider} from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

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
      <TooltipProvider>
        <html lang="en" suppressHydrationWarning>
          <body className={`${inter.variable} antialiased`}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </html>
      </TooltipProvider>
    </ClerkProvider>
  );
}
