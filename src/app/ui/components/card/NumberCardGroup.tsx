import NumberCard from "./NumberCard"
import NumberCardModel from "@/data/model/cards/NumberCard"

/**
 * Grupo de cards numéricos.
 * @author Alexandre Raminelli
 */
export default function NumberCardGroup(
  { cards }: NumberCardGroupProps // props
) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3
      max-sm:divide-y-2 sm:divide-x-2 divide-gray-15 divide-dashed
      first:*:ps-0 first:*:items-start
      last:*:pe-0 last:*:items-end last:*:text-end
      transition-all"
    >
      {cards.map((card, index) => (
        <NumberCard key={index} cardContent={card} />
      ))}
    </div>
  )
}

/** Props de `NumberCardGroup`. */
interface NumberCardGroupProps {
  /** Lista de informações dos cards. */
  cards: NumberCardModel[]
}
