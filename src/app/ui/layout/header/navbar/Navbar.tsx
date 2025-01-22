import mainNavbar from "@/data/constants/navigation/mainNavbar" // lista de links
import clsx from "clsx"
import Link from "next/link"

/**
 * Barra de navegação do header.
 * @author Alexandre Raminelli
 */
export default function Navbar(
  { className }: NavbarProps // props
) {
  return (
    <nav className={className}>
      <NavbarLinks />
    </nav>
  )
}
/** Props do `Navbar`. */
interface NavbarProps {
  /** Classes personalizadas. (opcional) */
  className?: string
}

/** Grupo de links do navbar. */
function NavbarLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex flex-row gap-1.5 ${className}`}>
      {/* Iteração */}
      {mainNavbar.map((link, index) => (
        <NavLink key={index} link={link} isActive={false} />
      ))}
    </ul>
  )
}

/** Link do navbar. */
function NavLink(
  { link, isActive = false }: NavLinkProps // props
) {
  return (
    <li aria-label="navbar link">
      <Link
        href={link.href} // route
        // style:
        className={clsx(
          `py-2.5 px-4.5 rounded-3xl
          text-sm lg:text-base
          hover:bg-gray-20 hover:shadow-md transition-colors`, // estilo padrão
          { "bg-gray-15": isActive } // estilo ativo
        )}
      >
        {link.text}
      </Link>
    </li>
  )
}
/** Props do `NavLink`. */
interface NavLinkProps {
  /** Link a ser renderizado. */
  link: (typeof mainNavbar)[number]
  /** Se o link está ou não ativo. */
  isActive: boolean
}
