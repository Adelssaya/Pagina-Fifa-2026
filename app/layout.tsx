
// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "./ui/header";
import Footer from "./ui/footer";

export const metadata = { title: "FIFA 2026 Store", description: "Tienda oficial inspirada en FIFA 2026" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
