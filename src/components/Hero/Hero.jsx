import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import { SOCIALS } from "../../constants";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 60,
    damping: 25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 60,
    damping: 25,
  });

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    mouseX.set(x);
    mouseY.set(y);

    document.documentElement.style.setProperty(
      "--mouse-x",
      `${event.clientX}px`
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      `${event.clientY}px`
    );
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden pt-28"
    >
      <div className="grid-background absolute inset-0" />

      {/* Ambient glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="hero-glow left-[8%] top-[20%] bg-violet-600"
      />

      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="hero-glow right-[8%] top-[45%] bg-cyan-500"
      />

      <div className="section-container relative z-10 flex min-h-[calc(100vh-112px)] items-center py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Software • AI • Data
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display mt-8 max-w-[700px] text-[clamp(4rem,7vw,7rem)] font-semibold leading-[0.91] tracking-[-0.055em]"
            >
              Building
              <br />

              <span className="gradient-text">
                useful
                <br />
                systems.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-8 max-w-[650px] text-base leading-7 text-slate-400 sm:text-lg"
            >
              I'm Shradha Rai, a Computer Science graduate working across
              software engineering, data analytics and applied AI. I like
              turning messy problems and raw data into systems people can
              actually use.
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="magnetic-button group flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold !text-slate-950 hover:bg-violet-100"
              >
                Explore my work

                <FiArrowUpRight
                  className="!text-slate-950 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="magnetic-button flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold !text-white hover:bg-white/[0.08]"
              >
                View resume
              </a>
            </motion.div>

            {/* SOCIALS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7,
              }}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition hover:text-white"
              >
                <FiGithub size={19} />
              </a>

              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition hover:text-white"
              >
                <FiLinkedin size={19} />
              </a>

              <span className="h-px w-12 bg-white/10" />

              <span className="text-xs uppercase tracking-[0.18em] text-slate-600">
                Based in India
              </span>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[460px] lg:ml-auto"
          >
            <motion.div
              style={{
                x: springX,
                y: springY,
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-full bg-violet-600/10 blur-3xl" />

              <div className="relative rounded-[34px] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/40">
                <div className="relative overflow-hidden rounded-[27px] bg-slate-900">

                  <img
                    src="/portfolio.jpeg"
                    alt="Shradha Rai"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="font-display text-xl font-semibold">
                        Shradha Rai
                      </p>

                      <p className="mt-1 text-xs text-slate-300">
                        Engineer • Analyst • Builder
                      </p>
                    </div>

                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                      Available
                    </div>
                  </div>
                </div>
              </div>

              {/* Focus */}
              <motion.div
                style={{
                  x: springX,
                  y: springY,
                }}
                className="glass absolute -left-8 bottom-16 hidden rounded-2xl px-4 py-3 sm:block"
              >
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  Focus
                </p>

                <p className="mt-1 font-display text-sm font-semibold">
                  AI + Data
                </p>
              </motion.div>

              {/* CGPA */}
              <motion.div
                style={{
                  x: springX,
                  y: springY,
                }}
                className="glass absolute -right-7 top-14 rounded-2xl px-4 py-3"
              >
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  CGPA
                </p>

                <p className="mt-1 font-display text-sm font-semibold">
                  9.12
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-600 transition hover:text-violet-300"
        aria-label="Scroll to About"
      >
        <FiArrowDown size={18} />
      </motion.button>
    </section>
  );
}

export default Hero;