import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiDownload,
} from "react-icons/fi";

import { NAV_ITEMS } from "../../constants";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  /* --------------------------------
     Scroll state
  --------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* --------------------------------
     Active section
  --------------------------------- */

  useEffect(() => {
    const sections = [
      "about",
      "journey",
      "skills",
      "experience",
      "projects",
      "research",
      "achievements",
      "contact",
    ];

    const observers = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  /* --------------------------------
     Close resume menu on outside click
  --------------------------------- */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".resume-menu")) {
        setResumeOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /* --------------------------------
     Menu helpers
  --------------------------------- */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setResumeOpen(false);
  };

  const handleResumeClick = (path) => {
    window.open(path, "_blank");
    setResumeOpen(false);
    setMobileOpen(false);
  };

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
    setResumeOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/80 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex h-20 items-center justify-between">

          {/* =================================
              LOGO
          ================================= */}

          <motion.a
            href="#home"
            onClick={closeMobileMenu}
            whileHover={{
              y: -1,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group flex items-center gap-2"
          >
            <span className="font-display text-xl font-bold tracking-tight text-white">
              SR
              <span className="text-violet-400 transition-colors duration-300 group-hover:text-cyan-300">
                .
              </span>
            </span>
          </motion.a>

          {/* =================================
              DESKTOP NAVIGATION
          ================================= */}

          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{
                    y: -1,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`relative py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-slate-200"
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute -bottom-1 left-0 h-px w-full bg-violet-400"
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* =================================
              DESKTOP RESUME
          ================================= */}

          <div className="resume-menu relative hidden md:block">
            <motion.button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setResumeOpen((prev) => !prev);
              }}
              whileHover={{
                y: -1,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex items-center gap-2 rounded-xl border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-200 transition hover:border-violet-400/40 hover:bg-violet-400/15"
            >
              Resume

              <motion.span
                animate={{
                  rotate: resumeOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <FiChevronDown size={15} />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020]/95 p-2 shadow-2xl backdrop-blur-xl"
                >
                  <p className="px-3 pb-2 pt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Choose a version
                  </p>

                  <motion.button
                    type="button"
                    onClick={() =>
                      handleResumeClick("/resumes/Shradha_SWE.pdf")
                    }
                    whileHover={{
                      x: 3,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">
                      <FiDownload size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-200 group-hover:text-white">
                        Software Engineering
                      </p>

                      <p className="mt-0.5 text-xs text-slate-600">
                        SWE / Full Stack / Software
                      </p>
                    </div>
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() =>
                      handleResumeClick("/resumes/Shradha_dsaiml.pdf")
                    }
                    whileHover={{
                      x: 3,
                    }}
                    transition={{
                      duration: 0.15,
                    }}
                    className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                      <FiDownload size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-200 group-hover:text-white">
                        Data / ML / AI
                      </p>

                      <p className="mt-0.5 text-xs text-slate-600">
                        Data / Analytics / AI
                      </p>
                    </div>
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* =================================
              MOBILE MENU BUTTON
          ================================= */}

          <motion.button
            type="button"
            onClick={handleMobileToggle}
            whileTap={{
              scale: 0.92,
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                >
                  <FiX size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                >
                  <FiMenu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </div>

      {/* =================================
          MOBILE NAVIGATION
      ================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-white/5 bg-[#050816]/95 backdrop-blur-xl md:hidden"
          >
            <div className="section-container py-5">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="flex flex-col"
              >
                {NAV_ITEMS.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -10,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`border-b border-white/5 py-4 text-base transition ${
                        isActive
                          ? "text-white"
                          : "text-slate-500"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>

                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-nav"
                            className="h-1.5 w-1.5 rounded-full bg-violet-400"
                          />
                        )}
                      </div>
                    </motion.a>
                  );
                })}

                {/* =================================
                    MOBILE RESUME
                ================================= */}

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -10,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  className="border-b border-white/5 py-4"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                    Resume
                  </p>

                  <div className="grid gap-2">
                    <motion.button
                      type="button"
                      whileTap={{
                        scale: 0.98,
                      }}
                      onClick={() =>
                        handleResumeClick("/resumes/Shradha_SWE.pdf")
                      }
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-left transition hover:border-violet-400/20 hover:bg-violet-400/5"
                    >
                      <FiDownload
                        size={16}
                        className="shrink-0 text-violet-300"
                      />

                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          Software Engineering
                        </p>

                        <p className="mt-0.5 text-xs text-slate-600">
                          SWE / Full Stack / Software
                        </p>
                      </div>
                    </motion.button>

                    <motion.button
                      type="button"
                      whileTap={{
                        scale: 0.98,
                      }}
                      onClick={() =>
                        handleResumeClick("/resumes/Shradha_dsaiml.pdf")
                      }
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3 text-left transition hover:border-cyan-400/20 hover:bg-cyan-400/5"
                    >
                      <FiDownload
                        size={16}
                        className="shrink-0 text-cyan-300"
                      />

                      <div>
                        <p className="text-sm font-medium text-slate-200">
                          Data / ML / AI
                        </p>

                        <p className="mt-0.5 text-xs text-slate-600">
                          Data / Analytics / AI
                        </p>
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;