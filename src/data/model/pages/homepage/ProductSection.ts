import SectionIntroduction from "@/data/model/section/SectionIntroduction"
import { ToggleButtonProps } from "@/app/ui/components/selection/ToggleButton"

/**
 * Modelo do conteúdo da seção de produtos da página inicial.
 * @author Alexandre Raminelli
 */
export default interface ProductSection {
  /** Introdução da seção. */
  introduction: SectionIntroduction

  /** Opções de cards. */
  cardsOptions: ToggleButtonProps["options"]
}
