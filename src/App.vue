<template>
  <div id="app" class="app">
    <!-- Navigation Bar -->
    <nav class="navbar" v-if="showNavbar">
      <div class="nav-container">
        <router-link to="/" class="nav-brand">
          <img src="/logo.svg" alt="UNIACC" class="nav-logo">
          <span class="nav-title">Colaboración</span>
        </router-link>
        
        <div class="nav-links">
          <a href="#principios" class="nav-link">Los 7 Principios</a>
          <a href="#ejemplos" class="nav-link">Ejemplos</a>
          <a href="#contacto" class="nav-link">Contacto</a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Bottom Navigation (Mobile) -->
    <nav class="bottom-nav" v-if="showNavbar && isMobile">
      <a href="#inicio" class="bottom-nav-item">
        <span class="nav-icon">🏠</span>
        <span class="nav-label">Inicio</span>
      </a>
      <a href="#principios" class="bottom-nav-item">
        <span class="nav-icon">📖</span>
        <span class="nav-label">Decálogo</span>
      </a>
      <a href="#ejemplos" class="bottom-nav-item">
        <span class="nav-icon">💡</span>
        <span class="nav-label">Ejemplos</span>
      </a>
    </nav>

    <!-- Loading Overlay -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>Cargando...</p>
    </div>

    <!-- Notification Toast -->
    <div v-if="notification.show" class="notification-toast" :class="notification.type">
      <span class="notification-icon">{{ notification.icon }}</span>
      <span class="notification-message">{{ notification.message }}</span>
      <button @click="hideNotification" class="notification-close">×</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const route = useRoute()
    
    const isMobile = ref(false)
    const loading = ref(false)
    const notification = ref({ show: false, type: 'info', message: '', icon: '📢' })

    const hideNotification = () => {
      notification.value.show = false
    }

    const showNavbar = computed(() => {
      return route.name !== 'Principio'
    })

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768
    }

    onMounted(() => {
      checkMobile()
      window.addEventListener('resize', checkMobile)
    })

    return {
      loading,
      notification,
      hideNotification,
      showNavbar,
      isMobile
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #1d1d1f;
  font-weight: 600;
}

.nav-logo {
  height: 32px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: #6e6e73;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #007aff;
}

.nav-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: 500;
  color: #1d1d1f;
}

.main-content {
  flex: 1;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  z-index: 100;
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: #6e6e73;
  font-size: 12px;
  padding: 8px;
  transition: color 0.3s ease;
}

.bottom-nav-item:hover,
.bottom-nav-item.router-link-active {
  color: #007aff;
}

.nav-icon {
  font-size: 20px;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f5f5f7;
  border-top: 3px solid #007aff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.notification-toast {
  position: fixed;
  top: 80px;
  right: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

.notification-toast.success {
  border-left: 4px solid #34c759;
}

.notification-toast.error {
  border-left: 4px solid #ff3b30;
}

.notification-toast.info {
  border-left: 4px solid #007aff;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.notification-icon {
  font-size: 20px;
}

.notification-message {
  flex: 1;
  color: #1d1d1f;
  font-weight: 500;
}

.notification-close {
  background: none;
  border: none;
  font-size: 20px;
  color: #6e6e73;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .nav-user .user-name {
    display: none;
  }
  
  .main-content {
    padding-bottom: 80px;
  }
}
</style>
