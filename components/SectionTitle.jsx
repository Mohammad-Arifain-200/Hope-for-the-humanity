export default function SectionTitle({ eyebrow, title, centered = true, className = '' }) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className="mb-2 text-[10px] font-bold tracking-[0.28em] text-black/40">{eyebrow}</p>}
      <h2 className="text-3xl font-bold leading-tight text-forest md:text-4xl">{title}</h2>
    </div>
  );
}
