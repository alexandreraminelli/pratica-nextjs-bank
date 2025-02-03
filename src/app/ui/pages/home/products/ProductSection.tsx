import SectionHeader from "@/app/ui/components/sections/SectionHeader"
import ToggleButton from "@/app/ui/components/selection/ToggleButton"
import productSection from "@/data/constants/pages/homepage/productSection"
import Card01Group from "@/app/ui/components/card/Card01Group"

// Desencapsulamento do conteúdo
const { introduction, cardsOptions, productCards } = productSection

/**
 * Seção de produtos da página inicial.
 * @author Alexandre Raminelli
 */
export default function ProductSection() {
  return (
    <section className="px-container md:mb-24">
      <div
        className="flex flex-col md:flex-row
        items-center md:items-end md:justify-between
        gap-5 lg:gap-20 xl:gap-32"
      >
        {/* Introdução */}
        <SectionHeader content={introduction} />

        {/* Botão de selecionar cards */}
        <ToggleButton options={cardsOptions} />
      </div>

      {/* Cards */}
      <Card01Group cardList={productCards.individualCards} className="md:mt-20" />
    </section>
  )
}
