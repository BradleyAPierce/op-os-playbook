export type CertificationStep = {
  title: string;
  description: string;
};

export type ProofPoint = {
  value: string;
  label: string;
};

export type CertificationContent = {
  eyebrow: string;
  title: string;
  summary: string;
  primaryAction: string;
  secondaryAction: string;
  status: string;
  proofPoints: ProofPoint[];
  steps: CertificationStep[];
};

export const certificationContent: CertificationContent = {
  eyebrow: "Layered Security Initiative",
  title: "Certification built for secure print, document, and device workflows.",
  summary:
    "A focused launch experience for teams preparing to understand, position, and validate layered security practices across the customer environment.",
  primaryAction: "Start Certification",
  secondaryAction: "View Readiness Path",
  status: "Certification splash page",
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
  ]
};
