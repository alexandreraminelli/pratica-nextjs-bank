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
    <div
      aria-label="card"
      className="flex flex-col items-center text-center
      max-md:py-5 max-md:px-3.5 md:p-6 gap-3.5
      bg-gray-10 rounded-xl border border-gray-15"
    >
      {/* Ícone */}
      <EmphasizedIcon Icon={Icon} />
      {/* Texto */}
      <span className="max-sm:text-sm leading-[1.5]">{text}</span>
    </div>
  )
}
/** Props de `SimpleIconCard01`. */
interface SimpleIconCard01Props {
  /** Conteúdo do card. */
  card: SimpleIconCard
}
