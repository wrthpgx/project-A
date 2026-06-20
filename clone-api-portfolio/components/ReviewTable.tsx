import type { ReviewRow } from "@/lib/dashboard-data";

export function ReviewTable({ rows }: { rows: ReviewRow[] }) {
  return (
    <section className="overflow-hidden rounded-md border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-5 py-4">
        <h2 className="text-xl font-semibold">Transaction Review</h2>
        <p className="mt-1 text-sm text-slate-600">
          Generic review states with masked values and neutral labels.
        </p>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-500">
          <tr>
            <th className="px-5 py-3 font-medium">Source</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium">Classification</th>
            <th className="px-5 py-3 font-medium">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.source}-${row.status}`}>
              <td className="px-5 py-4 text-slate-900">{row.source}</td>
              <td className="px-5 py-4 text-slate-600">{row.status}</td>
              <td className="px-5 py-4 text-slate-600">{row.classification}</td>
              <td className="px-5 py-4 text-slate-600">{row.visibility}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
