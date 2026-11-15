export const profile = {
  name: "Matthew Olushola Oke",
  title: "Biomedical Scientist & Engineer",
  subtitle: "AI/ML · Bioinformatics · Software",
  location: "Lagos, Nigeria",
  email: "matthewolushola@gmail.com",
  phone: "+234 813 055 8720",
  linkedin: "https://linkedin.com/in/olushola-matthew-b185481a",
  github: "https://github.com/Sholnco",
  orcid: "https://orcid.org/0000-0002-5307-0446",
  summary:
    "Biomedical scientist and engineer with a B.Sc. in Microbiology, a PGD in Biomedical Engineering, and ongoing B.Sc. studies in Computer Science (Software Engineering & AI). Bridges wet-lab research with computation — experienced in microbiological and clinical laboratory research, genomics and bioinformatics, and scientific writing, with a completed portfolio of AI/ML and software projects for biomedical problems.",
  cvUrl: "/cv.pdf",
};

export const skills = [
  {
    category: "Laboratory & Biomedical Science",
    items: ["Medical Microbiology", "Pharmaceutical Microbiology", "Biotechnology", "Microbial Analysis", "Laboratory Diagnostics", "Antimicrobial Testing", "Specimen Handling", "Laboratory Safety & Quality"],
  },
  {
    category: "Programming & Software",
    items: ["Python", "SQL", "Software Development", "Scientific Programming", "Data Processing", "Image Processing"],
  },
  {
    category: "AI & Data Science",
    items: ["Machine Learning", "Computer Vision", "OpenCV", "Predictive Analytics", "Statistical Data Analysis", "Pandas", "NumPy", "scikit-learn", "Data Visualization"],
  },
  {
    category: "Bioinformatics & Computational Biology",
    items: ["Bioinformatics", "Comparative Genomics", "Viral Genomics", "Sequence Analysis", "DNA/RNA Data Analysis"],
  },
  {
    category: "Biomedical Engineering & Modelling",
    items: ["Computational Biomedical Engineering", "Biomedical Mathematical Modelling", "Differential-Equation Modelling", "Numerical Methods (RK4)"],
  },
  {
    category: "Tools",
    items: ["Power BI", "Microsoft Excel", "Git/GitHub"],
  },
];

export const projects = [
  {
    slug: "bccas",
    title: "Biological Colony Chamber Analysis System (BCCAS)",
    shortDescription:
      "Computer-vision system that automatically detects, counts, and analyses microbial colonies from laboratory plate images.",
    tags: ["Python", "OpenCV", "Machine Learning", "Microbiology"],
    problem:
      "Manual microbial colony counting is slow, subjective, and error-prone. Laboratory workflows need a consistent, automated method for quantifying colonies from plate images.",
    approach:
      "Built an image-processing pipeline using OpenCV to detect colonies from plate photographs, integrated machine-learning refinement for count accuracy, and added plate calibration, quality-control checks, and statistical analysis. Designed around real microbiology laboratory workflows.",
    result:
      "A working system that automates colony detection and quantification, connects microbiological lab workflows to biomedical software, and provides research-oriented data management.",
    github: "https://github.com/Sholnco",
    link: "",
  },
  {
    slug: "t2dm-model",
    title: "T2DM Computational Biomedical Model",
    shortDescription:
      "Differential-equation model of glucose–insulin dynamics in Type 2 Diabetes Mellitus, solved numerically with RK4.",
    tags: ["Python", "Numerical Methods", "Biomedical Modelling", "RK4"],
    problem:
      "Understanding glucose–insulin dynamics in Type 2 Diabetes requires modelling how physiological variables change over time — useful for computational analysis of the disease.",
    approach:
      "Developed a mathematical model representing glucose–insulin dynamics, applied differential-equation modelling to capture physiological change over time, and implemented numerical solution methods including Fourth-Order Runge–Kutta (RK4) to analyse model parameters and system behaviour.",
    result:
      "A computational model demonstrating the integration of biomedical engineering, mathematical modelling, numerical methods, and computational analysis of a real physiological system.",
    github: "https://github.com/Sholnco",
    link: "",
  },
  {
    slug: "psychosis-device",
    title: "Offline-First Support Device for Psychosis Management",
    shortDescription:
      "ESP32-S3 wearable/desktop device delivering medication reminders, symptom check-ins, and a rule-based assistant.",
    tags: ["ESP32-S3", "Embedded C", "Healthcare Tech"],
    problem:
      "Patients managing psychosis/schizophrenia need reliable support between clinical visits — medication reminders and symptom tracking — without dependence on internet connectivity.",
    approach:
      "Designed and built an offline-first ESP32-S3 device with medication reminders, symptom check-ins, and a rule-based conversational assistant with six deterministic intents — deliberately rule-based to avoid hallucination risk.",
    result:
      "A working offline-first support device that prioritises reliability and safety for a vulnerable patient group.",
    github: "https://github.com/Sholnco",
    link: "",
  },
];

export const experience = [
  {
    role: "Research Intern — Pharmaceutical Microbiology & Biotechnology",
    org: "University of Lagos College of Medicine",
    period: "Oct 2026 – Present",
    bullets: [
      "Conduct laboratory-based research in pharmaceutical microbiology and biotechnology, including microbiological investigations and experimental work.",
      "Support experimental documentation, data recording, and analysis; maintain records under established safety and quality procedures.",
    ],
  },
  {
    role: "Research Intern — Genomics & Bioinformatics",
    org: "Genomac Institute Inc. — Remote",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Conducted comparative and viral genomics projects using computational tools and biological datasets; performed DNA/RNA sequence analysis.",
      "Strengthened scientific writing and presentation through project reports and manuscript preparation.",
    ],
  },
  {
    role: "Laboratory Assistant",
    org: "Francel Medical Laboratory, Lagos",
    period: "Jun 2022 – Apr 2025",
    bullets: [
      "Performed microbiology diagnostics — culture, specimen analysis, and antimicrobial testing — across bacteriology, parasitology, and TB testing.",
      "Maintained laboratory records and documentation to quality and safety standards, supporting accurate reporting and traceability.",
    ],
  },
  {
    role: "Corps Liaison Officer & Volunteer Field Monitor",
    org: "NYSC & WHO",
    period: "May 2021 – Apr 2022",
    bullets: [
      "Monitored WHO health initiatives and community outreach programmes, tracking progress against project goals.",
      "Coordinated corps members' activities and facilitated communication between NYSC, community leaders, and project teams.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. Microbiology (Medical)",
    school: "Olabisi Onabanjo University, Nigeria",
    period: "2015 – 2019",
    detail: "Focus: Medical Microbiology, Laboratory Diagnostics, Microbial Analysis, Research Methodology",
  },
  {
    degree: "PGD Biomedical Engineering",
    school: "University of Lagos, Nigeria",
    period: "Completed October 2026 (certificate pending)",
    detail: "Focus: Computational Biomedical Engineering, Biomedical Data Science, Machine Learning, Bioinformatics, Software Development, Biomedical Systems",
  },
  {
    degree: "B.Sc. Computer Science (Software Engineering & AI)",
    school: "University of the People",
    period: "Started 2026 (in progress)",
    detail: "",
  },
];

export const publication = {
  citation:
    "Ekpunobi, F. N., Okoye, S. C., Oghonyon, E. I., Chukwunwejim, C. R., Ochieng, M. A., Idowu, O. T., Usen-Obong, S., Olushola, M. O., & Agu, K. C. (2025). Computational evaluation of indole alkaloids from Rauwolfia vomitoria as potential anticancer agents: Molecular docking and ADME profiling. Journal of Advances in Medical and Pharmaceutical Sciences, 27(10), 62–81.",
  doi: "https://doi.org/10.9734/jamps/2025/v27i10823",
};