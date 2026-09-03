import { motion } from "framer-motion";
import { FiAward, FiDatabase, FiCode, FiTrendingUp } from "react-icons/fi";

const achievements = [
  {
    icon: FiAward,
    value: "9.12",
    title: "Academic foundation",
    text: "B.Tech Computer Science with specialization in Big Data Analytics.",
  },
  {
    icon: FiDatabase,
    value: "AI",
    title: "Applied focus",
    text: "Experience across machine learning, analytics and data-oriented systems.",
  },
  {
    icon: FiCode,
    value: "CS",
    title: "Engineering mindset",
    text: "Combining software engineering fundamentals with analytical thinking.",
  },
  {
    icon: FiTrendingUp,
    value: "∞",
    title: "Learning curve",
    text: "Continuously expanding across engineering, AI and data.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="py-28 sm:py-36">
      <div className="section-container">
        <span className="section-label">Highlights</span>

        <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          A few things
          <span className="text-slate-500"> worth knowing.</span>
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="card-hover rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <Icon className="text-violet-300" size={20} />

                <p className="font-display mt-8 text-4xl font-semibold">
                  {item.value}
                </p>

                <h3 className="mt-3 font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;