import { motion } from "framer-motion";
import { EXPERIENCES } from "../../constants";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Experience() {
  return (
    <section
      id="experience"
      className="section-container scroll-mt-28 py-28 sm:py-36"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
      >
        {/* Heading */}
        <motion.div variants={fadeUp}>
          <span className="section-label">
            Experience
          </span>

          <h2 className="font-display mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Where I've been{" "}
            <span className="text-slate-500">
              building.
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline line */}
          <motion.div
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[7px] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-violet-400/50 via-white/10 to-transparent sm:left-[9px]"
          />

          <div className="space-y-10 sm:space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.article
                key={experience.company}
                variants={fadeUp}
                className="group relative pl-8 sm:pl-12"
              >
                {/* Timeline dot */}
                <motion.span
                  initial={{
                    scale: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-0 top-7 flex h-4 w-4 items-center justify-center rounded-full border border-violet-400/40 bg-[#050816]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300 opacity-70 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
                </motion.span>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="portfolio-card rounded-[28px] p-6 sm:p-8"
                >
                  <div className="grid gap-6 lg:grid-cols-[180px_1fr] lg:gap-8">

                    {/* Period */}
                    <div>
                      <p className="text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                        {experience.period}
                      </p>
                    </div>

                    {/* Experience */}
                    <div>
                      <p className="text-sm font-semibold text-violet-300">
                        {experience.company}
                      </p>

                      <h3 className="font-display mt-2 text-2xl font-semibold sm:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                        {experience.description}
                      </p>

                      {/* Tags */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                        }}
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                              delayChildren: 0.2,
                            },
                          },
                        }}
                        className="mt-6 flex flex-wrap gap-2"
                      >
                        {experience.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            variants={{
                              hidden: {
                                opacity: 0,
                                y: 6,
                              },
                              visible: {
                                opacity: 1,
                                y: 0,
                              },
                            }}
                            whileHover={{
                              y: -2,
                            }}
                            className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400 transition-colors duration-300 hover:border-violet-400/25 hover:text-slate-200"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;