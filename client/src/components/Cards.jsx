import Card from "./Card";

export default function Cards({cards, notFound}) {
  return (
    <section className="relative grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {cards?.length > 0 ? cards.map( card => <Card key={card._id} {...card}/>) : <h2 className="absolute top-1/2 left-1/2 translate-x--1/2 translate-y--1/2 mt-5 font-bold text-[var(--orange-clr-drk-op)] text-xl uppercase">{notFound}</h2>}
    </section>
  )
}
