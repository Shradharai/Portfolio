import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS } from "../../constants";
import { fadeUp, stagger, viewport } from "../../animations";

function Projects() {
  return (
    <section
      id="projects"
      className="section-container scroll-mt-28 py-28"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeUp} className="section-label">
          Selected Work
        </motion.div>

        <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.h2
            variants={fadeUp}
            className="font-display max-w-xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl"
          >
            Things I've{" "}
            <span className="text-slate-500">built.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-sm text-sm leading-6 text-slate-500"
          >
            A selection of engineering, analytics and machine learning work.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.number}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="portfolio-card group relative min-h-[390px] overflow-hidden rounded-[28px] p-7"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">
                    {project.number}
                  </span>

                  <FiArrowUpRight
                    className="text-slate-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                    size={20}
                  />
                </div>

                <div className="mt-auto">
                  <p className="text-xs font-bold tracking-[0.15em] text-violet-300">
                    {project.category}
                  </p>

                  <h3 className="font-display mt-4 text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-slate-500 transition group-hover:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;