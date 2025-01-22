import Link from "next/link"
import clsx from "clsx"

/**
 * Componente de botão.
 * @author Alexandre Raminelli
 */
export default function Button(
  { href, text, fill = "green", className }: ButtonProps // props
) {
  return (
    <Link
      href={href} // endereço
      // style:
      className={clsx(
        `py-3 px-6
        rounded-3xl transition-colors hover:shadow-lg
        ${className}`, // estilo padrão
        {
          // estilos condicionais
          "bg-green-60 hover:bg-green-80 text-gray-11": fill === "green", // bg verde
          "hover:bg-gray-15 text-white": fill === "none", // sem bg
        }
      )}
    >
      {text} {/* Texto */}
    </Link>
  )
}
/** Props do `Button`. */
interface ButtonProps {
  /** Link do botão. */
  href: string
  /** Texto do botão. */
  text: string

  /** Preenchimento do botão. */
  fill?: "green" | "none"
  /** Classes personalizadas. (opcional) */
  className?: string
}
