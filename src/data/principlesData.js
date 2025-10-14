export const principlesData = [
  {
    id: 'consciente',
    title: 'UNIACC Consciente',
    icon: '👁️',
    tagline: 'Presencia plena en cada reunión',
    definition: 'Estar 100% presente en cada interacción, eliminando distracciones y comprometiéndose activamente con el equipo. Significa activar la cámara, silenciar el móvil y participar genuinamente.',
    whyMatters: [
      {
        icon: '🎯',
        title: 'Mayor Productividad',
        description: 'Las reuniones son 67% más productivas cuando todos están presentes y enfocados.'
      },
      {
        icon: '🤝',
        title: 'Mejor Conexión',
        description: 'La presencia visual crea confianza y fortalece las relaciones del equipo.'
      },
      {
        icon: '⚡',
        title: 'Decisiones Rápidas',
        description: 'Con todos presentes y atentos, las decisiones se toman en 40% menos tiempo.'
      }
    ],
    examples: [
      {
        type: 'good',
        situation: 'Reunión de Planificación Académica',
        action: 'Ana activa su cámara al entrar, cierra todas las pestañas innecesarias y toma notas manualmente para mantenerse enfocada.',
        result: 'La reunión termina 15 minutos antes porque todos participan activamente.'
      },
      {
        type: 'good',
        situation: 'Feedback 1-1 con Supervisor',
        action: 'Carlos silencia su móvil, lo deja en otra habitación y da feedback mirando directamente a la cámara.',
        result: 'Su supervisor se siente valorado y la conversación es más productiva.'
      },
      {
        type: 'bad',
        situation: 'Reunión de Comité',
        action: 'María mantiene su cámara apagada y responde emails mientras otros hablan.',
        result: 'Pierde información clave y debe pedir que repitan, alargando la reunión.'
      }
    ],
    howToApply: [
      {
        title: 'Antes de la Reunión',
        description: 'Prepara tu espacio y tecnología para estar 100% presente.',
        tips: [
          'Cierra todas las pestañas innecesarias del navegador',
          'Silencia notificaciones en móvil y computador',
          'Verifica que tu cámara y micrófono funcionan',
          'Usa audífonos para mejor calidad de audio'
        ]
      },
      {
        title: 'Durante la Reunión',
        description: 'Mantén tu atención completa en la conversación.',
        tips: [
          'Activa tu cámara desde el inicio',
          'Mira a la cámara cuando hablas (no a la pantalla)',
          'Toma notas para mantenerte enfocado',
          'Haz preguntas o comentarios para mostrar compromiso'
        ]
      },
      {
        title: 'Al Finalizar',
        description: 'Confirma tu entendimiento y próximos pasos.',
        tips: [
          'Resume los puntos clave que escuchaste',
          'Confirma tus compromisos y fechas',
          'Agradece al equipo por su tiempo',
          'Documenta acuerdos inmediatamente'
        ]
      }
    ],
    tools: [
      {
        icon: '📋',
        name: 'Checklist Pre-Reunión',
        description: 'Lista de verificación para prepararse',
        file: '/templates/checklist-prereunion.html'
      },
      {
        icon: '📝',
        name: 'Template de Notas',
        description: 'Formato para tomar notas efectivas',
        file: '/templates/notas-reunion.html'
      }
    ],
    realCases: [
      {
        title: 'Facultad de Ingeniería - Reunión de Acreditación',
        area: 'Académico',
        situation: 'Reuniones largas (2+ horas) con muchos participantes y baja participación.',
        application: 'Implementaron política de cámara obligatoria y pausas cada 45 minutos.',
        result: 'Participación aumentó 78% y reuniones se acortaron a 90 minutos manteniendo la misma productividad.'
      },
      {
        title: 'Departamento de TI - Daily Standups',
        area: 'Operaciones',
        situation: 'Reuniones diarias de 15 minutos donde el equipo multitaskeaba.',
        application: 'Regla: todos de pie, cámaras encendidas, móviles fuera de vista.',
        result: 'Reuniones ahora duran 10 minutos y son mucho más efectivas.'
      }
    ],
    quickRef: {
      dos: [
        'Activa cámara en reuniones formales',
        'Silencia móvil y notificaciones',
        'Mira a la cámara al hablar',
        'Participa activamente con preguntas',
        'Usa audífonos para mejor audio'
      ],
      donts: [
        'Multitasear durante reuniones',
        'Mantener cámara apagada sin justificación',
        'Revisar email o WhatsApp',
        'Comer durante reuniones formales',
        'Interrumpir sin levantar la mano'
      ]
    }
  },
  // Los otros 6 principios seguirían el mismo formato...
  // Por brevedad, incluyo solo 2 más como ejemplo
  
  {
    id: 'puntual',
    title: 'UNIACC Puntual',
    icon: '⏰',
    tagline: 'El tiempo es el recurso más valioso',
    definition: 'Respetar el tiempo propio y ajeno mediante agendas claras, inicios puntuales y seguimientos oportunos. Significa enviar agenda 24h antes, iniciar a la hora exacta y cerrar con acuerdos documentados.',
    whyMatters: [
      {
        icon: '💰',
        title: 'Ahorro Real',
        description: '15 minutos de retraso en una reunión de 10 personas = 2.5 horas perdidas del equipo.'
      },
      {
        icon: '🎯',
        title: 'Mejor Enfoque',
        description: 'Las agendas claras aumentan 89% la probabilidad de lograr objetivos.'
      },
      {
        icon: '⚡',
        title: 'Acción Inmediata',
        description: 'El seguimiento en 24h aumenta 3x la tasa de cumplimiento de acuerdos.'
      }
    ],
    examples: [
      {
        type: 'good',
        situation: 'Reunión Semanal de Equipo',
        action: 'Pedro envía agenda el lunes para reunión del martes, incluye objetivos, temas y material pre-lectura.',
        result: 'Todos llegan preparados, la reunión dura 30 minutos en lugar de 60.'
      },
      {
        type: 'bad',
        situation: 'Presentación a Dirección',
        action: 'Laura llega 10 minutos tarde sin avisar previo, desorganizada sin agenda clara.',
        result: 'Dirección se frustra, la reunión se extiende y la decisión se pospone.'
      }
    ],
    howToApply: [
      {
        title: '24 Horas Antes',
        description: 'Prepara y comunica claramente.',
        tips: [
          'Envía agenda con objetivo claro',
          'Incluye material de pre-lectura',
          'Define tiempo para cada tema',
          'Confirma asistentes y roles'
        ]
      },
      {
        title: 'Al Iniciar',
        description: 'Comienza puntual, sin excepciones.',
        tips: [
          'Inicia exactamente a la hora programada',
          'No resumas para quienes llegan tarde',
          'Revisa agenda y tiempos asignados',
          'Nombra facilitador y tomador de notas'
        ]
      },
      {
        title: 'En 24 Horas Después',
        description: 'Documenta y da seguimiento.',
        tips: [
          'Envía resumen de acuerdos',
          'Lista próximos pasos con responsables',
          'Incluye fechas límite específicas',
          'Programa seguimientos necesarios'
        ]
      }
    ],
    tools: [
      {
        icon: '📅',
        name: 'Template de Agenda',
        description: 'Formato estándar para todas las reuniones',
        file: '/templates/agenda-reunion.html'
      },
      {
        icon: '📝',
        name: 'Template de Notas',
        description: 'Formato para documentar acuerdos',
        file: '/templates/notas-reunion.html'
      }
    ],
    realCases: [
      {
        title: 'Vicerrectoría - Reuniones de Comité Ejecutivo',
        area: 'Dirección',
        situation: 'Reuniones que comenzaban 15-20 minutos tarde regularmente.',
        application: 'Política estricta: puerta se cierra a la hora exacta, no se resume para tardíos.',
        result: 'En 2 semanas, 100% de asistentes llegaban a tiempo. Tiempo recuperado: 4 horas/mes.'
      }
    ],
    quickRef: {
      dos: [
        'Enviar agenda 24h antes',
        'Iniciar exactamente a la hora',
        'Resumen en 24h post-reunión',
        'Incluir material pre-lectura',
        'Definir tiempos por tema'
      ],
      donts: [
        'Llegar tarde sin avisar',
        'Improvisar agendas',
        'Resumir para tardíos',
        'Extender reuniones sin consenso',
        'Olvidar el seguimiento'
      ]
    }
  },
  
  {
    id: 'comunica',
    title: 'UNIACC Comunica',
    icon: '💬',
    tagline: 'Claridad en cada mensaje',
    definition: 'Comunicarse con claridad usando etiquetas de prioridad, respetando tiempos de respuesta (SLAs) y eligiendo el canal apropiado. Significa etiquetar [URGENTE], [IMPORTANTE] o [FYI] según corresponda.',
    whyMatters: [
      {
        icon: '🎯',
        title: 'Menos Confusión',
        description: 'Las etiquetas reducen 89% los malentendidos sobre urgencia.'
      },
      {
        icon: '⚡',
        title: 'Respuestas Rápidas',
        description: 'Los SLAs claros aumentan 3x la velocidad de respuesta.'
      },
      {
        icon: '📊',
        title: 'Canal Correcto',
        description: 'Usar el canal apropiado reduce 67% las interrupciones innecesarias.'
      }
    ],
    examples: [
      {
        type: 'good',
        situation: 'Solicitud de Aprobación de Presupuesto',
        action: 'Email con asunto: "[IMPORTANTE] Aprobación Presupuesto Proyecto X - Fecha límite: 15/Nov"',
        result: 'El destinatario prioriza correctamente y responde en 12 horas.'
      },
      {
        type: 'bad',
        situation: 'Aviso de Reunión Cancelada',
        action: 'WhatsApp personal a las 11 PM sin etiqueta de urgencia.',
        result: 'Varios asistentes no ven el mensaje y llegan a reunión cancelada.'
      }
    ],
    howToApply: [
      {
        title: 'Antes de Enviar',
        description: 'Define prioridad y canal correcto.',
        tips: [
          'Pregúntate: ¿Es realmente urgente?',
          'Elige canal según urgencia y formalidad',
          'Revisa ortografía y claridad',
          'Incluye contexto suficiente'
        ]
      }
    ],
    tools: [
      {
        icon: '🏷️',
        name: 'Guía de Comunicación',
        description: 'Canales, SLAs y templates de mensajes',
        file: '/templates/guia-comunicacion.html'
      },
      {
        icon: '📝',
        name: 'Template de Notas',
        description: 'Formato para documentar comunicaciones',
        file: '/templates/notas-reunion.html'
      }
    ],
    realCases: [
      {
        title: 'Coordinación Académica - Comunicaciones a Docentes',
        area: 'Académico',
        situation: 'Emails importantes perdidos en bandeja de entrada sobrecargada.',
        application: 'Sistema de etiquetas obligatorio en asunto + colores en Outlook.',
        result: 'Tasa de respuesta subió de 45% a 92% en primera semana.'
      }
    ],
    quickRef: {
      dos: [
        'Usar [URGENTE] solo si necesita respuesta en 1 hora',
        'Usar [IMPORTANTE] para 24 horas',
        'Usar [FYI] para información sin acción',
        'Email para formal, Teams para rápido',
        'Asunto claro y específico'
      ],
      donts: [
        'Abusar de [URGENTE]',
        'Enviar sin etiqueta',
        'WhatsApp para temas formales',
        'Asumir que todos leen todo',
        'Escribir correos vagos'
      ]
    }
  },
  
  {
    id: 'valora',
    title: 'UNIACC Valora',
    icon: '🤝',
    tagline: 'Diversidad e inclusión',
    definition: 'Valorar activamente las diferentes perspectivas, experiencias y estilos de trabajo. Significa crear espacios donde todas las voces son escuchadas y respetadas equitativamente.',
    whyMatters: [
      {
        icon: '💡',
        title: 'Más Innovación',
        description: 'Equipos diversos generan 87% más ideas innovadoras que grupos homogéneos.'
      },
      {
        icon: '🎯',
        title: 'Mejores Decisiones',
        description: 'Decisiones con perspectivas diversas son 60% más efectivas.'
      },
      {
        icon: '🤝',
        title: 'Mayor Engagement',
        description: 'Equipos inclusivos tienen 2.3x más compromiso y retención.'
      }
    ],
    examples: [
      {
        type: 'good',
        situation: 'Brainstorming de Proyecto Nuevo',
        action: 'El líder usa rondas donde cada persona comparte sin interrupciones, valora públicamente cada aporte.',
        result: 'Ideas de junior y senior tienen igual consideración, emergen soluciones innovadoras.'
      },
      {
        type: 'bad',
        situation: 'Reunión de Equipo',
        action: 'Solo los más senior hablan, otros son interrumpidos o ignorados.',
        result: 'Se pierden perspectivas valiosas, equipo junior se desconecta.'
      }
    ],
    howToApply: [
      {
        title: 'En Reuniones',
        description: 'Asegura participación equitativa.',
        tips: [
          'Usa rondas para dar voz a todos',
          'Protege a quienes son interrumpidos',
          'Valora explícitamente aportes diversos',
          'Pregunta "¿Qué opinas tú?" a los silenciosos'
        ]
      },
      {
        title: 'En Decisiones',
        description: 'Incluye perspectivas diversas.',
        tips: [
          'Busca activamente opiniones contrarias',
          'Considera impacto en diferentes grupos',
          'Da crédito a quien originó las ideas',
          'Explica decisiones considerando contextos diversos'
        ]
      }
    ],
    tools: [
      {
        icon: '📊',
        name: 'Matriz de Inclusión',
        description: 'Evalúa y mejora la inclusión del equipo',
        file: '/templates/matriz-inclusion.html'
      },
      {
        icon: '📝',
        name: 'Template de Notas',
        description: 'Documenta perspectivas diversas',
        file: '/templates/notas-reunion.html'
      }
    ],
    realCases: [
      {
        title: 'Escuela de Negocios - Comité Curricular',
        area: 'Académico',
        situation: 'Decisiones dominadas por profesores senior, perspectivas junior ignoradas.',
        application: 'Sistema de votación anónima + rondas obligatorias de opinión.',
        result: 'Satisfacción del equipo subió 45%, currículo más innovador y relevante.'
      }
    ],
    quickRef: {
      dos: [
        'Dar voz a todos equitativamente',
        'Valorar públicamente aportes diversos',
        'Proteger a quienes son interrumpidos',
        'Buscar perspectivas diferentes',
        'Usar lenguaje inclusivo'
      ],
      donts: [
        'Permitir que pocos dominen conversación',
        'Ignorar aportes de juniors',
        'Usar lenguaje excluyente',
        'Tomar decisiones sin consultar',
        'Favorecer siempre las mismas voces'
      ]
    }
  },
  
  {
    id: 'resuelve',
    title: 'UNIACC Resuelve',
    icon: '🔧',
    tagline: 'Gestión constructiva de conflictos',
    definition: 'Abordar conflictos de manera directa, oportuna y constructiva. Significa hablar con la persona involucrada, no sobre ella, y buscar soluciones ganar-ganar.',
    whyMatters: [
      {
        icon: '⚡',
        title: 'Acción Rápida',
        description: 'Resolver conflictos temprano evita 89% de escalaciones posteriores.'
      },
      {
        icon: '🤝',
        title: 'Mejor Ambiente',
        description: 'Equipos con buena resolución tienen 3x más satisfacción laboral.'
      },
      {
        icon: '💰',
        title: 'Ahorro de Tiempo',
        description: 'Conflictos no resueltos consumen 42% del tiempo de managers.'
      }
    ],
    examples: [
      {
        type: 'good',
        situation: 'Desacuerdo sobre Prioridades de Proyecto',
        action: 'Luis agenda 1-1 con su colega, usa método "Yo siento... cuando... porque..."',
        result: 'Encuentran solución en 20 minutos, relación fortalecida.'
      },
      {
        type: 'bad',
        situation: 'Tensión con Compañero',
        action: 'Sofía evita a su colega, se queja con otros, el ambiente se deteriora.',
        result: 'Conflicto escala a RRHH después de 3 meses, equipo dividido.'
      }
    ],
    howToApply: [
      {
        title: 'Detectar Temprano',
        description: 'Identifica señales de conflicto.',
        tips: [
          'Nota cambios en comunicación o actitud',
          'Pregunta "¿Está todo bien?" proactivamente',
          'Aborda tensiones antes que escalen',
          'Crea cultura de conversaciones difíciles'
        ]
      },
      {
        title: 'Conversación Constructiva',
        description: 'Aborda el conflicto efectivamente.',
        tips: [
          'Habla CON la persona, no SOBRE ella',
          'Usa "Yo" no "Tú" (evita culpar)',
          'Escucha para entender, no para responder',
          'Busca soluciones ganar-ganar'
        ]
      }
    ],
    tools: [
      {
        icon: '🔄',
        name: 'Protocolo de Conflictos',
        description: 'Proceso de 5 pasos para resolver',
        file: '/templates/protocolo-conflictos.html'
      },
      {
        icon: '📝',
        name: 'Template de Notas',
        description: 'Documenta acuerdos de resolución',
        file: '/templates/notas-reunion.html'
      }
    ],
    realCases: [
      {
        title: 'Departamento de Marketing - Conflicto de Roles',
        area: 'Administrativo',
        situation: 'Dos coordinadores con responsabilidades solapadas, tensión creciente.',
        application: 'Mediación facilitada, clarificación de roles usando matriz RACI.',
        result: 'Colaboración mejoró 200%, proyectos entregados 40% más rápido.'
      }
    ],
    quickRef: {
      dos: [
        'Abordar conflictos temprano',
        'Hablar directamente con la persona',
        'Usar lenguaje "Yo siento..."',
        'Escuchar activamente',
        'Buscar soluciones ganar-ganar'
      ],
      donts: [
        'Evitar conversaciones difíciles',
        'Quejarse con terceros',
        'Culpar o atacar',
        'Escalar prematuramente',
        'Guardar rencores'
      ]
    }
  },
  
  {
    id: 'co-crea',
    title: 'UNIACC Co-crea',
    icon: '💡',
    tagline: 'Innovación colaborativa',
    definition: 'Crear soluciones innovadoras juntos mediante brainstorming estructurado, prototipado rápido y feedback iterativo. Significa "sí, y..." en lugar de "sí, pero..."',
    whyMatters: [
      {
        icon: '💡',
        title: 'Más Innovación',
        description: 'Co-creación genera 67% más ideas que trabajo individual.'
      },
      {
        icon: '⚡',
        title: 'Más Rápido',
        description: 'Prototipos colaborativos reducen 50% el tiempo de desarrollo.'
      },
      {
        icon: '🎯',
        title: 'Mejor Adopción',
        description: 'Soluciones co-creadas tienen 3x más adopción en la organización.'
      }
    ],
    examples: [
      {
        type: 'good',
        situation: 'Rediseño de Proceso Académico',
        action: 'Equipo hace brainstorming sin críticas primero, luego evalúa colaborativamente.',
        result: 'Emergen 3 soluciones viables, implementan prototipo en 2 semanas.'
      },
      {
        type: 'bad',
        situation: 'Nuevo Sistema Tecnológico',
        action: 'TI diseña solución sin consultar usuarios, presenta producto "terminado".',
        result: 'Usuarios rechazan el sistema, desarrollo completo desperdiciado.'
      }
    ],
    howToApply: [
      {
        title: 'Brainstorming Efectivo',
        description: 'Genera ideas sin limitaciones.',
        tips: [
          'Regla: No juzgar durante generación',
          'Cantidad sobre calidad inicialmente',
          'Construye sobre ideas de otros ("sí, y...")',
          'Ideas salvajes son bienvenidas'
        ]
      },
      {
        title: 'Prototipado Rápido',
        description: 'Prueba ideas rápidamente.',
        tips: [
          'Crea MVP (Mínimo Producto Viable)',
          'Prueba con usuarios reales temprano',
          'Itera basado en feedback',
          'Falla rápido, aprende rápido'
        ]
      }
    ],
    tools: [
      {
        icon: '💭',
        name: 'Plantilla de Brainstorming',
        description: 'Framework para sesiones creativas',
        file: '/templates/plantilla-brainstorming.html'
      },
      {
        icon: '📝',
        name: 'Template de Notas',
        description: 'Documenta ideas y decisiones',
        file: '/templates/notas-reunion.html'
      }
    ],
    realCases: [
      {
        title: 'Innovación Docente - Nuevo Modelo Híbrido',
        area: 'Académico',
        situation: 'Necesidad de crear modelo híbrido post-pandemia, resistencia al cambio.',
        application: 'Co-creación con docentes, estudiantes y administrativos. Prototipo 4 semanas.',
        result: 'Adopción 94%, modelo premiado a nivel nacional, satisfacción estudiantil +35%.'
      }
    ],
    quickRef: {
      dos: [
        'Brainstorming sin juzgar primero',
        'Decir "sí, y..." a las ideas',
        'Prototipar rápido y simple',
        'Iterar basado en feedback',
        'Celebrar experimentos fallidos'
      ],
      donts: [
        'Criticar durante generación de ideas',
        'Buscar perfección desde inicio',
        'Trabajar en silos',
        'Ignorar feedback de usuarios',
        'Casarse con primera idea'
      ]
    }
  },
  
  {
    id: 'reconoce',
    title: 'UNIACC Reconoce',
    icon: '🌟',
    tagline: 'Cultura de apreciación',
    definition: 'Reconocer contribuciones específicas y oportunas usando el modelo STAR (Situación, Tarea, Acción, Resultado). Significa dar feedback positivo públicamente y específicamente.',
    whyMatters: [
      {
        icon: '📈',
        title: 'Mayor Motivación',
        description: 'Reconocimiento regular aumenta 31% la productividad del equipo.'
      },
      {
        icon: '🤝',
        title: 'Más Retención',
        description: 'Empleados reconocidos tienen 63% menos probabilidad de renunciar.'
      },
      {
        icon: '💡',
        title: 'Mejor Comportamiento',
        description: 'Reconocer buenos comportamientos los multiplica 5x en el equipo.'
      }
    ],
    examples: [
      {
        type: 'good',
        situation: 'Proyecto Entregado Exitosamente',
        action: 'Manager usa STAR en reunión: "En [situación], cuando [tarea], hiciste [acción] logrando [resultado]"',
        result: 'El equipo se siente valorado, replica el comportamiento en futuros proyectos.'
      },
      {
        type: 'bad',
        situation: 'Excelente Trabajo de Ana',
        action: 'Manager dice solo "buen trabajo" en privado, sin especificar qué hizo bien.',
        result: 'Ana no sabe qué repetir, otros no aprenden del ejemplo.'
      }
    ],
    howToApply: [
      {
        title: 'Usar Modelo STAR',
        description: 'Estructura reconocimientos efectivos.',
        tips: [
          'Situación: Describe el contexto específico',
          'Tarea: Explica cuál era la responsabilidad',
          'Acción: Detalla qué hizo la persona',
          'Resultado: Menciona el impacto positivo'
        ]
      },
      {
        title: 'Timing y Visibilidad',
        description: 'Cuándo y cómo reconocer.',
        tips: [
          'Reconoce dentro de 24-48 horas',
          'Público para logros, privado para mejoras',
          'Específico, no genérico',
          'Vincula con valores organizacionales'
        ]
      }
    ],
    tools: [
      {
        icon: '⭐',
        name: 'Modelo STAR',
        description: 'Framework para reconocimientos efectivos',
        file: '/templates/modelo-star.html'
      },
      {
        icon: '📝',
        name: 'Template de Notas',
        description: 'Documenta reconocimientos del equipo',
        file: '/templates/notas-reunion.html'
      }
    ],
    realCases: [
      {
        title: 'Dirección de Personas - Programa de Reconocimiento',
        area: 'RRHH',
        situation: 'Baja moral del equipo, alta rotación, falta de reconocimiento sistemático.',
        application: 'Implementaron programa "STAR del Mes" con reconocimiento público y específico.',
        result: 'Satisfacción subió 48%, rotación bajó 35%, productividad aumentó 22%.'
      }
    ],
    quickRef: {
      dos: [
        'Usar modelo STAR siempre',
        'Reconocer dentro de 24-48 horas',
        'Ser específico en qué se hizo bien',
        'Hacer reconocimiento público cuando apropiado',
        'Vincular con valores UNIACC'
      ],
      donts: [
        'Reconocimientos vagos ("buen trabajo")',
        'Esperar evaluaciones anuales',
        'Reconocer solo resultados, ignorar esfuerzo',
        'Favorecer siempre a las mismas personas',
        'Olvidar reconocer logros de equipo'
      ]
    }
  }
]
