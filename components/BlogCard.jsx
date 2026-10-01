import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden bg-white card-hover">
      <div className="image-zoom h-52 overflow-hidden"><img src={post.image} alt={post.title} className="h-full w-full object-cover"/></div>
      <div className="p-5">
        <p className="text-[11px] uppercase tracking-wider text-black/40">{post.date} · {post.category}</p>
        <h3 className="mt-2 text-xl font-bold leading-tight">{post.title}</h3>
        <p className="mt-2 text-sm leading-6 text-black/60">{post.description}</p>
        <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-xs font-bold underline underline-offset-4">Read More <ArrowRight size={13}/></Link>
      </div>
    </article>
  );
}
