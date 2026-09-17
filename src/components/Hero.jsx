import heroBanner from '../assets/hero-banner.png'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-950 sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="text-brand-gradient">Development</span> Stack
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare them side
            by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="focus-ring rounded-full bg-brand-gradient-btn px-6 py-3 text-sm font-semibold shadow-lg shadow-pink-200 transition-transform hover:scale-[1.03]"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="focus-ring rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:border-ink-950"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroBanner}
            alt="Layered illustration of stacked technology modules"
            width="626"
            height="626"
            className="w-full max-w-md drop-shadow-[0_25px_50px_rgba(139,92,246,0.25)]"
          />
        </div>
      </div>
    </section>
  )
}
