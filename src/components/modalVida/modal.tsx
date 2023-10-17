import {
  PropsWithChildren,
  useEffect,
  useState,
  MouseEventHandler,
} from 'react'
import ReactDOM from 'react-dom'
import IconClose from '../../assets/images/svg/icon_close.svg'
import './modal.scss'

type ModalProps = PropsWithChildren<{
  onClose?: MouseEventHandler
  hasClose?: boolean
  isOpen?: boolean
  className?: string
  classBody?: string
  modalRef?: any
  showTextCloseModal?: boolean
  modalContainerId?: string
}>

const createModalRoot = (id: string) => {
  const container = document.createElement('div')
  container.id = id
  container.setAttribute('data-testid', id)
  document.body.append(container)

  return container
}

const Modal = (props: ModalProps) => {
  const {
    children,
    onClose,
    hasClose,
    isOpen,
    className,
    modalRef,
    classBody,
    showTextCloseModal = true,
    modalContainerId = 'modal-root',
  } = props

  const [modalContainer] = useState(document.createElement('div'))
  useEffect(() => {
    const modalRoot =
      document.getElementById(modalContainerId) ??
      createModalRoot(modalContainerId)

    modalRoot.appendChild(modalContainer)

    return () => {
      modalRoot.removeChild(modalContainer)
    }
  }, [])

  if (isOpen)
    return ReactDOM.createPortal(
      <div
        data-testid="modal-overlay"
        className={`modal-overlay ${className || ''}`}
      >
        <div
          data-testid="modal-body"
          className={`modal-body ${classBody}`}
          ref={modalRef}
        >
          {hasClose && (
            <div
              className="modal-close"
              onClick={onClose}
              data-testid="close"
              role="button"
            >
              {showTextCloseModal && <span>Cerrar</span>}
              <span className="icon-close">
                <img src={IconClose} alt="icon" />
              </span>
            </div>
          )}
          {children}
        </div>
      </div>,
      modalContainer
    )

  return null
}

export default Modal
