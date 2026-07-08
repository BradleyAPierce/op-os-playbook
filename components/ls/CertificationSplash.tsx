import { certificationContent } from "@/data/ls/certification";
import { CTAButton } from "./CTAButton";
import { CoursePath } from "./CoursePath";
import { SiteHeader } from "./SiteHeader";
import { StatusPill } from "./StatusPill";

export function CertificationSplash() {
  const {
    coursePath,
    hero,
    process,
    proofPoints
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

      <section id="path" className="content-section" aria-labelledby="path-title">
        <div className="section-heading">
          <p className="eyebrow">{coursePath.eyebrow}</p>
          <div>
            <h2 id="path-title">{coursePath.title}</h2>
            <p className="section-summary">{coursePath.summary}</p>
          </div>
        </div>
        <CoursePath courses={coursePath.courses} />
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
    </main>
  );
}
