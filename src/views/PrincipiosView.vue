<template>
  <div class="principios">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>🎯 Los 7 Principios</h1>
        <p>Cada principio tiene 3 pasos simples para implementar</p>
        <div class="progress-summary">
          <div class="summary-card">
            <div class="summary-number">{{ completedPrinciples }}/7</div>
            <div class="summary-label">Principios Completados</div>
          </div>
          <div class="summary-card">
            <div class="summary-number">{{ totalProgress }}%</div>
            <div class="summary-label">Progreso Total</div>
          </div>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button 
          class="tab-button"
          :class="{ active: filter === 'all' }"
          @click="filter = 'all'"
        >
          Todos ({{ principles.length }})
        </button>
        <button 
          class="tab-button"
          :class="{ active: filter === 'completed' }"
          @click="filter = 'completed'"
        >
          Completados ({{ completedCount }})
        </button>
        <button 
          class="tab-button"
          :class="{ active: filter === 'pending' }"
          @click="filter = 'pending'"
        >
          Pendientes ({{ pendingCount }})
        </button>
      </div>

      <!-- Principles Grid -->
      <div class="principles-grid">
        <div 
          v-for="principle in filteredPrinciples" 
          :key="principle.id"
          class="principle-card"
          :class="{ 
            'completed': principle.completed,
            'in-progress': principle.progress > 0 && !principle.completed
          }"
          @click="goToPrinciple(principle.id)"
        >
          <div class="card-header">
            <div class="card-icon">{{ principle.icon }}</div>
            <div class="card-badges">
              <span v-if="principle.completed" class="badge badge-success">
                ✅ Completado
              </span>
              <span v-else-if="principle.progress > 0" class="badge badge-warning">
                🔄 En Progreso
              </span>
              <span v-else class="badge badge-primary">
                🎯 Por Comenzar
              </span>
            </div>
          </div>

          <div class="card-body">
            <h3 class="card-title">{{ principle.title }}</h3>
            <p class="card-description">{{ principle.description }}</p>
            
            <!-- Steps Preview -->
            <div class="steps-preview">
              <div 
                v-for="(step, index) in principle.steps" 
                :key="index"
                class="step-item"
                :class="{ completed: step.completed }"
              >
                <div class="step-icon">
                  {{ step.completed ? '✅' : '⭕' }}
                </div>
                <span class="step-text">{{ step.title }}</span>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <div class="progress-info">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: principle.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ principle.progress }}% completado</span>
            </div>
            <div class="card-arrow">→</div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredPrinciples.length === 0" class="empty-state">
        <div class="empty-icon">🎯</div>
        <h3>No hay principios {{ filter === 'completed' ? 'completados' : 'pendientes' }}</h3>
        <p>Comienza implementando tu primer principio</p>
        <router-link to="/comenzar" class="btn btn-primary">
          Comenzar Ahora
        </router-link>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <h2>⚡ Acciones Rápidas</h2>
        <div class="actions-grid">
          <button class="action-button" @click="markAllCompleted">
            <div class="action-icon">🏆</div>
            <div class="action-content">
              <h3>Completar Todo</h3>
              <p>Marca todos los principios como completados</p>
            </div>
          </button>
          
          <button class="action-button" @click="resetAll">
            <div class="action-icon">🔄</div>
            <div class="action-content">
              <h3>Reiniciar Progreso</h3>
              <p>Comienza de nuevo desde cero</p>
            </div>
          </button>
          
          <button class="action-button" @click="shareProgress">
            <div class="action-icon">📤</div>
            <div class="action-content">
              <h3>Compartir Progreso</h3>
              <p>Comparte tu avance con el equipo</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProgress } from '../composables/useProgress'
import { useNotification } from '../composables/useNotification'

export default {
  name: 'PrincipiosView',
  setup() {
    const router = useRouter()
    const { principles, completedPrinciples, totalProgress, markPrincipleCompleted, resetProgress } = useProgress()
    const { showSuccess, showWarning } = useNotification()
    
    const filter = ref('all')

    const filteredPrinciples = computed(() => {
      switch (filter.value) {
        case 'completed':
          return principles.value.filter(p => p.completed)
        case 'pending':
          return principles.value.filter(p => !p.completed)
        default:
          return principles.value
      }
    })

    const completedCount = computed(() => {
      return principles.value.filter(p => p.completed).length
    })

    const pendingCount = computed(() => {
      return principles.value.filter(p => !p.completed).length
    })

    const goToPrinciple = (id) => {
      router.push(`/principios/${id}`)
    }

    const markAllCompleted = () => {
      principles.value.forEach(principle => {
        markPrincipleCompleted(principle.id)
      })
      showSuccess('¡Todos los principios marcados como completados! 🎉')
    }

    const resetAll = () => {
      resetProgress()
      showWarning('Progreso reiniciado. ¡Puedes comenzar de nuevo!')
    }

    const shareProgress = () => {
      const message = `He completado ${completedPrinciples.value} de 7 principios del Código de Colaboración UNIACC! 🎯\n\nProgreso: ${totalProgress.value}%\n\n#UNIACCColaboracion`
      
      if (navigator.share) {
        navigator.share({
          title: 'Mi Progreso - Código de Colaboración UNIACC',
          text: message
        })
      } else {
        // Fallback: copiar al clipboard
        navigator.clipboard.writeText(message)
        showSuccess('¡Progreso copiado al portapapeles!')
      }
    }

    return {
      principles,
      completedPrinciples,
      totalProgress,
      filter,
      filteredPrinciples,
      completedCount,
      pendingCount,
      goToPrinciple,
      markAllCompleted,
      resetAll,
      shareProgress
    }
  }
}
</script>

<style scoped>
.principios {
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
  margin-bottom: 40px;
}

.progress-summary {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.summary-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  text-align: center;
  min-width: 150px;
}

.summary-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.summary-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.tab-button {
  background: var(--color-surface);
  border: none;
  border-radius: var(--border-radius-medium);
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.tab-button:hover {
  background: var(--color-primary);
  color: white;
}

.tab-button.active {
  background: var(--color-primary);
  color: white;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.principle-card {
  background: white;
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-small);
  border: 2px solid var(--color-surface);
  cursor: pointer;
  transition: all var(--transition-normal);
  overflow: hidden;
}

.principle-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-large);
}

.principle-card.completed {
  border-color: var(--color-success);
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.02) 0%, rgba(52, 199, 89, 0.05) 100%);
}

.principle-card.in-progress {
  border-color: var(--color-warning);
  background: linear-gradient(135deg, rgba(255, 149, 0, 0.02) 0%, rgba(255, 149, 0, 0.05) 100%);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 30px 0;
}

.card-icon {
  font-size: 3rem;
}

.card-body {
  padding: 20px 30px;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.card-description {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.steps-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
}

.step-item.completed {
  color: var(--color-success);
}

.step-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

.step-text {
  flex: 1;
}

.card-footer {
  padding: 0 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-info {
  flex: 1;
}

.progress-text {
  font-size: 0.9rem;
  color: var(--color-text-tertiary);
  margin-top: 8px;
}

.card-arrow {
  font-size: 1.5rem;
  color: var(--color-text-tertiary);
  transition: all var(--transition-normal);
}

.principle-card:hover .card-arrow {
  transform: translateX(4px);
  color: var(--color-primary);
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.empty-state p {
  color: var(--color-text-secondary);
  margin-bottom: 30px;
}

.quick-actions {
  background: var(--color-surface);
  padding: 60px 0;
  border-radius: var(--border-radius-large);
}

.quick-actions h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.action-button {
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

.action-button:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.action-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
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

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .progress-summary {
    flex-direction: column;
    align-items: center;
  }
  
  .filter-tabs {
    flex-wrap: wrap;
  }
  
  .principles-grid {
    grid-template-columns: 1fr;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
