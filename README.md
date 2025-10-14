# 🚀 Código de Colaboración UNIACC - Web App

Una aplicación web moderna y minimalista para implementar el Código de Colaboración de UNIACC. Diseñada con estilo Apple para ser súper fácil de entender y usar.

## 🎯 Características

### ✨ Diseño Apple-Style
- **Minimalismo visual** con mucho espacio en blanco
- **Tipografía clara** y legible
- **Animaciones suaves** y transiciones fluidas
- **Colores UNIACC** integrados
- **Responsive perfecto** para móvil y desktop

### 🎮 Gamificación Simple
- **7 principios** con 3 pasos cada uno
- **Sistema de niveles** (Principiante → Líder)
- **Progreso visual** con círculos y barras
- **Logros desbloqueables** por completar objetivos
- **Métricas en tiempo real**

### 📱 PWA (Progressive Web App)
- **Instalable** en móviles y desktop
- **Funciona offline** (próximamente)
- **Notificaciones push** (próximamente)
- **Acceso rápido** desde la pantalla de inicio

### 🎯 Contenido Simplificado
- **Una idea por pantalla** - sin sobrecarga cognitiva
- **3 pasos máximo** por principio
- **1 métrica clave** por resultado
- **1 acción clara** por pantalla

## 🛠️ Tecnologías

- **Vue.js 3** - Framework reactivo
- **Vite** - Build tool ultra-rápido
- **CSS Variables** - Sistema de diseño consistente
- **PWA** - Capacidades de app nativa
- **LocalStorage** - Persistencia de datos

## 🚀 Instalación y Desarrollo

### Prerequisitos
- Node.js 16+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [repo-url]
cd uniacc-colaboracion-app

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# La app estará disponible en http://localhost:3000
```

### Scripts Disponibles
```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Build para producción
npm run preview      # Preview del build

# Deploy
npm run deploy       # Deploy automático a Netlify
```

## 📱 Estructura de la App

### 🏠 Páginas Principales
- **Home** (`/`) - Landing page con overview
- **Comenzar** (`/comenzar`) - Quick start y selección de principios
- **Principios** (`/principios`) - Lista de todos los principios
- **Principio** (`/principios/:id`) - Vista detallada de un principio
- **Progreso** (`/progreso`) - Dashboard personal de progreso
- **Dashboard** (`/dashboard`) - Métricas y análisis avanzado

### 🎯 Los 7 Principios
1. **👁️ Presencia Plena** - Estar 100% presente en reuniones
2. **⏰ Gestión del Tiempo** - Empezar a tiempo y respetar horarios
3. **💬 Comunicación Clara** - Usar etiquetas para priorizar mensajes
4. **🤝 Diversidad e Inclusión** - Amplificar todas las voces del equipo
5. **🔧 Gestión de Conflictos** - Conversación directa en 48 horas
6. **💡 Innovación Colaborativa** - "Yes, and..." en lugar de "Yes, but..."
7. **🌟 Cultura de Apreciación** - Reconocimiento específico con modelo STAR

### 🎮 Sistema de Gamificación
- **Niveles**: Principiante (0-1) → Aprendiz (2-3) → Experto (4-5) → Maestro (6) → Líder (7)
- **Progreso**: Por pasos completados dentro de cada principio
- **Logros**: Badges desbloqueables por hitos específicos
- **Métricas**: Progreso semanal, comparación con equipo, insights automáticos

## 🎨 Sistema de Diseño

### 🎨 Colores
```css
--color-primary: #007aff        /* Azul UNIACC */
--color-success: #34c759        /* Verde éxito */
--color-warning: #ff9500        /* Naranja advertencia */
--color-error: #ff3b30          /* Rojo error */
--color-surface: #f5f5f7        /* Gris claro */
--color-text-primary: #1d1d1f   /* Negro principal */
--color-text-secondary: #6e6e73 /* Gris texto */
```

### 📏 Espaciado
```css
--spacing-xs: 4px    /* Muy pequeño */
--spacing-sm: 8px    /* Pequeño */
--spacing-md: 16px   /* Mediano */
--spacing-lg: 24px   /* Grande */
--spacing-xl: 32px   /* Muy grande */
--spacing-2xl: 48px  /* Extra grande */
```

### 🔤 Tipografía
- **Fuente**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Tamaños**: 12px → 48px (escala armoniosa)
- **Pesos**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

## 📊 Datos y Persistencia

### 💾 LocalStorage
Los datos se guardan automáticamente en el navegador:
```javascript
// Estructura de datos guardada
{
  "principles": [
    {
      "id": "consciente",
      "completed": false,
      "progress": 33,
      "steps": [
        { "completed": true },
        { "completed": true },
        { "completed": false }
      ]
    }
  ]
}
```

### 🔄 Sincronización
- **Automática**: Cada acción se guarda inmediatamente
- **Backup**: Datos respaldados en localStorage
- **Reset**: Función para reiniciar progreso completo

## 🚀 Deploy y Producción

### 🌐 Netlify (Recomendado)
```bash
# Deploy automático
npm run deploy

# URL: https://tu-app.netlify.app
```

### 📱 PWA
La app es completamente instalable:
- **Chrome**: Botón "Instalar" en la barra de direcciones
- **Safari**: Compartir → "Agregar a pantalla de inicio"
- **Firefox**: Menú → "Instalar"

### 🔧 Configuración de Producción
- **Build optimizado** con Vite
- **Service Worker** para cache offline
- **Manifest** para instalación PWA
- **Meta tags** para SEO y redes sociales

## 🎯 Roadmap Futuro

### 🔮 Próximas Características
- [ ] **Integración Teams** - Sincronización con Microsoft Teams
- [ ] **Notificaciones push** - Recordatorios automáticos
- [ ] **Modo offline** - Funcionalidad completa sin internet
- [ ] **Analytics** - Métricas de uso y engagement
- [ ] **Multi-idioma** - Soporte para inglés
- [ ] **Temas** - Modo oscuro y personalización
- [ ] **Exportación** - PDF e Excel de progreso
- [ ] **API** - Backend para datos compartidos

### 🏗️ Mejoras Técnicas
- [ ] **Tests** - Unit tests y E2E tests
- [ ] **Performance** - Optimización de bundle
- [ ] **Accessibility** - Mejoras de accesibilidad
- [ ] **SEO** - Optimización para motores de búsqueda

## 🤝 Contribución

### 🐛 Reportar Bugs
1. Ir a [Issues](link-to-issues)
2. Buscar si ya existe el bug
3. Crear nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducir
   - Screenshots si es necesario
   - Información del navegador/OS

### ✨ Sugerir Mejoras
1. Ir a [Discussions](link-to-discussions)
2. Crear nueva discusión con:
   - Descripción de la mejora
   - Casos de uso
   - Beneficios esperados

### 🔧 Desarrollo Local
1. Fork del repositorio
2. Crear branch para feature: `git checkout -b feature/nueva-funcionalidad`
3. Hacer commits descriptivos
4. Push al branch: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

## 📞 Soporte

### 🆘 Ayuda
- **Email**: soporte@uniacc.cl
- **Teams**: Canal "Código de Colaboración"
- **Documentación**: [Wiki interna](link-to-wiki)

### 📚 Recursos
- **Guía de usuario**: [PDF descargable](link-to-guide)
- **Videos tutoriales**: [Canal YouTube](link-to-youtube)
- **FAQ**: [Preguntas frecuentes](link-to-faq)

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para detalles.

---

**Desarrollado con ❤️ para UNIACC**

*Transformando la cultura colaborativa, un principio a la vez.*
