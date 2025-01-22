import LogoLink from "@/app/ui/logo/LogoLink"

/**
 * Cabeçalho do site.
 * @author Alexandre Raminelli
 */
export default function Header() {
  return (
    <header
      className="flex flex-row justify-between items-center
      mx-container mt-10 
      py-3.5 ps-6 pe-3.5
      bg-gray-11 rounded-full border border-gray-15
      sticky top-4"
    >
      <LogoLink className="h-7" />
    </header>
  )
}
