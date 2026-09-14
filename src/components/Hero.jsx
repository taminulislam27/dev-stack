function HeroArt() {
  return (
    <svg
      viewBox="0 0 420 380"
      className="w-full max-w-md drop-shadow-[0_25px_50px_rgba(139,92,246,0.25)]"
      role="img"
      aria-label="Layered illustration of stacked technology modules"
    >
      <defs>
        <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="55%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
      </defs>

      {/* top layer */}
      <g opacity="0.95">
        <polygon points="210,40 340,100 210,160 80,100" fill="url(#cubeTop)" />
        <polygon points="80,100 210,160 210,220 80,160" fill="url(#cubeLeft)" />
        <polygon points="340,100 210,160 210,220 340,160" fill="url(#cubeRight)" />
      </g>
      {/* middle layer */}
      <g opacity="0.85">
        <polygon points="210,150 340,210 210,270 80,210" fill="url(#cubeTop)" />
        <polygon points="80,210 210,270 210,330 80,270" fill="url(#cubeLeft)" />
        <polygon points="340,210 210,270 210,330 340,270" fill="url(#cubeRight)" />
      </g>

      {/* floating dots */}
      <circle cx="60" cy="70" r="6" fill="#F472B6" />
      <circle cx="365" cy="150" r="5" fill="#FDBA74" />
      <circle cx="330" cy="60" r="4" fill="#A78BFA" />
      <circle cx="55" cy="260" r="5" fill="#A78BFA" />
    </svg>
  )
}

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
          <HeroArt />
        </div>
      </div>
    </section>
  )
}
