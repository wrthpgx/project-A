import { CategoryPanel } from "@/components/CategoryPanel";
import { KpiCard } from "@/components/KpiCard";
import { ReviewTable } from "@/components/ReviewTable";
import { WorkflowRail } from "@/components/WorkflowRail";
import { categories, kpis, reviewRows, workflowSteps } from "@/lib/dashboard-data";

export default function Home() {
  const appLabel = process.env.NEXT_PUBLIC_APP_LABEL ?? "Finance Operations Dashboard";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Portfolio Edition</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal md:text-5xl">{appLabel}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              A sanitized dashboard showing financial operations patterns without private data,
              private workflows, live integrations, or hardcoded organization details.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <span className="font-medium text-slate-900">Visibility:</span> masked by default
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-6 md:grid-cols-4">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ReviewTable rows={reviewRows} />
        <div className="grid gap-6">
          <WorkflowRail steps={workflowSteps} />
          <CategoryPanel categories={categories} />
        </div>
      </section>
    </main>
  );
}
