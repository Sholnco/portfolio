import Link from "next/link";
import { profile, skills, projects, experience, education, publication, researchInterests, certifications } from "@/data/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
      <section className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 border-b border-slate-800/50">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-sky-400 font-semibold tracking-wide uppercase text-sm mb-3">{profile.title}</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">{profile.name}</h1>
          <p className="text-lg text-slate-400 leading-relaxed mb-4">{profile.summary}</p>
          <Link href="/statement" className="inline-block text-sky-400 font-medium hover:text-sky-300 mb-8 transition-colors">Read my Research Statement &rarr;</Link><span className="mx-3 text-slate-600">|</span><Link href="/about" className="inline-block text-sky-400 font-medium hover:text-sky-300 mb-8 transition-colors">About Me</Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <a href={`mailto:${profile.email}`} className="bg-sky-500 text-slate-950 px-5 py-2.5 rounded-lg hover:bg-sky-400 transition-colors">Get in touch</a>
            <a href={profile.cvUrl} className="bg-slate-800 text-white px-5 py-2.5 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">Download CV</a>
            <div className="flex items-center gap-4 ml-2">
              <a href={profile.github} className="text-slate-400 hover:text-white transition-colors">GitHub</a>
              <a href={profile.linkedin} className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              <a href={profile.orcid} className="text-slate-400 hover:text-white transition-colors">ORCID</a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg text-sm">01</span> Selected Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group relative block p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium bg-slate-950 text-slate-300 px-3 py-1 rounded-full border border-slate-800">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg text-sm">02</span> Experience</h2>
            <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-6">
              {experience.map((e, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-sky-500 rounded-full ring-4 ring-slate-950"></div>
                  <h3 className="font-semibold text-white text-lg">{e.role}</h3>
                  <p className="text-sky-400 text-sm mb-1">{e.org}</p>
                  <p className="text-slate-500 text-xs font-medium mb-3">{e.period}</p>
                  <ul className="space-y-2 text-sm text-slate-400 leading-relaxed">{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg text-sm">03</span> Education</h2>
            <div className="space-y-6">
              {education.map((ed, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                  <h3 className="font-bold text-white text-lg">{ed.degree}</h3>
                  <p className="text-sky-400 text-sm mb-1">{ed.school}</p>
                  <p className="text-slate-500 text-xs font-medium mb-3">{ed.period}</p>
                  {ed.detail && <p className="text-slate-400 text-sm leading-relaxed">{ed.detail}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg text-sm">04</span> Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((group) => (
              <div key={group.category} className="border-b border-slate-800/50 pb-4">
                <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">{group.category}</h3>
                <div className="flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="text-sm text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-16 pt-10 border-t border-slate-800/50">
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg text-sm">05</span> Research Interests</h2>
            <ul className="space-y-3">
              {researchInterests.map((interest, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm hover:text-sky-400 transition-colors"><span className="text-sky-500 mt-0.5">&#9642;</span><Link href="/research">{interest.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg text-sm">06</span> Certifications & Training</h2>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm"><span className="text-sky-500 mt-0.5">&#9642;</span>{cert}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pt-10 border-t border-slate-800/50">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg text-sm">07</span> Publication</h2>
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">{publication.citation}</p>
            <a href={publication.doi} target="_blank" rel="noreferrer" className="inline-block text-sm font-semibold text-sky-400 hover:text-sky-300">Read Paper (DOI) &rarr;</a>
          </div>
        </section>
      </div>
      
    </main>
  );
}