import type { WorkflowStep } from "@/lib/dashboard-data";

const stateClass: Record<WorkflowStep["state"], string> = {
  done: "text-emerald-700",
  active: "text-teal-700",
  queued: "text-slate-500"
};

export function WorkflowRail({ steps }: { steps: WorkflowStep[] }) {
  return (
    <section className="rounded-md border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold">Close Workflow</h2>
      <div className="mt-4 grid gap-3">
        {steps.map((step) => (
          <article key={step.title} className="rounded-md border border-slate-200 px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold">{step.title}</h3>
              <span className={`rounded-full bg-slate-50 px-3 py-1 text-sm ${stateClass[step.state]}`}>
                {step.state}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
