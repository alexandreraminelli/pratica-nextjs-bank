import Contact from "@/data/model/Contact"
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid" // ícones do Heroicons
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./socialIcons" // ícones de redes sociais

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

  socialMedia: {
    facebook: {
      Icon: FacebookIcon,
      text: "Facebook",
      url: "https://www.facebook.com",
    },
    linkedIn: {
      Icon: LinkedInIcon,
      text: "LinkedIn",
      url: "https://www.linkedin.com",
    },
    instagram: {
      Icon: InstagramIcon,
      text: "Instagram",
      url: "https://www.x.com",
    },
  },
}
export default contact
