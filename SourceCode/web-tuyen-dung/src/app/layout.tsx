import type { Metadata } from "next";

import "./globals.css";
import { Header } from "./components/header/Header";


export const metadata: Metadata = {
  title: "web-tuyen-dung",
  description: "Website tuyển dụng",
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
      </body>
    </html>
  );
}
