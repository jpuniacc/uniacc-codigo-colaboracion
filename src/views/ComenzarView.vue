<template>
  <div class="comenzar">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>🚀 Comenzar Ahora</h1>
        <p>Elige la primera regla que quieres implementar</p>
      </div>

      <!-- Progress Overview -->
      <div class="progress-overview">
        <div class="progress-card">
          <div class="progress-circle">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#f5f5f7" stroke-width="8" fill="none"/>
              <circle 
                cx="50" 
                cy="50" 
                r="40" 
                stroke="#007aff" 
                stroke-width="8" 
                fill="none"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="strokeDashoffset"
                class="progress-circle-fill"
              />
            </svg>
            <div class="progress-text">{{ totalProgress }}%</div>
          </div>
          <div class="progress-info">
            <h3>{{ completedPrinciples }}/7 reglas completadas</h3>
            <p>Sigue así, vas por buen camino</p>
          </div>
        </div>
      </div>

      <!-- Quick Start -->
      <div class="quick-start">
        <h2>⚡ Quick Start</h2>
        <p>Implementa estos cambios hoy mismo y ve resultados inmediatos</p>
        
        <div class="quick-actions">
          <button 
            class="quick-action"
            @click="quickStart('camera')"
          >
            <div class="action-icon">📹</div>
            <div class="action-content">
              <h3>Enciende la Cámara</h3>
              <p>En tu próxima reunión</p>
            </div>
            <div class="action-arrow">→</div>
          </button>

          <button 
            class="quick-action"
            @click="quickStart('labels')"
          >
            <div class="action-icon">🏷️</div>
            <div class="action-content">
              <h3>Usa Etiquetas</h3>
              <p>En tu próximo email</p>
            </div>
            <div class="action-arrow">→</div>
          </button>

          <button 
            class="quick-action"
            @click="quickStart('agenda')"
          >
            <div class="action-icon">📋</div>
            <div class="action-content">
              <h3>Envía Agenda</h3>
              <p>Para tu próxima reunión</p>
            </div>
            <div class="action-arrow">→</div>
          </button>
        </div>
      </div>

      <!-- Principles Selection -->
      <div class="principles-selection">
        <h2>🎯 Elige tu Primera Regla</h2>
        <p>Recomendamos empezar con Presencia Plena, pero puedes elegir la que más te guste</p>
        
        <div class="principles-grid">
          <div 
            v-for="principle in principles" 
            :key="principle.id"
            class="principle-option"
            :class="{ 
              'completed': principle.completed,
              'recommended': principle.id === 'consciente'
            }"
            @click="selectPrinciple(principle.id)"
          >
            <div class="option-header">
              <div class="option-icon">{{ principle.icon }}</div>
              <div class="option-badges">
                <span v-if="principle.completed" class="badge badge-success">Completado</span>
                <span v-else-if="principle.id === 'consciente'" class="badge badge-primary">Recomendado</span>
              </div>
            </div>
            
            <h3 class="option-title">{{ principle.title }}</h3>
            <p class="option-description">{{ principle.description }}</p>
            
            <div class="option-progress" v-if="principle.progress > 0">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: principle.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ principle.progress }}% completado</span>
            </div>
            
            <div class="option-arrow">
              {{ principle.completed ? '✅' : '→' }}
            </div>
          </div>
        </div>
      </div>

      <!-- Tips Section -->
      <div class="tips-section">
        <h2>💡 Consejos para Empezar</h2>
        <div class="tips-grid">
          <div class="tip">
            <div class="tip-icon">🎯</div>
            <h3>Empieza Pequeño</h3>
            <p>No intentes implementar todas las reglas a la vez. Elige una y domínala.</p>
          </div>
          <div class="tip">
            <div class="tip-icon">👥</div>
            <h3>Involucra a tu Equipo</h3>
            <p>Comparte lo que estás aprendiendo. El cambio es más fácil en grupo.</p>
          </div>
          <div class="tip">
            <div class="tip-icon">📊</div>
            <h3>Mide el Progreso</h3>
            <p>Observa cómo cambia tu trabajo en equipo semana a semana.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgress } from '../composables/useProgress'
import { useNotification } from '../composables/useNotification'

export default {
  name: 'ComenzarView',
  setup() {
    const router = useRouter()
    const { principles, completedPrinciples, totalProgress } = useProgress()
    const { showSuccess } = useNotification()

    const circumference = 2 * Math.PI * 40 // Radio 40
    const strokeDashoffset = computed(() => {
      return circumference - (totalProgress.value / 100) * circumference
    })

    const selectPrinciple = (id) => {
      router.push(`/principios/${id}`)
    }

    const quickStart = (action) => {
      let message = ''
      switch (action) {
        case 'camera':
          message = '¡Perfecto! Recuerda encender la cámara en tu próxima reunión'
          break
        case 'labels':
          message = '¡Excelente! Usa [IMPORTANTE] en tu próximo email'
          break
        case 'agenda':
          message = '¡Genial! Envía la agenda 24h antes de tu próxima reunión'
          break
      }
      showSuccess(message)
    }

    return {
      principles,
      completedPrinciples,
      totalProgress,
      circumference,
      strokeDashoffset,
      selectPrinciple,
      quickStart
    }
  }
}
</script>

<style scoped>
.comenzar {
  min-height: 100vh;
  padding: 60px 0;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}

.header h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.header p {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
}

.progress-overview {
  margin-bottom: 80px;
}

.progress-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  box-shadow: var(--shadow-small);
  display: flex;
  align-items: center;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}

.progress-circle {
  position: relative;
  width: 120px;
  height: 120px;
}

.progress-circle svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-circle-fill {
  transition: stroke-dashoffset 0.8s ease;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.progress-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text-primary);
}

.progress-info p {
  color: var(--color-text-secondary);
  margin: 0;
}

.quick-start {
  margin-bottom: 80px;
}

.quick-start h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.quick-start p {
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.quick-action {
  background: white;
  border: 2px solid var(--color-surface);
  border-radius: var(--border-radius-large);
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-align: left;
}

.quick-action:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.action-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.action-content {
  flex: 1;
}

.action-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--color-text-primary);
}

.action-content p {
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

.action-arrow {
  font-size: 1.5rem;
  color: var(--color-text-tertiary);
  transition: all var(--transition-normal);
}

.quick-action:hover .action-arrow {
  transform: translateX(4px);
  color: var(--color-primary);
}

.principles-selection {
  margin-bottom: 80px;
}

.principles-selection h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.principles-selection p {
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.principle-option {
  background: white;
  border: 2px solid var(--color-surface);
  border-radius: var(--border-radius-large);
  padding: 30px;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
}

.principle-option:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.principle-option.recommended {
  border-color: var(--color-primary);
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, rgba(0, 122, 255, 0.02) 100%);
}

.principle-option.completed {
  border-color: var(--color-success);
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.05) 0%, rgba(52, 199, 89, 0.02) 100%);
}

.option-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.option-icon {
  font-size: 2.5rem;
}

.option-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.option-description {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.option-progress {
  margin-bottom: 20px;
}

.option-arrow {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 1.5rem;
  color: var(--color-text-tertiary);
  transition: all var(--transition-normal);
}

.principle-option:hover .option-arrow {
  transform: translateX(4px);
  color: var(--color-primary);
}

.tips-section {
  background: var(--color-surface);
  padding: 60px 0;
  border-radius: var(--border-radius-large);
}

.tips-section h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.tip {
  text-align: center;
}

.tip-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.tip h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.tip p {
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .progress-card {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .quick-actions {
    grid-template-columns: 1fr;
  }
  
  .principles-grid {
    grid-template-columns: 1fr;
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>
