import { Bars3Icon } from "@heroicons/react/24/outline"
/**
 * Botão que abre a barra de navegação mobile.
 * @author Alexandre Raminelli
 */
export default function BurguerButton({ className }: BurguerButtonProps) {
  return (
    <button
      className={`grid place-items-center
        py-1.5 px-3.5
        bg-green-60 hover:bg-green-80 text-black transition-colors
        rounded-3xl
        ${className}`}
    >
      <span className="sr-only">Open navigation menu</span>
      <Bars3Icon className="size-7" />
    </button>
  )
}

/** Props do `BurguerButton` */
interface BurguerButtonProps {
  /** Classes personalizadas. (opcional) */
  className?: string
}
