import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app| Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <NextTopLoader color="#6366f1" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
