<template>
  <section id="pricing" class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Elige el plan perfecto para 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">
            tu futuro
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Invierte en tu carrera con nuestros planes diseñados para llevarte desde principiante 
          hasta desarrollador profesional. Garantía de satisfacción de 30 días.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Plan Básico -->
        <div class="animate-on-scroll bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Plan Básico</h3>
            <p class="text-gray-600 mb-6">Perfecto para comenzar tu journey en desarrollo web</p>
            
            <div class="mb-6">
              <span class="text-4xl font-bold text-gray-900">$97</span>
              <span class="text-gray-600 ml-2">pago único</span>
            </div>

            <div class="bg-gray-100 rounded-lg p-3 mb-6">
              <span class="text-sm text-gray-600">💰 Ahorra $203 vs precio regular</span>
            </div>
          </div>

          <!-- Features List -->
          <ul class="space-y-4 mb-8">
            <li v-for="feature in basicFeatures" :key="feature" class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button 
            @click="handlePlanSelect('Básico')"
            class="btn-secondary w-full text-lg py-4"
          >
            Comenzar con Básico
          </button>
        </div>

        <!-- Plan Premium (Recomendado) -->
        <div class="animate-on-scroll bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary-500 relative hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <!-- Recommended Badge -->
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🏆 MÁS POPULAR
            </span>
          </div>

          <div class="text-center mb-8 pt-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Plan Premium</h3>
            <p class="text-gray-600 mb-6">La experiencia completa con mentorías y certificación</p>
            
            <div class="mb-6">
              <span class="text-4xl font-bold text-primary-600">$197</span>
              <span class="text-gray-600 ml-2">pago único</span>
            </div>

            <div class="bg-gradient-to-r from-primary-50 to-emerald-50 rounded-lg p-3 mb-6 border border-primary-200">
              <span class="text-sm text-primary-700 font-medium">🎯 Mejor valor - Incluye todo lo necesario</span>
            </div>
          </div>

          <!-- Features List -->
          <ul class="space-y-4 mb-8">
            <li v-for="feature in premiumFeatures" :key="feature" class="flex items-start">
              <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button 
            @click="handlePlanSelect('Premium')"
            class="btn-primary w-full text-lg py-4 shadow-lg"
          >
            <RocketLaunchIcon class="w-5 h-5 mr-2 inline" />
            Comenzar con Premium
          </button>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-16 text-center animate-on-scroll">
        <div class="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
          <h3 class="text-xl font-bold text-gray-900 mb-6">¿Por qué confiar en CodeMaster Pro?</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center">
              <ShieldCheckIcon class="w-12 h-12 text-green-500 mb-3" />
              <h4 class="font-semibold text-gray-900 mb-2">Garantía 30 días</h4>
              <p class="text-gray-600 text-sm">Si no estás satisfecho, te devolvemos tu dinero</p>
            </div>
            
            <div class="flex flex-col items-center">
              <AcademicCapIcon class="w-12 h-12 text-blue-500 mb-3" />
              <h4 class="font-semibold text-gray-900 mb-2">Certificación Oficial</h4>
              <p class="text-gray-600 text-sm">Reconocida por empresas líderes en tecnología</p>
            </div>
            
            <div class="flex flex-col items-center">
              <UserGroupIcon class="w-12 h-12 text-purple-500 mb-3" />
              <h4 class="font-semibold text-gray-900 mb-2">Comunidad Activa</h4>
              <p class="text-gray-600 text-sm">15,000+ desarrolladores te apoyan en tu journey</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-16 animate-on-scroll">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">Preguntas Frecuentes</h3>
        <div class="max-w-3xl mx-auto space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h4 class="font-semibold text-gray-900 mb-2">{{ faq.question }}</h4>
            <p class="text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CheckIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon, 
  UserGroupIcon 
} from '@heroicons/vue/24/outline'
import { useModal } from '@/composables/useModal'

const { showModal } = useModal()

// Features del plan básico
const basicFeatures = [
  "Acceso completo al curso (50+ horas de video)",
  "30+ proyectos prácticos paso a paso",
  "Código fuente de todos los proyectos",
  "Acceso a la comunidad de Discord",
  "Actualizaciones gratuitas de por vida",
  "Certificado de finalización",
  "Soporte por email"
]

// Features del plan premium
const premiumFeatures = [
  "Todo lo incluido en el Plan Básico",
  "4 sesiones de mentoría 1-a-1 (valor $400)",
  "Revisión personalizada de tu portafolio",
  "Preparación para entrevistas técnicas",
  "Acceso prioritario a nuevos contenidos",
  "Certificación profesional verificada",
  "Soporte prioritario 24/7",
  "Acceso a workshops exclusivos en vivo",
  "Red de contactos con empresas partner"
]

// FAQs
const faqs = [
  {
    question: "¿Necesito experiencia previa en programación?",
    answer: "No, el curso está diseñado para principiantes absolutos. Comenzamos desde los fundamentos y avanzamos gradualmente."
  },
  {
    question: "¿Cuánto tiempo necesito dedicar por semana?",
    answer: "Recomendamos 10-15 horas por semana para completar el curso en 6 meses, pero puedes ir a tu propio ritmo."
  },
  {
    question: "¿El certificado es reconocido por empresas?",
    answer: "Sí, nuestro certificado es reconocido por más de 500 empresas tecnológicas y está validado por la industria."
  },
  {
    question: "¿Qué pasa si no puedo completar el curso?",
    answer: "Tienes acceso de por vida, así que puedes tomarte el tiempo que necesites. Además, ofrecemos garantía de 30 días."
  }
]

// Función para manejar selección de plan
const handlePlanSelect = (planName: string) => {
  showModal({
    type: 'success',
    title: '¡Excelente elección!',
    message: `Has seleccionado el Plan ${planName}. Te redirigiremos al proceso de pago seguro donde podrás completar tu inscripción.`,
    confirmText: 'Proceder al pago',
    showCancel: true,
    cancelText: 'Cancelar'
  })
}
</script>