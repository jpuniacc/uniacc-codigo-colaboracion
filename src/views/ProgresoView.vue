<template>
  <div class="progreso">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>📊 Mi Progreso</h1>
        <p>Ve cómo vas avanzando en el Código de Colaboración</p>
      </div>

      <!-- Main Progress Overview -->
      <div class="progress-overview">
        <div class="overview-card">
          <div class="overview-content">
            <div class="progress-circle-large">
              <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" stroke="#f5f5f7" stroke-width="12" fill="none"/>
                <circle 
                  cx="100" 
                  cy="100" 
                  r="80" 
                  stroke="#007aff" 
                  stroke-width="12" 
                  fill="none"
                  :stroke-dasharray="circumference"
                  :stroke-dashoffset="strokeDashoffset"
                  class="progress-circle-fill"
                />
              </svg>
              <div class="progress-text-large">
                <div class="progress-percentage">{{ totalProgress }}%</div>
                <div class="progress-label">Completado</div>
              </div>
            </div>
            
            <div class="overview-stats">
              <div class="stat">
                <div class="stat-number">{{ completedPrinciples }}</div>
                <div class="stat-label">de 7 Principios</div>
              </div>
              <div class="stat">
                <div class="stat-number">{{ completedSteps }}</div>
                <div class="stat-label">Pasos Completados</div>
              </div>
              <div class="stat">
                <div class="stat-number">{{ currentLevel }}</div>
                <div class="stat-label">Nivel Actual</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Level System -->
      <div class="level-system">
        <h2>🏆 Sistema de Niveles</h2>
        <div class="level-card">
          <div class="level-info">
            <div class="current-level">
              <div class="level-icon">{{ getLevelIcon(currentLevel) }}</div>
              <div class="level-details">
                <h3>{{ getLevelName(currentLevel) }}</h3>
                <p>{{ getLevelDescription(currentLevel) }}</p>
              </div>
            </div>
            
            <div class="level-progress">
              <div class="level-bar">
                <div class="level-fill" :style="{ width: levelProgress + '%' }"></div>
              </div>
              <div class="level-text">
                {{ completedPrinciples }}/7 principios para el siguiente nivel
              </div>
            </div>
          </div>
          
          <div class="next-level">
            <h4>Siguiente Nivel</h4>
            <div class="next-level-info">
              <div class="next-icon">{{ getLevelIcon(currentLevel + 1) }}</div>
              <div class="next-details">
                <h5>{{ getLevelName(currentLevel + 1) }}</h5>
                <p>{{ getLevelDescription(currentLevel + 1) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Detailed Progress -->
      <div class="detailed-progress">
        <h2>📈 Progreso Detallado</h2>
        <div class="principles-progress">
          <div 
            v-for="principle in principles" 
            :key="principle.id"
            class="principle-progress"
            :class="{ completed: principle.completed }"
          >
            <div class="principle-info">
              <div class="principle-icon">{{ principle.icon }}</div>
              <div class="principle-details">
                <h3>{{ principle.title }}</h3>
                <p>{{ principle.description }}</p>
              </div>
              <div class="principle-status">
                <span v-if="principle.completed" class="status-badge badge-success">
                  ✅ Completado
                </span>
                <span v-else-if="principle.progress > 0" class="status-badge badge-warning">
                  🔄 {{ principle.progress }}%
                </span>
                <span v-else class="status-badge badge-primary">
                  ⭕ Por Comenzar
                </span>
              </div>
            </div>
            
            <div class="principle-steps">
              <div 
                v-for="(step, index) in principle.steps" 
                :key="index"
                class="step-progress"
                :class="{ completed: step.completed }"
              >
                <div class="step-indicator">
                  {{ step.completed ? '✅' : '⭕' }}
                </div>
                <span class="step-text">{{ step.title }}</span>
              </div>
            </div>
            
            <div class="principle-actions">
              <router-link 
                :to="`/principios/${principle.id}`"
                class="btn btn-outline btn-small"
              >
                {{ principle.completed ? 'Ver' : 'Continuar' }}
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Achievements -->
      <div class="achievements">
        <h2>🎖️ Logros</h2>
        <div class="achievements-grid">
          <div 
            v-for="achievement in achievements" 
            :key="achievement.id"
            class="achievement-card"
            :class="{ unlocked: achievement.unlocked }"
          >
            <div class="achievement-icon">{{ achievement.icon }}</div>
            <div class="achievement-info">
              <h3>{{ achievement.title }}</h3>
              <p>{{ achievement.description }}</p>
              <div class="achievement-date" v-if="achievement.unlocked">
                Desbloqueado {{ achievement.date }}
              </div>
            </div>
            <div class="achievement-status">
              {{ achievement.unlocked ? '🏆' : '🔒' }}
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics -->
      <div class="statistics">
        <h2>📊 Estadísticas</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">📅</div>
            <div class="stat-content">
              <h3>{{ daysSinceStart }}</h3>
              <p>Días desde que comenzaste</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">⚡</div>
            <div class="stat-content">
              <h3>{{ averageProgress }}%</h3>
              <p>Progreso promedio por día</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">🎯</div>
            <div class="stat-content">
              <h3>{{ completionRate }}%</h3>
              <p>Tasa de finalización</p>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">🏆</div>
            <div class="stat-content">
              <h3>{{ achievementCount }}</h3>
              <p>Logros desbloqueados</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Share Progress -->
      <div class="share-section">
        <h2>📤 Compartir Progreso</h2>
        <div class="share-content">
          <p>¡Comparte tu progreso con el equipo y motívalos a unirse!</p>
          <div class="share-buttons">
            <button class="btn btn-primary" @click="shareProgress">
              📤 Compartir en Redes
            </button>
            <button class="btn btn-outline" @click="exportProgress">
              📄 Exportar PDF
            </button>
            <button class="btn btn-outline" @click="resetAllProgress">
              🔄 Reiniciar Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProgress } from '../composables/useProgress'
import { useNotification } from '../composables/useNotification'

export default {
  name: 'ProgresoView',
  setup() {
    const router = useRouter()
    const { principles, completedPrinciples, totalProgress, resetProgress } = useProgress()
    const { showSuccess, showWarning } = useNotification()
    
    const startDate = ref(new Date('2024-01-01')) // Fecha de inicio simulada

    const circumference = 2 * Math.PI * 80 // Radio 80 para el círculo grande

    const strokeDashoffset = computed(() => {
      return circumference - (totalProgress.value / 100) * circumference
    })

    const completedSteps = computed(() => {
      return principles.value.reduce((total, principle) => {
        return total + principle.steps.filter(step => step.completed).length
      }, 0)
    })

    const currentLevel = computed(() => {
      if (completedPrinciples.value === 0) return 1
      if (completedPrinciples.value <= 2) return 2
      if (completedPrinciples.value <= 4) return 3
      if (completedPrinciples.value <= 6) return 4
      return 5
    })

    const levelProgress = computed(() => {
      const levelThresholds = [0, 2, 4, 6, 7]
      const currentThreshold = levelThresholds[currentLevel.value - 1]
      const nextThreshold = levelThresholds[currentLevel.value]
      const progress = completedPrinciples.value - currentThreshold
      const total = nextThreshold - currentThreshold
      return Math.round((progress / total) * 100)
    })

    const daysSinceStart = computed(() => {
      const now = new Date()
      const diffTime = Math.abs(now - startDate.value)
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    })

    const averageProgress = computed(() => {
      if (daysSinceStart.value === 0) return 0
      return Math.round(totalProgress.value / daysSinceStart.value)
    })

    const completionRate = computed(() => {
      const totalSteps = principles.value.length * 3 // 3 pasos por principio
      return Math.round((completedSteps.value / totalSteps) * 100)
    })

    const achievements = ref([
      {
        id: 'first_step',
        title: 'Primer Paso',
        description: 'Completa tu primer paso',
        icon: '🎯',
        unlocked: completedSteps.value >= 1,
        date: '2024-01-01'
      },
      {
        id: 'first_principle',
        title: 'Primer Principio',
        description: 'Completa tu primer principio',
        icon: '🏆',
        unlocked: completedPrinciples.value >= 1,
        date: '2024-01-05'
      },
      {
        id: 'half_way',
        title: 'A Medio Camino',
        description: 'Completa 4 principios',
        icon: '📈',
        unlocked: completedPrinciples.value >= 4,
        date: '2024-01-15'
      },
      {
        id: 'expert',
        title: 'Experto',
        description: 'Completa todos los principios',
        icon: '👑',
        unlocked: completedPrinciples.value >= 7,
        date: '2024-01-30'
      }
    ])

    const achievementCount = computed(() => {
      return achievements.value.filter(a => a.unlocked).length
    })

    const getLevelIcon = (level) => {
      const icons = ['🌱', '🌿', '🌳', '🏆', '👑']
      return icons[level - 1] || '🌱'
    }

    const getLevelName = (level) => {
      const names = ['Principiante', 'Aprendiz', 'Experto', 'Maestro', 'Líder']
      return names[level - 1] || 'Principiante'
    }

    const getLevelDescription = (level) => {
      const descriptions = [
        'Estás comenzando tu viaje hacia la excelencia colaborativa',
        'Ya tienes los fundamentos, sigue avanzando',
        'Dominas la mayoría de los principios',
        'Eres un referente en colaboración',
        'Inspiras a otros con tu ejemplo'
      ]
      return descriptions[level - 1] || 'Descripción no disponible'
    }

    const shareProgress = () => {
      const message = `🏆 Mi Progreso en el Código de Colaboración UNIACC:\n\n📊 ${totalProgress.value}% completado\n🎯 ${completedPrinciples.value}/7 principios\n🏅 Nivel ${currentLevel.value}: ${getLevelName(currentLevel.value)}\n\n¡Únete al cambio! #UNIACCColaboracion`
      
      if (navigator.share) {
        navigator.share({
          title: 'Mi Progreso - UNIACC',
          text: message
        })
      } else {
        navigator.clipboard.writeText(message)
        showSuccess('¡Progreso copiado al portapapeles!')
      }
    }

    const exportProgress = () => {
      // Simulación de exportación a PDF
      showSuccess('¡PDF generado! (Funcionalidad en desarrollo)')
    }

    const resetAllProgress = () => {
      if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso?')) {
        resetProgress()
        showWarning('Progreso reiniciado. ¡Puedes comenzar de nuevo!')
      }
    }

    onMounted(() => {
      // Actualizar achievements basado en el progreso actual
      achievements.value.forEach(achievement => {
        switch (achievement.id) {
          case 'first_step':
            achievement.unlocked = completedSteps.value >= 1
            break
          case 'first_principle':
            achievement.unlocked = completedPrinciples.value >= 1
            break
          case 'half_way':
            achievement.unlocked = completedPrinciples.value >= 4
            break
          case 'expert':
            achievement.unlocked = completedPrinciples.value >= 7
            break
        }
      })
    })

    return {
      principles,
      completedPrinciples,
      totalProgress,
      completedSteps,
      currentLevel,
      levelProgress,
      daysSinceStart,
      averageProgress,
      completionRate,
      achievementCount,
      achievements,
      circumference,
      strokeDashoffset,
      getLevelIcon,
      getLevelName,
      getLevelDescription,
      shareProgress,
      exportProgress,
      resetAllProgress
    }
  }
}
</script>

<style scoped>
.progreso {
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

.overview-card {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  border-radius: var(--border-radius-large);
  padding: 60px;
  text-align: center;
}

.overview-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.progress-circle-large {
  position: relative;
  width: 200px;
  height: 200px;
}

.progress-circle-large svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-circle-fill {
  transition: stroke-dashoffset 0.8s ease;
}

.progress-text-large {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.progress-percentage {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
}

.progress-label {
  font-size: 1rem;
  opacity: 0.8;
}

.overview-stats {
  display: flex;
  gap: 40px;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

.level-system {
  margin-bottom: 80px;
}

.level-system h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.level-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  box-shadow: var(--shadow-small);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.current-level {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.level-icon {
  font-size: 3rem;
  flex-shrink: 0;
}

.level-details h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text-primary);
}

.level-details p {
  color: var(--color-text-secondary);
  margin: 0;
}

.level-progress {
  margin-top: 20px;
}

.level-bar {
  width: 100%;
  height: 12px;
  background: var(--color-surface);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 8px;
}

.level-fill {
  height: 100%;
  background: var(--color-primary);
  border-radius: 6px;
  transition: width 0.8s ease;
}

.level-text {
  font-size: 0.9rem;
  color: var(--color-text-tertiary);
}

.next-level {
  background: var(--color-surface);
  border-radius: var(--border-radius-large);
  padding: 30px;
}

.next-level h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.next-level-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.next-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.next-details h5 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--color-text-primary);
}

.next-details p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.detailed-progress {
  margin-bottom: 80px;
}

.detailed-progress h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.principles-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.principle-progress {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  border: 2px solid var(--color-surface);
  transition: all var(--transition-normal);
}

.principle-progress.completed {
  border-color: var(--color-success);
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.02) 0%, rgba(52, 199, 89, 0.05) 100%);
}

.principle-info {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.principle-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.principle-details {
  flex: 1;
}

.principle-details h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text-primary);
}

.principle-details p {
  color: var(--color-text-secondary);
  margin: 0;
}

.principle-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.step-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--color-surface);
  border-radius: var(--border-radius-small);
  font-size: 0.9rem;
}

.step-progress.completed {
  background: var(--color-success);
  color: white;
}

.step-indicator {
  font-size: 1rem;
}

.principle-actions {
  display: flex;
  justify-content: flex-end;
}

.achievements {
  margin-bottom: 80px;
}

.achievements h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.achievement-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  border: 2px solid var(--color-surface);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all var(--transition-normal);
}

.achievement-card.unlocked {
  border-color: var(--color-success);
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.02) 0%, rgba(52, 199, 89, 0.05) 100%);
}

.achievement-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.achievement-info {
  flex: 1;
}

.achievement-info h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text-primary);
}

.achievement-info p {
  color: var(--color-text-secondary);
  margin: 0 0 8px 0;
  font-size: 0.9rem;
}

.achievement-date {
  font-size: 0.8rem;
  color: var(--color-success);
  font-weight: 600;
}

.achievement-status {
  font-size: 1.5rem;
}

.statistics {
  margin-bottom: 80px;
}

.statistics h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  text-align: center;
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.stat-content h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
  color: var(--color-primary);
}

.stat-content p {
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

.share-section {
  background: var(--color-surface);
  padding: 60px 0;
  border-radius: var(--border-radius-large);
  text-align: center;
}

.share-section h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.share-content p {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .overview-content {
    flex-direction: column;
    gap: 40px;
  }
  
  .overview-stats {
    justify-content: center;
  }
  
  .level-card {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .principle-info {
    flex-direction: column;
    text-align: center;
  }
  
  .achievements-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .share-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .share-buttons .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
