import { motion } from "framer-motion";
import { SKILLS } from "../../constants";

function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/5 py-28 sm:py-36"
    >
      <div className="section-container">

        {/* Heading */}
        <motion.div
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14"
        >
          <span className="section-label">
            Toolkit
          </span>

          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Tools I use to
            <span className="text-slate-500">
              {" "}build.
            </span>
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-4 md:grid-cols-2">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
              }}
              className="portfolio-card group rounded-3xl p-6 sm:p-8"
            >
              {/* Category title */}
              <motion.h3
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
                  duration: 0.45,
                  delay: 0.12 + index * 0.1,
                }}
                className="font-display text-xl font-semibold"
              >
                {category.title}
              </motion.h3>

              {/* Skill chips */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.045,
                      delayChildren: 0.15 + index * 0.1,
                    },
                  },
                }}
                className="mt-6 flex flex-wrap gap-2"
              >
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 8,
                        scale: 0.96,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      },
                    }}
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="cursor-default rounded-xl border border-white/7 bg-white/3 px-3 py-2 text-sm text-slate-400 transition-colors duration-200 hover:border-violet-400/20 hover:bg-violet-400/5 hover:text-slate-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* Subtle bottom accent */}
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 h-px origin-left bg-gradient-to-r from-violet-400/25 via-cyan-400/10 to-transparent"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;