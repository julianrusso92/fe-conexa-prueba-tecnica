import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Conexa swapi",
  description: "This is a challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
