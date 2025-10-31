<template>
  <div id="app" class="min-h-screen">
    <!-- Header Navigation -->
    <Header />
    
    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section id="home">
        <Hero />
      </section>
      
      <!-- Features Section -->
      <section id="features">
        <Features />
      </section>
      
      <!-- Testimonials Section -->
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <!-- Pricing Section -->
      <section id="pricing">
        <Pricing />
      </section>
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Modal Global -->
    <Modal />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Testimonials from './components/Testimonials.vue'
import Pricing from './components/Pricing.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

// Configurar animaciones al hacer scroll
onMounted(() => {
  // Configurar Intersection Observer para animaciones
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, observerOptions)

  // Observar elementos con la clase animate-on-scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll')
  animatedElements.forEach((el) => observer.observe(el))

  // Cleanup al desmontar
  return () => {
    animatedElements.forEach((el) => observer.unobserve(el))
  }
})
</script>

<style>
/* Estilos globales para animaciones suaves */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.animate-fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* Scroll suave para toda la página */
html {
  scroll-behavior: smooth;
}

/* Ocultar scrollbar en navegadores webkit */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>