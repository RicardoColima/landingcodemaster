<template>
  <section id="features" class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          ¿Por qué elegir 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">
            CodeMaster Pro?
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Nuestro curso está diseñado para llevarte desde principiante hasta desarrollador profesional 
          con las herramientas y conocimientos más actuales del mercado.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="animate-on-scroll card hover:shadow-2xl transition-all duration-300"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <!-- Icon -->
          <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-xl mb-6 mx-auto">
            <component :is="feature.icon" class="w-8 h-8 text-white" />
          </div>

          <!-- Content -->
          <div class="text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-6">{{ feature.description }}</p>
            
            <!-- Feature Benefits -->
            <ul class="text-left space-y-2">
              <li 
                v-for="(benefit, benefitIndex) in feature.benefits" 
                :key="benefitIndex"
                class="flex items-start"
              >
                <CheckIcon class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span class="text-gray-700 text-sm">{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16 animate-on-scroll">
        <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para transformar tu carrera?
          </h3>
          <p class="text-gray-600 mb-6">
            Únete a miles de desarrolladores que ya han cambiado sus vidas con CodeMaster Pro
          </p>
          <button 
            @click="handleCTA"
            class="btn-primary text-lg px-8 py-4"
          >
            Ver Planes y Precios
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  CodeBracketIcon, 
  RocketLaunchIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  CheckIcon 
} from '@heroicons/vue/24/outline'

// Datos de las características
const features = [
  {
    icon: CodeBracketIcon,
    title: "Proyectos Reales",
    description: "Aprende construyendo aplicaciones completas que podrás incluir en tu portafolio profesional.",
    benefits: [
      "50+ proyectos prácticos paso a paso",
      "Código fuente completo incluido",
      "Aplicaciones modernas con React, Vue y Node.js",
      "Integración con APIs y bases de datos"
    ]
  },
  {
    icon: RocketLaunchIcon,
    title: "Tecnologías Actuales",
    description: "Domina las herramientas más demandadas por las empresas tecnológicas líderes.",
    benefits: [
      "JavaScript ES6+, TypeScript",
      "React, Vue.js, Angular",
      "Node.js, Express, MongoDB",
      "Docker, AWS, Git & GitHub"
    ]
  },
  {
    icon: UserGroupIcon,
    title: "Mentorías Personalizadas",
    description: "Recibe feedback directo de desarrolladores senior con años de experiencia en la industria.",
    benefits: [
      "Sesiones 1-a-1 con mentores",
      "Revisión de código personalizada",
      "Orientación profesional y career coaching",
      "Preparación para entrevistas técnicas"
    ]
  },
  {
    icon: AcademicCapIcon,
    title: "Certificación Profesional",
    description: "Obtén credenciales reconocidas por la industria que validen tus nuevas habilidades.",
    benefits: [
      "Certificado oficial de finalización",
      "Badge digital para LinkedIn",
      "Validación de habilidades técnicas",
      "Reconocimiento por empresas partner"
    ]
  }
]

// Función para manejar CTA
const handleCTA = () => {
  const element = document.getElementById('pricing')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>