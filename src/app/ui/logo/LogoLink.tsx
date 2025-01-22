import LogoInline from "./LogoInline"
import Link from "next/link"

/** Props do `LogoLink`. */
interface LogoLinkProps {
  /** Classes adicionais. (opcional) */
  className?: string
}

/**
 * Logo com um link para a página inicial.
 * @author Alexandre Raminelli
 */
export default function LogoLink(
  { className }: LogoLinkProps // props
) {
  return (
    <Link href="/" aria-label="go to homepage">
      <span className="sr-only">Go to Homepage</span>
      <LogoInline className={`hover:opacity-75 transition-opacity ${className}`} />
    </Link>
  )
}
