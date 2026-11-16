import Link from "next/link";

export default function MoTechPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm font-medium text-sky-400 hover:text-sky-300 mb-8 inline-block">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl font-extrabold text-white mb-2">MoTech Connect</h1>
        <p className="text-xl text-sky-400 font-medium mb-6">Matthew Olushola Tech Connect</p>
        
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-12">
          <p className="text-sm text-slate-300 font-medium">
            A SMEDAN & CAC-registered technology and biomedical innovation brand.
            <span className="text-slate-500 mt-2 block">Founded in 2024. Officially registered in 2026.</span>
            <span className="text-slate-500 mt-1 block">CAC Registration: 9839773 | SMEDAN ID: 6246-470620928392</span>
          </p>
        </div>
        
        <div className="space-y-12 text-slate-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">The Vision</h2>
            <p>
              The future of healthcare and science depends on people who can move fluently between biology and code. I founded MoTech Connect to bridge that gap. The brand serves as a platform where biomedical research, AI, and software engineering meet practical education.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">What We Do</h2>
            <div className="space-y-6 mt-4">
              <div>
                <h3 className="font-bold text-white text-base mb-1">Biomedical AI & Software Engineering</h3>
                <p className="text-base text-slate-400">We build research-grade computational tools, including our flagship BCCAS project (computer vision for microbial colony analysis), alongside data pipelines and web applications for scientific use.</p>
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">Tech & AI Education</h3>
                <p className="text-base text-slate-400">We deliver practical training in Python, AI/ML, and digital tools, equipping scientists, students, and professionals with the computational skills required to solve modern biological problems.</p>
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">Digital Skills & Innovation</h3>
                <p className="text-base text-slate-400">We offer structured training in digital literacy, web/app development, and tech-enabled entrepreneurship to help individuals build sustainable careers in a tech-driven economy.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">Who We Serve</h2>
            <ul className="space-y-2 list-disc list-inside mt-3 text-base text-slate-400">
              <li>Biomedical researchers needing computational support.</li>
              <li>Students transitioning into bioinformatics and health AI.</li>
              <li>Professionals seeking practical digital skills.</li>
              <li>Institutions requiring accessible training in AI and scientific computing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sky-400 mb-3">Mission</h2>
            <p>
              To connect people through accessible, research-informed technology education, empowering the next generation of African scientists and innovators to build at the frontier of biology and computation.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}