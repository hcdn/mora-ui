import styled from 'styled-components'
import { Box } from '../../Box/Box'
import { TableProps } from './TableTypes'

export const Table = styled(Box).attrs({ as: 'table' })<TableProps>``
