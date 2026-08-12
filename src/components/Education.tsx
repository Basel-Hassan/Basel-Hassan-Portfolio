import type { Language } from "../types";

function Education({ language }: { language: Language }) {
  const ar = language === "ar";

  return (
    <section id="education" className="section-shell">
      <div className="w-full max-w-5xl">
        <div className="section-heading">
          <p className="section-kicker">{ar ? "التعليم والتدريب" : "Education & Training"}</p>
          <h2>{ar ? "رحلتي التعليمية" : "My Learning Journey"}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface-card">
            <span className="tag">2027</span>
            <h3 className="mt-4 text-xl font-bold">Higher Institute for Computer Science and Information Systems</h3>
            <p className="mt-3 leading-7 text-[var(--color-text-muted)]">{ar ? "طالب في علوم الحاسب ونظم المعلومات." : "Computer Science and Information Systems student."}</p>
          </article>
          <article className="surface-card">
            <span className="tag">Route Academy</span>
            <h3 className="mt-4 text-xl font-bold">Full-Stack Web Development Diploma</h3>
            <p className="mt-3 leading-7 text-[var(--color-text-muted)]">{ar ? "تدريب عملي على تقنيات تطوير الويب الحديثة، مع التركيز على مسار Front-End." : "Hands-on training in modern web development with a strong focus on the Front-End track."}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;