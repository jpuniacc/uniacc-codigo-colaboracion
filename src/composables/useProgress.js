import { ref, computed } from 'vue'

// Estado global del progreso
const progressState = ref({
  principles: [
    {
      id: 'consciente',
      title: 'Presencia Plena',
      icon: '👁️',
      description: 'Estar 100% presente en cada reunión',
      completed: false,
      progress: 0,
      steps: [
        {
          title: 'Enciende la cámara',
          description: 'Siempre en reuniones virtuales',
          completed: false
        },
        {
          title: 'Silencia el móvil',
          description: 'Sin distracciones externas',
          completed: false
        },
        {
          title: 'Participa activamente',
          description: 'Haz preguntas y aporta ideas',
          completed: false
        }
      ]
    },
    {
      id: 'puntual',
      title: 'Gestión del Tiempo',
      icon: '⏰',
      description: 'Empezar a tiempo y respetar horarios',
      completed: false,
      progress: 0,
      steps: [
        {
          title: 'Envía agenda 24h antes',
          description: 'Preparación obligatoria',
          completed: false
        },
        {
          title: 'Inicia exacto a la hora',
          description: 'Sin esperar a nadie',
          completed: false
        },
        {
          title: 'Envía resumen en 24h',
          description: 'Acuerdos y próximos pasos',
          completed: false
        }
      ]
    },
    {
      id: 'comunica',
      title: 'Comunicación Clara',
      icon: '💬',
      description: 'Usar etiquetas para priorizar mensajes',
      completed: false,
      progress: 0,
      steps: [
        {
          title: 'Usa etiquetas correctas',
          description: '[URGENTE], [IMPORTANTE], [FYI]',
          completed: false
        },
        {
          title: 'Respeta los SLAs',
          description: 'Tiempos de respuesta claros',
          completed: false
        },
        {
          title: 'Usa el canal correcto',
          description: 'Email, Teams, WhatsApp según urgencia',
          completed: false
        }
      ]
    },
    {
      id: 'valora',
      title: 'Diversidad e Inclusión',
      icon: '🤝',
      description: 'Amplificar todas las voces del equipo',
      completed: false,
      progress: 0,
      steps: [
        {
          title: 'Saluda genuinamente',
          description: 'Conexión personal auténtica',
          completed: false
        },
        {
          title: 'Presenta a nuevos miembros',
          description: 'Integración cálida al equipo',
          completed: false
        },
        {
          title: 'Amplifica voces silenciadas',
          description: '"Me gusta la idea de [Nombre]"',
          completed: false
        }
      ]
    },
    {
      id: 'resuelve',
      title: 'Gestión de Conflictos',
      icon: '🔧',
      description: 'Conversación directa en 48 horas',
      completed: false,
      progress: 0,
      steps: [
        {
          title: 'Habla directamente',
          description: 'Conversación uno a uno',
          completed: false
        },
        {
          title: 'Usa el protocolo',
          description: 'Nivel 1: Directo, Nivel 2: Facilitador',
          completed: false
        },
        {
          title: 'Documenta acuerdos',
          description: 'Seguimiento y accountability',
          completed: false
        }
      ]
    },
    {
      id: 'co-crea',
      title: 'Innovación Colaborativa',
      icon: '💡',
      description: '"Yes, and..." en lugar de "Yes, but..."',
      completed: false,
      progress: 0,
      steps: [
        {
          title: 'Cambia el lenguaje',
          description: '"Yes, and..." en lugar de "Yes, but..."',
          completed: false
        },
        {
          title: 'Normaliza "no sé"',
          description: 'Es seguro no saber algo',
          completed: false
        },
        {
          title: 'Construye sobre ideas',
          description: 'Cada idea suma al resultado final',
          completed: false
        }
      ]
    },
    {
      id: 'reconoce',
      title: 'Cultura de Apreciación',
      icon: '🌟',
      description: 'Reconocimiento específico con modelo STAR',
      completed: false,
      progress: 0,
      steps: [
        {
          title: 'Usa modelo STAR',
          description: 'Situación, Tarea, Acción, Resultado',
          completed: false
        },
        {
          title: 'Reconoce frecuentemente',
          description: 'Al menos 3 reconocimientos por semana',
          completed: false
        },
        {
          title: 'Sé específico',
          description: 'No genérico, sino acciones concretas',
          completed: false
        }
      ]
    }
  ]
})

// Computed properties
const completedPrinciples = computed(() => {
  return progressState.value.principles.filter(p => p.completed).length
})

const totalProgress = computed(() => {
  const total = progressState.value.principles.length
  const completed = completedPrinciples.value
  return Math.round((completed / total) * 100)
})

// Funciones para manejar el progreso
const markStepCompleted = (principleId, stepIndex) => {
  const principle = progressState.value.principles.find(p => p.id === principleId)
  if (principle && principle.steps[stepIndex]) {
    principle.steps[stepIndex].completed = true
    
    // Calcular progreso del principio
    const completedSteps = principle.steps.filter(s => s.completed).length
    principle.progress = Math.round((completedSteps / principle.steps.length) * 100)
    
    // Marcar principio como completado si todos los pasos están hechos
    if (completedSteps === principle.steps.length) {
      principle.completed = true
    }
    
    // Guardar en localStorage
    saveProgress()
  }
}

const markPrincipleCompleted = (principleId) => {
  const principle = progressState.value.principles.find(p => p.id === principleId)
  if (principle) {
    principle.completed = true
    principle.progress = 100
    principle.steps.forEach(step => {
      step.completed = true
    })
    saveProgress()
  }
}

const resetProgress = () => {
  progressState.value.principles.forEach(principle => {
    principle.completed = false
    principle.progress = 0
    principle.steps.forEach(step => {
      step.completed = false
    })
  })
  saveProgress()
}

// Funciones de persistencia
const saveProgress = () => {
  localStorage.setItem('uniacc-progress', JSON.stringify(progressState.value))
}

const loadProgress = () => {
  const saved = localStorage.getItem('uniacc-progress')
  if (saved) {
    try {
      progressState.value = JSON.parse(saved)
    } catch (e) {
      console.error('Error loading progress:', e)
    }
  }
}

// Inicializar cargando progreso guardado
loadProgress()

export function useProgress() {
  return {
    principles: computed(() => progressState.value.principles),
    completedPrinciples,
    totalProgress,
    markStepCompleted,
    markPrincipleCompleted,
    resetProgress,
    saveProgress,
    loadProgress
  }
}
