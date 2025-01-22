import mainNavbar from "@/data/constants/navigation/mainNavbar" // lista de links
import Link from "next/link"
import BurguerButton from "./BurguerButton" // ícone hambúrguer

/**
 * Barra de navegação do header.
 * @author Alexandre Raminelli
 */
export default function Navbar() {
  return (
    <nav>
      {/* Links */}
      <NavbarLinks />

      {/* Botão para mobile */}
      <BurguerButton className="md:hidden" />
    </nav>
  )
}

/** Grupo de links do navbar. */
function NavbarLinks() {
  return (
    <ul>
      {mainNavbar.map((link, index) => (
        <NavLink key={index} {...link} />
      ))}
    </ul>
  )
}

/** Link do navbar. */
function NavLink(
  { href, text }: (typeof mainNavbar)[number] // props
) {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  )
}
