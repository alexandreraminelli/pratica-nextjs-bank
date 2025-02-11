import LoginOptions from "./navbar/LoginOptions"
import LogoLink from "@/app/ui/logo/LogoLink"
import Navbar from "./navbar/Navbar"
import BurgerButton from "./navbar/BurgerButton" // ícone hambúrguer

/**
 * Cabeçalho do site.
 * @author Alexandre Raminelli
 */
export default function Header() {
  return (
    <header
      className="flex flex-row justify-between items-center
      mx-container mt-10 py-3.5 ps-6 pe-3.5
      bg-gray-11 rounded-full border border-gray-15
      lg:*:flex-1
      sticky top-2.5
      hover:shadow-lg hover:border-gray-40 transition-all"
    >
      {/* Logo */}
      <LogoLink className="h-7 md:h-10 transition-all" />

      {/* Navbar */}
      <Navbar className="max-lg:hidden" />

      <div className="flex flex-row gap-12 justify-end">
        {/* Opções de login */}
        <LoginOptions className="max-md:hidden" />
        {/* Botão de navbar mobile */}
        <BurgerButton className="lg:hidden" />
      </div>
    </header>
  )
}
