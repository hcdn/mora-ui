import styled from 'styled-components'
import { Box } from '../../Box/Box'
import { ColProps } from './ColTypes'

export const Col = styled(Box).attrs({ as: 'td' })<ColProps>``
