<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content animate-slide-up">
        <h1>Código de Colaboración UNIACC</h1>
        <p class="hero-subtitle">7 reglas simples para trabajar mejor juntos</p>
        <div class="hero-actions">
          <router-link to="/comenzar" class="btn btn-primary btn-large">
            🚀 Comenzar Ahora
          </router-link>
          <router-link to="/principios" class="btn btn-outline btn-large">
            📖 Ver Reglas
          </router-link>
        </div>
      </div>
      <div class="hero-image animate-fade-in">
        <div class="hero-illustration">
          <div class="team-icon">👥</div>
          <div class="collaboration-lines">
            <div class="line line-1"></div>
            <div class="line line-2"></div>
            <div class="line line-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat animate-slide-up">
            <div class="stat-number">1,500+</div>
            <div class="stat-label">Personas ya lo usan</div>
          </div>
          <div class="stat animate-slide-up">
            <div class="stat-number">+89%</div>
            <div class="stat-label">Mejora en satisfacción</div>
          </div>
          <div class="stat animate-slide-up">
            <div class="stat-number">7</div>
            <div class="stat-label">Reglas simples</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Principles Preview -->
    <section class="principles-preview">
      <div class="container">
        <h2 class="section-title">Las 7 Reglas</h2>
        <p class="section-subtitle">Cada regla tiene 3 pasos simples para implementar</p>
        
        <div class="principles-grid">
          <div 
            v-for="(principle, index) in principles" 
            :key="principle.id"
            class="principle-card animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="goToPrinciple(principle.id)"
          >
            <div class="card-icon">{{ principle.icon }}</div>
            <h3 class="card-title">{{ principle.title }}</h3>
            <p class="card-description">{{ principle.description }}</p>
            <div class="card-progress" v-if="principle.progress > 0">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: principle.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ principle.progress }}% completado</span>
            </div>
            <div class="card-arrow">→</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">Cómo Funciona</h2>
        
        <div class="steps">
          <div class="step animate-slide-up">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Elige una Regla</h3>
              <p>Selecciona la regla que quieres implementar primero</p>
            </div>
          </div>
          
          <div class="step animate-slide-up">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Sigue 3 Pasos</h3>
              <p>Cada regla tiene 3 pasos simples y claros</p>
            </div>
          </div>
          
          <div class="step animate-slide-up">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Ve los Resultados</h3>
              <p>Observa cómo mejora tu trabajo en equipo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>¿Listo para comenzar?</h2>
          <p>Únete a las 1,500+ personas que ya están trabajando mejor juntos</p>
          <router-link to="/comenzar" class="btn btn-primary btn-large">
            Comenzar Gratis
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useProgress } from '../composables/useProgress'
import { useRouter } from 'vue-router'

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter()
    const { principles } = useProgress()

    const goToPrinciple = (id) => {
      router.push(`/principios/${id}`)
    }

    return {
      principles,
      goToPrinciple
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 80vh;
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--color-text-primary);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-illustration {
  position: relative;
  width: 300px;
  height: 300px;
}

.team-icon {
  font-size: 120px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.collaboration-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.line {
  position: absolute;
  background: var(--color-primary);
  opacity: 0.3;
  border-radius: 2px;
}

.line-1 {
  width: 100px;
  height: 4px;
  top: 30%;
  left: 10%;
  transform: rotate(15deg);
  animation: pulse 2s infinite;
}

.line-2 {
  width: 80px;
  height: 4px;
  top: 60%;
  right: 15%;
  transform: rotate(-20deg);
  animation: pulse 2s infinite 0.5s;
}

.line-3 {
  width: 60px;
  height: 4px;
  bottom: 25%;
  left: 20%;
  transform: rotate(45deg);
  animation: pulse 2s infinite 1s;
}

.stats {
  padding: 80px 0;
  background: var(--color-surface);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
}

.principles-preview {
  padding: 100px 0;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 60px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.principle-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
}

.principle-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-large);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.card-description {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.card-progress {
  margin-bottom: 20px;
}

.progress-text {
  font-size: 0.9rem;
  color: var(--color-text-tertiary);
  margin-top: 8px;
}

.card-arrow {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 1.5rem;
  color: var(--color-text-tertiary);
  transition: all var(--transition-normal);
}

.principle-card:hover .card-arrow {
  transform: translateX(4px);
  color: var(--color-primary);
}

.how-it-works {
  padding: 100px 0;
  background: var(--color-surface);
}

.steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.step {
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 20px;
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.step-content p {
  color: var(--color-text-secondary);
}

.cta-section {
  padding: 100px 0;
  background: var(--color-primary);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: white;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.8);
}

.cta-section .btn {
  background: white;
  color: var(--color-primary);
}

.cta-section .btn:hover {
  background: var(--color-surface);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    padding: 40px 20px;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .steps {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
