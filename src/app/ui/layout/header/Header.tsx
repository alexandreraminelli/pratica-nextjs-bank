import LoginOptions from "./navbar/LoginOptions"
import LogoLink from "@/app/ui/logo/LogoLink"
import Navbar from "./navbar/Navbar"

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
      sticky top-4 
      hover:shadow-lg hover:border-gray-20 transition-all"
    >
      {/* Logo */}
      <LogoLink className="h-7 md:h-10 transition-all" />

      {/* Navbar */}
      <Navbar />

      {/* Opções de login */}
      <LoginOptions className="max-md:hidden" />
    </header>
  )
}
