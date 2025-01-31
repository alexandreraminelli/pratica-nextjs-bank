import EmphasizedIcon from "@/app/ui/components/icon/EmphasizedIcon"
import SimpleIconCard from "@/data/model/cards/SimpleIconCard"

/**
 * Cards com um ícone e um texto.
 * @author Alexandre Raminelli
 */
export default function IconCard01(
  { card }: SimpleIconCard01Props // props
) {
  // Desencapsulamento do conteúdo
  const { Icon, text } = card

  return (
    <div aria-label="card">
      {/* Ícone */}
      <EmphasizedIcon Icon={Icon} />
      {/* Texto */}
      <span>{text}</span>
    </div>
  )
}
/** Props de `SimpleIconCard01`. */
interface SimpleIconCard01Props {
  /** Conteúdo do card. */
  card: SimpleIconCard
}
