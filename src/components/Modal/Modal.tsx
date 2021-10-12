import chroma from 'chroma-js'
import React from 'react'
import ReactModalComponent from 'react-modal'
import styled, { css, keyframes } from 'styled-components'
import { Box, BoxProps, Card, CircleButton, Text } from '..'
import { ModalInteraface } from './ModalTypes'

export const modalSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(1rem)
  }
  100% {
    transform: translateY(0rem)
    opacity: 1;
  }
`

export const getModalContainer = (El: typeof Box | typeof Card) => styled(El)`
  animation: ${modalSlideIn} 0.3s ease-in-out;
`

const ModalContent =
  (
    contentProps: BoxProps = {},
    containerType: 'Box' | 'Card'
  ): ReactModalComponent.Props['contentElement'] =>
  ({ style: _style, dir: _dir, children: _children, ...props }, children) => {
    const ContainerElement = containerType === 'Box' ? Box : Card
    return (
      <ContainerElement
        sx={{ position: 'relative' }}
        grow
        container
        containerSize='xl'
        elevation={3}
        {...props}
        {...contentProps}
      >
        {children}
      </ContainerElement>
    )
  }

const ModalOverlayContainer = styled(Box)`
  position: fixed;
  inset: 0px;
  background-color: ${({ theme }) =>
    chroma(theme.palette.background.primary.main).alpha(0.6).css()};
  backdrop-filter: blur(5px);
  z-index: 10000;
`

const cssModalCloseButton = css`
  position: absolute !important;
  margin: 0 !important;
  top: 0.3rem;
  right: 0.3rem;
`

const ModalOverlay =
  (overlayProps: BoxProps = {}): ReactModalComponent.Props['overlayElement'] =>
  (
    { style: _style, dir: _dir, children: _children, ...props },
    contentElement
  ) => {
    return (
      <ModalOverlayContainer
        flex
        justify='center'
        align='center'
        {...props}
        {...overlayProps}
      >
        {contentElement}
      </ModalOverlayContainer>
    )
  }

export const Modal: ModalInteraface = ({
  children,
  title,
  options,
  closeButton,
  // Modal props
  isOpen,
  style,
  portalClassName,
  bodyOpenClassName,
  htmlOpenClassName,
  overlayClassName,
  appElement,
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  closeTimeoutMS,
  ariaHideApp,
  shouldFocusAfterRender,
  shouldCloseOnOverlayClick,
  shouldCloseOnEsc,
  shouldReturnFocusAfterClose,
  preventScroll,
  parentSelector,
  aria,
  data,
  role,
  contentLabel,
  contentRef,
  overlayRef,
  overlayElement,
  contentElement,
  testId,
  id,
  // Extra props
  overlayProps,
  containerType = 'Card',
  // Box props
  ...containerProps
}) => {
  return (
    <ReactModalComponent
      isOpen={isOpen}
      style={style}
      portalClassName={portalClassName}
      bodyOpenClassName={bodyOpenClassName}
      htmlOpenClassName={htmlOpenClassName}
      overlayClassName={overlayClassName}
      appElement={appElement}
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      onRequestClose={onRequestClose}
      closeTimeoutMS={closeTimeoutMS}
      ariaHideApp={ariaHideApp}
      shouldFocusAfterRender={shouldFocusAfterRender}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
      preventScroll={preventScroll}
      parentSelector={parentSelector}
      aria={aria}
      data={data}
      role={role}
      contentLabel={contentLabel}
      contentRef={contentRef}
      overlayRef={overlayRef}
      overlayElement={overlayElement || ModalOverlay(overlayProps)}
      contentElement={
        contentElement || ModalContent(containerProps, containerType)
      }
      testId={testId}
      id={id}
    >
      {title && (
        <Box flex align='center' noWrap justify='space-between'>
          {typeof title === 'string' && (
            <Text grow variant='h5'>
              {title}
            </Text>
          )}
          {typeof title !== 'string' && title}
          {closeButton && (
            <CircleButton onClick={onRequestClose}>×</CircleButton>
          )}
        </Box>
      )}
      {!title && closeButton && (
        <CircleButton css={cssModalCloseButton} onClick={onRequestClose}>
          ×
        </CircleButton>
      )}
      {children}
      {options && (
        <Box mt={4} flex align='center' justify='space-between'>
          {options}
        </Box>
      )}
    </ReactModalComponent>
  )
}

Modal.setAppElement = ReactModalComponent.setAppElement
