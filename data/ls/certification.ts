export type CertificationStep = {
  title: string;
  description: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  rotatingPhrases: string[];
  summary: string;
  primaryAction: string;
  secondaryAction: string;
  secondaryHref: string;
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
  id: string;
  title: string;
  summary: string;
  estimatedTime: string;
  description: string;
  href: string;
  buttonLabel: string;
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

export const certificationGuideHref =
  "https://d2zd6ny1q7rvh6.cloudfront.net/02e3df82-954a-47ca-97ab-c725168acaba/2bd914f58a98456e9624f1bd8bea3367?response-content-disposition=inline%3B%20filename%2A%3DUTF-8%27%27Introduction-to-Layered-Security-Certification-Guide.pdf&response-content-type=application%2Fpdf&Expires=1783641600&Signature=BhOgILkvvoLbbMNa~g7rLqfzEOfwL-zhQnUgSplbAa8LtjpoU44hGwkwD4ZP7Iu~4E5K0AFOAQlWj6JRy~GLoG1wHns2ZikKzvK-khF3K1B20Ksdv-1RkSVjDv-kJNccBd54rZOVSatpRgMwZ9FWAh~ughqWTFBPsKfxSxUqvHid62S7pcLAumBZjwcXQ1Yp-BBLyFTZdggHoRue-rma6wbNSLgRGadrT7FSG3rjhBltkTPrUNO~4naK~fwjYaQmckL0Ty8cfdkqycRdiftQDtCskW93fm171CuqI-PWDoXaZPsQ9H~qr1lmXSEvUnWghsXnUl5CBRRstC1-jti5bQ__&Key-Pair-Id=APKAI33AGAEAYCXFBDTA";

export const certificationContent: CertificationContent = {
  eyebrow: "Certified Layered Security Specialist",
  title: "Certification Built to:",
  summary:
    "Build the confidence to lead meaningful security conversations, identify customer risk, and position layered security solutions that protect devices, documents, users, and data.",
  primaryAction: "Start Certification",
  secondaryAction: "View Readiness Path",
  status: "Certification splash page",
  hero: {
    eyebrow: "Certified Layered Security Specialist",
    title: "Certification Built to:",
    rotatingPhrases: ["DRIVE SALES", "START CONVERSATIONS", "BUILD PARTNERSHIPS"],
    summary:
      "Build the confidence to lead meaningful security conversations, identify customer risk, and position layered security solutions that protect devices, documents, users, and data.",
    primaryAction: "Start Certification",
    secondaryAction: "Download Certification Guide (PDF)",
    secondaryHref: certificationGuideHref,
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
        id: "course-01",
        title: "Layered Security Certification Introduction and Program Overview",
        summary:
          "Introduces the Layered Security certification process, sales approach, expectations, tracking requirements, and customer conversation model.",
        estimatedTime: "Self-paced course",
        description:
          "Layered Security Certification: Introduction and Program Overview introduce the Layered Security Certification process and the repeatable sales approach that supports customer engagement, layered security conversations, and measurable business activity. This course provides an overview of the Layered Security Model, certification expectations, Salesforce campaign tracking requirements, Success Blueprint participation, and the role layered security plays in supporting stronger customer conversations and business opportunities.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dLSC%5fIAPO%26componentTypeID%3dONLINE%26revisionDate%3d1779380340000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-02",
        title: "Layered Security: Introducing the Model",
        summary:
          "Explains how to use the Layered Security Model to discuss data and document security risks with customers.",
        estimatedTime: "Self-paced course",
        description:
          "The Layered Security Model is a way to engage clients about data and document security, and position beneficial outcomes for client organizations. This course will enable you to describe the risks to data and documents in the client's MFPs, and explain how Konica Minolta mitigates those risks. You will be prepared to ask your client effective questions about the security outcomes they need in order to protect their MFPs, documents, and data.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dLS%5fITM%26componentTypeID%3dONLINE%26revisionDate%3d1737649920000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-03",
        title: "bizhub Security at the MFP",
        summary:
          "Prepares learners to lead with bizhub SECURE and explain how MFP security supports compliance and data protection.",
        estimatedTime: "Self-paced course",
        description:
          "Grow your sales and cultivate customer loyalty by leading with our bizhub SECURE service during your client conversations. Chris Bilello, VP of Business Solutions Development, explains the importance and value of bizhub SECURE as a key component of the Konica Minolta Layered Security model. This course will help you: 1. Raise client awareness about the threats to data that pass through MFPs 2. Speak confidently to clients about the importance of securing MFPs to safeguard sensitive information 3. Describe how bizhub SECURE helps clients achieve regulatory compliance.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dBIZHUB%5fBSMFP%26componentTypeID%3dONLINE%26revisionDate%3d1733411880000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-04",
        title: "MFP Protection Team",
        summary:
          "Covers the security outcomes provided by bizhub SECURE, bizhub SECURE Notifier, and Bitdefender.",
        estimatedTime: "Self-paced course",
        description:
          "This course will enable you to describe the security outcomes provided by bizhub SECURE, bizhub SECURE Notifier, and Bitdefender. Clients are increasingly concerned about security of data and documents at the MFP. Konica Minolta's Layered Security model can assure clients that their important data is protected.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dMFPPT%5fBSBSNB%26componentTypeID%3dONLINE%26revisionDate%3d1739894820000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-05",
        title: "User Authentication and Access Control",
        summary:
          "Helps learners position user authentication and access control capabilities in customer conversations.",
        estimatedTime: "Self-paced course",
        description:
          "Learn to position Konica Minolta's User Authentication and Access Control capabilities. Prepare yourself to explain these security capabilities when you meet with clients. By completing this module, you will be able to confidently describe how your clients benefit from user authentication and access control.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dUA%5fACCESSCONTROL%26componentTypeID%3dONLINE%26revisionDate%3d1748550300000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-06",
        title: "Document Security",
        summary:
          "Explains document security outcomes including queue cleanup, encryption, audit reporting, and watermarking.",
        estimatedTime: "Self-paced course",
        description:
          "This course will prepare you to explain essential outcomes that strengthen data security for your clients: 1. Deletion of inactive files in print queues 2. Encryption of print job data during transmission over a network 3. Auditing and reporting on all document activity for compliance 4. Watermarking of sensitive documents to deter unauthorized use By completing this course, you will be ready to communicate the value of Konica Minolta's document security capabilities.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dDS%26componentTypeID%3dONLINE%26revisionDate%3d1750710780000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-07",
        title: "BreachAlert",
        summary:
          "Shows how BreachAlert helps detect potential MFP document and data breaches and protect customer information.",
        estimatedTime: "Self-paced course",
        description:
          "Document and Data breaches at the MFP present serious risks for an organization's reputation, finances, and overall security posture. This course helps sales personnel communicate how BreachAlert can detect potential breaches at the MFP and mitigate negative impacts of such breaches. You will be able to confidently describe how BreachAlert and Konica Minolta MFPs can detect potential breaches, notify the organization, and protect valuable information. This will enhance your success and help you build trust with your clients.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dBREACH%5fIDADB%26componentTypeID%3dONLINE%26revisionDate%3d1730903100000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-08",
        title: "Centralized Security Management",
        summary:
          "Prepares learners to explain monitoring, visibility, and automatic remediation across an MFP fleet.",
        estimatedTime: "Self-paced course",
        description:
          "This course prepares you to explain the 3 main outcomes of Centralized Security Management: 1.Monitoring and management of MFP security policies 2. Visibility to the security status of the entire fleet of MFPs 3. Automatic remediation to correct any compromised security settings discovered by monitoring. By completing this course, you will be able to communicate the value that your clients can derive from Centralized Security Management. You will be able to describe the key capabilities of the Shield Guard solution for security management of an entire fleet of MFPs.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dCSMWSG%26componentTypeID%3dONLINE%26revisionDate%3d1750771140000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-09",
        title: "Secure Workflow",
        summary:
          "Equips learners to uncover security gaps, identify workflow risks, and connect secure workflows to business outcomes.",
        estimatedTime: "Self-paced course",
        description:
          "This course equips you to lead confident, high-impact security conversations by helping you quickly uncover security gaps, identify workflow risks, and connect secure workflow capabilities to the business outcomes customers value most. By completing this course, you will learn how to position Konica Minolta's solutions as trusted, strategic components of a stronger security posture. You'll learn to: 1. Spot security gaps quickly during discovery 2. Identify workflow risks that matter to decision-makers 3. Translate secure workflow capabilities into clear business value 4. Position Konica Minolta solutions strategically in security discussions 5. Build trust by guiding customers toward smarter, more secure workflows.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dLSSW%26componentTypeID%3dONLINE%26revisionDate%3d1769009580000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-10",
        title: "Success Case Study Story for Healthcare",
        summary:
          "Shows how to use a real healthcare layered-security win to strengthen customer conversations and support multi-solution sales.",
        estimatedTime: "Self-paced course",
        description:
          "This course shows you how to use a real healthcare layered-security win from Services & Solutions Executive Nate Kinsey to strengthen your own customer conversations. You'll learn how to quickly identify security risks common in healthcare and position Konica Minolta's layered security solutions as essential for protecting patient data and meeting compliance requirements. The course also teaches you how to turn success stories into powerful sales tools that build trust and accelerate deals. By the end, you'll have a concise, repeatable way to use proven wins to drive more multi-solution sales.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dLSSB%5fHI%26componentTypeID%3dONLINE%26revisionDate%3d1769008440000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-11",
        title: "Success Case Study for Non-Profit",
        summary:
          "Uses a nonprofit layered-security success story to strengthen discovery, risk positioning, and trust-building conversations.",
        estimatedTime: "Self-paced course",
        description:
          "Join Camyrn Gossert, Services & Solutions Executive and Ken Sessoms, Named Account Executive who joined forces for this strategy big win. This course shows how to use a real nonprofit layered-security success story to strengthen customer conversations. You'll learn how to quickly identify security risks common in nonprofit organizations and position layered security solutions as essential for protecting people, facilities, and sensitive data. The course also demonstrates how to turn proven nonprofit wins into credible stories that build trust and advance multi-solution security conversations. By the end, you'll have a clear, repeatable way to use real-world success to drive impactful security outcomes.",
        href: "https://performancemanager4.successfactors.com/sf/learning?destUrl=https%3a%2f%2fkmbs%2eplateau%2ecom%2flearning%2fuser%2fdeeplink%5fredirect%2ejsp%3flinkId%3dITEM%5fDETAILS%26componentID%3dLSSB%5fNONPROFIT%26componentTypeID%3dONLINE%26revisionDate%3d1778524200000%26targetStudentSysGUID%3d%26actingAs%3d%26fromSF%3dY&company=KonicaMinolta",
        buttonLabel: "TAKE COURSE NOW"
      },
      {
        id: "course-12",
        title: "Success Case Study for Government",
        summary:
          "Uses a government layered-security success story to support security, compliance, and multi-solution customer discussions.",
        estimatedTime: "Self-paced course",
        description:
          "Join Don Davidson, Solutions & Services Executive to understand how to use a real government layered-security success story to strengthen customer conversations. You'll learn how to quickly identify security risks common across government agencies and position layered security solutions as essential for protecting facilities, systems, and sensitive information while supporting regulatory and compliance requirements. The course also demonstrates how to turn proven government wins into credible success stories that build trust and advance multi-solution security conversations. By the end, you'll have a clear, repeatable approach for using real-world results to drive impactful security discussions.",
        href: "#",
        buttonLabel: "TAKE COURSE NOW"
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
