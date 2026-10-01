import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden border border-black/5 bg-white card-hover">
      <div className="image-zoom h-60 overflow-hidden"><img src={project.image} alt={project.title} className="h-full w-full object-cover"/></div>
      <div className="p-6">
        <p className="text-[10px] font-bold uppercase tracking-[.2em] text-gold">{project.category}</p>
        <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-black/60">{project.description}</p>
        <div className="mt-5 flex items-center justify-between text-xs font-semibold"><span>{project.impact}</span><span>{project.progress}%</span></div>
        <div className="mt-2 h-1.5 bg-black/10"><div className="h-full bg-gold" style={{ width: `${project.progress}%` }}/></div>
        <Link href="/donate" className="mt-5 inline-flex text-sm font-bold underline underline-offset-4">Support this project →</Link>
      </div>
    </article>
  );
}
