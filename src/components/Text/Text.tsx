import React, { FC } from 'react'
import { useSpacerMargin, useSpacerPadding } from '../../utils'
import { TextStyles, textVariants } from './TextStyles'
import { TextProps } from './TextTypes'

export const Text: FC<TextProps> = ({
  variant,
  component,
  children,
  cssStyles,
  ...props
}) => {
  const selectedVariant = textVariants[variant || 'body2']
  const ElementTag = component || selectedVariant.component
  const elementCss = {
    ...textVariants.commons,
    ...selectedVariant.css,
    ...cssStyles
  }
  const marginProps = useSpacerMargin(props)
  const paddingProps = useSpacerPadding(props)
  return (
    <TextStyles
      {...marginProps}
      {...paddingProps}
      as={ElementTag}
      cssStyles={elementCss}
    >
      {children}
    </TextStyles>
  )
}

Text.defaultProps = {
  variant: 'body2',
  cssStyles: {},
  p: 0
}
