'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  ['Home', '/'], ['Projects', '/projects'], ['About', '/about'], ['Volunteer', '/volunteer'], ['Blog', '/blog'], ['Contact', '/contact']
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === '/';
  const light = isHome;

  const active = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
 <header className="sticky top-0 z-50 w-full bg-forest text-white">
      <div className="container-site flex h-[78px] items-center justify-between gap-4">
        <div className="hidden items-center gap-3 lg:flex">
          {[Facebook, Instagram, Youtube].map((Icon, i) => (
            <a key={i} href="#" aria-label="Social media" className="text-white/70 transition hover:text-gold"><Icon size={15}/></a>
          ))}
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.slice(0,3).map(([label, href]) => (
            <Link key={href} href={href} className={`relative py-2 text-[13px] font-semibold transition hover:text-gold ${active(href) ? 'text-gold' : 'text-white'}`}>{label}</Link>
          ))}
          <Logo light />
          {links.slice(3).map(([label, href]) => (
            <Link key={href} href={href} className={`relative py-2 text-[13px] font-semibold transition hover:text-gold ${active(href) ? 'text-gold' : 'text-white'}`}>{label}</Link>
          ))}
        </nav>

        <div className="lg:hidden"><Logo light /></div>
        <div className="flex items-center gap-3">
          <Link href="/donate" className="hidden border border-white/70 px-4 py-2 text-xs font-bold transition hover:bg-gold hover:text-forest sm:inline-flex">DONATE</Link>
          <button onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center border border-white/30 lg:hidden" aria-label="Toggle menu">
            {open ? <X size={21}/> : <Menu size={21}/>} 
          </button>
        </div>
      </div>

      <div className={`overflow-hidden bg-forest transition-all duration-300 lg:hidden ${open ? 'max-h-[480px] border-t border-white/10' : 'max-h-0'}`}>
        <div className="container-site py-4">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className={`block border-b border-white/10 py-3 text-sm font-semibold ${active(href) ? 'text-gold' : 'text-white'}`}>{label}</Link>
          ))}
          <Link href="/donate" onClick={() => setOpen(false)} className="mt-4 flex w-full justify-center bg-gold px-5 py-3 font-bold text-forest">Donate Now</Link>
        </div>
      </div>
    </header>
  );
}
