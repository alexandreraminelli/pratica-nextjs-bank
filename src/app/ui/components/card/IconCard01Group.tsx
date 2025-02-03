import SimpleIconCard from "@/data/model/cards/SimpleIconCard"
import IconCard01 from "./IconCard01"

/**
 * Grupo de cards `SimpleIconCard01`.
 * @author Alexandre Raminelli
 */
export default function IconCard01Group(
  { cards }: IconCard01GroupProps // props
) {
  return (
    <div
      className="grid grid-cols-2
      p-5 md:p-10 gap-2.5
      bg-gray-11 rounded-2xl
      transition-all"
    >
      {cards.map((card, index) => (
        <IconCard01 key={index} card={card} />
      ))}
    </div>
  )
}

/** Props de `IconCard01Group`. */
interface IconCard01GroupProps {
  /** Lista de cards. */
  cards: SimpleIconCard[]
}
