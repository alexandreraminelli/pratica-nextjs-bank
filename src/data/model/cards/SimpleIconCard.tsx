/**
 * Modelo de card simples com um título e ícone.
 * @author Alexandre Raminelli
 */
export default interface SimpleIconCard {
  /** Texto do card. */
  text: string
  /** Ícone do card. */
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
