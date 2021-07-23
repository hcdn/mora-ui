import styled from 'styled-components'
import { cssCreateStyles, spacerMargin, spacerPadding } from '../../utils'
import { TextStylesProps, TypographyVariants } from './TextTypes'

/**
 * TODO: pasar esto al theme
 */
export const textVariants: TypographyVariants = {
  commons: { fontFamily: 'Inter, sans-serif', marginTop: 0 },
  h1: {
    component: 'h1',
    css: {
      fontSize: '3.81rem',
      marginBottom: '0.5rem',
      fontWeight: 200
    }
  },
  h2: {
    component: 'h2',
    css: {
      fontSize: '3.1rem',
      marginBottom: '0.5rem',
      fontWeight: 200
    }
  },
  h3: {
    component: 'h3',
    css: {
      fontSize: '2.4rem',
      marginBottom: '0.5rem',
      fontWeight: 300
    }
  },
  h4: {
    component: 'h4',
    css: {
      fontSize: '1.95rem',
      marginBottom: '0.5rem',
      fontWeight: 300
    }
  },
  h5: {
    component: 'h5',
    css: {
      fontSize: '1.55rem',
      marginBottom: '0.5rem',
      fontWeight: 500
    }
  },
  h6: {
    component: 'h6',
    css: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem',
      fontWeight: 600
    }
  },
  subtitle1: {
    component: 'h6',
    css: {
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      fontWeight: 500
    }
  },
  subtitle2: {
    component: 'h6',
    css: {
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      fontWeight: 300
    }
  },
  body1: {
    component: 'p',
    css: {
      fontSize: '1rem',
      marginBottom: '0.5rem',
      fontWeight: 400,
      lineHeight: 1.4
    }
  },
  body2: {
    component: 'p',
    css: {
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
      fontWeight: 500
    }
  },
  label: {
    component: 'span',
    css: {
      fontSize: '6rem',
      marginBottom: '0.5rem',
      fontWeight: 400
    }
  }
}

export const TextStyles = styled.div<TextStylesProps>`
  ${cssCreateStyles}
  ${spacerMargin}
  ${spacerPadding}
`
