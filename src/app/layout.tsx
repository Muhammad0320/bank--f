import type { Metadata } from "next";
import { Lexend } from 'next/font/google';
import "./globals.css";

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | YourBank',
    default: 'Welcome to YourBank ',
  },
  description: 'The best option for your financial safety',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
