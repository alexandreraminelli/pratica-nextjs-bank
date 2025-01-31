import SectionHeader from "@/app/ui/components/sections/SectionHeader"
import useCasesSection from "@/data/constants/pages/homepage/useCasesSection"

// Desencapsulamento do conteúdo
const { introduction } = useCasesSection

/**
 * Seção de casos de uso da página inicial.
 * @author Alexandre Raminelli
 */
export default function UseCasesSection() {
  return (
    <section>
      {/* Cabeçalho */}
      <div>
        <SectionHeader content={introduction} />
      </div>
    </section>
  )
}
