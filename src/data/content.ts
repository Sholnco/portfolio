export const profile = {
  name: "Matthew Olushola Oke",
  title: "Biomedical Scientist, Engineer & Researcher",
  subtitle: "AI/ML · Bioinformatics · Software",
  location: "Lagos, Nigeria",
  email: "matthewolushola@gmail.com",
  phone: "+234 813 055 8720",
  linkedin: "https://linkedin.com/in/olushola-matthew-b185481a",
  github: "https://github.com/Sholnco",
  orcid: "https://orcid.org/0000-0002-5307-0446",
  summary:
    "Biomedical scientist and engineer with a B.Sc. in Microbiology, a PGD in Biomedical Engineering, and ongoing B.Sc. studies in Computer Science (Software Engineering & AI). Bridges wet-lab research with computation - experienced in microbiological and clinical laboratory research, genomics and bioinformatics, and scientific writing, with a completed portfolio of AI/ML and software projects for biomedical problems.",
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
    slug: "biomedical-incubator",
    title: "Biomedical Incubator Design Project",
    shortDescription:
      "Low-cost working biomedical incubator prototype featuring temperature stabilization, forced-air heat distribution, and independent environmental monitoring.",
    tags: ["Biomedical Engineering", "Electrical Work", "Hardware", "Lab Equipment"],
    problem:
      "Standard laboratory incubators are expensive and often out of reach for low-resource laboratories, creating a need for a reliable, low-cost alternative for maintaining cell and microbial cultures.",
    approach:
      "Designed and built a working prototype from the ground up, handling the electrical and thermal engineering. Implemented a forced-air heat distribution system for temperature stabilization, built in independent environmental monitoring, and applied safety-focused thermal management to ensure reliable operation.",
    result:
      "A fully working biomedical incubator prototype that demonstrates thermal uniformity, effective insulation, and independent environmental control for laboratory applications.",
    contribution: "I handled the electrical and thermal engineering. I designed the forced-air distribution, implemented the temperature stabilization circuit, and built the independent environmental monitoring system.",
    improvement: "For a production version, I would swap the basic thermal sensors for industrial-grade PID controllers and add a digital interface (LCD/IoT) for real-time data logging to make it fully automated.",
    github: "",
    link: "",
  },
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
    contribution: "I designed the entire computer vision pipeline (OpenCV) and integrated the machine learning models for colony counting. I also developed the plate calibration and QC assessment logic.",
    improvement: "If I rebuilt this, I would use a larger, more diverse dataset of plate images with varying lighting conditions. The current pipeline struggles with heavily contaminated plates or uneven agar surfaces, which I would solve by implementing adaptive thresholding and a deep-learning segmentation model (like U-Net).",
    github: "https://github.com/Sholnco",
    link: "",
  },
  {
    slug: "t2dm-model",
    title: "T2DM Computational Biomedical Model",
    shortDescription:
      "Differential-equation model of glucose-insulin dynamics in Type 2 Diabetes Mellitus, solved numerically with RK4.",
    tags: ["Python", "Numerical Methods", "Biomedical Modelling", "RK4"],
    problem:
      "Understanding glucose-insulin dynamics in Type 2 Diabetes requires modelling how physiological variables change over time - useful for computational analysis of the disease.",
    approach:
      "Developed a mathematical model representing glucose-insulin dynamics, applied differential-equation modelling to capture physiological change over time, and implemented numerical solution methods including Fourth-Order Runge-Kutta (RK4) to analyse model parameters and system behaviour.",
    result:
      "A computational model demonstrating the integration of biomedical engineering, mathematical modelling, numerical methods, and computational analysis of a real physiological system.",
    contribution: "I formulated the mathematical equations representing glucose-insulin dynamics, implemented the Fourth-Order Runge-Kutta (RK4) numerical solver in Python, and analyzed the resulting physiological parameter changes.",
    improvement: "The current model relies on standard physiological parameters. I would improve it by incorporating patient-specific data (e.g., varying insulin sensitivity) to simulate individualized disease progression.",
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
      "Patients managing psychosis/schizophrenia need reliable support between clinical visits - medication reminders and symptom tracking - without dependence on internet connectivity.",
    approach:
      "Designed and built an offline-first ESP32-S3 device with medication reminders, symptom check-ins, and a rule-based conversational assistant with six deterministic intents - deliberately rule-based to avoid hallucination risk.",
    result:
      "A working offline-first support device that prioritises reliability and safety for a vulnerable patient group.",
    github: "https://github.com/Sholnco",
    link: "",
  },
];

export const experience = [
  {
    role: "Research Intern - Pharmaceutical Microbiology & Biotechnology",
    org: "University of Lagos College of Medicine",
    period: "Oct 2026 - Present",
    bullets: [
      "Conduct laboratory-based research in pharmaceutical microbiology and biotechnology, including microbiological investigations and experimental work.",
      "Support experimental documentation, data recording, and analysis; maintain records under established safety and quality procedures.",
    ],
  },
  {
    role: "Research Intern - Genomics & Bioinformatics",
    org: "Genomac Institute Inc. - Remote",
    period: "May 2025 - Aug 2025",
    bullets: [
      "Conducted comparative and viral genomics projects using computational tools and biological datasets; performed DNA/RNA sequence analysis.",
      "Strengthened scientific writing and presentation through project reports and manuscript preparation.",
    ],
  },
  {
    role: "Laboratory Assistant",
    org: "Francel Medical Laboratory, Lagos",
    period: "Jun 2022 - Apr 2025",
    bullets: [
      "Performed microbiology diagnostics - culture, specimen analysis, and antimicrobial testing - across bacteriology, parasitology, and TB testing.",
      "Maintained laboratory records and documentation to quality and safety standards, supporting accurate reporting and traceability.",
    ],
  },
  {
    role: "Corps Liaison Officer & Volunteer Field Monitor",
    org: "NYSC & WHO",
    period: "May 2021 - Apr 2022",
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
    period: "2015 - 2019",
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
    "Ekpunobi, F. N., Okoye, S. C., Oghonyon, E. I., Chukwunwejim, C. R., Ochieng, M. A., Idowu, O. T., Usen-Obong, S., Olushola, M. O., & Agu, K. C. (2025). Computational evaluation of indole alkaloids from Rauwolfia vomitoria as potential anticancer agents: Molecular docking and ADME profiling. Journal of Advances in Medical and Pharmaceutical Sciences, 27(10), 62-81.",
  doi: "https://doi.org/10.9734/jamps/2025/v27i10823",
};

export const researchInterests = [
  { title: "Medical & Biomedical Research", desc: "Laboratory-based investigation of biomedical and health-related problems." },
  { title: "Pharmaceutical Microbiology & Biotechnology", desc: "Microbiological research relevant to pharmaceutical and biotechnology applications." },
  { title: "Clinical & Medical Laboratory Research", desc: "Laboratory investigation, diagnostic methods, biological data, and evidence-based biomedical research." },
  { title: "Computational Microbiology", desc: "Integration of microbiological experimentation with computational analysis and quantitative methods." },
  { title: "Biomedical AI & Machine Learning", desc: "Development and application of AI/ML methods to biomedical and laboratory problems." },
  { title: "Bioinformatics & Computational Biology", desc: "Computational analysis of biological data, genomics, and molecular information." },
  { title: "Biomedical Image Analysis & Computer Vision", desc: "Image-based analysis of microbial and biomedical specimens and laboratory data." },
  { title: "Laboratory Automation & Intelligent Systems", desc: "Development of computational and engineering approaches for improving laboratory workflows and analysis." },
  { title: "Biomedical Data Science", desc: "Statistical analysis, predictive modelling, and data-driven approaches to biomedical research." },
  { title: "Antimicrobial & Infectious Disease Research", desc: "Microbiological and computational approaches to antimicrobial activity, microbial analysis, and infectious disease research." },
  { title: "Biomedical Engineering & Modelling", desc: "Application of engineering, mathematical, and computational methods to biomedical systems and research." }
];

export const certifications = [
  "Software Development - NITDA / 3MTT (2025)",
  "Data Science & Machine Learning - Data Science Nigeria (2025)",
  "Research Internship, Bioinformatics - Genomac Institute (2025)",
  "Bioinformatics Training - Helix Biogen Institute & ASM (2024)",
  "ISGlobal Barcelona Summer & Spring Programs (2024)",
  "Viral Genomics Mini Project - Genomac Institute (2025)",
  "Comparative Genomics Workshop - Genomac Institute (2025)",
  "Research Writing in Bioinformatics - Genomac Institute (2025)",
  "Academic Writing Skills - American Society for Microbiology (2025)"
];

export const researchStatement = `
I am driven by a single question: How can computational methods bridge the gap between raw laboratory data and clinical application? My background uniquely positions me to answer this. I began my career in wet-lab medical microbiology, where I experienced first-hand the inefficiencies of manual processes - specifically, the subjective and error-prone nature of counting microbial colonies.

This friction drove me to pursue a Postgraduate Diploma in Biomedical Engineering and led me to build the Biological Colony Chamber Analysis System (BCCAS). Building BCCAS taught me that applying computer vision to biological problems is not just about writing code; it requires understanding the biological constraints (like agar glare and colony overlapping) and the clinical need for reliable, reproducible data.

My research interests span Biomedical AI, computational microbiology, and bioinformatics. I am particularly interested in applying deep learning to diagnostic imaging and genomic data to facilitate early disease detection. Through my genomics internship at Genomac Institute and my ongoing B.Sc. in Computer Science, I am actively building the software engineering and data science foundations required to execute rigorous, reproducible computational research.

Ultimately, my goal in pursuing a Masters/PhD is to develop intelligent laboratory systems that not only automate workflows but also extract actionable insights from complex biological datasets, making diagnostics faster, cheaper, and more accessible.
`;