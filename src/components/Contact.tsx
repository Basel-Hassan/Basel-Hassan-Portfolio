import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "../data/profile";
import type { Language } from "../types";

function Contact({ language }: { language: Language }) {
  const ar = language === "ar";
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section-shell">
      <div className="w-full max-w-6xl">
        <div className="section-heading">
          <p className="section-kicker">{ar ? "تواصل معي" : "Get In Touch"}</p>
          <h2>{ar ? "لنبنِ شيئًا معًا" : "Let's Work Together"}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-card">
            <h3 className="text-2xl font-bold">{ar ? "بيانات التواصل" : "Contact Details"}</h3>
            <div className="mt-7 space-y-5">
              <a className="contact-item" href={`mailto:${profile.email}`}><FontAwesomeIcon icon={faEnvelope} /><span>{profile.email}</span></a>
              <a className="contact-item" href={`tel:${profile.phone}`}><FontAwesomeIcon icon={faPhone} /><span>{profile.phone}</span></a>
              <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /><span>GitHub</span></a>
              <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /><span>LinkedIn</span></a>
            </div>
          </div>

          <form className="surface-card" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field"><span>{ar ? "الاسم" : "Name"}</span><input name="name" required autoComplete="name" /></label>
              <label className="form-field"><span>{ar ? "البريد الإلكتروني" : "Email"}</span><input name="email" type="email" required autoComplete="email" /></label>
            </div>
            <label className="form-field mt-5"><span>{ar ? "الموضوع" : "Subject"}</span><input name="subject" required /></label>
            <label className="form-field mt-5"><span>{ar ? "الرسالة" : "Message"}</span><textarea name="message" rows={6} required /></label>
            <button className="button-primary mt-6" type="submit"><FontAwesomeIcon icon={faPaperPlane} />{ar ? "إرسال" : "Send Message"}</button>
            {sent && <p className="mt-4 text-sm text-emerald-400" role="status">{ar ? "تم استلام الرسالة محليًا. اربط خدمة البريد قبل النشر." : "Message captured locally. Connect your email service before production deployment."}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;