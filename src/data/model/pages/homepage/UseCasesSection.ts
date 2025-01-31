import NumberCard from "@/data/model/cards/NumberCard"
import SectionIntroduction from "@/data/model/section/SectionIntroduction"
import SimpleIconCard from "@/data/model/cards/SimpleIconCard"

/**
 * Modelo de dados do conteúdo da seção de casos de uso.
 * @author Alexandre Raminelli
 */
export default interface UseCasesSection {
  /** Introdução da seção. */
  introduction: SectionIntroduction

  /** Seções de casos de uso. */
  useCaseTypes: UseCaseTypes[]
}

/** Conteúdo dos tipos de casos de uso. */
interface UseCaseTypes {
  /** Tipo de caso de uso. */
  type: string
  /** Descrição do caso de uso. */
  description: string

  /** Principais tópicos que resumem o caso de uso. */
  mainTopics: SimpleIconCard[]

  /** Informações numéricas. */
  numericalData: NumberCard[]
}
