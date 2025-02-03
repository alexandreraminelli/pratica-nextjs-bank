import clsx from "clsx"

/**
 * Componente de botão.
 * @author Alexandre Raminelli
 */
export default function Button(
  { text, onClick, fill = "green", border, height = "normal", className }: ButtonProps // props
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
          "bg-gray-11 hover:bg-gray-20 text-white": fill === "gray", // bg cinza
          "hover:bg-gray-20 text-white": fill === "none", // sem bg
          border: border, // com borda
          "border-gray-15 hover:border-gray-35": border === "gray", // borda cinza
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
  fill?: "green" | "gray" | "none"
  /** Borda do botão. (opcional) */
  border?: "gray"
  /** Altura do botão. (opcional) */
  height?: "normal" | "small" | "extra-small"
  /** Classes personalizadas. (opcional) */
  className?: string
}
