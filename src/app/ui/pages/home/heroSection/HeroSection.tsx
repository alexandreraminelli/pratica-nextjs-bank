import Badge from "@/app/ui/components/badge/Badge"
import ButtonLink from "@/app/ui/components/button/ButtonLink"
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
      className="flex flex-col md:flex-row items-center lg:items-start
      px-container py-14
      gap-12"
    >
      <div className="flex flex-col gap-8 md:gap-10 md:w-4/5 lg:w-2/3">
        {/* Header */}
        <header
          className="flex flex-col items-center md:items-start
          gap-3 md:gap-4 lg:mt-10"
        >
          {/* Badge */}
          <Badge {...badge} />

          {/* Texto */}
          <div
            className="flex flex-col gap-2 md:gap-3
            text-center md:text-start *:leading-normal"
          >
            {/* Título */}
            <h2 className="font-medium text-3xl md:text-4xl">
              {title.normal} <strong className="font-medium text-green-60">{title.strong}</strong>
            </h2>
            {/* Parágrafo */}
            <p className="font-light max-md:text-sm">{paragraph}</p>
          </div>
        </header>

        {/* Botão */}
        <aside className="flex justify-center md:justify-start">
          <ButtonLink text={button.text} href={button.href} />
        </aside>
      </div>

      {/* Exemplo de UI */}
      <picture className="max-md:-mx-1">
        <Image src="/homepage/ui-example.svg" alt="Example of the transaction viewing interface of the YourBanK application." width={775} height={757} className="w-full" />
      </picture>
    </section>
  )
}
