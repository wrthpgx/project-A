import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Operations Dashboard",
  description: "Portfolio-safe finance dashboard interface"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
