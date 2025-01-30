import SectionIntroduction from "@/data/model/section/SectionIntroduction"

/**
 * Cabeçalho de seções.
 * @author Alexandre Raminelli
 */
export default function SectionHeader(
  { content, className }: SectionHeaderProps // props
) {
  /** Desencapsulamento de `content`. */
  const { title, introductionText } = content

  return (
    <header
      className={`flex flex-col gap-2.5
        text-center md:text-start
        lg:last:max-w-3xl
        ${className}`}
    >
      {/* Título */}
      <h2
        className="font-medium 
        
        text-4xl md:text-5xl"
      >
        {title.normal} <strong className="font-medium text-green-60">{title.strong}</strong>
      </h2>

      {/* Parágrafo da seção */}
      <p
        className="text-gray-70 font-light 
        max-md:text-sm"
      >
        {introductionText}
      </p>
    </header>
  )
}
/** Props do `SectionHeader`. */
interface SectionHeaderProps {
  /** Conteúdo do cabeçalho. */
  content: SectionIntroduction

  /** Classes personalizadas. (opcional) */
  className?: string
}
