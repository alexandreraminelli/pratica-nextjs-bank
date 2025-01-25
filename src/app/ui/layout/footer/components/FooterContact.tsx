import contact from "@/data/constants/contact/contact" // informações de contato
import { ContactFormat } from "@/data/model/Contact"

/**
 * Informações de contato no footer.
 * @author Alexandre Raminelli
 */
export default function FooterContact() {
  return (
    <div
      className="flex flex-row flex-wrap gap-5 justify-center
        border-y border-gray-15 py-8 md:py-10"
    >
      {/* Email */}
      <ContactWidget contact={contact.email} />
      {/* Telefone */}
      <ContactWidget contact={contact.tel} />
      {/* Endereço */}
      <ContactWidget contact={contact.address} />
    </div>
  )
}

/** Props de `ContactWidget`. */
interface ContactWidgetProps {
  /** Objeto do contato. */
  contact: ContactFormat
}
/** Widget de contato. */
export function ContactWidget(
  { contact }: ContactWidgetProps // props
) {
  return (
    <a
      href={contact.url} // URL
      target="_blank" // nova guia
      // styles:
      className="text-sm md:text-base
        flex flex-row items-center gap-1.5
        hover:opacity-80 transition-opacity"
    >
      {/* Ícone */}
      <contact.Icon className="text-green-60 size-5 md:size-6" />
      {/* Texto */}
      {contact.text}
    </a>
  )
}
