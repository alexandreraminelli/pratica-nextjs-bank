import Link from "next/link"
import FooterSocial from "./FooterSocial"

/**
 * Parte final do footer com as redes sociais e informações legais do site.
 * @author Alexandre Raminelli
 */
export default function FooterEnd() {
  return (
    <div
      className="md:flex flex-row items-center justify-between
      md:bg-gray-10 md:border border-gray-15 rounded-full
      md:p-3"
    >
      {/* Redes sociais */}
      <FooterSocial className="max-md:-mb-7" />
      {/* FooterLegal */}
      <FooterLegal />
    </div>
  )
}

/** Informações legais do site no footer. */
function FooterLegal() {
  return (
    <section
      className="flex max-md:flex-col md:flex-row items-center md:justify-end
      max-md:pt-14 max-md:pb-8 max-md:px-6 gap-5
      md:p-3
      md:w-full *:flex-1
      text-gray-70 text-center md:text-end font-light max-sm:text-sm transition-all
      max-md:bg-gray-10 rounded-xl max-md:border border-gray-15"
    >
      {/* Todos os direitos reservados */}
      <p className="md:mx-auto">YourBank All Rights Reserved</p>

      {/* Links legais */}
      <p>
        <LegalLink href="/privacy-policy" text="Privacy Policy" />
        |
        <LegalLink href="/terms-of-service" text="Terms of Service" />
      </p>
    </section>
  )
}
/** Links legais. */
function LegalLink({ href, text }: LegalLinkProps) {
  return (
    <Link
      href={href} // rota
      // style:
      className="mx-1.5 hover:text-white transition-colors"
    >
      {text}
    </Link>
  )
}
/** Props `LegalLink`. */
interface LegalLinkProps {
  /** Rota pra página legal. */
  href: string
  /** Texto exibido. */
  text: string
}
