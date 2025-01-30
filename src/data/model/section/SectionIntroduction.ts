/**
 * Modelo de dados para introdução de seções.
 * @author Alexandre Raminelli
 */
export default interface SectionIntroduction {
  /** Título da seção. */
  title: {
    /** Texto com coloração normal */
    normal: string
    /** Texto com coloração em destaque. */
    strong: string
  }
  /** Parágrafo de introdução da seção. */
  introductionText: string
}
