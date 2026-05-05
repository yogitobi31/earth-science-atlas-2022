export default function SectionPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="glass-panel p-5 sm:p-7 space-y-4">
      <h2 className="text-xl font-semibold text-earth">{title}</h2>
      {children}
    </section>
  );
}
