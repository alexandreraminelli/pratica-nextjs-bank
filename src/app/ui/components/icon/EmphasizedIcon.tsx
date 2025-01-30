/**
 * Ícones com ênfase. Renderizados dentro de dois círculos gradientes.
 *
 * @author Alexandre Raminelli
 */
export default function EmphasizedIcon(
  { Icon }: EmphasizedIconProps // props
) {
  return (
    <>
      {/* Círculo externo */}
      <div
        className="size-fit rounded-full p-2
        bg-gradient-to-b from-[#CAFF33]/5 to-transparent"
      >
        {/* Borda do círculo interno */}
        <div
          className="size-fit rounded-full p-[1px]
            bg-gradient-to-b from-[#CAFF33]/20 to-transparent"
        >
          {/* Círculo interno */}
          <div
            className="size-fit rounded-full p-3.5
            bg-background bg-gradient-to-b from-[#CAFF33]/10 to-transparent"
          >
            {/* Ícone */}
            <Icon className="text-green-60 size-7" />
          </div>
        </div>
      </div>
    </>
  )
}
/** Props de `EmphasizedIcon`. */
interface EmphasizedIconProps {
  /** Ícone com ênfase. */
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
