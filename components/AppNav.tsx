"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["홈", "/"],
  ["개념 탐색", "/concepts"],
  ["판 구조론", "/plate-tectonics"],
  ["퀴즈", "/quiz"]
] as const;

export default function AppNav() {
  const pathname = usePathname();
  return <nav className="flex flex-wrap gap-2">{nav.map(([n, h]) => {
    const active = pathname === h;
    return <Link key={h} href={h} className={`text-xs sm:text-sm px-3 py-1.5 rounded-lg border ${active ? "border-earth bg-earth/20" : "border-white/15 hover:border-earth/60"}`}>{n}</Link>;
  })}</nav>;
}
