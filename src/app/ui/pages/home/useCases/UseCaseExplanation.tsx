import NumberCardGroup from "@/app/ui/components/card/NumberCardGroup"
import { UseCaseTypes } from "@/data/model/pages/homepage/UseCasesSection"
import clsx from "clsx"

/**
 * Seção que com a explicação de cada caso de uso.
 */
export default function UseCaseExplanation(
  { index, useCaseContent }: UseCaseExplanationProps // props
) {
  // desencapsulamento do conteúdo
  const { type, description, numericalData } = useCaseContent

  return (
    <section
      className={clsx(
        `flex flex-col-reverse`, // estilo principal
        {
          "md:flex-row": index % 2 !== 0, // índice ímpar (direita)
          "md:flex-row-reverse": index % 2 === 0, // índice par (esquerda)
        }
      )}
    >
      {/* Coluna */}
      <div className="flex flex-col gap-12">
        {/* Texto */}
        <article className="flex flex-col gap-2.5 text-center md:text-start">
          {/* Título */}
          <h3 className="font-medium text-xl md:text-2xl">{type}</h3>
          {/* Parágrafo */}
          <p className="font-light text-gray-70 max-md:text-sm leading-[1.5]">{description}</p>
        </article>

        {/* Cards numéricos */}
        <NumberCardGroup cards={numericalData} />

        {/* Botão */}
      </div>

      {/* Cards */}
      <div>Cards</div>
    </section>
  )
}
/** Props do `UseCaseExplanation`. */
interface UseCaseExplanationProps {
  /** Chave (índice) do componente. */
  index: number
  /** Conteúdo do caso de uso. */
  useCaseContent: UseCaseTypes
}
