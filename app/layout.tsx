import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Growthlink Agency | Hemsidor för företag",

  description:
    "Growthlink Agency skapar moderna, professionella och responsiva hemsidor för företag.",

  icons: {
    icon: "/growthlink-logo.png",

    shortcut: "/growthlink-logo.png",

    apple: "/growthlink-logo.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='sv'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
