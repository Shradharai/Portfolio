import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="section-container flex flex-col justify-between gap-5 text-sm text-slate-600 sm:flex-row sm:items-center">
        <div>
          <span className="font-display font-semibold text-slate-400">
            Shradha Rai
          </span>

          <span className="mx-2">·</span>

          Built with React.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <FiLinkedin />
          </a>

          <a
            href="mailto:your.email@example.com"
            className="transition hover:text-white"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;