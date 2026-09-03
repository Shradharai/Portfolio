import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function WelcomeIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3400);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[10000] overflow-hidden bg-[#050816]"
        >
          {/* Background grid */}
          <div className="absolute inset-0 opacity-50">
            <div className="grid-background absolute inset-0" />
          </div>

          {/* Moving ambient glow */}
          <motion.div
            initial={{
              x: "-35vw",
              opacity: 0,
            }}
            animate={{
              x: "35vw",
              opacity: [0, 0.16, 0.2, 0],
            }}
            transition={{
              duration: 3,
              delay: 0.1,
              ease: "easeInOut",
              times: [0, 0.25, 0.65, 1],
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 blur-[130px]"
          />

          {/* Horizontal path */}
          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: 1,
              opacity: [0, 0.25, 0.12, 0],
            }}
            transition={{
              duration: 2.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="absolute left-0 right-0 top-1/2 h-px origin-left bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"
          />

          {/* Moving SR. object */}
          <motion.div
            initial={{
              x: "-15vw",
              y: "-50%",
              opacity: 0,
            }}
            animate={{
              x: [
                "-15vw",
                "18vw",
                "48vw",
                "115vw",
              ],
              y: [
                "-50%",
                "-50%",
                "-50%",
                "-50%",
              ],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.8,
              delay: 0.25,
              ease: [0.65, 0, 0.35, 1],
              times: [0, 0.28, 0.68, 1],
            }}
            className="absolute left-0 top-1/2 z-30"
          >
            <div className="relative">

              {/* Light trail */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: [0, 100, 180, 70],
                  opacity: [0, 0.8, 0.45, 0],
                }}
                transition={{
                  duration: 2.3,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className="absolute right-full top-1/2 h-px -translate-y-1/2 bg-gradient-to-l from-violet-300 via-violet-400/50 to-transparent"
              />

              {/* Glow */}
              <div className="absolute -inset-5 rounded-full bg-violet-500/20 blur-xl" />

              {/* SR. */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-violet-300/40 bg-[#0b1020] shadow-[0_0_45px_rgba(139,92,246,0.35)]">
                <span className="font-display text-sm font-semibold text-white">
                  SR.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Welcome message */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [-20, 0, 0, 30],
            }}
            transition={{
              duration: 2.1,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.22, 0.78, 1],
            }}
            className="absolute inset-0 z-20 flex items-center justify-center px-6"
          >
            <div className="text-center">

              <div className="section-label justify-center">
                Welcome
              </div>

              <h1 className="font-display mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                Good to have you{" "}
                <span className="gradient-text">
                  here.
                </span>
              </h1>

            </div>
          </motion.div>

          {/* Bottom status */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4,
              delay: 0.4,
              times: [0, 0.25, 0.75, 1],
            }}
            className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
              Initializing
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeIntro;