export function CategoryPanel({ categories }: { categories: string[] }) {
  return (
    <section className="rounded-md border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold">Classification Map</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <span key={category} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}
