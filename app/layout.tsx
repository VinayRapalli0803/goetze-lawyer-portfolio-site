import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import ThemeProvider from "./components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Goetze Law | Attorney Portfolio",
  description: "Attorney portfolio for modern legal services, mediation, and consultations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
