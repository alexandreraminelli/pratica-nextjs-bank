import ButtonLink from "@/app/ui/components/button/ButtonLink"

/**
 * Botões de opções de login exibidos no header.
 * @author Alexandre Raminelli
 */
export default function LoginOptions(
  { className }: LoginOptionsProps // props
) {
  return (
    <nav
      className={`flex flex-row items-center gap-2 ${className}`} // style
      aria-label="login actions" // acessibilidade
    >
      {/* Botão de Criar Conta */}
      <ButtonLink href="/signup" text="Sign Up" fill="none" height="small" />
      {/* Botão de Login */}
      <ButtonLink href="/login" text="Login" fill="green" height="small" />
    </nav>
  )
}
/** Props de `LoginOptions`. */
interface LoginOptionsProps {
  /** Classes personalizadas. (opcional) */
  className?: string
}
