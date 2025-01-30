import CardWithIcon from "@/data/model/cards/CardWithIcon"
import EmphasizedIcon from "@/app/ui/components/icon/EmphasizedIcon"

/**
 * Cards estilo 01.
 * @author Alexandre Raminelli
 */
export default function Card01({ card, className }: Card01Props) {
  // Desencapsulamento do conteúdo
  const { Icon, title, text } = card

  return (
    <div
      aria-label="card"
      className={`flex flex-col items-center text-center
      gap-5 md:gap-6
      ${className}`}
    >
      {/* Ícone */}
      <EmphasizedIcon Icon={Icon} />

      <article
        className="flex flex-col 
        gap-3 md:gap-4"
      >
        {/* Título */}
        <h3 className="text-xl">{title}</h3>
        {/* Texto */}
        <p className="font-light text-gray-70 max-md:text-sm leading-[1.5]">{text}</p>
      </article>
    </div>
  )
}

/** Props do `Card01`. */
interface Card01Props {
  /** Conteúdo do card. */
  card: CardWithIcon
  /** Classes personalizadas. (opcional) */
  className?: string
}
