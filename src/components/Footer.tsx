import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16 mt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Open to Opportunities</h3>
        <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
          I am always open to opportunities in biotechnology, biomedical engineering, bioinformatics, data science, and software development. I also bring experience in teaching coding, digital technology, and STEM subjects (biology, chemistry, physics, mathematics, and further maths). Whether you would like to discuss collaboration, research, or career opportunities, feel free to reach out.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium mb-10">
          <a href={`mailto:${profile.email}`} className="text-sky-400 hover:text-sky-300 transition-colors">Email</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">LinkedIn</a>
          <a href={profile.orcid} target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors">ORCID</a>
          <a href="/motech-connect" className="text-sky-400 hover:text-sky-300 transition-colors">MoTech Connect</a>
          <a href="/gallery" className="text-sky-400 hover:text-sky-300 transition-colors">Gallery</a>
        </div>

        <p className="text-slate-600 text-xs">
          &copy; 2026 {profile.name}
        </p>
      </div>
    </footer>
  );
}