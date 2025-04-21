import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cardapioo",
  description: "Cardapioo - Cardápio Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <div className="bg-neutral-100 min-h-screen h-full">
        {children}
        <Footer />
      </div>
    </>
  );
}
