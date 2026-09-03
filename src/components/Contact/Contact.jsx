import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="pb-28 pt-16 sm:pb-36">
      <div className="section-container">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.025] px-7 py-14 text-center sm:px-12 sm:py-20"
        >
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative">
            <span className="section-label">Get in touch</span>

            <h2 className="font-display mx-auto mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
              Let's build something
              <span className="gradient-text"> useful.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500">
              Open to software engineering, data, AI and interesting product
              problems.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="group mx-auto mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-100"
            >
              <FiMail />
              Say hello
              <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;