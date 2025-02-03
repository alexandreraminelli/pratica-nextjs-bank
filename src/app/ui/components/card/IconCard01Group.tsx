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
    <div>
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
