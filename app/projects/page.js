import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export const metadata = { title: 'Projects | The Hope Project' };

export default function ProjectsPage(){
  return <>
    <PageHero title="Our Projects" subtitle="Practical, community-led programs creating measurable change for children and families." image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85"/>
    <section className="section-pad"><div className="container-site"><SectionTitle eyebrow="WHAT WE DO" title="Hope in Action"/><p className="mx-auto mt-5 max-w-3xl text-center leading-7 text-black/60">Our projects focus on the essentials children need to thrive: learning, nutrition, clean water, health, care and stronger communities.</p><div className="mt-10 flex flex-wrap justify-center gap-2">{['All Projects','Education','Nutrition','Water','Health','Care','Community'].map((x,i)=><span key={x} className={`px-4 py-2 text-xs font-bold ${i===0?'bg-forest text-white':'bg-cream text-forest'}`}>{x}</span>)}</div><div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">{projects.map(p=><ProjectCard key={p.title} project={p}/>)}</div></div></section>
    <section className="bg-cream py-16"><div className="container-site flex flex-col gap-7 text-center md:flex-row md:items-center md:justify-between md:text-left"><div><p className="text-xs font-bold tracking-[.22em] text-black/40">HELP US DO MORE</p><h2 className="mt-2 text-4xl font-bold">Support the next project.</h2><p className="mt-3 text-black/60">Your contribution helps turn plans into classrooms, meals, clean water and care.</p></div><Link href="/donate" className="btn-primary">Donate Now →</Link></div></section>
  </>;
}
