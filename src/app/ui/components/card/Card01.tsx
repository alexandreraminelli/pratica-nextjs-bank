import CardWithIcon from "@/data/model/cards/CardWithIcon"
import EmphasizedIcon from "@/app/ui/components/icon/EmphasizedIcon"

/**
 * Cards estilo 01.
 * @author Alexandre Raminelli
 */
export default function Card01({ card }: Card01Props) {
  // Desencapsulamento do conteúdo
  const { Icon, title, text } = card

  return (
    <section aria-label="card">
      {/* Ícone */}
      <EmphasizedIcon Icon={Icon} />

      {/* Título */}
      <h3>{title}</h3>

      {/* Texto */}
      <p>{text}</p>
    </section>
  )
}

/** Props do `Card01`. */
interface Card01Props {
  /** Conteúdo do card. */
  card: CardWithIcon
}
