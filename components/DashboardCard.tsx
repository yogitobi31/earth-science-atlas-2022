export default function DashboardCard({ label }: { label: string }) {
  return (
    <button className="glass-panel p-4 text-left text-sm font-medium hover:border-earth/60 hover:bg-earth/10 transition-all w-full">
      {label}
    </button>
  );
}
