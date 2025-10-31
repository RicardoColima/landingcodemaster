import { ref, reactive } from 'vue'

export type ModalType = 'success' | 'error' | 'warning' | 'info'

export interface ModalConfig {
  title: string
  message: string
  type: ModalType
  confirmText?: string
  cancelText?: string
  showCancel?: boolean
  autoClose?: number // milliseconds
  onConfirm?: () => void
  onCancel?: () => void
}

const modalState = reactive({
  isVisible: false,
  config: null as ModalConfig | null
})

export const useModal = () => {
  const showModal = (config: ModalConfig) => {
    modalState.config = {
      confirmText: 'Aceptar',
      cancelText: 'Cancelar',
      showCancel: false,
      ...config
    }
    modalState.isVisible = true

    // Auto close si está configurado
    if (config.autoClose) {
      setTimeout(() => {
        hideModal()
      }, config.autoClose)
    }
  }

  const hideModal = () => {
    modalState.isVisible = false
    modalState.config = null
  }

  const confirmModal = () => {
    if (modalState.config?.onConfirm) {
      modalState.config.onConfirm()
    }
    hideModal()
  }

  const cancelModal = () => {
    if (modalState.config?.onCancel) {
      modalState.config.onCancel()
    }
    hideModal()
  }

  // Métodos de conveniencia para diferentes tipos
  const showSuccess = (title: string, message: string, autoClose = 3000) => {
    showModal({
      title,
      message,
      type: 'success',
      autoClose
    })
  }

  const showError = (title: string, message: string) => {
    showModal({
      title,
      message,
      type: 'error'
    })
  }

  const showWarning = (title: string, message: string, onConfirm?: () => void) => {
    showModal({
      title,
      message,
      type: 'warning',
      showCancel: true,
      onConfirm
    })
  }

  const showInfo = (title: string, message: string) => {
    showModal({
      title,
      message,
      type: 'info'
    })
  }

  const showConfirm = (title: string, message: string, onConfirm: () => void, onCancel?: () => void) => {
    showModal({
      title,
      message,
      type: 'warning',
      showCancel: true,
      onConfirm,
      onCancel
    })
  }

  return {
    modalState,
    showModal,
    hideModal,
    confirmModal,
    cancelModal,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showConfirm
  }
}