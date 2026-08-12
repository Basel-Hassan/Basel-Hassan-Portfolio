import { profile } from "../data/profile";
import type { Language } from "../types";

function About({ language }: { language: Language }) {
  const ar = language === "ar";

  return (
    <section id="about" className="section-shell">
      <div className="w-full max-w-5xl">
        <div className="section-heading">
          <p className="section-kicker">{ar ? "نبذة" : "About"}</p>
          <h2>{ar ? "من أنا؟" : "Who I Am"}</h2>
        </div>
        <div className="surface-card">
          <p className="text-lg leading-9 text-[var(--color-text-muted)]">
            {ar ? "أنا باسل حسن، طالب ومطور Front-End أركز على بناء واجهات حديثة ومتجاوبة وسهلة الاستخدام. أتعلم باستمرار وأطبق ما أتعلمه في مشاريع عملية." : profile.summary}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;