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
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"
        >
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="section-label">
              About me
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
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Curious by default.
              <br />
              <span className="text-slate-500">
                Practical by choice.
              </span>
            </motion.h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            className="max-w-3xl"
          >
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
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg leading-8 text-slate-300"
            >
              I like figuring things out. My work has taken me
              from building web applications to working with
              distributed systems, data and AI evaluation. Across
              each of them, I've enjoyed learning the problem first
              and then building my way through it.
            </motion.p>

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
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 leading-7 text-slate-500"
            >
              My background in Big Data Analytics gave me a strong
              foundation in software, data and machine learning.
              Since then, I've kept exploring different sides of
              engineering, from building full stack applications to
              working with research and real world AI systems.
            </motion.p>

            <motion.a
              href="#experience"
              initial={{
                opacity: 0,
                y: 12,
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
                duration: 0.6,
                delay: 0.38,
              }}
              whileHover={{
                x: 3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-8 inline-flex items-center gap-2 border-b border-white/10 pb-2 text-sm font-semibold transition-colors duration-200 hover:border-violet-400 hover:text-violet-300"
            >
              See my journey

              <FiArrowUpRight
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;