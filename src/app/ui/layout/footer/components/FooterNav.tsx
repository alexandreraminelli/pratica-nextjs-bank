import mainNavbar from "@/data/constants/navigation/mainNavbar" // lista de links
import Link from "next/link"

/**
 * Menu de navegação do footer.
 * @author Alexandre Raminelli
 */
export default function FooterNav() {
  return (
    <nav aria-label="footer navigation">
      <ul className="flex flex-row gap-1.5 flex-1">
        {/* Iteração */}
        {mainNavbar.map((link, index) => (
          <FooterNavLink key={index} link={link} />
        ))}
      </ul>
    </nav>
  )
}

/** Props do `FooterNavLink`. */
interface FooterNavLinkProps {
  /** Objeto do link a ser renderizado. */
  link: (typeof mainNavbar)[number]
}
/** Link do navbar do footer. */
function FooterNavLink({ link }: FooterNavLinkProps) {
  return (
    <li>
      <Link
        href={link.href} // rota
        className="hover:bg-gray-20 hover:shadow-lg rounded-3xl transition-colors
        text-sm md:text-base text-center 
        py-2 px-3"
      >
        {link.text}
      </Link>
    </li>
  )
}
