import { UseCaseTypes } from "@/data/model/pages/homepage/UseCasesSection"
import clsx from "clsx"

/**
 * Seção que com a explicação de cada caso de uso.
 */
export default function UseCaseExplanation(
  { index, useCaseContent }: UseCaseExplanationProps // props
) {
  // desencapsulamento do conteúdo
  const { type } = useCaseContent

  return (
    <article
      className={clsx(
        `flex flex-col`, // estilo principal
        {
          "md:flex-row": index % 2 !== 0, // índice ímpar (direita)
          "md:flex-row-reverse": index % 2 === 0, // índice par (esquerda)
        }
      )}
    >
      {/* Coluna */}
      <div>
        <h3>{type}</h3>
      </div>

      {/* Cards */}
      <div>Cards</div>
    </article>
  )
}
/** Props do `UseCaseExplanation`. */
interface UseCaseExplanationProps {
  /** Chave (índice) do componente. */
  index: number
  /** Conteúdo do caso de uso. */
  useCaseContent: UseCaseTypes
}
