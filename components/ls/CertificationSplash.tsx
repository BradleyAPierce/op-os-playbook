import { certificationContent } from "@/data/ls/certification";
import { CTAButton } from "./CTAButton";
import { SiteHeader } from "./SiteHeader";
import { StatusPill } from "./StatusPill";

export function CertificationSplash() {
  return (
    <main id="top" className="page-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="certification-title">
        <div className="hero-copy">
          <StatusPill>{certificationContent.status}</StatusPill>
          <p className="eyebrow">{certificationContent.eyebrow}</p>
          <h1 id="certification-title">{certificationContent.title}</h1>
          <p className="summary">{certificationContent.summary}</p>
          <div className="hero-actions" aria-label="Certification actions">
            <CTAButton href="#path">{certificationContent.primaryAction}</CTAButton>
            <CTAButton href="#readiness" variant="secondary">
              {certificationContent.secondaryAction}
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
        {certificationContent.proofPoints.map((point) => (
          <article className="proof-point" key={point.label}>
            <span>{point.value}</span>
            <p>{point.label}</p>
          </article>
        ))}
      </section>

      <section id="path" className="path-section" aria-labelledby="path-title">
        <div className="section-heading">
          <p className="eyebrow">Certification Path</p>
          <h2 id="path-title">Move from awareness to customer-ready confidence.</h2>
        </div>
        <div className="step-list">
          {certificationContent.steps.map((step, index) => (
            <article className="step-card" key={step.title}>
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
