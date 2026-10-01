export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="container-site pt-10">
        <p className="mb-3 text-xs font-bold tracking-[0.28em] text-gold">THE HOPE PROJECT</p>
        <h1 className="text-5xl font-bold md:text-6xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
