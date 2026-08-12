import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "../data/profile";
import type { Language } from "../types";

function Hero({ language }: { language: Language }) {
  const ar = language === "ar";

  return (
    <section id="home" className="section-shell min-h-[calc(100vh-73px)]">
      <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-4 font-semibold text-[var(--color-primary)]">{ar ? "مرحبًا، أنا" : "Hello, I'm"}</p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">Basel Hassan<span className="text-[var(--color-primary)]">.</span></h1>
          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">{profile.role}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            {ar ? "مطور Front-End أبني تجارب ويب حديثة ومتجاوبة وسهلة الاستخدام، وأسعى باستمرار لتطوير مهاراتي في تقنيات الويب الحديثة." : profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">{ar ? "شاهد مشاريعي" : "View My Work"} <FontAwesomeIcon icon={faArrowDown} /></a>
            <a href={profile.cvPath} download className="button-secondary">{ar ? "تحميل CV" : "Download CV"} <FontAwesomeIcon icon={faDownload} /></a>
          </div>

          <div className="mt-8 flex gap-5">
            <a className="social-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="profile-frame">
            <img src={profile.imagePath} alt="Basel Hassan profile placeholder" className="h-full w-full object-cover rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;