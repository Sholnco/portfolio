import Link from "next/link";
import { researchStatement } from "@/data/content";

export default function StatementPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm font-medium text-sky-400 hover:text-sky-300 mb-8 inline-block">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl font-extrabold text-white mb-8">Research Statement</h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          {researchStatement.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-slate-300 leading-relaxed text-lg mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}