import { BadgeProps } from "@/app/ui/components/badge/Badge" // modelo do badge
import { ButtonLinkProps } from "@/app/ui/components/button/ButtonLink" // modelos dos botões

/**
 * Modelo de dados do conteúdo do Hero Section da página inicial.
 * @author Alexandre Raminelli
 */
export default interface HeroSection {
  /** Badge do Hero Section. */
  badge: BadgeProps

  /** Título de introdução */
  title: {
    /** Texto com coloração normal. */
    normal: string
    /** Texto com coloração de destaque. */
    strong: string
  }
  /** Parágrafo de introdução. */
  paragraph: string

  /** Botão de Call To Action. */
  button: ButtonLinkProps
}
