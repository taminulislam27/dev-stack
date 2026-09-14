import Loader from './Loader.jsx'
import TechCard from './TechCard.jsx'
import YourStack from './YourStack.jsx'

export default function TechnologyGrid({ technologies, loading, stack, onAdd, onRemove, onRemoveAll }) {
  const stackIds = new Set(stack.map((t) => t.id))

  return (
    <section id="technologies" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>

        {loading ? (
          <Loader />
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stackIds.has(tech.id)}
                  onAdd={onAdd}
                />
              ))}
            </div>

            <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
          </div>
        )}
      </div>
    </section>
  )
}
