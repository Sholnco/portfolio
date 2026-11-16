import { projects } from "@/data/content";
import { notFound } from "next/navigation";
import Link from "next/link";

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm font-medium text-sky-400 hover:text-sky-300 mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-4xl font-extrabold text-white mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((t) => (
            <span key={t} className="text-xs font-medium bg-slate-900 text-sky-400 px-3 py-1 rounded-full border border-slate-800">{t}</span>
          ))}
        </div>
        <div className="space-y-12">
          <section>
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-wider mb-3">The Problem</h2>
            <p className="text-slate-300 leading-relaxed text-lg">{project.problem}</p>
          </section>
          <section>
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-wider mb-3">The Approach</h2>
            <p className="text-slate-300 leading-relaxed text-lg">{project.approach}</p>
          </section>
          <section>
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-wider mb-3">The Result</h2>
            <p className="text-slate-300 leading-relaxed text-lg">{project.result}</p>
          </section>
          <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-wider mb-3">My Specific Contribution</h2>
            <p className="text-slate-300 leading-relaxed text-lg">{project.contribution}</p>
          </section>
          <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-wider mb-3">What I'd Do Differently</h2>
            <p className="text-slate-300 leading-relaxed text-lg">{project.improvement}</p>
          </section>
        </div>
        {project.github && (
          <div className="mt-16 pt-8 border-t border-slate-800">
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">View Source Code on GitHub</a>
          </div>
        )}
      </div>
    </main>
  );
}