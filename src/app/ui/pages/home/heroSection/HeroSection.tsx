import Badge from "@/app/ui/components/badge/Badge"
import Button from "@/app/ui/components/button/Button"
import heroSectionContent from "@/data/constants/pages/homepage/heroSection" // dados do Hero Section
import Image from "next/image"

// Desencapsular dados
const { badge, title, paragraph, button } = heroSectionContent

/**
 * Hero Section da página inicial.
 * @author Alexandre Raminelli
 */
export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center
      px-container py-14
      gap-12"
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
        <aside className="flex justify-center md:justify-start">
          <Button text={button.text} href={button.href} />
        </aside>
      </div>

      {/* Exemplo de UI */}
      <picture className="max-md:-mx-1">
        <Image src="/homepage/ui-example.svg" alt="Example of the transaction viewing interface of the YourBanK application." width={775} height={757} />
      </picture>
    </section>
  )
}
