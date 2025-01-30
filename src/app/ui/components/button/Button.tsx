import clsx from "clsx"

/**
 * Componente de botão.
 * @author Alexandre Raminelli
 */
export default function Button(
  { text, onClick, fill = "green", height = "normal", className }: ButtonProps // props
) {
  return (
    <button
      onClick={onClick} // ação ao clicar
      aria-label="button"
      // style:
      className={clsx(
        `text-center text-nowrap text-sm md:text-base
        rounded-3xl transition-colors hover:shadow-lg
        ${className}`, // estilo padrão
        {
          // estilos condicionais
          "bg-green-60 hover:bg-green-80 text-gray-11": fill === "green", // bg verde
          "hover:bg-gray-15 text-white": fill === "none", // sem bg
          "py-3.5 px-6": height === "normal", // altura normal
          "py-3 px-6": height === "small", // altura pequena
          "py-2.5 px-4.5": height === "extra-small", // altura extra-pequena
        }
      )}
    >
      {text} {/* Texto */}
    </button>
  )
}
/** Props do `Button`. */
export interface ButtonProps {
  /** Texto do botão. */
  text: string
  /** Ação ao clicar no botão. (opcional) */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /** Preenchimento do botão. (opcional) */
  fill?: "green" | "none"
  /** Altura do botão. (opcional) */
  height?: "normal" | "small" | "extra-small"
  /** Classes personalizadas. (opcional) */
  className?: string
}
