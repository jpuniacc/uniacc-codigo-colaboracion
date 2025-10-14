<template>
  <div class="principio" v-if="principle">
    <!-- Header -->
    <div class="principio-header">
      <div class="container">
        <div class="header-content">
          <div class="header-info">
            <button class="back-button" @click="goBack">
              ← Volver
            </button>
            <div class="principio-title">
              <div class="title-icon">{{ principle.icon }}</div>
              <h1>{{ principle.title }}</h1>
              <p class="title-description">{{ principle.description }}</p>
            </div>
          </div>
          <div class="header-progress">
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
              <div class="progress-text">{{ principle.progress }}%</div>
            </div>
            <div class="progress-status">
              <span v-if="principle.completed" class="status-badge badge-success">
                ✅ Completado
              </span>
              <span v-else-if="principle.progress > 0" class="status-badge badge-warning">
                🔄 En Progreso
              </span>
              <span v-else class="status-badge badge-primary">
                🎯 Por Comenzar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="principio-content">
      <div class="container">
        <!-- What Section -->
        <section class="content-section">
          <h2>¿Qué es {{ principle.title }}?</h2>
          <div class="what-card">
            <p class="what-text">{{ getWhatDescription(principle.id) }}</p>
          </div>
        </section>

        <!-- Steps Section -->
        <section class="content-section">
          <h2>3 Pasos Simples</h2>
          <div class="steps">
            <div 
              v-for="(step, index) in principle.steps" 
              :key="index"
              class="step"
              :class="{ completed: step.completed }"
            >
              <div class="step-header">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-title">
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.description }}</p>
                </div>
                <button 
                  class="step-toggle"
                  :class="{ completed: step.completed }"
                  @click="toggleStep(index)"
                >
                  {{ step.completed ? '✅' : '⭕' }}
                </button>
              </div>
              
              <!-- Step Details -->
              <div class="step-details" v-if="step.completed">
                <div class="detail-card">
                  <h4>🎯 ¿Cómo hacerlo?</h4>
                  <p>{{ getStepDetails(principle.id, index) }}</p>
                </div>
                
                <div class="detail-card">
                  <h4>⏰ ¿Cuándo?</h4>
                  <p>{{ getStepWhen(principle.id, index) }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Result Section -->
        <section class="content-section">
          <h2>Resultado</h2>
          <div class="result-card">
            <div class="result-icon">📊</div>
            <div class="result-content">
              <h3>{{ getResultTitle(principle.id) }}</h3>
              <p>{{ getResultDescription(principle.id) }}</p>
              <div class="result-metrics">
                <div class="metric">
                  <span class="metric-value">+{{ getResultMetric(principle.id) }}%</span>
                  <span class="metric-label">Mejora esperada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Tips Section -->
        <section class="content-section">
          <h2>💡 Consejos Prácticos</h2>
          <div class="tips-grid">
            <div 
              v-for="(tip, index) in getTips(principle.id)" 
              :key="index"
              class="tip-card"
            >
              <div class="tip-icon">{{ tip.icon }}</div>
              <h4>{{ tip.title }}</h4>
              <p>{{ tip.description }}</p>
            </div>
          </div>
        </section>

        <!-- Actions -->
        <section class="actions-section">
          <div class="actions">
            <button 
              v-if="!principle.completed"
              class="btn btn-primary btn-large"
              @click="completePrinciple"
            >
              🏆 Completar Principio
            </button>
            <button 
              v-else
              class="btn btn-secondary btn-large"
              @click="resetPrinciple"
            >
              🔄 Reiniciar Principio
            </button>
            
            <button class="btn btn-outline" @click="sharePrinciple">
              📤 Compartir Progreso
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="loading-state">
    <div class="loading-spinner"></div>
    <p>Cargando principio...</p>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProgress } from '../composables/useProgress'
import { useNotification } from '../composables/useNotification'

export default {
  name: 'PrincipioView',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { principles, markStepCompleted, markPrincipleCompleted, resetProgress } = useProgress()
    const { showSuccess, showInfo } = useNotification()

    const principle = computed(() => {
      return principles.value.find(p => p.id === route.params.id)
    })

    const circumference = 2 * Math.PI * 40 // Radio 40
    const strokeDashoffset = computed(() => {
      if (!principle.value) return circumference
      return circumference - (principle.value.progress / 100) * circumference
    })

    const goBack = () => {
      router.push('/principios')
    }

    const toggleStep = (stepIndex) => {
      if (principle.value) {
        markStepCompleted(principle.value.id, stepIndex)
        showSuccess('¡Paso completado! 🎉')
      }
    }

    const completePrinciple = () => {
      if (principle.value) {
        markPrincipleCompleted(principle.value.id)
        showSuccess(`¡Principio "${principle.value.title}" completado! 🏆`)
      }
    }

    const resetPrinciple = () => {
      if (principle.value) {
        // Reset solo este principio
        principle.value.completed = false
        principle.value.progress = 0
        principle.value.steps.forEach(step => {
          step.completed = false
        })
        showInfo('Principio reiniciado. ¡Puedes comenzar de nuevo!')
      }
    }

    const sharePrinciple = () => {
      if (principle.value) {
        const message = `Estoy trabajando en el principio "${principle.value.title}" del Código de Colaboración UNIACC! 🎯\n\nProgreso: ${principle.value.progress}%\n\n#UNIACCColaboracion`
        
        if (navigator.share) {
          navigator.share({
            title: `${principle.value.title} - UNIACC`,
            text: message
          })
        } else {
          navigator.clipboard.writeText(message)
          showSuccess('¡Enlace copiado al portapapeles!')
        }
      }
    }

    // Funciones para obtener contenido específico de cada principio
    const getWhatDescription = (id) => {
      const descriptions = {
        consciente: 'Presencia Plena significa estar 100% presente en cada reunión, sin distracciones, enfocado completamente en la conversación y las personas que están contigo.',
        puntual: 'Gestión del Tiempo es respetar el tiempo de todos, empezando puntualmente y enviando la información necesaria con anticipación.',
        comunica: 'Comunicación Clara es usar herramientas y etiquetas para que todos entiendan la urgencia y prioridad de cada mensaje.',
        valora: 'Diversidad e Inclusión significa asegurar que todas las voces del equipo sean escuchadas y valoradas por igual.',
        resuelve: 'Gestión de Conflictos es abordar los problemas directamente y de manera constructiva, sin dejar que se acumulen.',
        coCrea: 'Innovación Colaborativa es construir sobre las ideas de otros usando "Yes, and..." en lugar de "Yes, but...".',
        reconoce: 'Cultura de Apreciación es reconocer específicamente el trabajo y contribuciones de otros de manera auténtica.'
      }
      return descriptions[id] || 'Descripción no disponible.'
    }

    const getStepDetails = (id, stepIndex) => {
      const details = {
        consciente: [
          'En todas las reuniones virtuales, haz clic en el botón de cámara antes de entrar.',
          'Coloca tu teléfono en modo silencio y en otra habitación.',
          'Haz al menos una pregunta o aporte una idea en cada reunión.'
        ],
        puntual: [
          'Envía la agenda por email o Teams 24 horas antes de la reunión.',
          'Inicia la reunión exactamente a la hora programada, sin esperar.',
          'Envía un resumen con acuerdos y próximos pasos en 24 horas.'
        ],
        comunica: [
          'Usa [URGENTE] para cosas que necesitan respuesta en 1 hora.',
          'Responde emails urgentes en 1 hora, importantes en 24 horas.',
          'Usa email para formal, Teams para rápido, WhatsApp solo para emergencias.'
        ],
        valora: [
          'Saluda a cada persona por su nombre al inicio de reuniones.',
          'Presenta a nuevos miembros del equipo y explica su rol.',
          'Cuando alguien no hable, di "Me gusta la idea de [Nombre], ¿qué opinas?"'
        ],
        resuelve: [
          'Habla directamente con la persona en privado en 48 horas.',
          'Si no se resuelve, pide ayuda a un facilitador o supervisor.',
          'Documenta los acuerdos y haz seguimiento semanal.'
        ],
        coCrea: [
          'Cambia "Yes, but..." por "Yes, and..." en todas las conversaciones.',
          'Di "No sé, pero podemos averiguarlo juntos" cuando no tengas la respuesta.',
          'Siempre construye sobre las ideas de otros, no las critiques.'
        ],
        reconoce: [
          'Usa el modelo STAR: Situación, Tarea, Acción, Resultado.',
          'Reconoce al menos 3 personas diferentes cada semana.',
          'Sé específico: "Gracias por enviar la agenda a tiempo, eso nos ayudó a ser más productivos."'
        ]
      }
      return details[id]?.[stepIndex] || 'Detalle no disponible.'
    }

    const getStepWhen = (id, stepIndex) => {
      const when = {
        consciente: [
          'Antes de cada reunión virtual.',
          'Antes de cada reunión importante.',
          'Durante cada reunión que tengas.'
        ],
        puntual: [
          '24 horas antes de cada reunión.',
          'Exactamente a la hora programada.',
          '24 horas después de cada reunión.'
        ],
        comunica: [
          'En todos los emails importantes.',
          'Según los SLAs acordados.',
          'Según la urgencia del mensaje.'
        ],
        valora: [
          'Al inicio de cada reunión.',
          'Cuando haya nuevos miembros.',
          'Cuando alguien no participe.'
        ],
        resuelve: [
          'En las primeras 48 horas del conflicto.',
          'Si el conflicto persiste después del paso 1.',
          'Después de cada resolución de conflicto.'
        ],
        coCrea: [
          'En todas las sesiones de brainstorming.',
          'Cuando no sepas algo.',
          'En todas las discusiones creativas.'
        ],
        reconoce: [
          'Al menos 3 veces por semana.',
          'Inmediatamente después de una buena acción.',
          'En reuniones de equipo regulares.'
        ]
      }
      return when[id]?.[stepIndex] || 'Momento no especificado.'
    }

    const getResultTitle = (id) => {
      const titles = {
        consciente: 'Mayor Engagement y Productividad',
        puntual: 'Mejor Gestión del Tiempo',
        comunica: 'Comunicación Más Efectiva',
        valora: 'Equipo Más Inclusivo',
        resuelve: 'Conflictos Resueltos Rápidamente',
        coCrea: 'Más Innovación y Creatividad',
        reconoce: 'Cultura de Apreciación Positiva'
      }
      return titles[id] || 'Resultado Positivo'
    }

    const getResultDescription = (id) => {
      const descriptions = {
        consciente: 'Las reuniones serán más productivas, todos estarán más enfocados y participarán activamente.',
        puntual: 'Nadie perderá tiempo esperando, las reuniones serán más eficientes y todos respetarán los horarios.',
        comunica: 'Los mensajes importantes no se perderán, las respuestas serán más rápidas y habrá menos malentendidos.',
        valora: 'Todos se sentirán incluidos, habrá más diversidad de ideas y mejor ambiente de trabajo.',
        resuelve: 'Los problemas se resolverán antes de escalar, mejor ambiente de trabajo y menos tensiones.',
        coCrea: 'Más ideas creativas, mejor colaboración y soluciones innovadoras para los desafíos.',
        reconoce: 'Mejor motivación del equipo, mayor satisfacción laboral y cultura más positiva.'
      }
      return descriptions[id] || 'Mejora significativa en el trabajo en equipo.'
    }

    const getResultMetric = (id) => {
      const metrics = {
        consciente: '67',
        puntual: '45',
        comunica: '89',
        valora: '78',
        resuelve: '92',
        coCrea: '56',
        reconoce: '73'
      }
      return metrics[id] || '50'
    }

    const getTips = (id) => {
      const tips = {
        consciente: [
          { icon: '💡', title: 'Prepara tu espacio', description: 'Ten buena iluminación y un fondo limpio.' },
          { icon: '🔇', title: 'Elimina distracciones', description: 'Cierra pestañas innecesarias y notificaciones.' },
          { icon: '👀', title: 'Mira a la cámara', description: 'No a la pantalla, sino al lente de la cámara.' }
        ],
        puntual: [
          { icon: '📅', title: 'Usa recordatorios', description: 'Programa alertas para enviar agendas.' },
          { icon: '⏰', title: 'Inicia puntual', description: 'No esperes más de 2 minutos por alguien.' },
          { icon: '📝', title: 'Toma notas', description: 'Anota acuerdos durante la reunión.' }
        ],
        comunica: [
          { icon: '🏷️', title: 'Usa etiquetas', description: 'Siempre etiqueta la urgencia de tus mensajes.' },
          { icon: '⏱️', title: 'Respeta SLAs', description: 'Configura recordatorios para respuestas.' },
          { icon: '📱', title: 'Canal correcto', description: 'Email formal, Teams rápido, WhatsApp emergencias.' }
        ],
        valora: [
          { icon: '👋', title: 'Saluda personal', description: 'Saluda a cada persona por su nombre.' },
          { icon: '🆕', title: 'Integra nuevos', description: 'Presenta a nuevos miembros del equipo.' },
          { icon: '🎤', title: 'Amplifica voces', description: 'Haz que todos participen en las discusiones.' }
        ],
        resuelve: [
          { icon: '💬', title: 'Habla directo', description: 'No uses intermediarios para resolver conflictos.' },
          { icon: '⏰', title: 'Actúa rápido', description: 'No dejes que los conflictos se acumulen.' },
          { icon: '📋', title: 'Documenta', description: 'Registra acuerdos y próximos pasos.' }
        ],
        coCrea: [
          { icon: '✅', title: 'Yes, and...', description: 'Construye sobre ideas, no las critiques.' },
          { icon: '❓', title: 'Admite ignorancia', description: 'Es seguro decir "no sé".' },
          { icon: '🤝', title: 'Colabora', description: 'Trabaja juntos para encontrar soluciones.' }
        ],
        reconoce: [
          { icon: '⭐', title: 'Modelo STAR', description: 'Situación, Tarea, Acción, Resultado.' },
          { icon: '📅', title: 'Regularidad', description: 'Reconoce al menos 3 personas por semana.' },
          { icon: '🎯', title: 'Específico', description: 'Sé específico sobre lo que reconoces.' }
        ]
      }
      return tips[id] || []
    }

    onMounted(() => {
      if (!principle.value) {
        router.push('/principios')
      }
    })

    return {
      principle,
      circumference,
      strokeDashoffset,
      goBack,
      toggleStep,
      completePrinciple,
      resetPrinciple,
      sharePrinciple,
      getWhatDescription,
      getStepDetails,
      getStepWhen,
      getResultTitle,
      getResultDescription,
      getResultMetric,
      getTips
    }
  }
}
</script>

<style scoped>
.principio {
  min-height: 100vh;
}

.principio-header {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  padding: 60px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.back-button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: var(--border-radius-medium);
  padding: 12px 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-bottom: 20px;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.principio-title {
  flex: 1;
}

.title-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.principio-title h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: white;
}

.title-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.header-progress {
  text-align: center;
}

.progress-circle {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
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
  color: white;
}

.status-badge {
  padding: 8px 16px;
  border-radius: var(--border-radius-medium);
  font-size: 0.9rem;
  font-weight: 600;
}

.principio-content {
  padding: 80px 0;
}

.content-section {
  margin-bottom: 80px;
}

.content-section h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 30px;
  color: var(--color-text-primary);
}

.what-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  box-shadow: var(--shadow-small);
  border-left: 4px solid var(--color-primary);
}

.what-text {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step {
  background: white;
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow-small);
  border: 2px solid var(--color-surface);
  transition: all var(--transition-normal);
}

.step.completed {
  border-color: var(--color-success);
  background: linear-gradient(135deg, rgba(52, 199, 89, 0.02) 0%, rgba(52, 199, 89, 0.05) 100%);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  cursor: pointer;
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step.completed .step-number {
  background: var(--color-success);
}

.step-title {
  flex: 1;
}

.step-title h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text-primary);
}

.step-title p {
  color: var(--color-text-secondary);
  margin: 0;
}

.step-toggle {
  width: 50px;
  height: 50px;
  border: 2px solid var(--color-surface);
  border-radius: 50%;
  background: white;
  cursor: pointer;
  transition: all var(--transition-normal);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-toggle:hover {
  border-color: var(--color-primary);
  transform: scale(1.1);
}

.step-toggle.completed {
  border-color: var(--color-success);
  background: var(--color-success);
  color: white;
}

.step-details {
  padding: 0 30px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.detail-card {
  background: var(--color-surface);
  border-radius: var(--border-radius-medium);
  padding: 20px;
}

.detail-card h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text-primary);
}

.detail-card p {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin: 0;
}

.result-card {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.result-icon {
  font-size: 4rem;
  flex-shrink: 0;
}

.result-content h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: white;
}

.result-content p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
}

.result-metrics {
  display: flex;
  gap: 20px;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: white;
}

.metric-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.tip-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  text-align: center;
}

.tip-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.tip-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.tip-card p {
  color: var(--color-text-secondary);
  margin: 0;
  font-size: 0.9rem;
}

.actions-section {
  background: var(--color-surface);
  padding: 60px 0;
  border-radius: var(--border-radius-large);
  text-align: center;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f5f5f7;
  border-top: 4px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .principio-title h1 {
    font-size: 2.5rem;
  }
  
  .step-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .step-details {
    grid-template-columns: 1fr;
  }
  
  .result-card {
    flex-direction: column;
    text-align: center;
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
  }
  
  .actions .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
