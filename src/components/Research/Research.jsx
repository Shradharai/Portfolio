import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

const EMAIL = "mailto:shradharai4u@gmail.com";

function Research() {
  return (
    <section id="research" className="py-28 sm:py-36">
      <div className="section-container">
        <div className="glass relative overflow-hidden rounded-[32px] p-7 sm:p-12">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Main content */}
            <div>
              <span className="section-label">Research</span>

              <h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Exploring problems
                <span className="text-slate-500"> beyond the build.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                My research work has focused on using data and machine learning
                to understand real-world problems more deeply. I enjoy going
                beyond prediction to ask why a pattern exists, how reliable it
                is, and what the data can actually tell us.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-slate-500">
                One example is Urban AI, a district-level road safety research
                project that combines spatial analysis, population-normalized
                risk modelling, machine learning and explainability to study
                accident risk across Tamil Nadu.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=shradharai4u@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400/20 hover:bg-white/[0.08]"
              >
                Talk about the research
                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Research details */}
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Urban AI", "Research project"],
                ["Spatial", "Risk modelling"],
                ["XGBoost", "Prediction"],
                ["SHAP", "Explainability"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/[0.07] bg-black/10 p-5 transition-colors duration-300 hover:border-violet-400/15"
                >
                  <p className="font-display text-xl font-semibold">{value}</p>

                  <p className="mt-2 text-xs text-slate-500">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="relative mt-10 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-xs text-slate-600">
            <FiBookOpen />
            Research, experimentation & applied AI
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;