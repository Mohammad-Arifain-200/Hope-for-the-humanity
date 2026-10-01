export default function VolunteerCard({ volunteer }) {
  return (
    <article className="group overflow-hidden bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/4.5] overflow-hidden bg-black/5">
        <img
          src={volunteer.image}
          alt={`${volunteer.name}, ${volunteer.role}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-forest">{volunteer.name}</h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-[.14em] text-gold-dark">
          {volunteer.role}
        </p>
        <p className="mt-3 text-sm leading-6 text-black/60">{volunteer.description}</p>
      </div>
    </article>
  );
}
