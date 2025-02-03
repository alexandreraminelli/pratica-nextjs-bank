/**
 * Modelo de dados para cards que informam dados numéricos.
 * @author Alexandre Raminelli
 */
export default interface NumberCard {
  /** Valor numérico do card. */
  value: number
  /** Sufixo que complementa o valor numérico. Por exemplo, o `%` de porcentagem ou o `k` de milhar. (opcional) */
  suffix?: "%" | "k" | "M" | "B"
  /** Descrição que explica o valor. */
  description: string
}
