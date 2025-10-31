<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div 
        v-if="modalState.isVisible" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="handleOverlayClick"
      >
        <!-- Overlay con blur -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        <!-- Modal Container -->
        <div 
          class="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300"
          @click.stop
        >
          <!-- Header con ícono -->
          <div class="flex items-center justify-center pt-8 pb-4">
            <div :class="iconContainerClass">
              <component :is="iconComponent" :class="iconClass" />
            </div>
          </div>
          
          <!-- Content -->
          <div class="px-8 pb-6 text-center">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {{ modalState.config?.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ modalState.config?.message }}
            </p>
          </div>
          
          <!-- Actions -->
          <div class="flex gap-3 px-8 pb-8">
            <button
              v-if="modalState.config?.showCancel"
              @click="cancelModal"
              class="flex-1 px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
            >
              {{ modalState.config?.cancelText }}
            </button>
            <button
              @click="confirmModal"
              :class="confirmButtonClass"
              class="flex-1 px-6 py-3 text-white font-medium rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {{ modalState.config?.confirmText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useModal } from '@/composables/useModal'
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  XCircleIcon, 
  InformationCircleIcon 
} from '@heroicons/vue/24/outline'

const { modalState, confirmModal, cancelModal, hideModal } = useModal()

// Manejar click en overlay
const handleOverlayClick = () => {
  if (!modalState.config?.showCancel) {
    hideModal()
  }
}

// Computed para íconos y estilos según el tipo
const iconComponent = computed(() => {
  switch (modalState.config?.type) {
    case 'success':
      return CheckCircleIcon
    case 'error':
      return XCircleIcon
    case 'warning':
      return ExclamationTriangleIcon
    case 'info':
    default:
      return InformationCircleIcon
  }
})

const iconContainerClass = computed(() => {
  const baseClass = 'w-16 h-16 rounded-full flex items-center justify-center'
  switch (modalState.config?.type) {
    case 'success':
      return `${baseClass} bg-green-100 dark:bg-green-900/30`
    case 'error':
      return `${baseClass} bg-red-100 dark:bg-red-900/30`
    case 'warning':
      return `${baseClass} bg-yellow-100 dark:bg-yellow-900/30`
    case 'info':
    default:
      return `${baseClass} bg-blue-100 dark:bg-blue-900/30`
  }
})

const iconClass = computed(() => {
  const baseClass = 'w-8 h-8'
  switch (modalState.config?.type) {
    case 'success':
      return `${baseClass} text-green-600 dark:text-green-400`
    case 'error':
      return `${baseClass} text-red-600 dark:text-red-400`
    case 'warning':
      return `${baseClass} text-yellow-600 dark:text-yellow-400`
    case 'info':
    default:
      return `${baseClass} text-blue-600 dark:text-blue-400`
  }
})

const confirmButtonClass = computed(() => {
  const baseClass = 'hover:shadow-xl'
  switch (modalState.config?.type) {
    case 'success':
      return `${baseClass} bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-green-500/25 hover:shadow-green-500/40`
    case 'error':
      return `${baseClass} bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-red-500/25 hover:shadow-red-500/40`
    case 'warning':
      return `${baseClass} bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 shadow-yellow-500/25 hover:shadow-yellow-500/40`
    case 'info':
    default:
      return `${baseClass} bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 shadow-blue-500/25 hover:shadow-blue-500/40`
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9) translateY(-20px);
}

.modal-enter-to .relative,
.modal-leave-from .relative {
  transform: scale(1) translateY(0);
}
</style>