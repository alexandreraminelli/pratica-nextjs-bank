import BurguerButton from "./BurguerButton"

/**
 * Barra de navegação do header.
 */
export default function Navbar() {
  return (
    <nav>
      {/* Links */}

      {/* Botão para mobile */}
      <BurguerButton className="md:hidden" />
    </nav>
  )
}
