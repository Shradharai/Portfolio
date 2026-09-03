import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const links = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Skills", id: "skills" },
];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "experience",
      "projects",
      "research",
      "skills",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav className="section-container">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1020]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">

          <a
            href="#home"
            className="font-display text-sm font-bold tracking-tight"
          >
            SR<span className="text-violet-400">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => {
              const isActive = active === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="group relative py-2 text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}

                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-violet-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold transition hover:border-violet-400/30 hover:bg-white/[0.08]"
          >
            Resume
            <FiArrowUpRight size={14} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;