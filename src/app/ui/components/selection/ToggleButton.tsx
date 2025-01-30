"use client"

import { useState } from "react"
import Button from "@/app/ui/components/button/Button"

/**
 * Componente de toggle button.
 * @author Alexandre Raminelli
 */
export default function ToggleButton(
  { options, className }: ToggleButtonProps // props
) {
  /** Estado que armazena a opção ativa. */
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div
      aria-label="toggle button"
      className={`flex flex-row
        p-3 gap-1.5
        bg-gray-11 border border-gray-15 rounded-full
        ${className}`}
    >
      {/* Botões */}
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => setActiveIndex(index)} // definir botão como ativo ao clicar
          // style:
          fill={activeIndex === index ? "green" : "none"}
          text={option}
          height="extra-small"
        />
      ))}
    </div>
  )
}
/** Props do `ToggleButton`. */
export interface ToggleButtonProps {
  /** Opções do toggle button. */
  options: string[]

  /** Classes personalizadas. (opcional) */
  className?: string
}
