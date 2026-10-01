import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const quick = [['Home','/'],['About','/about'],['Our Projects','/projects'],['Volunteer','/volunteer'],['Blog','/blog'],['Contact','/contact']];
  const work = ['Healthy Food','Education','Medical','Pure Water','Love & Care','Travel Activities'];
  return (
    <footer className="bg-[#071b16] text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_.8fr_.8fr_1.25fr_auto]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">Creating a kinder, brighter world for every child through education, nutrition, health, clean water and care.</p>
          <div className="mt-5 flex gap-3 text-white/65">{[Facebook,Instagram,Youtube].map((Icon,i)=><a href="#" key={i} className="hover:text-gold" aria-label="Social media"><Icon size={17}/></a>)}</div>
        </div>
        <div><h4 className="mb-4 font-sans text-sm font-bold">Quick Links</h4>{quick.map(([l,h])=><Link key={h} href={h} className="block py-1 text-sm text-white/60 hover:text-gold">{l}</Link>)}</div>
        <div><h4 className="mb-4 font-sans text-sm font-bold">Our Work</h4>{work.map(l=><span key={l} className="block py-1 text-sm text-white/60">{l}</span>)}</div>
        <div>
          <h4 className="mb-4 font-sans text-sm font-bold">Contact Us</h4>
          <div className="space-y-3 text-sm text-white/60">
            <p className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0"/>123 Hope Street, Dhaka, Bangladesh</p>
            <p className="flex gap-2"><Mail size={16}/>hello@thehopeproject.org</p>
            <p className="flex gap-2"><Phone size={16}/>+880 123 456 789</p>
            <p className="flex gap-2"><Clock size={16}/>Mon–Fri, 9:00 AM – 6:00 PM</p>
          </div>
        </div>
        <div><Link href="/donate" className="btn-primary whitespace-nowrap text-sm">Donate Now</Link></div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 The Hope Project. All rights reserved.</p>
          <div className="flex flex-wrap gap-5"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Sitemap</a></div>
        </div>
      </div>
    </footer>
  );
}
