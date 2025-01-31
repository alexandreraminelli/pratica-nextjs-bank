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
      className="flex flex-col md:flex-row items-center
        max-md:divide-y-2 md:divide-x-2 divide-gray-15 divide-dashed"
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
