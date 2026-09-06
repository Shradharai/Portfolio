import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function WelcomeIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 3400);

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
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[10000] overflow-hidden bg-[#050816]"
        >
          {/* Background */}
          <div className="absolute inset-0 opacity-40">
            <div className="grid-background absolute inset-0" />
          </div>

          {/* Ambient glow following the flight */}
          <motion.div
            initial={{
              x: "-35vw",
              y: "15vh",
              opacity: 0,
            }}
            animate={{
              x: [
                "-35vw",
                "10vw",
                "35vw",
                "65vw",
                "110vw",
              ],
              y: [
                "15vh",
                "35vh",
                "18vh",
                "42vh",
                "25vh",
              ],
              opacity: [0, 0.12, 0.16, 0.1, 0],
            }}
            transition={{
              duration: 2.8,
              delay: 0.15,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
            className="absolute h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600 blur-[110px]"
          />

          {/* Flight path */}
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <motion.path
              d="
                M -40 430
                C 80 390, 130 220, 235 235
                C 330 250, 300 440, 410 445
                C 520 450, 535 170, 650 175
                C 760 180, 690 390, 805 405
                C 900 415, 925 270, 1040 215
              "
              fill="none"
              stroke="rgba(167,139,250,0.22)"
              strokeWidth="1.5"
              strokeDasharray="8 12"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                pathLength: {
                  duration: 2.5,
                  delay: 0.15,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 2.8,
                  delay: 0.15,
                  times: [0, 0.12, 0.8, 1],
                },
              }}
            />
          </svg>

 {/* Flying SR. following the exact path */}
<motion.div
  initial={{
    opacity: 0,
    scale: 0.8,
  }}
  animate={{
    opacity: [0, 1, 1, 0],
    scale: [0.8, 1, 1, 0.8],
  }}
  transition={{
    duration: 2.8,
    delay: 0.15,
    ease: "easeInOut",
    times: [0, 0.12, 0.82, 1],
  }}
  className="absolute left-0 top-0 z-30"
  style={{
    offsetPath: `path("M -40 430 C 80 390, 130 220, 235 235 C 330 250, 300 440, 410 445 C 520 450, 535 170, 650 175 C 760 180, 690 390, 805 405 C 900 415, 925 270, 1040 215")`,
    offsetDistance: "0%",
  }}
>
  <motion.div
    animate={{
      offsetDistance: "110%",
    }}
    transition={{
      duration: 2.8,
      delay: 0.15,
      ease: [0.45, 0, 0.25, 1],
    }}
    className="relative"
  >
    {/* Trail */}
    <motion.div
      initial={{
        width: 0,
        opacity: 0,
      }}
      animate={{
        width: [0, 70, 120, 60, 0],
        opacity: [0, 0.6, 0.4, 0.2, 0],
      }}
      transition={{
        duration: 2.5,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="absolute right-full top-1/2 h-px -translate-y-1/2 bg-gradient-to-l from-violet-200 via-violet-400/50 to-transparent"
    />

    {/* Glow */}
    <div className="absolute -inset-6 rounded-full bg-violet-500/20 blur-xl" />

    {/* SR. */}
    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-violet-300/40 bg-[#0b1020]/95 shadow-[0_0_45px_rgba(139,92,246,0.35)] backdrop-blur-sm sm:h-16 sm:w-16">
      <span className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
        SR.
      </span>
    </div>
  </motion.div>
</motion.div>

          {/* Small welcome text after the flight */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: [0, 0, 1, 1, 0],
              y: [12, 12, 0, 0, -8],
            }}
            transition={{
              duration: 3.4,
              times: [0, 0.65, 0.76, 0.9, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 z-20 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <div className="section-label justify-center">
                Welcome
              </div>

              <h1 className="font-display mt-5 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
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
              duration: 2.5,
              delay: 0.35,
              times: [0, 0.2, 0.75, 1],
            }}
            className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3"
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