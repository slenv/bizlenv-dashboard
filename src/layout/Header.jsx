export default function Header() {
  return (
    <header className="bg-zinc-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex-1 md:flex md:items-center gap-5 text-lg">
            <a className="flex items-center gap-3 text-bizlenv-logo" href="#">
              <span className="sr-only">Bizlenv</span>
              <img src="/header_logo.png" alt="Bizlenv" className="h-5" />
              <span className="font-bold">Bizlenv</span>
            </a>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300 text-uppercase">Inicio</span>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-300 transition hover:text-gray-400/75" href="#"> About </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:text-gray-400/75" href="#"> Careers </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:text-gray-400/75" href="#"> History </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:text-gray-400/75" href="#"> Services </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:text-gray-400/75" href="#"> Projects </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:text-gray-400/75" href="#"> Blog </a>
                </li>
              </ul>
            </nav>

            <div className="hidden md:relative md:block">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
              >
                <span className="sr-only">Toggle dashboard menu</span>

                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-8 object-cover"
                />
              </button>

              <div
                className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-zinc-700 bg-zinc-800 shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700"
                    role="menuitem"
                  >
                    My profile
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700"
                    role="menuitem"
                  >
                    Billing summary
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-300 hover:bg-zinc-700"
                    role="menuitem"
                  >
                    Team settings
                  </a>
                </div>

                <div className="p-2">
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-500 hover:bg-zinc-900"
                    role="menuitem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                      />
                    </svg>

                    Logout
                  </button>
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}