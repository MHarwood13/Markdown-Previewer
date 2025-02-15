import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

<Script
        src="https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.1/marked.min.js"
        integrity="sha512-pSeTnZAQF/RHxb0ysMoYQI/BRZsa5XuklcrgFfU3YZIdnD3LvkkqzrIeHxzFi6gKtI8Cpq2DEWdZjMTcNVhUYA=="
        crossOrigin="anonymous"
      />
      <body className={inter.className}>{children}</body>
<Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
      />
    </html>
  );
}
