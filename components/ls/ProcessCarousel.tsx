"use client";

import { useEffect, useRef, useState } from "react";
import type { CertificationStep } from "@/data/ls/certification";

type ProcessCarouselProps = {
  steps: CertificationStep[];
};

export function ProcessCarousel({ steps }: ProcessCarouselProps) {
  const [activeStep, setActiveStep] = useState<CertificationStep | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const maxIndex = steps.length - 1;

  const scrollToStep = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), maxIndex);
    const carousel = carouselRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setCurrentIndex(nextIndex);

    carousel
      ?.querySelector<HTMLElement>(`[data-process-index="${nextIndex}"]`)
      ?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "start"
      });
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const cards = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-process-index]")
    );

    const closestCard = cards.reduce<HTMLElement | null>((closest, card) => {
      if (!closest) {
        return card;
      }

      const cardDistance = Math.abs(card.offsetLeft - carousel.scrollLeft);
      const closestDistance = Math.abs(
        closest.offsetLeft - carousel.scrollLeft
      );

      return cardDistance < closestDistance ? card : closest;
    }, null);

    const nextIndex = Number(closestCard?.dataset.processIndex ?? 0);

    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
    }
  };

  useEffect(() => {
    if (!activeStep) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveStep(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeStep]);

  return (
    <>
      <div className="process-carousel" aria-label="Certification process steps">
        <div className="process-carousel-header">
          <p className="process-carousel-progress" aria-live="polite">
            Step {currentIndex + 1} of {steps.length}
          </p>
          <div className="process-carousel-controls">
            <button
              aria-label="Previous certification step"
              className="process-carousel-control"
              disabled={currentIndex === 0}
              type="button"
              onClick={() => scrollToStep(currentIndex - 1)}
            >
              Previous
            </button>
            <button
              aria-label="Next certification step"
              className="process-carousel-control"
              disabled={currentIndex === maxIndex}
              type="button"
              onClick={() => scrollToStep(currentIndex + 1)}
            >
              Next
            </button>
          </div>
        </div>

        <div
          className="process-carousel-viewport"
          ref={carouselRef}
          onScroll={handleCarouselScroll}
        >
          <div className="process-carousel-track">
            {steps.map((step, index) => (
              <article
                className="process-card"
                data-process-index={index}
                key={step.id}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
                <button
                  className="cta-button process-card-button"
                  type="button"
                  onClick={() => setActiveStep(step)}
                >
                  {step.buttonLabel}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {activeStep ? (
        <div
          className="course-modal-backdrop"
          role="presentation"
          onMouseDown={() => setActiveStep(null)}
        >
          <div
            aria-labelledby="process-modal-title"
            aria-modal="true"
            className="course-modal process-modal--process"
            role="dialog"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close certification step details"
              className="course-modal-close"
              type="button"
              onClick={() => setActiveStep(null)}
            >
              Close
            </button>
            <span className="status-pill">{activeStep.pillLabel}</span>
            <h2 id="process-modal-title">{activeStep.title}</h2>
            <p>{activeStep.description}</p>
            <div className="course-modal-footer">
              <a
                className="cta-button cta-button--primary"
                href={activeStep.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {activeStep.modalButtonLabel}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
