"use client";

import { useEffect, useRef, useState } from "react";
import type { CourseCard } from "@/data/ls/certification";

type CoursePathProps = {
  courses: CourseCard[];
};

export function CoursePath({ courses }: CoursePathProps) {
  const [activeCourse, setActiveCourse] = useState<CourseCard | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const maxIndex = courses.length - 1;

  const scrollToCourse = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), maxIndex);
    const carousel = carouselRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setCurrentIndex(nextIndex);

    carousel
      ?.querySelector<HTMLElement>(`[data-course-index="${nextIndex}"]`)
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
      carousel.querySelectorAll<HTMLElement>("[data-course-index]")
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

    const nextIndex = Number(closestCard?.dataset.courseIndex ?? 0);

    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
    }
  };

  useEffect(() => {
    if (!activeCourse) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCourse(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCourse]);

  return (
    <>
      <div className="course-carousel" aria-label="Certification courses">
        <div className="course-carousel-header">
          <p className="course-carousel-progress" aria-live="polite">
            Course {currentIndex + 1} of {courses.length}
          </p>
          <div className="course-carousel-controls">
            <button
              aria-label="Previous course"
              className="course-carousel-control"
              disabled={currentIndex === 0}
              type="button"
              onClick={() => scrollToCourse(currentIndex - 1)}
            >
              Previous
            </button>
            <button
              aria-label="Next course"
              className="course-carousel-control"
              disabled={currentIndex === maxIndex}
              type="button"
              onClick={() => scrollToCourse(currentIndex + 1)}
            >
              Next
            </button>
          </div>
        </div>

        <div
          className="course-carousel-viewport"
          ref={carouselRef}
          onScroll={handleCarouselScroll}
        >
          <div className="course-carousel-track">
            {courses.map((course, index) => (
              <article
                className="course-card"
                data-course-index={index}
                key={course.id}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
                <button
                  className="cta-button cta-button--secondary course-card-button"
                  type="button"
                  onClick={() => setActiveCourse(course)}
                >
                  View Course
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {activeCourse ? (
        <div
          className="course-modal-backdrop"
          role="presentation"
          onMouseDown={() => setActiveCourse(null)}
        >
          <div
            aria-labelledby="course-modal-title"
            aria-modal="true"
            className="course-modal course-modal--path"
            role="dialog"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close course details"
              className="course-modal-close"
              type="button"
              onClick={() => setActiveCourse(null)}
            >
              Close
            </button>
            <span className="status-pill">{activeCourse.estimatedTime}</span>
            <h2 id="course-modal-title">{activeCourse.title}</h2>
            <p>{activeCourse.description}</p>
            <div className="course-modal-footer">
              <a
                className="cta-button cta-button--primary"
                href={activeCourse.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {activeCourse.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
