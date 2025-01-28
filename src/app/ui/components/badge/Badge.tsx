/**
 * Componente de badge.
 * @author Alexandre Raminelli
 */
export default function Badge(
  { text, Icon, className }: BadgeProps // props
) {
  return (
    <div
      aria-label="badge"
      // styles:
      className={`flex flex-row items-center
        bg-gray-15 rounded-3xl w-fit
        p-2 pe-4 gap-1
        *:transition-all
        ${className}`}
    >
      {/* Ícone */}
      {Icon && <Icon className="size-5 text-green-60" />}
      {/* Texto */}
      <span className="font-light text-xs sm:text-sm md:text-base">{text}</span>
    </div>
  )
}
/** Props do `Badge`. */
interface BadgeProps {
  /** Ícone do badge. (opcional) */
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  /** Texto do badge. */
  text: string

  /** Classes personalizadas. (opcional) */
  className?: string
}
