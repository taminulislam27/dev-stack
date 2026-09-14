export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <aside
      aria-label="Your technology stack"
      className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm shadow-gray-100 lg:sticky lg:top-24"
    >
      <h3 className="text-base font-bold text-ink-950">Your Stack</h3>
      <p className="mt-1 text-xs text-gray-500">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-gray-200 py-8 text-center">
          <p className="text-sm text-gray-400">Your stack is empty</p>
        </div>
      ) : (
        <>
          <ul className="mt-4 flex flex-col gap-2">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2"
              >
                <img
                  src={tech.icon}
                  alt=""
                  width="28"
                  height="28"
                  className="h-7 w-7 flex-shrink-0 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink-950">{tech.name}</p>
                  <p className="truncate text-xs text-gray-500">{tech.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(tech.id)}
                  aria-label={`Remove ${tech.name} from your stack`}
                  className="focus-ring flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onRemoveAll}
            className="focus-ring mt-4 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}
