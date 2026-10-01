import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '@/lib/data';

export function generateStaticParams(){ return posts.map(p=>({slug:p.slug})); }

export default async function BlogDetailPage({ params }){
 const { slug } = await params;
 const post=posts.find(p=>p.slug===slug); if(!post) notFound();
 return <article><section className="relative min-h-[520px] overflow-hidden bg-forest text-white"><img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-forest/75"/><div className="container-site relative flex min-h-[520px] items-end pb-16 pt-28"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">{post.category} · {post.date}</p><h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">{post.title}</h1><p className="mt-4 text-lg text-white/75">{post.description}</p></div></div></section><section className="section-pad"><div className="container-site max-w-3xl prose-custom">{post.content.map((p,i)=><p key={i}>{p}</p>)}<blockquote>Hope grows when people, communities and supporters work together around practical needs.</blockquote><p>Thank you to every volunteer, donor, partner and local leader who makes this work possible.</p><Link href="/blog" className="btn-dark mt-4">← Back to Blog</Link></div></section></article>;
}
