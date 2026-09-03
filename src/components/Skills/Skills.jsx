import { motion } from "framer-motion";
import { SKILLS } from "../../constants";

function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/5 py-28 sm:py-36"
    >
      <div className="section-container">
        <div className="mb-14">
          <span className="section-label">
            Toolkit
          </span>

          <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Tools I use to
            <span className="text-slate-500">
              {" "}build.
            </span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              whileHover={{ y: -4 }}
              className="portfolio-card rounded-3xl p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="cursor-default rounded-xl border border-white/7 bg-white/3 px-3 py-2 text-sm text-slate-400 transition hover:border-violet-400/20 hover:bg-violet-400/5 hover:text-slate-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;