<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 bg-black opacity-30"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-blue-900/40 to-indigo-900/60"></div>
    
    <!-- Floating Particles -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full blur-2xl animate-bounce delay-500"></div>
      <div class="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
    </div>

    <!-- Animated Grid Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0); background-size: 50px 50px; animation: grid-move 20s linear infinite;"></div>
    </div>

    <!-- Floating Code Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/6 text-cyan-400/30 font-mono text-sm animate-float">
        &lt;div className="hero"&gt;
      </div>
      <div class="absolute top-3/4 right-1/4 text-purple-400/30 font-mono text-sm animate-float-delayed">
        const success = true;
      </div>
      <div class="absolute top-1/2 left-3/4 text-emerald-400/30 font-mono text-sm animate-float-slow">
        npm install future
      </div>
      <div class="absolute bottom-1/3 left-1/3 text-pink-400/30 font-mono text-sm animate-float">
        git commit -m "life changed"
      </div>
    </div>

    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="max-w-4xl mx-auto animate-on-scroll">
        <!-- Badge -->
        <div class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 text-white text-sm font-medium mb-8 animate-pulse shadow-lg shadow-cyan-500/25">
          <SparklesIcon class="w-5 h-5 mr-2 text-cyan-400 animate-spin" />
          🚀 Curso #1 en Desarrollo Web Full-Stack
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span class="inline-block animate-fade-in-up">Domina el</span>
          <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x inline-block animate-fade-in-up delay-300">
            Desarrollo Web
          </span>
          <br />
          <span class="inline-block animate-fade-in-up delay-500">desde Cero hasta</span>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 animate-pulse inline-block animate-fade-in-up delay-700">
            Experto
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Aprende las tecnologías más demandadas del mercado con proyectos reales, 
          mentorías personalizadas y una comunidad de desarrolladores apasionados.
        </p>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-8 mb-10 text-white">
          <div class="text-center group">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform duration-300">50+</div>
            <div class="text-sm text-gray-300 group-hover:text-white transition-colors">Proyectos Prácticos</div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 group-hover:scale-110 transition-transform duration-300">15k+</div>
            <div class="text-sm text-gray-300 group-hover:text-white transition-colors">Estudiantes Activos</div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div class="text-sm text-gray-300 group-hover:text-white transition-colors">Tasa de Satisfacción</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button 
            @click="handleMainCTA"
            class="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg px-10 py-5 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 w-full sm:w-auto"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <PlayIcon class="w-6 h-6 mr-3 inline animate-pulse" />
            🚀 Comenzar Ahora - $97
            <span class="absolute top-0 right-0 bg-yellow-400 text-black text-xs px-2 py-1 rounded-bl-lg font-bold">HOT</span>
          </button>
          <button 
            @click="scrollToFeatures"
            class="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-semibold text-lg px-10 py-5 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:bg-white/20 w-full sm:w-auto"
          >
            <div class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <InformationCircleIcon class="w-6 h-6 mr-3 inline" />
            Ver Características
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center items-center gap-8 text-gray-300">
          <div class="flex items-center">
            <CheckBadgeIcon class="w-5 h-5 mr-2 text-green-400" />
            <span class="text-sm">Certificación Incluida</span>
          </div>
          <div class="flex items-center">
            <ClockIcon class="w-5 h-5 mr-2 text-blue-400" />
            <span class="text-sm">Acceso de por Vida</span>
          </div>
          <div class="flex items-center">
            <UserGroupIcon class="w-5 h-5 mr-2 text-purple-400" />
            <span class="text-sm">Comunidad Exclusiva</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDownIcon class="w-6 h-6 text-white/70" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  PlayIcon, 
  SparklesIcon, 
  InformationCircleIcon, 
  CheckBadgeIcon, 
  ClockIcon, 
  UserGroupIcon,
  ChevronDownIcon 
} from '@heroicons/vue/24/outline'
import { useModal } from '@/composables/useModal'

const { showModal } = useModal()

// Función para manejar CTA principal
const handleMainCTA = () => {
  showModal({
    type: 'success',
    title: '¡Excelente decisión!',
    message: 'Te redirigiremos al proceso de inscripción para que puedas comenzar tu transformación profesional.',
    confirmText: 'Continuar',
    showCancel: false
  })
}

// Función para scroll a características
const scrollToFeatures = () => {
  const element = document.getElementById('features')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-700 {
  animation-delay: 0.7s;
}
</style>