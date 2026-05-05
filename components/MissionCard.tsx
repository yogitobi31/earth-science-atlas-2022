import Link from "next/link";

type MissionCardProps = {
  title: string;
  subtitle: string;
  href: string;
  tone: string;
  imagePath: string;
};

export default function MissionCard({ title, subtitle, href, tone, imagePath }: MissionCardProps) {
  return (
    <Link
      href={href}
      className={`glass-panel block p-5 sm:p-6 mission-card ${tone} relative overflow-hidden`}
      style={{
        backgroundImage:
          `linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.82), rgba(30, 64, 175, 0.55)), url('${imagePath}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="relative">
      <p className="text-xs tracking-[0.2em] uppercase text-slate-300">추천 미션</p>
      <h3 className="mt-3 text-xl sm:text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{subtitle}</p>
      <span className="inline-flex mt-5 px-3 py-1.5 rounded-full border border-white/30 text-xs">탐험 시작</span>
      </div>
    </Link>
  );
}
