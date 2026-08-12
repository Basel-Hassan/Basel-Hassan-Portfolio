import { skills, learning } from "../data/skills";
import { SkillIcon } from "../utils/icons";
import type { Language } from "../types";

function Skills({ language }: { language: Language }) {
  const ar = language === "ar";

  return (
    <section id="skills" className="section-shell">
      <div className="w-full max-w-6xl">
        <div className="section-heading">
          <p className="section-kicker">{ar ? "خبراتي" : "Skills"}</p>
          <h2>{ar ? "التقنيات التي أستخدمها" : "Technologies I Use"}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <span className="skill-icon"><SkillIcon name={skill.icon} /></span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 surface-card">
          <h3 className="text-xl font-bold">Currently Learning</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {learning.map((item) => <span key={item} className="tag">{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;