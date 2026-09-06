import { motion } from "framer-motion";
import {
  FiAward,
  FiCode,
  FiUsers,
  FiBookOpen,
} from "react-icons/fi";

const achievements = [
  {
    icon: FiAward,
    value: "6+",
    title: "Hackathons & challenges",
    text: "Participated in competitions including Smart India Hackathon, Flipkart GRID, Myntra HackerRamp and Google Solution Challenge.",
  },
  {
    icon: FiBookOpen,
    value: "1",
    title: "Research publication",
    text: "Research paper accepted at ASSIC 2026, with publication pending.",
  },
  {
    icon: FiUsers,
    value: "4",
    title: "Research team",
    text: "Worked as part of a four-member Samsung PRISM research team on microservices observability.",
  },
  {
    icon: FiCode,
    value: "9.1",
    title: "Academic foundation",
    text: "B.Tech in Computer Science with a specialization in Big Data Analytics.",
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
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -5,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="portfolio-card group rounded-3xl p-6"
              >
                <Icon
                  className="text-violet-300 transition-transform duration-300 group-hover:scale-110"
                  size={20}
                />

                <p className="font-display mt-8 text-4xl font-semibold">
                  {item.value}
                </p>

                <h3 className="mt-3 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;