import NumberCardGroup from "@/app/ui/components/card/NumberCardGroup"
import IconCard01Group from "@/app/ui/components/card/IconCard01Group"
import { UseCaseTypes } from "@/data/model/pages/homepage/UseCasesSection"
import clsx from "clsx"
import Button from "@/app/ui/components/button/Button"

/**
 * Seção que com a explicação de cada caso de uso.
 */
export default function UseCaseExplanation(
  { index, useCaseContent }: UseCaseExplanationProps // props
) {
  // desencapsulamento do conteúdo
  const { type, description, numericalData, mainTopics } = useCaseContent

  return (
    <section
      className={clsx(
        `flex flex-col-reverse 
        gap-8 md:gap-14
        md:*:w-1/2`, // estilo principal
        {
          "md:flex-row": index % 2 !== 0, // índice ímpar (direita)
          "md:flex-row-reverse": index % 2 === 0, // índice par (esquerda)
        }
      )}
    >
      {/* Coluna */}
      <div
        className="flex flex-col items-center md:items-start
        gap-12
        transition-all "
      >
        {/* Texto */}
        <article className="flex flex-col gap-2.5 text-center md:text-start *:transition-all">
          {/* Título */}
          <h3 className="font-medium text-xl md:text-2xl">{type}</h3>
          {/* Parágrafo */}
          <p className="font-light text-gray-70 max-md:text-sm leading-[1.5]">{description}</p>
        </article>

        {/* Cards numéricos */}
        <NumberCardGroup cards={numericalData} />

        {/* Botão */}
        <Button text="Learn More" fill="gray" border="gray" className="w-fit" />
      </div>

      {/* Cards */}
      <IconCard01Group cards={mainTopics} layout={index % 2 ? "right" : "left"} />
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
