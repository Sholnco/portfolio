import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm font-medium text-sky-400 hover:text-sky-300 mb-8 inline-block">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl font-extrabold text-white mb-10">About Me</h1>
        
        <div className="space-y-10 text-slate-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">Who I Am</h2>
            <p>
              I am Matthew Olushola Oke, a biomedical scientist and engineer working at the intersection of life sciences and technology. My journey started in the microbiology laboratory, where I saw first-hand how much of biomedical research depends on manual, inconsistent processes. That friction pushed me toward computation, first bioinformatics, then biomedical engineering, then software.
            </p>
            <p className="mt-4">
              Today I hold a B.Sc. in Microbiology and a PGD in Biomedical Engineering, and I am completing a B.Sc. in Computer Science (Software Engineering and AI). I work across both sides of the bench: wet-lab research and computational analysis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">What I Do</h2>
            <p>
              I have worked as a laboratory assistant in a medical diagnostics lab, a research intern in genomics and bioinformatics, and I am currently a research intern in pharmaceutical microbiology and biotechnology at the University of Lagos College of Medicine.
            </p>
            <p className="mt-4">
              On the computational side, I build biomedical software and data-driven tools. My flagship project is BCCAS, a computer-vision system that automates microbial colony detection and counting, replacing a slow and subjective manual process with a reliable, automated pipeline. I have also developed a differential-equation model of glucose-insulin dynamics in Type 2 Diabetes and built an offline-first medical support device for patients managing psychosis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">My Vision</h2>
            <p>
              I want to build intelligent laboratory systems that make biomedical data more reliable and diagnostics more accessible. The future of healthcare lies in integrating computation with biology, not as two separate disciplines, but as a single practice. My work is moving toward that: applying computer vision, machine learning, and bioinformatics to real clinical and laboratory problems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">Highlights</h2>
            <ul className="space-y-3 list-disc list-inside mt-3">
              <li><strong>BCCAS:</strong> computer-vision system for automated microbial colony analysis.</li>
              <li><strong>T2DM Computational Model:</strong> differential-equation model of glucose-insulin dynamics using an RK4 numerical solver.</li>
              <li><strong>Offline-First Support Device:</strong> ESP32-S3 device for psychosis management (rule-based, no hallucination risk).</li>
              <li><strong>Peer-reviewed publication</strong> in the Journal of Advances in Medical and Pharmaceutical Sciences (2025), co-authored on molecular docking of indole alkaloids for anticancer evaluation.</li>
              <li><strong>Certifications</strong> in Data Science and Machine Learning (DSN), Software Development (NITDA/3MTT), and Bioinformatics (Genomac).</li>
              <li><strong>Professional memberships</strong> in the American Society for Microbiology (ASM), the Microbiology Society, and the American Society for Clinical Pathology (ASCP).</li>
            </ul>
          </section>

                    <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">Building MoTech Connect</h2>
            <p>
              Beyond the lab, I am the founder of <strong>MoTech Connect</strong>, a technology and biomedical innovation brand founded in 2024 and officially registered with the Nigerian government (CAC and SMEDAN) in 2026. Through MoTech Connect, I bridge the gap between wet-lab research and software engineering by offering AI/Bioinformatics consulting and delivering digital skills training to students and researchers.
            </p>
          </section>


            <p>
              Beyond the lab and the code, I enjoy teaching (AI, science subjects, and programming) and mentoring students. I am particularly interested in building educational tools that make technical subjects more accessible, which is where my teaching and software work meet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}