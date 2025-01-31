import SectionHeader from "@/app/ui/components/sections/SectionHeader"
import useCasesSection from "@/data/constants/pages/homepage/useCasesSection"
import UseCaseExplanation from "./UseCaseExplanation"

// Desencapsulamento do conteúdo
const { introduction, useCaseTypes } = useCasesSection

/**
 * Seção de casos de uso da página inicial.
 * @author Alexandre Raminelli
 */
export default function UseCasesSection() {
  return (
    <section
      className="
        px-container pt-20"
    >
      {/* Cabeçalho */}
      <div>
        <SectionHeader content={introduction} />
      </div>

      {/* Seções de casos de uso */}
      <div className="flex flex-col md:gap-10">
        {useCaseTypes.map((useCase, index) => (
          <UseCaseExplanation key={index} index={index} useCaseContent={useCase} />
        ))}
      </div>
    </section>
  )
}
