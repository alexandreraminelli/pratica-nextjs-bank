/** Props do `Logo`. */
interface LogoProps {
  /** Classes personalizas. (opcional) */
  className?: string
}
/**
 * Logo SVG do site.
 * @author Alexandre Raminelli
 */
export default function Logo(
  { className = "" }: LogoProps // props
) {
  return (
    <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className={`min-w-6 min-h-6 ${className}`}>
      <path d="M10.417 20.5l10-10 10 10-10 10-10-10z" fill="#CAFF33" />
      <path d="M37.083 13.833L30.417 20.5v-10h-10l6.666-6.667h10v10zM37.083 27.167L30.417 20.5v10h-10l6.666 6.667h10v-10zM3.75 27.167l6.667-6.667v10h10l-6.667 6.667h-10v-10zM3.75 13.833l6.667 6.667v-10h10L13.75 3.833h-10v10z" fill="#CAFF33" />
    </svg>
  )
}
