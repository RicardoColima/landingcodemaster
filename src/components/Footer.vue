<template>
  <footer class="bg-gray-900 text-white">
    <!-- Newsletter Section -->
    <div class="bg-gradient-to-r from-primary-600 to-emerald-600 py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-2xl font-bold mb-4">
            🚀 ¿Listo para comenzar tu transformación?
          </h3>
          <p class="text-primary-100 mb-8 text-lg">
            Suscríbete a nuestro newsletter y recibe contenido exclusivo, tips de programación 
            y ofertas especiales directamente en tu inbox.
          </p>
          
          <!-- Newsletter Form -->
          <form @submit.prevent="handleNewsletterSubmit" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div class="flex-1">
              <input 
                v-model="email"
                type="email" 
                placeholder="Tu email aquí..."
                class="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <button 
              type="submit"
              class="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
            >
              <PaperAirplaneIcon class="w-5 h-5 mr-2 inline" />
              Suscribirme
            </button>
          </form>
          
          <p class="text-primary-200 text-sm mt-4">
            ✅ Sin spam. ✅ Cancela cuando quieras. ✅ Contenido de valor garantizado.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">CM</span>
            </div>
            <span class="ml-3 text-xl font-bold">CodeMaster Pro</span>
          </div>
          
          <p class="text-gray-300 mb-6 max-w-md leading-relaxed">
            Transformamos vidas a través de la educación en tecnología. Más de 15,000 desarrolladores 
            han cambiado sus carreras con nuestros cursos prácticos y mentorías personalizadas.
          </p>
          
          <!-- Social Media -->
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg v-if="social.name === 'Facebook'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <svg v-else-if="social.name === 'Twitter'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <svg v-else-if="social.name === 'LinkedIn'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <svg v-else-if="social.name === 'YouTube'" class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a 
                :href="link.href" 
                @click="scrollToSection(link.section)"
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Soporte</h4>
          <ul class="space-y-3">
            <li v-for="support in supportLinks" :key="support.name">
              <a 
                :href="support.href" 
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ support.name }}
              </a>
            </li>
          </ul>
          
          <!-- Contact Info -->
          <div class="mt-6 space-y-2">
            <div class="flex items-center text-gray-300">
              <EnvelopeIcon class="w-4 h-4 mr-2" />
              <span class="text-sm">hola@codemasterpro.com</span>
            </div>
            <div class="flex items-center text-gray-300">
              <PhoneIcon class="w-4 h-4 mr-2" />
              <span class="text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 CodeMaster Pro. Todos los derechos reservados.
          </div>
          
          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              Términos de Servicio
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div 
      v-if="showSuccessMessage"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in"
    >
      ✅ ¡Suscripción exitosa! Revisa tu email.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  PaperAirplaneIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/vue/24/outline'
import { useModal } from '@/composables/useModal'

const { showModal } = useModal()

// Estado del formulario
const email = ref('')
const showSuccessMessage = ref(false)

// Enlaces sociales con íconos SVG reales
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/codemasterpro',
    icon: 'FacebookIcon'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/codemasterpro',
    icon: 'TwitterIcon'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/codemasterpro',
    icon: 'LinkedInIcon'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/codemasterpro',
    icon: 'YouTubeIcon'
  }
]

// Enlaces rápidos
const quickLinks = [
  { name: 'Inicio', href: '#home', section: 'home' },
  { name: 'Características', href: '#features', section: 'features' },
  { name: 'Testimonios', href: '#testimonials', section: 'testimonials' },
  { name: 'Precios', href: '#pricing', section: 'pricing' }
]

// Enlaces de soporte
const supportLinks = [
  { name: 'Centro de Ayuda', href: '#' },
  { name: 'Documentación', href: '#' },
  { name: 'Comunidad', href: '#' },
  { name: 'Contacto', href: '#' }
]

// Función para manejar suscripción al newsletter
const handleNewsletterSubmit = () => {
  if (validateEmail(email.value)) {
    // Simular suscripción exitosa
    showSuccessMessage.value = true
    email.value = ''
    
    // Mostrar modal de éxito
    showModal({
      type: 'success',
      title: '¡Suscripción exitosa!',
      message: 'Te has suscrito correctamente a nuestro newsletter. Recibirás las últimas novedades y ofertas exclusivas.',
      confirmText: 'Perfecto',
      showCancel: false
    })
    
    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 3000)
  } else {
    showModal({
      type: 'error',
      title: 'Email inválido',
      message: 'Por favor, ingresa un email válido para suscribirte a nuestro newsletter.',
      confirmText: 'Entendido',
      showCancel: false
    })
  }
}

// Función para validar email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Función para navegación suave
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>