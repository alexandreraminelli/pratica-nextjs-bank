import clsx from "clsx"
import IconCard01 from "./IconCard01"
import SimpleIconCard from "@/data/model/cards/SimpleIconCard"

/**
 * Grupo de cards `SimpleIconCard01`.
 * @author Alexandre Raminelli
 */
export default function IconCard01Group(
  { layout, cards }: IconCard01GroupProps // props
) {
  return (
    <div
      className={clsx(
        `grid grid-cols-2
          p-5 md:p-10 gap-2.5
          bg-gray-11 rounded-2xl
          transition-all
           
          bg-no-repeat bg-auto`,
        {
          "bg-abstract01-left bg-left-top": !(layout === "left" || layout === "right"), // sem layout
          "max-md:bg-abstract01-right max-md:bg-left-top": layout === "left" || layout === "right", // com layout
          "md:bg-abstract01-right md:bg-left-top": layout === "left", // layout esquerda
          "md:bg-abstract01-left md:bg-right-top": layout === "right", // layout direita
        }
      )}
    >
      {cards.map((card, index) => (
        <IconCard01 key={index} card={card} />
      ))}
    </div>
  )
}

/** Props de `IconCard01Group`. */
interface IconCard01GroupProps {
  /** Se está em um layout à esquerda ou direita. */
  layout?: "left" | "right"
  /** Lista de cards. */
  cards: SimpleIconCard[]
}
