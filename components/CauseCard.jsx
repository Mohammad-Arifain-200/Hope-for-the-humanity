import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CauseCard({ item }) {
  return (
    <article className="group overflow-hidden bg-white card-hover">
      <div className="image-zoom h-56 overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover"/></div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-black/60">{item.description}</p>
        <Link href="/projects" className="mt-4 inline-flex items-center gap-1 text-xs font-bold underline underline-offset-4 hover:text-forest2">Learn More <ArrowRight size={13}/></Link>
      </div>
    </article>
  );
}
