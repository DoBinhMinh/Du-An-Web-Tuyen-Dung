import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header"
import { Footer } from "./components/footer/Footer";


export const metadata: Metadata = {
  title: "Dự án 3",
  description: "website tuyển dụng it tại Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
