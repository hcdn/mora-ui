import React from 'react'
import { useSpacerMargin, useSpacerPadding } from '../../utils/spacer'
import { BoxWrapper } from './BoxStyles'
import { BoxProps } from './BoxTypes'

const mapChilds = (child: React.ReactNode, align: string | undefined) => {
  if (!React.isValidElement(child)) {
    return child
  }
  const elementChild: React.ReactElement = child
  if (elementChild.type === Box) {
    return React.cloneElement(elementChild, {
      align: elementChild.props.align || align
    })
  } else {
    return elementChild
  }
}

export const Box = (props: BoxProps) => {
  const colCount: number | boolean =
    (props.cols === true && props.span ? props.span : props.cols) || false
  const Children = React.Children.map(
    props.children,
    (child: React.ReactNode) => mapChilds(child, props.align)
  )
  const marginProps = useSpacerMargin(props)
  const paddingProps = useSpacerPadding(props)
  return (
    <BoxWrapper
      as={props.as}
      direction={props.direction || props.dir}
      space={props.space}
      noWrap={props.noWrap}
      grow={props.grow}
      align={props.align}
      justify={props.justify}
      colCount={colCount}
      span={props.span}
      className={props.className}
      flex={props.flex}
      container={props.container}
      containerSize={props.containerSize}
      cssStyles={props.cssStyles}
      {...marginProps}
      {...paddingProps}
    >
      {Children}
    </BoxWrapper>
  )
}
