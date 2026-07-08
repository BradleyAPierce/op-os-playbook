import { certificationContent } from "@/data/ls/certification";
import { CTAButton } from "./CTAButton";
import { CoursePath } from "./CoursePath";
import { ProcessCarousel } from "./ProcessCarousel";

export function CertificationSplash() {
  const {
    coursePath,
    hero,
    process,
    valueProposition
  } = certificationContent;

  return (
    <main id="top" className="page-shell">
      <section className="hero section--hero" aria-labelledby="certification-title">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="certification-title">{hero.title}</h1>
          <div className="hero-rotator" aria-label={hero.rotatingPhrases.join(", ")}>
            <span className="hero-rotator-track">
              {hero.rotatingPhrases.map((phrase) => (
                <span className="hero-rotator-item" key={phrase}>
                  {phrase}
                </span>
              ))}
              <span className="hero-rotator-item" aria-hidden="true">
                {hero.rotatingPhrases[0]}
              </span>
            </span>
          </div>
          <p className="summary">{hero.summary}</p>
          <div className="hero-actions">
            <CTAButton
              href={hero.secondaryHref}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <CTAButton href="#path" variant="card">
              {hero.primaryAction}
            </CTAButton>
          </div>
        </div>
      </section>

      <section
        className="intro-section"
        aria-labelledby="value-proposition-title"
      >
        <div className="intro-heading">
          <p className="eyebrow">{valueProposition.eyebrow}</p>
          <h2 id="value-proposition-title">{valueProposition.title}</h2>
          <p className="section-summary">{valueProposition.summary}</p>
        </div>
        <div className="value-card-grid">
          {valueProposition.cards.map((card) => (
            <article
              className={
                card.featured ? "value-card value-card--featured" : "value-card"
              }
              key={card.title}
            >
              <h3>{card.title}</h3>
              <p>{card.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="path"
        className="content-section section--path"
        aria-labelledby="path-title"
      >
        <div className="section-heading">
          <div className="section-badge-card" aria-hidden="true">
            <span className="section-badge-label">12-Course Path</span>
            <img
              src="LayeredSecurity_Logo_Badge.png"
              alt=""
              className="section-badge-mark"
            />
          </div>
          <div>
            <p className="eyebrow">{coursePath.eyebrow}</p>
            <h2 id="path-title">{coursePath.title}</h2>
            <p className="section-summary">{coursePath.summary}</p>
          </div>
        </div>
        <CoursePath courses={coursePath.courses} />
      </section>

      <section
        id="process"
        className="content-section section--process"
        aria-labelledby="process-title"
      >
        <div className="section-heading">
          <div className="section-badge-card" aria-hidden="true">
            <span className="section-badge-label">Certification Steps</span>
            <img
              src="LayeredSecurity_Logo_Badge.png"
              alt=""
              className="section-badge-mark"
            />
          </div>
          <div>
            <p className="eyebrow">{process.eyebrow}</p>
            <h2 id="process-title">{process.title}</h2>
            <p className="section-summary">{process.summary}</p>
          </div>
        </div>
        <ProcessCarousel steps={process.steps} />
      </section>
    </main>
  );
}
