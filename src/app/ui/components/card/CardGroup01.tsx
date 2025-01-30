import Card01 from "./Card01"
import CardWithIcon from "@/data/model/cards/CardWithIcon"

/**
 * Grupo de cards estilo 01.
 *
 * @author Alexandre Raminelli
 */
export default function CardGroup01(
  { cardList }: CardGroup01Props // props
) {
  return (
    <div
      aria-label="cards group"
      className="flex flex-col *:flex-1
        "
    >
      {cardList.map((card, index) => (
        <Card01 key={index} card={card} />
      ))}
    </div>
  )
}
/** Props de `CardGroup01`. */
interface CardGroup01Props {
  /** Arrays de cards. */
  cardList: CardWithIcon[]
}
