import type { Metadata } from "next";
import AppNav from "@/components/AppNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earth Science Atlas | 지구과학 아틀라스",
  description: "궁극의 고등학교 지구과학 학습 대시보드"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko"><body>
      <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-2 items-center justify-between">
          <div><p className="text-xs text-slate-300">Earth Science Atlas · 지구과학 아틀라스</p></div>
          <AppNav />
        </div>
      </header>
      {children}
    </body></html>
  );
}
