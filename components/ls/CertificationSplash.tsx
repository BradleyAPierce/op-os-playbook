import { certificationContent } from "@/data/ls/certification";
import { CTAButton } from "./CTAButton";
import { SiteHeader } from "./SiteHeader";
import { StatusPill } from "./StatusPill";

export function CertificationSplash() {
  const {
    audience,
    coursePath,
    customerProof,
    finalCTA,
    hero,
    process,
    proofPoints,
    whyCertification
  } = certificationContent;

  return (
    <main id="top" className="page-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="certification-title">
        <div className="hero-copy">
          <StatusPill>{hero.status}</StatusPill>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="certification-title">{hero.title}</h1>
          <p className="summary">{hero.summary}</p>
          <div className="hero-actions" aria-label="Certification actions">
            <CTAButton href="#path">{hero.primaryAction}</CTAButton>
            <CTAButton href="#readiness" variant="secondary">
              {hero.secondaryAction}
            </CTAButton>
          </div>
        </div>

        <div className="certification-card" aria-label="Certification overview">
          <div className="card-grid">
            <span className="card-kicker">Secure by layers of protection</span>
          </div>
          <img
            src="LayeredSecurity_Logo_Badge.png"
            alt="Certified Layered Security Specialist badge"
            className="shield-mark"
          />
          <div className="card-footer">
            <strong>Certification Ready</strong>
          </div>
        </div>
      </section>

      <section id="readiness" className="proof-band" aria-label="Readiness areas">
        {proofPoints.map((point) => (
          <article className="proof-point" key={point.label}>
            <span>{point.value}</span>
            <p>{point.label}</p>
          </article>
        ))}
      </section>

      <section id="why" className="content-section" aria-labelledby="why-title">
        <div className="section-heading">
          <p className="eyebrow">{whyCertification.eyebrow}</p>
          <div>
            <h2 id="why-title">{whyCertification.title}</h2>
            <p className="section-summary">{whyCertification.summary}</p>
          </div>
        </div>
        <div className="card-list">
          {whyCertification.points.map((point) => (
            <article className="info-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="audience"
        className="content-section audience-section"
        aria-labelledby="audience-title"
      >
        <div className="section-heading">
          <p className="eyebrow">{audience.eyebrow}</p>
          <div>
            <h2 id="audience-title">{audience.title}</h2>
            <p className="section-summary">{audience.summary}</p>
          </div>
        </div>
        <div className="audience-grid">
          {audience.roles.map((role) => (
            <article className="audience-card" key={role.role}>
              <h3>{role.role}</h3>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="path" className="content-section" aria-labelledby="path-title">
        <div className="section-heading">
          <p className="eyebrow">{coursePath.eyebrow}</p>
          <div>
            <h2 id="path-title">{coursePath.title}</h2>
            <p className="section-summary">{coursePath.summary}</p>
          </div>
        </div>
        <div className="course-grid">
          {coursePath.courses.map((course, index) => (
            <article className="course-card" key={course.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <strong>{course.outcome}</strong>
            </article>
          ))}
        </div>
      </section>

      <section
        id="proof"
        className="content-section proof-story-section"
        aria-labelledby="proof-title"
      >
        <div className="proof-story">
          <div>
            <p className="eyebrow">{customerProof.eyebrow}</p>
            <h2 id="proof-title">{customerProof.title}</h2>
            <p className="story-copy">{customerProof.story}</p>
            <p className="story-attribution">{customerProof.attribution}</p>
          </div>
          <ul className="proof-list" aria-label="Customer proof points">
            {customerProof.proofPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="process"
        className="content-section"
        aria-labelledby="process-title"
      >
        <div className="section-heading">
          <p className="eyebrow">{process.eyebrow}</p>
          <div>
            <h2 id="process-title">{process.title}</h2>
            <p className="section-summary">{process.summary}</p>
          </div>
        </div>
        <div className="process-grid">
          {process.steps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <p className="eyebrow">{finalCTA.eyebrow}</p>
        <h2 id="final-cta-title">{finalCTA.title}</h2>
        <p className="final-cta-summary">{finalCTA.summary}</p>
        <div className="hero-actions" aria-label="Final certification actions">
          <CTAButton href="#path">{finalCTA.primaryAction}</CTAButton>
          <CTAButton href="#process" variant="secondary">
            {finalCTA.secondaryAction}
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
