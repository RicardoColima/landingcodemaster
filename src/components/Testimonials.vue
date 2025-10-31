<template>
  <section id="testimonials" class="section-padding bg-white">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Lo que dicen nuestros 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">
            estudiantes
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Miles de desarrolladores han transformado sus carreras con CodeMaster Pro. 
          Estas son algunas de sus historias de éxito.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="animate-on-scroll bg-gray-50 rounded-2xl p-8 relative hover:shadow-xl transition-all duration-300 border border-gray-100"
          :style="{ animationDelay: `${index * 200}ms` }"
        >
          <!-- Quote Icon -->
          <div class="absolute top-6 right-6">
            <svg class="w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <!-- Rating Stars -->
          <div class="flex mb-4">
            <StarIcon 
              v-for="star in 5" 
              :key="star"
              class="w-5 h-5 text-yellow-400 fill-current"
            />
          </div>

          <!-- Testimonial Text -->
          <blockquote class="text-gray-700 mb-6 leading-relaxed">
            "{{ testimonial.comment }}"
          </blockquote>

          <!-- Author Info -->
          <div class="flex items-center">
            <img 
              :src="testimonial.image" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-100"
            />
            <div>
              <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-600">{{ testimonial.role }}</div>
              <div class="text-xs text-primary-600 font-medium">{{ testimonial.company }}</div>
            </div>
          </div>

          <!-- Achievement Badge -->
          <div class="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
            <CheckBadgeIcon class="w-4 h-4 mr-1" />
            {{ testimonial.achievement }}
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-16 bg-gradient-to-r from-primary-600 to-emerald-600 rounded-2xl p-8 text-white animate-on-scroll">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold mb-2">15,000+</div>
            <div class="text-primary-100">Estudiantes Graduados</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">98%</div>
            <div class="text-primary-100">Tasa de Satisfacción</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">$75k</div>
            <div class="text-primary-100">Salario Promedio</div>
          </div>
          <div>
            <div class="text-3xl font-bold mb-2">6 meses</div>
            <div class="text-primary-100">Tiempo Promedio de Empleo</div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16 animate-on-scroll">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">
          ¿Quieres ser el próximo caso de éxito?
        </h3>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Únete a nuestra comunidad de desarrolladores exitosos y comienza tu transformación profesional hoy mismo.
        </p>
        <button 
          @click="handleCTA"
          class="btn-primary text-lg px-8 py-4"
        >
          Comenzar Mi Transformación
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { StarIcon, CheckBadgeIcon } from '@heroicons/vue/24/solid'

// Datos de testimonios
const testimonials = [
  {
    name: "María González",
    role: "Full Stack Developer",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    comment: "CodeMaster Pro cambió completamente mi carrera. En 8 meses pasé de no saber programar a conseguir mi primer trabajo como desarrolladora full-stack con un salario de $80,000 anuales.",
    achievement: "Empleada en 6 meses"
  },
  {
    name: "Carlos Rodríguez",
    role: "Frontend Developer",
    company: "StartupXYZ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    comment: "Los proyectos prácticos y las mentorías fueron clave para mi éxito. Ahora trabajo en una startup innovadora y estoy desarrollando productos que impactan a miles de usuarios.",
    achievement: "Aumento salarial 150%"
  },
  {
    name: "Ana Martínez",
    role: "Backend Developer",
    company: "GlobalTech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    comment: "La calidad del contenido y el apoyo de la comunidad superaron mis expectativas. Las habilidades que aprendí me permitieron conseguir trabajo remoto en una empresa internacional.",
    achievement: "Trabajo Remoto Internacional"
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