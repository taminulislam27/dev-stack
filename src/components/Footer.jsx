import logo from '../assets/logo.png'

const LINK_GROUPS = [
  { title: 'Product', links: ['Home', 'Technologies', 'Projects'] },
  { title: 'Company', links: ['About', 'Contact', 'Careers'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

const SOCIALS = ['GitHub', 'Twitter', 'LinkedIn']

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-gray-500">
              {SOCIALS.map((social) => (
                <a key={social} href="#" className="focus-ring rounded hover:text-ink-950">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-ink-950">{group.title}</h4>
              <ul className="mt-3 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="focus-ring rounded text-sm text-gray-500 hover:text-ink-950">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="focus-ring rounded hover:text-ink-950">
              Privacy
            </a>
            <a href="#" className="focus-ring rounded hover:text-ink-950">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
