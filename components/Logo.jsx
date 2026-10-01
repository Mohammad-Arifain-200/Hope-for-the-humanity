import Link from 'next/link';

export default function Logo({ light = false }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 font-black uppercase leading-none tracking-tight ${light ? 'text-white' : 'text-forest'}`} aria-label="The Hope Project home">
      <span className="grid h-9 w-9 place-items-center bg-gold text-forest text-lg">♥</span>
      <span className="text-[11px] leading-[0.95] tracking-[0.08em]">THE<br/><span className="text-gold">HOPE</span><br/>PROJECT</span>
    </Link>
  );
}
