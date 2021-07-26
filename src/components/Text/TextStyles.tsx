import { TypographyVariants } from './TextTypes'

/**
 * TODO: pasar esto al theme
 */
export const textVariants: TypographyVariants = {
  commons: { fontFamily: 'Inter, sans-serif', marginTop: 0 },
  h1: {
    component: 'h1',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '3.81rem',
      fontWeight: 200
    }
  },
  h2: {
    component: 'h2',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '3.1rem',
      fontWeight: 200
    }
  },
  h3: {
    component: 'h3',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '2.4rem',
      fontWeight: 300
    }
  },
  h4: {
    component: 'h4',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '1.95rem',
      fontWeight: 300
    }
  },
  h5: {
    component: 'h5',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '1.55rem',
      fontWeight: 500
    }
  },
  h6: {
    component: 'h6',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '1.25rem',
      fontWeight: 600
    }
  },
  subtitle1: {
    component: 'h6',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '1.1rem',
      fontWeight: 500
    }
  },
  subtitle2: {
    component: 'h6',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '1.1rem',
      fontWeight: 300
    }
  },
  body1: {
    component: 'p',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.4
    }
  },
  body2: {
    component: 'p',
    props: { mb: '0' },
    css: {
      fontSize: '0.9rem',
      fontWeight: 500
    }
  },
  label: {
    component: 'span',
    props: { mb: '0.5rem' },
    css: {
      fontSize: '6rem',
      fontWeight: 400
    }
  },
  button: {
    component: 'span',
    props: { mb: '0' },
    css: {
      fontSize: '0.9rem',
      letterSpacing: '0.04rem',
      fontWeight: 700
    }
  }
}
