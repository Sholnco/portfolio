import Link from "next/link";
import { profile, skills, projects, experience, education, publication, researchInterests, certifications } from "@/data/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative border-b border-slate-800/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Available for research, engineering & consulting roles
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            {profile.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-sky-400 font-semibold mb-6">
            {profile.title}
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {profile.summary}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="/about" className="bg-sky-500 text-slate-950 px-8 py-3 rounded-lg font-bold hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              About Me
            </Link>
            <Link href="/statement" className="bg-slate-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-700 transition-colors border border-slate-700">
              Research Statement
            </Link>
            <a href={profile.cvUrl} className="text-slate-300 hover:text-white px-6 py-3 font-medium transition-colors">
              Download CV &darr;
            </a>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE SLIDER */}
      <div className="border-b border-slate-800 bg-slate-900/50 py-6 overflow-hidden flex relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap gap-8 items-center text-sm font-bold tracking-wider text-slate-400 uppercase">
          <span>Biomedical Research</span>
          <span className="text-sky-500">•</span>
          <span>AI & Machine Learning</span>
          <span className="text-sky-500">•</span>
          <span>Bioinformatics & Genomics</span>
          <span className="text-sky-500">•</span>
          <span>Computer Vision</span>
          <span className="text-sky-500">•</span>
          <span>Software Engineering</span>
          <span className="text-sky-500">•</span>
          <span>Biomedical Engineering</span>
          <span className="text-sky-500">•</span>
          <span>Digital Skills Training</span>
          <span className="text-sky-500">•</span>
          <span>STEM Education</span>
          <span className="text-sky-500">•</span>
          
          {/* Duplicate for seamless loop */}
          <span>Biomedical Research</span>
          <span className="text-sky-500">•</span>
          <span>AI & Machine Learning</span>
          <span className="text-sky-500">•</span>
          <span>Bioinformatics & Genomics</span>
          <span className="text-sky-500">•</span>
          <span>Computer Vision</span>
          <span className="text-sky-500">•</span>
          <span>Software Engineering</span>
          <span className="text-sky-500">•</span>
          <span>Biomedical Engineering</span>
          <span className="text-sky-500">•</span>
          <span>Digital Skills Training</span>
          <span className="text-sky-500">•</span>
          <span>STEM Education</span>
          <span className="text-sky-500">•</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        
        {/* HIGHLIGHTS STRIP */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-slate-800 py-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">4+</div>
            <div className="text-sm text-slate-500 font-medium">Years Lab Experience</div>
          </div>
          <div className="text-center border-l border-slate-800">
            <div className="text-3xl font-bold text-white mb-1">3</div>
            <div className="text-sm text-slate-500 font-medium">Major Software Projects</div>
          </div>
          <div className="text-center border-l border-slate-800">
            <div className="text-3xl font-bold text-white mb-1">1</div>
            <div className="text-sm text-slate-500 font-medium">Peer-Reviewed Publication</div>
          </div>
          <div className="text-center border-l border-slate-800">
            <div className="text-3xl font-bold text-white mb-1">8+</div>
            <div className="text-sm text-slate-500 font-medium">Professional Certifications</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Selected Projects</h2>
              <p className="text-slate-400">Where biology meets engineering and code.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group relative flex flex-col p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-full -z-10 group-hover:bg-sky-500/10 transition-colors"></div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">{p.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-semibold bg-slate-950 text-slate-300 px-3 py-1.5 rounded-md border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Experience</h2>
            <div className="space-y-8 border-l border-slate-800 ml-3 pl-6">
              {experience.map((e, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 bg-sky-500 rounded-full ring-4 ring-slate-950"></div>
                  <h3 className="font-bold text-white text-lg">{e.role}</h3>
                  <p className="text-sky-400 text-sm font-medium mb-1">{e.org}</p>
                  <p className="text-slate-500 text-xs font-semibold mb-3 tracking-wide uppercase">{e.period}</p>
                  <ul className="space-y-2 text-sm text-slate-400 leading-relaxed list-disc list-outside ml-4">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Education</h2>
            <div className="space-y-6">
              {education.map((ed, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                  <h3 className="font-bold text-white text-lg">{ed.degree}</h3>
                  <p className="text-sky-400 text-sm font-medium mb-1">{ed.school}</p>
                  <p className="text-slate-500 text-xs font-semibold mb-3 tracking-wide uppercase">{ed.period}</p>
                  {ed.detail && <p className="text-slate-400 text-sm leading-relaxed">{ed.detail}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-bold text-sky-400 mb-3 uppercase tracking-wider">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="text-sm text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH & CERTIFICATIONS */}
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Research Interests</h2>
            <ul className="space-y-3">
              {researchInterests.map((interest, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 hover:text-sky-400 transition-colors">
                  <span className="text-sky-500 mt-1">&#9642;</span>
                  <Link href="/research" className="font-medium">{interest.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Certifications & Training</h2>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="text-sky-500 mt-1">&#9642;</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PUBLICATION */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Publication</h2>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 hover:border-sky-500/30 transition-colors">
            <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6 font-medium">
              {publication.citation}
            </p>
            <a href={publication.doi} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 bg-sky-500/10 px-4 py-2 rounded-lg transition-colors">
              Read Paper (DOI) &rarr;
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}