import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "../data/profile";

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-sm text-[var(--color-text-muted)] sm:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Basel Hassan. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className="social-link" href="#home" aria-label="Back to top"><FontAwesomeIcon icon={faArrowUp} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;