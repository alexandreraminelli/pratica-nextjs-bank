/**
 * Modelo para informações de contato do banco.
 * @author Alexandre Raminelli
 */
export default interface Contact {
  /** Email do banco. */
  email: ContactFormat
  /** Telefone do banco. */
  tel: ContactFormat
  /** Endereço do banco. */
  address: ContactFormat
}

/** Formato de informação de contato. */
export interface ContactFormat {
  /** Ícone de contato. */
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  /** Texto exibido do contato. */
  text: string
  /** Schema URL para contato. */
  url: string
}
