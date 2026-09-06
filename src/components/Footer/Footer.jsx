import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="section-container flex flex-col justify-between gap-5 text-sm text-slate-600 sm:flex-row sm:items-center">
        <div>
          <span className="font-display font-semibold text-slate-400">
            Shradha Rai
          </span>

          <span className="mx-2">·</span>

          © 2026
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Shradharai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-600 transition hover:text-white"
          >
            <FiGithub size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/shradha-rai-18460a213/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 transition hover:text-white"
          >
            <FiLinkedin size={16} />
          </a>

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shradharai4u@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="text-slate-600 transition hover:text-white"
>
  <FiMail size={16} />
</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;