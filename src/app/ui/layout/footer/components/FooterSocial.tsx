import contact from "@/data/constants/contact/contact"
import { ContactFormat } from "@/data/model/Contact"

/** Dados de mídias sociais. */
const { facebook, linkedIn, instagram } = contact.socialMedia

/**
 * Ícones de redes sociais do footer.
 * @author Alexandre Raminelli
 */
export default function FooterSocial(
  { className }: FooterSocialProps // props
) {
  return (
    <section
      className={`flex flex-row justify-center items-center gap-2
        ${className}`}
    >
      {/* Facebook */}
      <SocialButton socialMedia={facebook} />
      {/* Instagram */}
      <SocialButton socialMedia={instagram} />
      {/* LinkedIn */}
      <SocialButton socialMedia={linkedIn} />
    </section>
  )
}
/** Props do `FooterSocial`. */
interface FooterSocialProps {
  /** Classes personalizadas. (opcional) */
  className?: string
}

/** Props de `SocialButton`. */
interface SocialButtonProps {
  /** Objeto com os dados da rede social. */
  socialMedia: ContactFormat
}

/** Botão de rede social. */
function SocialButton({ socialMedia }: SocialButtonProps) {
  return (
    <a
      href={socialMedia.url}
      target="_blank"
      // styles:
      className="rounded-full p-3
        flex items-center justify-center size-fit
        bg-green-60 hover:bg-green-80 text-gray-15 hover:text-gray-20
        *:size-5 *:hover:size-6
        hover:shadow-lg transition-all *:transition-all"
    >
      {/* Rótulo */}
      <span className="sr-only">{socialMedia.text}</span>
      {/* Ícone */}
      <socialMedia.Icon />
    </a>
  )
}
