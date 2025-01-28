import Badge from "@/app/ui/components/badge/Badge"
import heroSectionContent from "@/data/constants/pages/homepage/heroSection" // dados do Hero Section

// Desencapsular dados
const { badge, title, paragraph } = heroSectionContent

/**
 * Hero Section da página inicial.
 * @author Alexandre Raminelli
 */
export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center
      px-container py-14"
    >
      <div className="flex flex-col gap-8">
        {/* Header */}
        <header className="flex flex-col gap-3 items-center">
          {/* Badge */}
          <Badge {...badge} />

          {/* Texto */}
          <div
            className="flex flex-col gap-2 
            text-center *:leading-normal"
          >
            {/* Título */}
            <h2 className="font-medium text-3xl">
              {title.normal} <strong className="font-medium text-green-60">{title.strong}</strong>
            </h2>
            {/* Parágrafo */}
            <p className="font-light text-sm">{paragraph}</p>
          </div>
        </header>

        {/* Botão */}
        <aside className="flex justify-center">Button</aside>
      </div>
    </section>
  )
}
