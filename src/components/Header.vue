<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">CM</span>
            </div>
            <span class="ml-3 text-xl font-bold text-gray-900">CodeMaster Pro</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a 
              href="#home" 
              @click="scrollToSection('home')"
              class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#features" 
              @click="scrollToSection('features')"
              class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Características
            </a>
            <a 
              href="#testimonials" 
              @click="scrollToSection('testimonials')"
              class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Testimonios
            </a>
            <a 
              href="#pricing" 
              @click="scrollToSection('pricing')"
              class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Precios
            </a>
          </div>
        </div>

        <!-- CTA Button Desktop -->
        <div class="hidden md:block">
          <button 
            @click="handleCTA"
            class="btn-primary"
          >
            Inscríbete Ahora
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 p-2"
          >
            <Bars3Icon v-if="!isMobileMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <a 
            href="#home" 
            @click="scrollToSection('home')"
            class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#features" 
            @click="scrollToSection('features')"
            class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Características
          </a>
          <a 
            href="#testimonials" 
            @click="scrollToSection('testimonials')"
            class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Testimonios
          </a>
          <a 
            href="#pricing" 
            @click="scrollToSection('pricing')"
            class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            Precios
          </a>
          <div class="pt-4">
            <button 
              @click="handleCTA"
              class="btn-primary w-full"
            >
              Inscríbete Ahora
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useModal } from '@/composables/useModal'

const { showModal } = useModal()

// Estado del menú móvil
const isMobileMenuOpen = ref(false)

// Función para alternar el menú móvil
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Función para navegación suave
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  // Cerrar menú móvil después de navegar
  isMobileMenuOpen.value = false
}

// Función para manejar CTA
const handleCTA = () => {
  showModal({
    type: 'info',
    title: '¡Gracias por tu interés!',
    message: 'Nos complace saber que estás interesado en CodeMaster Pro. Nuestro equipo se pondrá en contacto contigo pronto para brindarte más información.',
    confirmText: 'Perfecto',
    showCancel: false
  })
}
</script>