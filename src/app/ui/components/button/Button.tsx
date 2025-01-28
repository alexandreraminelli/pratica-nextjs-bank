import Link from "next/link"
import clsx from "clsx"

/**
 * Componente de botão.
 * @author Alexandre Raminelli
 */
export default function Button(
  { href, text, fill = "green", height = "normal", className }: ButtonProps // props
) {
  return (
    <Link
      href={href} // endereço
      // style:
      className={clsx(
        `px-6
        text-center text-nowrap text-sm md:text-base
        rounded-3xl transition-colors hover:shadow-lg
        ${className}`, // estilo padrão
        {
          // estilos condicionais
          "bg-green-60 hover:bg-green-80 text-gray-11": fill === "green", // bg verde
          "hover:bg-gray-15 text-white": fill === "none", // sem bg
          "py-3.5": height === "normal", // altura normal
          "py-3": height === "small", // altura pequena
        }
      )}
    >
      {text} {/* Texto */}
    </Link>
  )
}
/** Props do `Button`. */
export interface ButtonProps {
  /** Link do botão. */
  href: string
  /** Texto do botão. */
  text: string

  /** Preenchimento do botão. (opcional) */
  fill?: "green" | "none"
  /** Altura do botão. (opcional) */
  height?: "normal" | "small"
  /** Classes personalizadas. (opcional) */
  className?: string
}
