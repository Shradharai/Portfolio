import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen } from "react-icons/fi";

function Research() {
  return (
    <section id="research" className="py-28 sm:py-36">
      <div className="section-container">
        <div className="glass relative overflow-hidden rounded-[32px] p-7 sm:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="section-label">Research</span>

              <h2 className="font-display mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Spatio-Temporal Risk
                <span className="text-slate-500">
                  {" "}
                  Intelligence Framework
                </span>
              </h2>

              <p className="mt-6 max-w-2xl leading-7 text-slate-400">
                A district-level road safety modeling framework focused on
                turning heterogeneous accident data into interpretable risk
                intelligence using normalization, spatial analysis,
                dimensionality reduction, clustering and temporal comparison.
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:bg-white/[0.08]"
              >
                Discuss the research
                <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["2021–23", "Data period"],
                ["SWRI", "Risk index"],
                ["PCA", "Weighting"],
                ["Tamil Nadu", "Study region"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/[0.07] bg-black/10 p-5"
                >
                  <p className="font-display text-xl font-semibold">
                    {value}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mt-10 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-xs text-slate-600">
            <FiBookOpen />
            Research-driven engineering
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research;