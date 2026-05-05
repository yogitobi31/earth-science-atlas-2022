import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earth Science Atlas 2022",
  description: "Premium Earth Science learning interface"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
