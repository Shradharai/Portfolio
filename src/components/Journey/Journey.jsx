import { motion } from "framer-motion";
import { JOURNEY } from "../../constants";
import { fadeUp } from "../../animations";

function Journey() {
  return (
    <section id="journey" className="border-y border-white/[0.05] py-28">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <span className="section-label">Journey</span>

            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              A path of
              <br />
              <span className="text-slate-500">continuous building.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10" />

            <div className="space-y-12">
              {JOURNEY.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 }}
                  className="relative pl-9"
                >
                  <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-4 border-[#050816] bg-violet-400" />

                  <span className="font-display text-sm font-semibold text-violet-300">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xl leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;