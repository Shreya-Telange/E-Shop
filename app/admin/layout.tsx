import "./globals.css";
import type { Metadata } from "next";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer";
import { CartProvider } from "@/providers/CartProvider";

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Your online shopping store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            {/* ✅ Removed currentUser prop */}
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
