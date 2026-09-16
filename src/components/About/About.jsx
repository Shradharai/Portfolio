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
  I like figuring things out. My work has taken me from building
  web applications to working with distributed systems, data and
  AI evaluation. Across different problems and technologies, I've
  enjoyed understanding how things work and finding a practical
  way forward.
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
  My background in Big Data Analytics gave me a foundation across
  software, data and machine learning. Since then, I've been drawn
  to problems that sit between these areas, whether that's building
  a product, working with data, or understanding how an AI system
  behaves in the real world.
</motion.p>

            
            {/* Engineering thought */}
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
    duration: 0.8,
    delay: 0.4,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="mt-12 border-l border-violet-400/30 pl-5 sm:pl-6"
>
  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
    Why I'm proud to be an engineer
  </p>

  <p className="font-display mt-4 text-2xl font-medium leading-tight tracking-tight text-slate-200 sm:text-3xl">
    "I don't know how."
    <br />
    <span className="text-slate-500">
      But I know how to
    </span>{" "}
    <span className="gradient-text">
      figure it out.
    </span>
  </p>

  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
    I may not know every tool, system or answer on day one.
    But I know how to learn, break down a problem, ask the
    right questions and build my way toward an answer.
  </p>
</motion.div>
            {/* CTA */}
            <motion.a
              href="#journey"
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
                delay: 0.5,
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