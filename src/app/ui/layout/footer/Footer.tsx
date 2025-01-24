import LogoLink from "@/app/ui/logo/LogoLink"
import FooterNav from "./components/FooterNav"

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
        pt-14 pb-8 px-container gap-5"
    >
      {/* Footer main */}
      <FooterMain />

      {/* Contato */}

      {/* Redes sociais e legal */}
    </footer>
  )
}

/** Conteúdo principal do footer. */
function FooterMain() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Logo */}
      <LogoLink className="h-8" />
      {/* Navbar */}
      <FooterNav />
    </div>
  )
}
