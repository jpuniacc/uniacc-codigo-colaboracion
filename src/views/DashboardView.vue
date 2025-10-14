<template>
  <div class="dashboard">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>📈 Dashboard</h1>
        <p>Métricas y análisis de tu progreso en colaboración</p>
      </div>

      <!-- Quick Stats -->
      <div class="quick-stats">
        <div class="stat-card primary">
          <div class="stat-icon">🎯</div>
          <div class="stat-content">
            <div class="stat-number">{{ completedPrinciples }}/7</div>
            <div class="stat-label">Principios Completados</div>
            <div class="stat-change positive">+{{ newCompletions }} esta semana</div>
          </div>
        </div>
        
        <div class="stat-card success">
          <div class="stat-icon">⚡</div>
          <div class="stat-content">
            <div class="stat-number">{{ totalProgress }}%</div>
            <div class="stat-label">Progreso Total</div>
            <div class="stat-change positive">+{{ weeklyProgress }}% esta semana</div>
          </div>
        </div>
        
        <div class="stat-card warning">
          <div class="stat-icon">📊</div>
          <div class="stat-content">
            <div class="stat-number">{{ currentLevel }}</div>
            <div class="stat-label">Nivel Actual</div>
            <div class="stat-change neutral">{{ getLevelName(currentLevel) }}</div>
          </div>
        </div>
        
        <div class="stat-card info">
          <div class="stat-icon">🏆</div>
          <div class="stat-content">
            <div class="stat-number">{{ achievementCount }}</div>
            <div class="stat-label">Logros Desbloqueados</div>
            <div class="stat-change positive">+{{ newAchievements }} nuevos</div>
          </div>
        </div>
      </div>

      <!-- Progress Chart -->
      <div class="chart-section">
        <h2>📈 Progreso Semanal</h2>
        <div class="chart-container">
          <div class="chart-card">
            <div class="chart-header">
              <h3>Evolución del Progreso</h3>
              <div class="chart-legend">
                <div class="legend-item">
                  <div class="legend-color progress"></div>
                  <span>Progreso Total</span>
                </div>
                <div class="legend-item">
                  <div class="legend-color completions"></div>
                  <span>Principios Completados</span>
                </div>
              </div>
            </div>
            <div class="chart-content">
              <div class="chart-bars">
                <div 
                  v-for="(week, index) in weeklyData" 
                  :key="index"
                  class="chart-bar"
                >
                  <div class="bar-container">
                    <div class="bar progress-bar" :style="{ height: week.progress + '%' }"></div>
                    <div class="bar completion-bar" :style="{ height: (week.completions / 7) * 100 + '%' }"></div>
                  </div>
                  <div class="bar-label">{{ week.week }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Principles Performance -->
      <div class="performance-section">
        <h2>🎯 Rendimiento por Principio</h2>
        <div class="performance-grid">
          <div 
            v-for="principle in principles" 
            :key="principle.id"
            class="performance-card"
            :class="{ 
              'completed': principle.completed,
              'in-progress': principle.progress > 0 && !principle.completed,
              'not-started': principle.progress === 0
            }"
          >
            <div class="performance-header">
              <div class="principle-icon">{{ principle.icon }}</div>
              <div class="performance-status">
                <span v-if="principle.completed" class="status-indicator completed">✅</span>
                <span v-else-if="principle.progress > 0" class="status-indicator in-progress">🔄</span>
                <span v-else class="status-indicator not-started">⭕</span>
              </div>
            </div>
            
            <div class="performance-content">
              <h3>{{ principle.title }}</h3>
              <div class="performance-metric">
                <div class="metric-bar">
                  <div class="metric-fill" :style="{ width: principle.progress + '%' }"></div>
                </div>
                <span class="metric-text">{{ principle.progress }}%</span>
              </div>
              
              <div class="performance-details">
                <div class="detail-item">
                  <span class="detail-label">Pasos:</span>
                  <span class="detail-value">{{ completedSteps(principle) }}/3</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">Tiempo:</span>
                  <span class="detail-value">{{ getTimeEstimate(principle) }}</span>
                </div>
              </div>
            </div>
            
            <div class="performance-action">
              <router-link 
                :to="`/principios/${principle.id}`"
                class="btn btn-small"
                :class="principle.completed ? 'btn-outline' : 'btn-primary'"
              >
                {{ principle.completed ? 'Revisar' : 'Continuar' }}
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Insights -->
      <div class="insights-section">
        <h2>💡 Insights y Recomendaciones</h2>
        <div class="insights-grid">
          <div class="insight-card">
            <div class="insight-icon">🎯</div>
            <div class="insight-content">
              <h3>Próximo Objetivo</h3>
              <p>{{ getNextRecommendation() }}</p>
              <div class="insight-action">
                <button class="btn btn-primary btn-small" @click="goToNextRecommendation">
                  Comenzar Ahora
                </button>
              </div>
            </div>
          </div>
          
          <div class="insight-card">
            <div class="insight-icon">📊</div>
            <div class="insight-content">
              <h3>Fortaleza Principal</h3>
              <p>{{ getMainStrength() }}</p>
              <div class="insight-action">
                <button class="btn btn-outline btn-small" @click="shareStrength">
                  Compartir Logro
                </button>
              </div>
            </div>
          </div>
          
          <div class="insight-card">
            <div class="insight-icon">⚡</div>
            <div class="insight-content">
              <h3>Quick Win</h3>
              <p>{{ getQuickWin() }}</p>
              <div class="insight-action">
                <button class="btn btn-primary btn-small" @click="executeQuickWin">
                  Aplicar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Comparison -->
      <div class="comparison-section">
        <h2>👥 Comparación con el Equipo</h2>
        <div class="comparison-card">
          <div class="comparison-header">
            <h3>Tu Progreso vs Promedio del Equipo</h3>
            <div class="comparison-badges">
              <span class="badge badge-success">Arriba del promedio</span>
            </div>
          </div>
          
          <div class="comparison-metrics">
            <div class="comparison-metric">
              <div class="metric-label">Progreso Total</div>
              <div class="metric-comparison">
                <div class="your-progress">{{ totalProgress }}%</div>
                <div class="team-average">vs 65% promedio</div>
                <div class="comparison-bar">
                  <div class="bar your-bar" :style="{ width: totalProgress + '%' }"></div>
                  <div class="bar team-bar" :style="{ width: '65%' }"></div>
                </div>
              </div>
            </div>
            
            <div class="comparison-metric">
              <div class="metric-label">Principios Completados</div>
              <div class="metric-comparison">
                <div class="your-progress">{{ completedPrinciples }}/7</div>
                <div class="team-average">vs 4.5/7 promedio</div>
                <div class="comparison-bar">
                  <div class="bar your-bar" :style="{ width: (completedPrinciples / 7) * 100 + '%' }"></div>
                  <div class="bar team-bar" :style="{ width: '64%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Export Options -->
      <div class="export-section">
        <h2>📤 Exportar Datos</h2>
        <div class="export-options">
          <button class="export-btn" @click="exportToPDF">
            <div class="export-icon">📄</div>
            <div class="export-content">
              <h3>Reporte PDF</h3>
              <p>Genera un reporte completo de tu progreso</p>
            </div>
          </button>
          
          <button class="export-btn" @click="exportToExcel">
            <div class="export-icon">📊</div>
            <div class="export-content">
              <h3>Datos Excel</h3>
              <p>Exporta tus métricas para análisis detallado</p>
            </div>
          </button>
          
          <button class="export-btn" @click="shareDashboard">
            <div class="export-icon">📤</div>
            <div class="export-content">
              <h3>Compartir</h3>
              <p>Comparte tu dashboard con el equipo</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProgress } from '../composables/useProgress'
import { useNotification } from '../composables/useNotification'

export default {
  name: 'DashboardView',
  setup() {
    const router = useRouter()
    const { principles, completedPrinciples, totalProgress } = useProgress()
    const { showSuccess } = useNotification()

    // Datos simulados para el dashboard
    const newCompletions = ref(2)
    const weeklyProgress = ref(15)
    const currentLevel = ref(3)
    const achievementCount = ref(3)
    const newAchievements = ref(1)

    const weeklyData = ref([
      { week: 'Sem 1', progress: 20, completions: 1 },
      { week: 'Sem 2', progress: 35, completions: 2 },
      { week: 'Sem 3', progress: 50, completions: 3 },
      { week: 'Sem 4', progress: 65, completions: 4 },
      { week: 'Sem 5', progress: 78, completions: 5 },
      { week: 'Sem 6', progress: 85, completions: 6 },
      { week: 'Sem 7', progress: totalProgress.value, completions: completedPrinciples.value }
    ])

    const completedSteps = (principle) => {
      return principle.steps.filter(step => step.completed).length
    }

    const getTimeEstimate = (principle) => {
      const estimates = {
        consciente: '1-2 días',
        puntual: '3-5 días',
        comunica: '1 semana',
        valora: '1-2 semanas',
        resuelve: '2-3 semanas',
        coCrea: '2-4 semanas',
        reconoce: '1-2 semanas'
      }
      return estimates[principle.id] || 'Variable'
    }

    const getLevelName = (level) => {
      const names = ['Principiante', 'Aprendiz', 'Experto', 'Maestro', 'Líder']
      return names[level - 1] || 'Principiante'
    }

    const getNextRecommendation = () => {
      const incomplete = principles.value.find(p => !p.completed)
      if (incomplete) {
        return `Continúa con "${incomplete.title}" para mantener tu progreso constante.`
      }
      return '¡Felicitaciones! Has completado todos los principios. Considera ayudar a otros.'
    }

    const getMainStrength = () => {
      const completed = principles.value.filter(p => p.completed)
      if (completed.length === 0) return 'Estás comenzando tu viaje hacia la excelencia colaborativa.'
      
      const strongest = completed.reduce((prev, current) => 
        prev.progress > current.progress ? prev : current
      )
      return `Tu fortaleza es "${strongest.title}". Sigue aplicándolo en tu trabajo diario.`
    }

    const getQuickWin = () => {
      const quickWins = [
        'Envía una agenda 24h antes de tu próxima reunión',
        'Enciende la cámara en tu próxima videollamada',
        'Usa [IMPORTANTE] en tu próximo email',
        'Saluda a cada persona por su nombre en la próxima reunión',
        'Di "Yes, and..." en lugar de "Yes, but..." hoy'
      ]
      return quickWins[Math.floor(Math.random() * quickWins.length)]
    }

    const goToNextRecommendation = () => {
      const incomplete = principles.value.find(p => !p.completed)
      if (incomplete) {
        router.push(`/principios/${incomplete.id}`)
      }
    }

    const shareStrength = () => {
      showSuccess('¡Logro compartido con el equipo!')
    }

    const executeQuickWin = () => {
      showSuccess('¡Quick win aplicado! Revisa tu progreso.')
    }

    const exportToPDF = () => {
      showSuccess('¡PDF generado! (Funcionalidad en desarrollo)')
    }

    const exportToExcel = () => {
      showSuccess('¡Datos exportados a Excel! (Funcionalidad en desarrollo)')
    }

    const shareDashboard = () => {
      const message = `📊 Mi Dashboard de Colaboración UNIACC:\n\n🎯 ${completedPrinciples.value}/7 principios completados\n📈 ${totalProgress.value}% de progreso total\n🏆 Nivel ${currentLevel.value}: ${getLevelName(currentLevel.value)}\n\n¡Mira mi progreso! #UNIACCColaboracion`
      
      if (navigator.share) {
        navigator.share({
          title: 'Mi Dashboard - UNIACC',
          text: message
        })
      } else {
        navigator.clipboard.writeText(message)
        showSuccess('¡Dashboard copiado al portapapeles!')
      }
    }

    return {
      principles,
      completedPrinciples,
      totalProgress,
      newCompletions,
      weeklyProgress,
      currentLevel,
      achievementCount,
      newAchievements,
      weeklyData,
      completedSteps,
      getTimeEstimate,
      getLevelName,
      getNextRecommendation,
      getMainStrength,
      getQuickWin,
      goToNextRecommendation,
      shareStrength,
      executeQuickWin,
      exportToPDF,
      exportToExcel,
      shareDashboard
    }
  }
}
</script>

<style scoped>
.dashboard {
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

.quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
}

.stat-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.stat-card.primary {
  border-left: 4px solid var(--color-primary);
}

.stat-card.success {
  border-left: 4px solid var(--color-success);
}

.stat-card.warning {
  border-left: 4px solid var(--color-warning);
}

.stat-card.info {
  border-left: 4px solid var(--color-info);
}

.stat-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
}

.stat-change {
  font-size: 0.8rem;
  font-weight: 600;
}

.stat-change.positive {
  color: var(--color-success);
}

.stat-change.negative {
  color: var(--color-error);
}

.stat-change.neutral {
  color: var(--color-text-tertiary);
}

.chart-section {
  margin-bottom: 60px;
}

.chart-section h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.chart-container {
  max-width: 800px;
  margin: 0 auto;
}

.chart-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  box-shadow: var(--shadow-small);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.chart-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.chart-legend {
  display: flex;
  gap: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.legend-color.progress {
  background: var(--color-primary);
}

.legend-color.completions {
  background: var(--color-success);
}

.chart-content {
  height: 200px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
  padding: 20px 0;
}

.chart-bars {
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 10px;
}

.chart-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.bar-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
}

.bar {
  width: 20px;
  border-radius: 2px 2px 0 0;
  transition: height 0.8s ease;
}

.progress-bar {
  background: var(--color-primary);
  opacity: 0.7;
}

.completion-bar {
  background: var(--color-success);
  position: absolute;
  bottom: 0;
}

.bar-label {
  font-size: 0.8rem;
  color: var(--color-text-tertiary);
  margin-top: 8px;
}

.performance-section {
  margin-bottom: 60px;
}

.performance-section h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.performance-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  border: 2px solid var(--color-surface);
  transition: all var(--transition-normal);
}

.performance-card.completed {
  border-color: var(--color-success);
}

.performance-card.in-progress {
  border-color: var(--color-warning);
}

.performance-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.principle-icon {
  font-size: 2.5rem;
}

.status-indicator {
  font-size: 1.5rem;
}

.performance-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--color-text-primary);
}

.performance-metric {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.metric-bar {
  flex: 1;
  height: 8px;
  background: var(--color-surface);
  border-radius: 4px;
  overflow: hidden;
}

.metric-fill {
  height: 100%;
  background: var(--color-primary);
  border-radius: 4px;
  transition: width 0.8s ease;
}

.metric-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.performance-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-label {
  font-size: 0.8rem;
  color: var(--color-text-tertiary);
}

.detail-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.performance-action {
  display: flex;
  justify-content: center;
}

.insights-section {
  margin-bottom: 60px;
}

.insights-section h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.insight-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  text-align: center;
}

.insight-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.insight-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.insight-content p {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.comparison-section {
  margin-bottom: 60px;
}

.comparison-section h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.comparison-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  box-shadow: var(--shadow-small);
}

.comparison-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.comparison-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.comparison-metrics {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.comparison-metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.metric-label {
  font-weight: 600;
  color: var(--color-text-primary);
  min-width: 150px;
}

.metric-comparison {
  flex: 1;
  margin-left: 30px;
}

.your-progress {
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.team-average {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
}

.comparison-bar {
  position: relative;
  height: 12px;
  background: var(--color-surface);
  border-radius: 6px;
  overflow: hidden;
}

.comparison-bar .bar {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 6px;
}

.your-bar {
  background: var(--color-primary);
  z-index: 2;
}

.team-bar {
  background: var(--color-text-tertiary);
  opacity: 0.3;
  z-index: 1;
}

.export-section {
  margin-bottom: 60px;
}

.export-section h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  color: var(--color-text-primary);
}

.export-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.export-btn {
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

.export-btn:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.export-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.export-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text-primary);
}

.export-content p {
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .quick-stats {
    grid-template-columns: 1fr;
  }
  
  .chart-header {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .performance-grid {
    grid-template-columns: 1fr;
  }
  
  .insights-grid {
    grid-template-columns: 1fr;
  }
  
  .comparison-header {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .comparison-metric {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .metric-comparison {
    margin-left: 0;
  }
  
  .export-options {
    grid-template-columns: 1fr;
  }
}
</style>
