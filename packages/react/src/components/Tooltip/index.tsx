import { ComponentProps, ElementType } from 'react'
import { TooltipBallon, TooltipContainer } from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  as?: ElementType
  text: string
}

export function Tooltip({ text, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      {props.children}
      <TooltipBallon>{text}</TooltipBallon>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
