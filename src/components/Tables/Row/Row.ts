import styled from 'styled-components'
import { Box } from '../../Box/Box'
import { RowProps } from './RowTypes'

export const Row = styled(Box).attrs({ as: 'tr' })<RowProps>``
