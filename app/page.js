import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services, causes, stats, testimonials, posts } from '@/lib/data';
import CauseCard from '@/components/CauseCard';
import SectionTitle from '@/components/SectionTitle';
import BlogCard from '@/components/BlogCard';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[690px] overflow-hidden bg-forest text-white">
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=88" alt="Child supported by The Hope Project" className="absolute inset-0 h-full w-full object-cover object-center"/>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,28,21,.92)_0%,rgba(8,42,31,.68)_46%,rgba(8,42,31,.18)_78%)]"/>
        <div className="container-site relative flex min-h-[690px] items-center pt-24">
          <div className="max-w-2xl pb-16">
            <h1 className="text-5xl font-bold leading-[1.02] md:text-7xl">Hope For Humanity</h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 md:text-base">We believe every child deserves a safe, healthy and bright future. The Hope Project works in vulnerable communities around the world to provide food, education, medical care and opportunities for a better tomorrow.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/donate" className="btn-primary min-w-[160px]">Donate Now</Link><a href="#featured" className="btn-dark min-w-[150px]">Discover</a></div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-24 pb-16">
        <div className="container-site bg-white p-6 shadow-soft md:p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, idx) => { const Icon = item.icon; return (
              <div key={item.title} className={`group p-7 text-center transition hover:bg-cream ${idx % 3 !== 2 ? 'lg:border-r lg:border-black/10' : ''} ${idx < 3 ? 'lg:border-b lg:border-black/10' : ''}`}>
                <Icon className="mx-auto text-gold transition group-hover:-translate-y-1" size={31}/>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-[260px] text-sm leading-6 text-black/60">{item.description}</p>
                <Link href="/donate" className="mt-3 inline-block text-xs font-bold underline underline-offset-4">{item.link} →</Link>
              </div>
            )})}
          </div>
        </div>
      </section>

      <section id="featured" className="pb-20">
        <div className="container-site">
          <SectionTitle title="Featured Causes" eyebrow="WE LISTEN AND ADVISE"/>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{causes.map(item=><CauseCard key={item.title} item={item}/>)}</div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=85" alt="Volunteer holding a child" className="h-full min-h-[430px] w-full object-cover"/>
        <div className="flex items-center bg-cream px-8 py-16 lg:px-20">
          <div className="max-w-xl"><h2 className="text-4xl font-bold leading-tight md:text-5xl">How you’re changing children’s lives</h2><p className="mt-5 text-base leading-7 text-black/65">Your support helps children get the education, nutrition and care they need to build a brighter future. Together, we’re creating stronger, healthier and more hopeful communities.</p><Link href="/about" className="btn-primary mt-7">Our Impact <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white py-8">
        <div className="container-site grid grid-cols-2 divide-x divide-black/10 md:grid-cols-4">{stats.map(s=><div className="px-4 py-4 text-center" key={s.label}><div className="text-3xl text-gold">{s.icon}</div><div className="mt-1 text-3xl font-bold font-display">{s.value}</div><div className="text-xs text-black/55">{s.label}</div></div>)}</div>
      </section>

      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div><p className="text-[10px] font-bold tracking-[.28em] text-black/40">OUR MISSION</p><h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">A Kinder, Brighter World for Every Child</h2><p className="mt-5 text-sm leading-7 text-black/65">The Hope Project exists to bring lasting change to children and families in vulnerable communities. We work with local partners to provide food, education, healthcare and safe spaces—because every child deserves the chance to learn, grow and achieve their dreams.</p><Link href="/about" className="btn-primary mt-6">Learn More About Us <ArrowRight size={16}/></Link></div>
          <img src="https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1400&q=85" alt="Smiling children" className="h-[390px] w-full object-cover"/>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-12 text-white">
        <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1800&q=85" alt="Children" className="absolute inset-0 h-full w-full object-cover opacity-25"/>
        <div className="absolute inset-0 bg-forest/70"/>
        <div className="container-site relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between"><div><p className="text-[10px] font-bold tracking-[.25em] text-white/60">MAKE A DIFFERENCE TODAY</p><h2 className="mt-2 text-4xl font-bold">Your Donation Changes Lives</h2><p className="mt-2 text-sm text-white/75">Even a small contribution can provide food, education and medical care to a child in need.</p></div><Link href="/donate" className="btn-primary">Donate Now <ArrowRight size={16}/></Link></div>
      </section>

      <section className="section-pad pb-14">
        <div className="container-site"><SectionTitle title="What People Say" eyebrow="REAL STORIES, REAL IMPACT"/><div className="mt-8 grid gap-5 md:grid-cols-3">{testimonials.map(t=><div key={t.name} className="bg-white p-6 shadow-sm ring-1 ring-black/5"><div className="flex items-start gap-4"><img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover"/><div><p className="text-sm leading-6 text-black/65">“{t.quote}”</p><p className="mt-3 text-sm font-bold">{t.name}</p><p className="text-xs text-black/45">{t.role}</p></div></div></div>)}</div></div>
      </section>

      <section className="bg-[#fafafa] py-14"><div className="container-site"><SectionTitle title="Latest News & Stories" eyebrow="UPDATES FROM OUR COMMUNITY"/><div className="mt-8 grid gap-6 md:grid-cols-3">{posts.slice(0,3).map(p=><BlogCard key={p.slug} post={p}/>)}</div></div></section>
      <Newsletter />

      <section className="py-10"><div className="container-site"><h3 className="text-center text-2xl font-bold">Our Partners & Supporters</h3><div className="mt-8 grid grid-cols-2 items-center gap-6 text-center text-lg font-bold text-black/35 sm:grid-cols-3 lg:grid-cols-6"><span>UNICEF</span><span>WFP</span><span>WHO</span><span>Save the Children</span><span>WaterAid</span><span>CARITAS</span></div></div></section>
    </>
  );
}
