"use client";

import { useEffect, useState } from "react";
import type { CourseCard } from "@/data/ls/certification";

type CoursePathProps = {
  courses: CourseCard[];
};

export function CoursePath({ courses }: CoursePathProps) {
  const [activeCourse, setActiveCourse] = useState<CourseCard | null>(null);

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
      <div className="course-grid">
        {courses.map((course, index) => (
          <article className="course-card" key={course.id}>
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

      {activeCourse ? (
        <div
          className="course-modal-backdrop"
          role="presentation"
          onMouseDown={() => setActiveCourse(null)}
        >
          <div
            aria-labelledby="course-modal-title"
            aria-modal="true"
            className="course-modal"
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
