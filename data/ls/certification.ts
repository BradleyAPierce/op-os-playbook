export type CertificationStep = {
  title: string;
  description: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  summary: string;
  primaryAction: string;
  secondaryAction: string;
  status: string;
};

export type ProofPoint = {
  value: string;
  label: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  summary: string;
};

export type FeaturePoint = {
  title: string;
  description: string;
};

export type AudienceCard = {
  role: string;
  description: string;
};

export type CourseCard = {
  title: string;
  description: string;
  outcome: string;
};

export type CustomerProof = {
  eyebrow: string;
  title: string;
  story: string;
  proofPoints: string[];
  attribution: string;
};

export type FinalCTA = {
  eyebrow: string;
  title: string;
  summary: string;
  primaryAction: string;
  secondaryAction: string;
};

export type CertificationContent = {
  eyebrow: string;
  title: string;
  summary: string;
  primaryAction: string;
  secondaryAction: string;
  status: string;
  hero: HeroContent;
  proofPoints: ProofPoint[];
  whyCertification: SectionIntro & {
    points: FeaturePoint[];
  };
  audience: SectionIntro & {
    roles: AudienceCard[];
  };
  coursePath: SectionIntro & {
    courses: CourseCard[];
  };
  customerProof: CustomerProof;
  steps: CertificationStep[];
  process: SectionIntro & {
    steps: CertificationStep[];
  };
  finalCTA: FinalCTA;
};

export const certificationContent: CertificationContent = {
  eyebrow: "Layered Security Initiative",
  title: "Certification built for secure print, document, and device workflows.",
  summary:
    "A focused launch experience for teams preparing to understand, position, and validate layered security practices across the customer environment.",
  primaryAction: "Start Certification",
  secondaryAction: "View Readiness Path",
  status: "Certification splash page",
  hero: {
    eyebrow: "Layered Security Initiative",
    title: "Certification built for secure print, document, and device workflows.",
    summary:
      "A focused launch experience for teams preparing to understand, position, and validate layered security practices across the customer environment.",
    primaryAction: "Start Certification",
    secondaryAction: "View Readiness Path",
    status: "Certification splash page"
  },
  proofPoints: [
    {
      value: "01",
      label: "Baseline security posture"
    },
    {
      value: "02",
      label: "Layered controls and workflow coverage"
    },
    {
      value: "03",
      label: "Customer-ready certification outcome"
    }
  ],
  whyCertification: {
    eyebrow: "Why It Matters",
    title: "Security conversations need a clear, repeatable framework.",
    summary:
      "Layered Security Certification gives teams a shared way to connect customer risk, practical controls, and secure workflow outcomes.",
    points: [
      {
        title: "Clarify the security story",
        description:
          "Position device, document, user, and data protection as connected layers rather than isolated features."
      },
      {
        title: "Standardize discovery",
        description:
          "Use a consistent readiness lens to identify gaps, customer priorities, and the right next steps."
      },
      {
        title: "Support confident recommendations",
        description:
          "Translate layered controls into customer-ready language that supports solution design and adoption."
      }
    ]
  },
  audience: {
    eyebrow: "Who It Is For",
    title: "Built for teams that guide secure customer outcomes.",
    summary:
      "The certification supports customer-facing and solution-focused roles that need to explain, assess, and position layered security.",
    roles: [
      {
        role: "Sales and account teams",
        description:
          "Teams responsible for opening security conversations and connecting customer needs to solution value."
      },
      {
        role: "Solution consultants",
        description:
          "Specialists who assess workflow requirements and map layered controls to customer environments."
      },
      {
        role: "Implementation and support teams",
        description:
          "Teams that reinforce secure configuration, adoption, and ongoing customer confidence."
      }
    ]
  },
  coursePath: {
    eyebrow: "Course Path",
    title: "Build understanding around the layers of secure customer workflows.",
    summary:
      "The course path focuses on what learners need to understand: the security model, the customer discovery lens, and the value story behind layered protection.",
    courses: [
      {
        title: "Layered Security Foundations",
        description:
          "Introduce the layered security model across devices, documents, users, workflows, and data.",
        outcome: "Learners can explain the core layers and why each matters."
      },
      {
        title: "Customer Readiness Assessment",
        description:
          "Practice identifying risk signals, control gaps, and discovery questions for customer environments.",
        outcome: "Learners can evaluate readiness using a repeatable framework."
      },
      {
        title: "Positioning and Certification Review",
        description:
          "Connect the security framework to customer value, solution recommendations, and certification preparation.",
        outcome: "Learners are prepared to complete the certification checkpoint."
      }
    ]
  },
  customerProof: {
    eyebrow: "Field Proof",
    title: "Use the certification model to make security conversations easier to lead.",
    story:
      "In the field, layered security gives teams a practical way to connect customer concerns to concrete workflow risks. The certification path helps turn a broad security conversation into a clearer discussion about devices, documents, users, data, and the controls that protect them.",
    proofPoints: [
      "Customer challenge and risk context",
      "Layered controls or workflow gaps identified",
      "Outcome, recommendation, or measurable business value"
    ],
    attribution: "Temporary field-story copy for certification preview"
  },
  steps: [
    {
      title: "Orient",
      description:
        "Frame the layered security story around device, document, user, and data protection."
    },
    {
      title: "Assess",
      description:
        "Identify gaps, required controls, and the readiness markers needed before certification."
    },
    {
      title: "Certify",
      description:
        "Complete the certification path with a clear understanding of the customer value narrative."
    }
  ],
  process: {
    eyebrow: "Certification Process",
    title: "Complete certification through a clear sequence of actions.",
    summary:
      "The process explains how learners move through certification completion, from enrollment and coursework to validation and field application.",
    steps: [
      {
        title: "Enroll",
        description:
          "Start the certification experience and review the expected learning outcomes."
      },
      {
        title: "Complete coursework",
        description:
          "Move through the course path and apply the layered security framework to practical scenarios."
      },
      {
        title: "Validate readiness",
        description:
          "Complete the certification checkpoint and confirm the ability to position the framework."
      },
      {
        title: "Apply in the field",
        description:
          "Use the certification framework to support customer discovery, recommendations, and follow-through."
      }
    ]
  },
  finalCTA: {
    eyebrow: "Get Certified",
    title: "Prepare teams to lead layered security conversations with confidence.",
    summary:
      "Use the certification path to build a shared language for secure print, document, device, and workflow outcomes.",
    primaryAction: "Start Certification",
    secondaryAction: "Review Course Path"
  }
};
