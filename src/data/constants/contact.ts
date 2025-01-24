import Contact from "@/data/model/Contact"
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid"

/**
 * Informações de contato do banco.
 * @author Alexandre Raminelli
 */
const contact: Contact = {
  email: {
    Icon: EnvelopeIcon,
    text: "hello@skillbirdge.com",
    url: "mailto:hello@skillbirdge.com",
  },
  tel: {
    Icon: PhoneIcon,
    text: "+91 91813 23 2309",
    url: "tel:+9191813232309",
  },
  address: {
    Icon: MapPinIcon,
    text: "Somewhere in the World",
    url: "https://www.google.com/maps",
  },
}
export default contact
