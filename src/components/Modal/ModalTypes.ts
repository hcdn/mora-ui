import { BoxProps } from '..'
import Modal from 'react-modal'
import { FC } from 'react'

interface OriginalProps {
  isOpen: Modal.Props['isOpen']
  style?: Modal.Props['style']
  portalClassName?: Modal.Props['portalClassName']
  bodyOpenClassName?: Modal.Props['bodyOpenClassName']
  htmlOpenClassName?: Modal.Props['htmlOpenClassName']
  overlayClassName?: Modal.Props['overlayClassName']
  appElement?: Modal.Props['appElement']
  onAfterOpen?: Modal.Props['onAfterOpen']
  onAfterClose?: Modal.Props['onAfterClose']
  onRequestClose?: Modal.Props['onRequestClose']
  closeTimeoutMS?: Modal.Props['closeTimeoutMS']
  ariaHideApp?: Modal.Props['ariaHideApp']
  shouldFocusAfterRender?: Modal.Props['shouldFocusAfterRender']
  shouldCloseOnOverlayClick?: Modal.Props['shouldCloseOnOverlayClick']
  shouldCloseOnEsc?: Modal.Props['shouldCloseOnEsc']
  shouldReturnFocusAfterClose?: Modal.Props['shouldReturnFocusAfterClose']
  preventScroll?: Modal.Props['preventScroll']
  parentSelector?: Modal.Props['parentSelector']
  aria?: Modal.Props['aria']
  data?: Modal.Props['data']
  role?: Modal.Props['role']
  contentLabel?: Modal.Props['contentLabel']
  contentRef?: Modal.Props['contentRef']
  overlayRef?: Modal.Props['overlayRef']
  overlayElement?: Modal.Props['overlayElement']
  contentElement?: Modal.Props['contentElement']
  testId?: Modal.Props['testId']
  id?: Modal.Props['id']
}

export interface ModalProps extends BoxProps, OriginalProps {
  title?: string | any
  options?: any
  closeButton?: boolean
  overlayProps?: BoxProps
  containerType?: 'Box' | 'Card'
}

export interface ModalInteraface extends FC<ModalProps> {
  setAppElement: (appElement: string | HTMLElement) => void
}
