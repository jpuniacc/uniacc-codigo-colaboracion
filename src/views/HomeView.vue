<template>
  <div class="home">
    <!-- Hero Section -->
    <section id="inicio" class="hero">
      <div class="hero-content animate-slide-up">
        <h1>Acuerdos de Convivencia UNIACC</h1>
        <p class="hero-subtitle">7 principios fundamentales para la excelencia colaborativa</p>
        <p class="hero-description">
          Un decálogo inspirado en el trabajo en conjunto entre lideres del taller Juntos Creamos UNIACC.
          Principios simples y concretos para transformar nuestra cultura de trabajo.
        </p>
        <div class="hero-actions">
          <a href="#principios" class="btn btn-primary btn-large">
            📖 Ver el Decálogo
          </a>
          <a href="#ejemplos" class="btn btn-outline btn-large">
            💡 Ver Ejemplos
          </a>
        </div>
      </div>
    </section>

    <!-- Principios Section -->
    <section id="principios" class="principios-section">
      <div class="container">
        <h2 class="section-title">Los 7 Principios</h2>
        <p class="section-subtitle">Cada principio es una guía práctica para mejorar nuestra colaboración</p>
        
        <div class="principios-grid">
          <div 
            v-for="(principio, index) in principios" 
            :key="principio.id"
            class="principio-card animate-slide-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="verPrincipio(principio.id)"
          >
            <div class="card-number">{{ index + 1 }}</div>
            <div class="card-icon">{{ principio.icon }}</div>
            <h3 class="card-title">{{ principio.title }}</h3>
            <p class="card-description">{{ principio.description }}</p>
            <div class="card-footer">
              <span class="card-link">Ver detalles →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ejemplos Rápidos Section -->
    <section id="ejemplos" class="ejemplos-section">
      <div class="container">
        <h2 class="section-title">Ejemplos Concretos</h2>
        <p class="section-subtitle">Situaciones reales donde aplicar estos principios</p>
        
        <div class="ejemplos-grid">
          <div class="ejemplo-card">
            <div class="ejemplo-icon">📹</div>
            <h3>Reuniones Virtuales</h3>
            <ul class="ejemplo-list">
              <li><strong>Enciende la cámara</strong> siempre en reuniones formales</li>
              <li><strong>Envía la agenda</strong> 24 horas antes</li>
              <li><strong>Inicia puntual</strong> sin esperar a nadie</li>
              <li><strong>Participa activamente</strong> haciendo preguntas</li>
            </ul>
          </div>

          <div class="ejemplo-card">
            <div class="ejemplo-icon">💬</div>
            <h3>Comunicación por Email</h3>
            <ul class="ejemplo-list">
              <li><strong>Usa etiquetas:</strong> [URGENTE], [IMPORTANTE], [FYI]</li>
              <li><strong>Responde en 1 hora</strong> si es urgente</li>
              <li><strong>Responde en 24 horas</strong> si es importante</li>
              <li><strong>Sé específico</strong> en el asunto del email</li>
            </ul>
          </div>

          <div class="ejemplo-card">
            <div class="ejemplo-icon">🤝</div>
            <h3>Trabajo en Equipo</h3>
            <ul class="ejemplo-list">
              <li><strong>Saluda genuinamente</strong> a cada persona por su nombre</li>
              <li><strong>Amplifica voces:</strong> "Me gusta la idea de [Nombre]"</li>
              <li><strong>Di "Yes, and..."</strong> en lugar de "Yes, but..."</li>
              <li><strong>Reconoce logros</strong> de manera específica y pública</li>
            </ul>
          </div>

          <div class="ejemplo-card">
            <div class="ejemplo-icon">🔧</div>
            <h3>Gestión de Conflictos</h3>
            <ul class="ejemplo-list">
              <li><strong>Habla directamente</strong> con la persona en 48 horas</li>
              <li><strong>Conversación uno a uno</strong> en privado</li>
              <li><strong>Usa "Yo siento..."</strong> en lugar de "Tú hiciste..."</li>
              <li><strong>Documenta acuerdos</strong> y haz seguimiento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Reference Section -->
    <section class="quick-reference">
      <div class="container">
        <h2 class="section-title">Guía de Referencia Rápida</h2>
        <div class="reference-grid">
          <div class="reference-card">
            <h3>⏰ Tiempos de Respuesta (SLA)</h3>
            <ul>
              <li>[URGENTE] → 1 hora</li>
              <li>[IMPORTANTE] → 24 horas</li>
              <li>[FYI] → Cuando puedas</li>
            </ul>
          </div>

          <div class="reference-card">
            <h3>📋 Antes de cada Reunión</h3>
            <ul>
              <li>Enviar agenda 24h antes</li>
              <li>Material pre-lectura adjunto</li>
              <li>Objetivo claro definido</li>
            </ul>
          </div>

          <div class="reference-card">
            <h3>✅ Después de cada Reunión</h3>
            <ul>
              <li>Resumen en 24h</li>
              <li>Acuerdos documentados</li>
              <li>Próximos pasos con responsables</li>
            </ul>
          </div>

          <div class="reference-card">
            <h3>🌟 Modelo STAR para Reconocimientos</h3>
            <ul>
              <li><strong>S</strong>ituación: Contexto</li>
              <li><strong>T</strong>area: Qué debía hacer</li>
              <li><strong>A</strong>cción: Qué hizo</li>
              <li><strong>R</strong>esultado: Impacto logrado</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto Section -->
    <section id="contacto" class="contacto-section">
      <div class="container">
        <h2>¿Preguntas o Sugerencias?</h2>
        <p>Estamos aquí para ayudarte a implementar estos principios</p>
        <div class="contacto-options">
          <a href="mailto:direccionditd@uniacc.cl" class="contacto-btn">
            <span class="contacto-icon">📧</span>
            <span>direccionditd@uniacc.cl</span>
          </a>
          <a href="#" class="contacto-btn">
            <span class="contacto-icon">💬</span>
            <span>Canal Teams: Cultura Colaboración (PROXIMAMENTE)</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter()

    const principios = [
      {
        id: 'consciente',
        title: 'UNIACC Consciente',
        icon: '👁️',
        description: 'Presencia plena en cada reunión - estar 100% presente, cámara encendida, sin distracciones.'
      },
      {
        id: 'puntual',
        title: 'UNIACC Puntual',
        icon: '⏰',
        description: 'Gestión eficaz del tiempo - agenda 24h antes, inicio puntual, resumen en 24h.'
      },
      {
        id: 'comunica',
        title: 'UNIACC Comunica',
        icon: '💬',
        description: 'Comunicación clara y efectiva - usa etiquetas, respeta SLAs, elige el canal correcto.'
      },
      {
        id: 'valora',
        title: 'UNIACC Valora',
        icon: '🤝',
        description: 'Diversidad e inclusión - saludo genuino, integración cálida, amplificar todas las voces.'
      },
      {
        id: 'resuelve',
        title: 'UNIACC Resuelve',
        icon: '🔧',
        description: 'Gestión constructiva de conflictos - conversación directa en 48h, protocolo claro.'
      },
      {
        id: 'co-crea',
        title: 'UNIACC Co-crea',
        icon: '💡',
        description: 'Innovación colaborativa - "Yes, and..." en lugar de "Yes, but...", normalizar "no sé".'
      },
      {
        id: 'reconoce',
        title: 'UNIACC Reconoce',
        icon: '🌟',
        description: 'Cultura de apreciación - reconocimiento específico con modelo STAR, 3 veces por semana.'
      }
    ]

    const verPrincipio = (id) => {
      router.push(`/principios/${id}`)
    }

    return {
      principios,
      verPrincipio
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, rgba(0, 122, 255, 0.02) 100%);
}

.hero-content {
  max-width: 800px;
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
  margin-bottom: 20px;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.principios-section {
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

.principios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.principio-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  box-shadow: var(--shadow-small);
  border: 2px solid var(--color-surface);
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
}

.principio-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-large);
  border-color: var(--color-primary);
}

.card-number {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.card-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.card-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-footer {
  padding-top: 20px;
  border-top: 1px solid var(--color-surface);
}

.card-link {
  color: var(--color-primary);
  font-weight: 600;
  transition: all var(--transition-normal);
}

.principio-card:hover .card-link {
  transform: translateX(4px);
  display: inline-block;
}

.ejemplos-section {
  padding: 100px 0;
  background: var(--color-surface);
}

.ejemplos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.ejemplo-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  box-shadow: var(--shadow-small);
}

.ejemplo-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.ejemplo-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.ejemplo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ejemplo-list li {
  padding: 12px 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
  border-bottom: 1px solid var(--color-surface);
}

.ejemplo-list li:last-child {
  border-bottom: none;
}

.ejemplo-list strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.quick-reference {
  padding: 100px 0;
}

.reference-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.reference-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  border-left: 4px solid var(--color-primary);
}

.reference-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.reference-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.reference-card li {
  padding: 8px 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.reference-card strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.contacto-section {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  text-align: center;
}

.contacto-section h2 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: white;
}

.contacto-section p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.8);
}

.contacto-options {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.contacto-btn {
  background: white;
  color: var(--color-primary);
  padding: 20px 30px;
  border-radius: var(--border-radius-medium);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  transition: all var(--transition-normal);
}

.contacto-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.contacto-icon {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
  }
  
  .principios-grid {
    grid-template-columns: 1fr;
  }
  
  .ejemplos-grid {
    grid-template-columns: 1fr;
  }
  
  .reference-grid {
    grid-template-columns: 1fr;
  }
  
  .contacto-options {
    flex-direction: column;
    align-items: center;
  }
  
  .contacto-btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>