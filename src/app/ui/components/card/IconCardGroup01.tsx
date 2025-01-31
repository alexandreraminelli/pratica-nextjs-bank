import SimpleIconCard from "@/data/model/cards/SimpleIconCard"
import IconCard01 from "./IconCard01"

/**
 * Grupo de cards `SimpleIconCard01`.
 * @author Alexandre Raminelli
 */
export default function IconCardGroup01(
  { cards }: SimpleIconCardGroup01Props // props
) {
  return (
    <div>
      {cards.map((card, index) => (
        <IconCard01 key={index} card={card} />
      ))}
    </div>
  )
}

/** Props de `SimpleIconCardGroup01`. */
interface SimpleIconCardGroup01Props {
  /** Lista de cards. */
  cards: SimpleIconCard[]
}
