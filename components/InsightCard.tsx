type InsightCardProps = { title: string; body: string };

export default function InsightCard({ title, body }: InsightCardProps) {
  return (
    <article className="glass-panel p-4">
      <h4 className="text-sm font-medium text-white">{title}</h4>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </article>
  );
}
