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
    <header className={`${className}`}>
      {/* Título */}
      <h2>
        {title.normal} <strong>{title.strong}</strong>
      </h2>
      {/* Parágrafo da seção */}
      <p>{introductionText}</p>
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
