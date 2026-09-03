import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeUp, stagger } from "../../animations";

function About() {
  return (
    <section
  id="about"
  className="border-t border-white/[0.04] py-28 lg:py-36"
>
        <div className="section-container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <motion.div variants={fadeUp}>
            <span className="section-label">About me</span>

            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Curious by default.
              <br />
              <span className="text-slate-500">Practical by choice.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-lg leading-8 text-slate-300">
              My work sits at the intersection of software, data and AI. I
              enjoy understanding a problem deeply, breaking it into smaller
              systems and then building something measurable from it.
            </p>

            <p className="mt-6 leading-7 text-slate-500">
              My background in Big Data Analytics has pushed me toward
              analytical engineering, machine learning and data-driven
              products. At the same time, I care about the engineering behind
              those systems: clean interfaces, reliable data flows and
              maintainable code.
            </p>

            <a
              href="#experience"
              className="group mt-8 inline-flex items-center gap-2 border-b border-white/10 pb-2 text-sm font-semibold transition hover:border-violet-400"
            >
              See my journey
              <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;