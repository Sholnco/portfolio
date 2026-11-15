import { projects } from "@/data/content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <a href="/" className="text-sm text-sky-400 hover:underline">← Back</a>
      <h1 className="mt-4 text-3xl font-bold text-white">{project.title}</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs bg-sky-950 text-sky-300 px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
      <div className="mt-8 space-y-6 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-sky-400 mb-1">Problem</h2>
          <p>{project.problem}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-sky-400 mb-1">Approach</h2>
          <p>{project.approach}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-sky-400 mb-1">Result</h2>
          <p>{project.result}</p>
        </div>
      </div>
      {project.github && (
        <a href={project.github} className="inline-block mt-8 text-sky-400 hover:underline">
          View on GitHub →
        </a>
      )}
    </main>
  );
}