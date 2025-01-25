import LogoLink from "@/app/ui/logo/LogoLink"
import FooterContact from "./components/FooterContact"
import FooterNav from "./components/FooterNav"
import FooterEnd from "./components/FooterEnd"

/**
 * Rodapé do site.
 * @author Alexandre Raminelli
 */
export default function Footer() {
  return (
    <footer
      aria-label="page footer"
      className="flex flex-col
        bg-gray-11
        px-container pt-14 md:pt-16 pb-8 gap-8 md:gap-10"
    >
      {/* Footer main */}
      <FooterMain />

      {/* Contato */}
      <FooterContact />

      {/* Redes sociais e legal */}
      <FooterEnd />
    </footer>
  )
}

/** Conteúdo principal do footer. */
function FooterMain() {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-10">
      {/* Logo */}
      <LogoLink className="h-8 md:h-9" />
      {/* Navbar */}
      <FooterNav />
    </div>
  )
}
