import { ref } from 'vue'

const notification = ref({
  show: false,
  type: 'info',
  message: '',
  icon: '📢'
})

let notificationTimeout = null

export function useNotification() {
  const showNotification = (message, type = 'info', icon = '📢') => {
    // Cancelar notificación anterior si existe
    if (notificationTimeout) {
      clearTimeout(notificationTimeout)
    }
    
    notification.value = {
      show: true,
      type,
      message,
      icon
    }
    
    // Auto-hide después de 5 segundos
    notificationTimeout = setTimeout(() => {
      hideNotification()
    }, 5000)
  }

  const hideNotification = () => {
    notification.value.show = false
    if (notificationTimeout) {
      clearTimeout(notificationTimeout)
      notificationTimeout = null
    }
  }

  const showSuccess = (message) => {
    showNotification(message, 'success', '✅')
  }

  const showError = (message) => {
    showNotification(message, 'error', '❌')
  }

  const showInfo = (message) => {
    showNotification(message, 'info', '📢')
  }

  const showWarning = (message) => {
    showNotification(message, 'warning', '⚠️')
  }

  return {
    notification,
    showNotification,
    hideNotification,
    showSuccess,
    showError,
    showInfo,
    showWarning
  }
}
