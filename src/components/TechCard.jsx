const CATEGORY_STYLES = {
  Frontend: 'bg-violet-50 text-violet-700',
  Backend: 'bg-blue-50 text-blue-700',
  Database: 'bg-emerald-50 text-emerald-700',
  Language: 'bg-amber-50 text-amber-700',
  Styling: 'bg-pink-50 text-pink-700',
  DevOps: 'bg-cyan-50 text-cyan-700',
  Tools: 'bg-slate-100 text-slate-700',
}

export default function TechCard({ tech, isAdded, onAdd }) {
  const badgeClass = CATEGORY_STYLES[tech.category] ?? 'bg-gray-100 text-gray-700'

  return (
    <article className="flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm shadow-gray-100 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          width="36"
          height="36"
          loading="lazy"
          className="h-9 w-9 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeClass}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-ink-950">{tech.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500">
        <span className="rounded-full bg-gray-100 px-2.5 py-1">{tech.category}</span>
        <span className="rounded-full bg-gray-100 px-2.5 py-1">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-ink-950">
          <span className="text-amber-400">★</span>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        aria-pressed={isAdded}
        className={`focus-ring mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? 'cursor-not-allowed bg-gray-100 text-gray-400'
            : 'bg-ink-950 text-white hover:bg-ink-900'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
