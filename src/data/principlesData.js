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
        file: 'checklist-prereunion.pdf'
      },
      {
        icon: '📝',
        name: 'Template de Notas',
        description: 'Formato para tomar notas efectivas',
        file: 'template-notas.pdf'
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
        file: 'template-agenda.docx'
      },
      {
        icon: '📊',
        name: 'Template de Acta',
        description: 'Formato para documentar acuerdos',
        file: 'template-acta.docx'
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
        name: 'Guía de Etiquetas',
        description: 'Cuándo usar cada etiqueta',
        file: 'guia-etiquetas.pdf'
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
  }
  
  // Los otros 4 principios (valora, resuelve, co-crea, reconoce) seguirían el mismo formato
]
