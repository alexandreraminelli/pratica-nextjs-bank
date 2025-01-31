import CardModel from "./CardModel"

/**
 * Modelo de card com título, texto e ícone.
 * @author Alexandre Raminelli
 */
export default interface CardWithIcon extends CardModel {
  /** Ícone do card. */
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
