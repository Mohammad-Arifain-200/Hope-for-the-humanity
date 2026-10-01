'use client';

import PageHero from '@/components/PageHero';
import BlogCard from '@/components/BlogCard';
import { posts } from '@/lib/data';
import { useMemo, useState } from 'react';
import Link from 'next/link';

export default function BlogPage(){
 const [query,setQuery]=useState(''); const [category,setCategory]=useState('All'); const [visible,setVisible]=useState(6);
 const categories=['All',...new Set(posts.map(p=>p.category))];
 const filtered=useMemo(()=>posts.filter(p=>(category==='All'||p.category===category)&&(`${p.title} ${p.description}`.toLowerCase().includes(query.toLowerCase()))),[query,category]);
 const featured=posts[0];
 return <>
  <PageHero title="News & Stories" subtitle="Updates from our programs, communities, volunteers and supporters." image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1800&q=85"/>
  <section className="section-pad pb-10"><div className="container-site"><div className="grid overflow-hidden bg-cream lg:grid-cols-2"><img src={featured.image} alt={featured.title} className="h-full min-h-[360px] w-full object-cover"/><div className="p-8 lg:p-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold">Featured Article · {featured.category}</p><h2 className="mt-3 text-4xl font-bold">{featured.title}</h2><p className="mt-4 leading-7 text-black/60">{featured.description} Read the full story to see how the project came together and what happens next.</p><Link href={`/blog/${featured.slug}`} className="btn-primary mt-6">Read Full Story →</Link></div></div></div></section>
  <section className="pb-20"><div className="container-site"><div className="flex flex-col gap-4 border-y border-black/10 py-5 lg:flex-row lg:items-center lg:justify-between"><input value={query} onChange={e=>setQuery(e.target.value)} className="input-field max-w-md" placeholder="Search stories..."/><div className="flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`px-4 py-2 text-xs font-bold ${category===c?'bg-forest text-white':'bg-mist'}`}>{c}</button>)}</div></div><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.slice(0,visible).map(p=><BlogCard key={p.slug} post={p}/>)}</div>{visible<filtered.length&&<div className="mt-10 text-center"><button onClick={()=>setVisible(v=>v+3)} className="btn-dark">Load More</button></div>}{filtered.length===0&&<p className="py-14 text-center text-black/50">No stories match your search.</p>}</div></section>
 </>;
}
