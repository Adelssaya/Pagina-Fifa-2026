
import "./globals.css";
import { ReactNode } from "react";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata = { title:"FIFA 2026 Store", description:"Tienda oficial inspirada en FIFA 2026" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
