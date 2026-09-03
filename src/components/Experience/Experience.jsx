import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Experience() {
  return (
    <section
      id="experience"
      className="section-container scroll-mt-28 py-28"
    >
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
          className="section-label"
        >
          Experience
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-display mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl"
        >
          Where I've been{" "}
          <span className="text-slate-500">
            building.
          </span>
        </motion.h2>

        <div className="mt-16 space-y-5">
          {EXPERIENCES.map((experience) => (
            <motion.article
              key={experience.company}
              variants={fadeUp}
              className="portfolio-card group rounded-[28px] p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[180px_1fr_auto]">

                <div>
                  <p className="text-sm text-slate-500">
                    {experience.period}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-violet-300">
                    {experience.company}
                  </p>

                  <h3 className="font-display mt-2 text-2xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block">
                  <FiArrowUpRight
                    size={20}
                    className="text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                  />
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;