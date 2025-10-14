<template>
  <div class="principio" v-if="principle">
    <!-- Header -->
    <div class="principio-header">
      <div class="container">
        <button class="back-button" @click="goBack">
          ← Volver al Decálogo
        </button>
        <div class="header-content">
          <div class="principle-number">{{ getPrincipleNumber() }}</div>
          <div class="principle-icon">{{ principle.icon }}</div>
          <h1>{{ principle.title }}</h1>
          <p class="principle-tagline">{{ principle.tagline }}</p>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="principio-content">
      <div class="container">
        <!-- Definition -->
        <section class="content-section">
          <h2>¿Qué significa?</h2>
          <div class="definition-card">
            <p>{{ principle.definition }}</p>
          </div>
        </section>

        <!-- Why it Matters -->
        <section class="content-section">
          <h2>¿Por qué es importante?</h2>
          <div class="why-grid">
            <div 
              v-for="(reason, index) in principle.whyMatters" 
              :key="index"
              class="why-card"
            >
              <div class="why-icon">{{ reason.icon }}</div>
              <h3>{{ reason.title }}</h3>
              <p>{{ reason.description }}</p>
            </div>
          </div>
        </section>

        <!-- Concrete Examples -->
        <section class="content-section">
          <h2>Ejemplos Concretos</h2>
          <div class="examples-list">
            <div 
              v-for="(example, index) in principle.examples" 
              :key="index"
              class="example-item"
              :class="example.type"
            >
              <div class="example-header">
                <span class="example-badge" :class="example.type">
                  {{ example.type === 'good' ? '✅ Hacer' : '❌ No Hacer' }}
                </span>
              </div>
              <div class="example-content">
                <h4>{{ example.situation }}</h4>
                <p class="example-action">{{ example.action }}</p>
                <p class="example-result" v-if="example.result">
                  <strong>Resultado:</strong> {{ example.result }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- How to Apply -->
        <section class="content-section">
          <h2>Cómo Aplicarlo</h2>
          <div class="steps">
            <div 
              v-for="(step, index) in principle.howToApply" 
              :key="index"
              class="step"
            >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <h3>{{ step.title }}</h3>
                <p>{{ step.description }}</p>
                <div class="step-tips" v-if="step.tips">
                  <strong>Tips:</strong>
                  <ul>
                    <li v-for="(tip, tipIndex) in step.tips" :key="tipIndex">
                      {{ tip }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Tools & Templates -->
        <section class="content-section" v-if="principle.tools">
          <h2>Herramientas y Templates</h2>
          <div class="tools-grid">
            <div 
              v-for="(tool, index) in principle.tools" 
              :key="index"
              class="tool-card"
            >
              <div class="tool-icon">{{ tool.icon }}</div>
              <h3>{{ tool.name }}</h3>
              <p>{{ tool.description }}</p>
              <button class="btn btn-outline btn-small" @click="downloadTemplate(tool.file)">
                📥 Descargar
              </button>
            </div>
          </div>
        </section>

        <!-- Real Cases -->
        <section class="content-section">
          <h2>Casos Reales en UNIACC</h2>
          <div class="cases-list">
            <div 
              v-for="(caseStudy, index) in principle.realCases" 
              :key="index"
              class="case-card"
            >
              <div class="case-header">
                <h3>{{ caseStudy.title }}</h3>
                <span class="case-area">{{ caseStudy.area }}</span>
              </div>
              <div class="case-content">
                <p><strong>Situación:</strong> {{ caseStudy.situation }}</p>
                <p><strong>Aplicación:</strong> {{ caseStudy.application }}</p>
                <p><strong>Resultado:</strong> {{ caseStudy.result }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Quick Reference -->
        <section class="content-section">
          <h2>Guía de Referencia Rápida</h2>
          <div class="quick-ref-card">
            <div class="quick-ref-section" v-if="principle.quickRef.dos">
              <h3>✅ Hacer</h3>
              <ul>
                <li v-for="(item, index) in principle.quickRef.dos" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="quick-ref-section" v-if="principle.quickRef.donts">
              <h3>❌ No Hacer</h3>
              <ul>
                <li v-for="(item, index) in principle.quickRef.donts" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { principlesData } from '../data/principlesData'

export default {
  name: 'PrincipioView',
  setup() {
    const route = useRoute()
    const router = useRouter()

    const principle = computed(() => {
      return principlesData.find(p => p.id === route.params.id)
    })

    const getPrincipleNumber = () => {
      const index = principlesData.findIndex(p => p.id === route.params.id)
      return index + 1
    }

    const goBack = () => {
      router.push('/')
    }

    const downloadTemplate = (file) => {
      alert(`Descargando template: ${file}\n(Funcionalidad en desarrollo)`)
    }

    onMounted(() => {
      if (!principle.value) {
        router.push('/')
      }
      // Scroll to top
      window.scrollTo(0, 0)
    })

    return {
      principle,
      getPrincipleNumber,
      goBack,
      downloadTemplate
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
  padding: 40px 0 80px;
}

.back-button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: var(--border-radius-medium);
  padding: 12px 24px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  margin-bottom: 40px;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.header-content {
  text-align: center;
}

.principle-number {
  display: inline-block;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  line-height: 60px;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
}

.principle-icon {
  font-size: 5rem;
  margin-bottom: 20px;
}

.header-content h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: white;
}

.principle-tagline {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto;
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

.definition-card {
  background: linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, rgba(0, 122, 255, 0.02) 100%);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--border-radius-large);
  padding: 40px;
}

.definition-card p {
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--color-text-primary);
  margin: 0;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.why-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  text-align: center;
}

.why-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.why-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.why-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.examples-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.example-item {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  border-left: 4px solid var(--color-success);
}

.example-item.bad {
  border-left-color: var(--color-error);
}

.example-badge {
  display: inline-block;
  padding: 8px 16px;
  border-radius: var(--border-radius-small);
  font-weight: 600;
  font-size: 0.9rem;
}

.example-badge.good {
  background: var(--color-success);
  color: white;
}

.example-badge.bad {
  background: var(--color-error);
  color: white;
}

.example-content h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 16px 0 12px;
  color: var(--color-text-primary);
}

.example-action {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.example-result {
  color: var(--color-text-primary);
  background: var(--color-surface);
  padding: 12px;
  border-radius: var(--border-radius-small);
  margin: 0;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.step {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  display: flex;
  gap: 30px;
}

.step-number {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
}

.step-content h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.step-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
}

.step-tips {
  background: var(--color-surface);
  padding: 16px;
  border-radius: var(--border-radius-small);
}

.step-tips ul {
  margin: 8px 0 0;
  padding-left: 20px;
}

.step-tips li {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 8px 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.tool-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  text-align: center;
}

.tool-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.tool-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
}

.tool-card p {
  color: var(--color-text-secondary);
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.cases-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.case-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 30px;
  box-shadow: var(--shadow-small);
  border-left: 4px solid var(--color-primary);
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}

.case-header h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.case-area {
  background: var(--color-primary);
  color: white;
  padding: 6px 12px;
  border-radius: var(--border-radius-small);
  font-size: 0.9rem;
  font-weight: 600;
}

.case-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.case-content strong {
  color: var(--color-text-primary);
  font-weight: 600;
}

.quick-ref-card {
  background: white;
  border-radius: var(--border-radius-large);
  padding: 40px;
  box-shadow: var(--shadow-small);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.quick-ref-section h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-text-primary);
}

.quick-ref-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quick-ref-section li {
  padding: 12px 0;
  color: var(--color-text-secondary);
  line-height: 1.6;
  border-bottom: 1px solid var(--color-surface);
}

.quick-ref-section li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2.5rem;
  }
  
  .principle-tagline {
    font-size: 1.2rem;
  }
  
  .step {
    flex-direction: column;
  }
  
  .quick-ref-card {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>