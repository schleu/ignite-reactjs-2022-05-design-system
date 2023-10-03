import { styled } from '../../styles'
import { Text } from '../Text'

export const TooltipContainer = styled('div', {
  position: 'relative',
  fontFamily: '$default',
  '&:hover':{
    div:{
      display: 'block'
    }
  }
})

export const TooltipBallon = styled('div', {
  width: 'max-content',
  display: 'none',
  position: 'absolute',
  top: '0px',
  left: '50%',
  transform: 'translate(-50%, -100%)',
  backgroundColor: '$gray900',
  color: '$gray100',
  padding: '$3 $4',
  gap:'$2',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  
  '&:before':{
    content: '',
    width:'16px',
    height:'16px',
    backgroundColor: '$gray900',
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translate(-50%, 0) rotate(45deg)'
  }
})

