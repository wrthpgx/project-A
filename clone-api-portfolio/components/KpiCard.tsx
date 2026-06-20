import type { Kpi } from "@/lib/dashboard-data";

const toneClass: Record<Kpi["tone"], string> = {
  steady: "text-slate-700",
  positive: "text-emerald-700",
  warning: "text-amber-700",
  attention: "text-rose-700"
};

export function KpiCard({ label, value, detail, tone }: Kpi) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className={`mt-3 text-2xl font-semibold ${toneClass[tone]}`}>{value}</p>
      <p className="mt-1 text-sm text-slate-600">{detail}</p>
    </article>
  );
}
