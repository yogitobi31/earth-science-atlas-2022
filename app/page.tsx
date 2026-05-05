import Link from "next/link";
import DashboardCard from "@/components/DashboardCard";
import SectionPanel from "@/components/SectionPanel";
import { dashboardModules } from "@/data/modules";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6">
      <header className="glass-panel p-6 sm:p-8 space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-earth">Earth Mission Dashboard</p>
        <h1 className="text-3xl sm:text-5xl font-bold">Earth Science Atlas 2022</h1>
        <p className="text-slate-300">고등학교 지구과학을 탐험하듯 이해하는 학습 아틀라스</p>
        <div className="h-44 w-44 rounded-full bg-gradient-to-br from-earth via-cyan-300/30 to-night shadow-glow" />
        <Link href="/plate-tectonics" className="inline-flex px-5 py-3 rounded-xl bg-earth/80 hover:bg-earth transition font-semibold">판 구조론 모듈 시작하기</Link>
      </header>

      <SectionPanel title="탐험 모듈">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {dashboardModules.map((module) => <DashboardCard key={module} label={module} />)}
        </div>
      </SectionPanel>
    </main>
  );
}
