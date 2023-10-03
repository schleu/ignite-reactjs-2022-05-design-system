import { Box, TooltipProps, Tooltip, Text } from '@ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'


export default {
  title: 'Challange/Tooltip',
  component: Tooltip,
  args: {
    text: '21 de Outubro - Indisponível',
    children:<Box css={{padding: '$4 $7', color:'$gray100', display: 'flex', justifyContent: 'center', alignItems:'center', maxWidth: 66}}>21</Box>
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{ display: 'flex',padding: '100px'}}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}