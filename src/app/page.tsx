import Link from "next/link";
import { profile, skills, projects, experience, education, publication } from "@/data/content";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* HERO */}
      <section className="mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{profile.name}</h1>
        <p className="mt-3 text-xl text-sky-400">{profile.title}</p>
        <p className="text-slate-400">{profile.subtitle}</p>
        <p className="mt-6 max-w-2xl text-slate-300 leading-relaxed">{profile.summary}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a href={profile.github} className="text-sky-400 hover:underline">GitHub</a>
          <a href={profile.linkedin} className="text-sky-400 hover:underline">LinkedIn</a>
          <a href={profile.orcid} className="text-sky-400 hover:underline">ORCID</a>
          <a href={`mailto:${profile.email}`} className="text-sky-400 hover:underline">{profile.email}</a>
          <a href={profile.cvUrl} className="text-sky-400 hover:underline">Download CV</a>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-6">Selected Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block p-6 rounded-xl border border-slate-800 bg-slate-900 hover:border-sky-500 transition"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.shortDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-sky-950 text-sky-300 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-sky-400 mb-2">{group.category}</h3>
              <p className="text-sm text-slate-400">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((e, i) => (
            <div key={i} className="border-l-2 border-sky-700 pl-4">
              <h3 className="font-semibold text-white">{e.role}</h3>
              <p className="text-sm text-slate-400">{e.org} · {e.period}</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-300 list-disc list-inside">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
        <div className="space-y-4">
          {education.map((ed, i) => (
            <div key={i}>
              <h3 className="font-semibold text-white">{ed.degree}</h3>
              <p className="text-sm text-slate-400">{ed.school} · {ed.period}</p>
              {ed.detail && <p className="text-sm text-slate-500 mt-1">{ed.detail}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* PUBLICATION */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-6">Publication</h2>
        <p className="text-sm text-slate-300 leading-relaxed">{publication.citation}</p>
        <a href={publication.doi} className="text-sm text-sky-400 hover:underline">DOI</a>
      </section>

      <footer className="text-sm text-slate-500 border-t border-slate-800 pt-6">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}