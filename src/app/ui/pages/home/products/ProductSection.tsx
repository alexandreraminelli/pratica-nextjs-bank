import productSection from "@/data/constants/pages/homepage/productSection"
import SectionHeader from "@/app/ui/components/sections/SectionHeader"

// Desencapsulamento do conteúdo
const { introduction } = productSection

/**
 * Seção de produtos da página inicial.
 * @author Alexandre Raminelli
 */
export default function ProductSection() {
  return (
    <section>
      {/* Introdução */}
      <SectionHeader content={introduction} />
    </section>
  )
}
