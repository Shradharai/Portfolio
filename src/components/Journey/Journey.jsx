import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../animations";

const journey = [
  {
    number: "01",
    title: "Build",
    text: "Started with CS fundamentals and learned by building, breaking things, and figuring out why they broke.",
  },
  {
    number: "02",
    title: "Explore",
    text: "Moved into data, analytics and machine learning, learning to look beyond the interface.",
  },
  {
    number: "03",
    title: "Understand",
    text: "Became interested in what happens underneath: system behaviour, reliability and model performance.",
  },
  {
    number: "04",
    title: "Connect",
    text: "Now exploring where software, data and AI meet, through projects, research and real-world work.",
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="border-y border-white/[0.05] py-28"
    >
      <div className="section-container">
        {/* =================================
            INTRO
        ================================= */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          <motion.div
            variants={fadeUp}
            className="max-w-3xl"
          >
            <span className="section-label">
              Journey
            </span>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Not one fixed path.
              <br />

              <span className="text-slate-500">
                Just better questions.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-400"
            >
              I tend to follow the problems that make me curious.
              One thing leads to another, and that has taken me from
              building software to exploring data, systems and AI.
            </motion.p>
          </motion.div>

          {/* =================================
              JOURNEY CARDS
          ================================= */}

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                }}
                className="portfolio-card group relative min-h-[250px] overflow-hidden rounded-3xl p-6"
              >
                {/* =================================
                    TOP NUMBER
                ================================= */}

                <motion.span
                  initial={{
                    opacity: 0,
                    x: -8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + index * 0.1,
                  }}
                  className="relative z-10 font-display text-sm font-semibold text-violet-300 transition-all duration-300 group-hover:text-violet-200 group-hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]"
                >
                  {item.number}
                </motion.span>

                {/* =================================
                    CONTENT
                ================================= */}

                <div className="relative z-10 mt-16">
                  <motion.h3
                    whileHover={{
                      x: 2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="font-display text-2xl font-semibold"
                  >
                    {item.title}
                  </motion.h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                    {item.text}
                  </p>
                </div>

                {/* =================================
                    BACKGROUND NUMBER
                ================================= */}

                <motion.span
                  className="pointer-events-none absolute -bottom-8 -right-3 font-display text-[100px] font-semibold leading-none text-white/[0.025]"
                  initial={{
                    opacity: 0.8,
                  }}
                  whileHover={{
                    y: -12,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {item.number}
                </motion.span>

                {/* =================================
                    HOVER GLOW
                ================================= */}

                <span className="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Bottom accent */}
                <motion.span
                  className="pointer-events-none absolute bottom-0 left-6 right-6 h-px origin-left bg-violet-400/30"
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;