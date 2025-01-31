import NumberCardModel from "@/data/model/cards/NumberCard"

/**
 * Cards de informações numéricas.
 * @author Alexandre Raminelli
 */
export default function NumberCard(
  { cardContent }: NumberCardProps // props
) {
  // desencapsulamento do conteúdo
  const { value, suffix, description } = cardContent

  return (
    <div
      className="flex flex-col justify-start
        gap-0.5 md:gap-1
        max-sm:py-7 sm:px-8 max-sm:first:pt-0 max-sm:last:pb-0
        items-center text-center md:items-start md:text-start
        transition-all"
    >
      {/* Valor */}
      <span className="font-medium text-green-60 text-4xl">
        {value}
        {suffix} {/* Sufixo */}
      </span>

      {/* Descrição */}
      <span className="h-full font-light text-gray-70 max-md:text-sm leading-[1.5]">{description}</span>
    </div>
  )
}
/** Props de `NumberCard`. */
interface NumberCardProps {
  /** Conteúdo dos cards. */
  cardContent: NumberCardModel
}
