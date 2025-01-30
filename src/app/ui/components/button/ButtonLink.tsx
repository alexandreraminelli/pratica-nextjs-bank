import Button, { ButtonProps } from "./Button"
import Link from "next/link"

/**
 * Componente de botão de link.
 * Usado para redirecionar o usuário para uma parte do site.
 *
 * @author Alexandre Raminelli
 */
export default function ButtonLink(
  { href, ...props }: ButtonLinkProps // props
) {
  return (
    <Link href={href} aria-label="button">
      <Button {...props} />
    </Link>
  )
}

/** Props do `ButtonLink`. */
export interface ButtonLinkProps extends ButtonProps {
  /** Link do botão. */
  href: string
}
