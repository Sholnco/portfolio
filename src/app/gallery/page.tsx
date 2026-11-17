import Link from "next/link";
import Image from "next/image";

export default function GalleryPage() {
  // We will hardcode the image paths here. 
  // You just need to drop the files into public/images/ and add their names here.
  const images = [
    { src: "/images/lab-work-1.jpg", alt: "Laboratory Work", caption: "Microbiological analysis and diagnostics" },
    { src: "/images/bccas-screenshot.jpg", alt: "BCCAS Interface", caption: "BCCAS Colony Analysis System" },
    { src: "/images/incubator.jpg", alt: "Incubator Prototype", caption: "Low-cost biomedical incubator prototype" },
    { src: "/images/lab-work-2.jpg", alt: "Lab Setup", caption: "Pharmaceutical Microbiology Research" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm font-medium text-sky-400 hover:text-sky-300 mb-8 inline-block">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-4xl font-extrabold text-white mb-4">Gallery</h1>
        <p className="text-slate-400 mb-12 max-w-2xl">
          A visual look at my laboratory research, software projects, and engineering prototypes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <div className="aspect-video relative overflow-hidden">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600 text-sm">
                  Add image to public/images/
                </div>
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                />
              </div>
              <div className="p-4 bg-slate-900/90 backdrop-blur border-t border-slate-800">
                <p className="font-semibold text-white">{img.alt}</p>
                <p className="text-sm text-slate-400">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}