/**
 * 
Quinceañera: Karla Nerylee 

Mis papás : 
Maria Cruz Salas Ramírez
Luis Gabriel Villa García

Mis abuelos: 
Ma. De Lourdes Ramirez Álvarez
Francisco Contreras Nery

Mis padrinos de XV :
Ma de Jesús Guerrero Estrada 
Juan Francisco Piedra Rodriguez

Fecha: 19 Diciembre 2025

Misa de acción de gracias: 6:00 PM 
parroquia santa cruz Chilapa nayarit mexico C.p. 63630

Recepción: 7:00 PM 
cancha deportiva al lado del jardín principal Chilapa nayarit mexico

Código vestimenta 
Formal

Regalos , no quiero que salga lo de transferencia , ni lo de opciones de regalo , que sea pues lo q le quieran llevar

Y la confirmación de asistencia si
 * 
 */

// Datos demo para el paquete básico de quinceañera
export const basicDemoData = {
  hero: {
    name: "Karla Nerylee",
    subtitle: "¡Mis XV años!",
    backgroundImage: "/images/quince4.jpeg"
  },
  
  event: {
    celebrant: "Karla Nerylee",
    parents: {
      father: "Luis Gabriel Villa García",
      mother: "Maria Cruz Salas Ramírez"
    },
    date: {
      full: "Viernes 19 de Diciembre 2025",
      day: "Viernes",
      date: "19 de Diciembre 2025"
    },
    ceremony: {
      time: "18:00 hrs.",
      venue: "Parroquia Santa Cruz",
      address: "Chilapa Nayarit Mexico C.p. 63630",
      type: "Misa de Acción de Gracias",
      ubiLink: "https://maps.app.goo.gl/NeinYfZTJN2jFztw8"
    },
    party: {
      time: "19:00 hrs.",
      venue: "Cancha Deportiva",
      address: "A un costado del jardín principal Chilapa Nayarit Mexico",
      type: "Recepción",
      ubiLink: "https://maps.app.goo.gl/6SZogMbhKszyPsr76"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "December 19, 2025 18:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente <No Niños>",
    subtitle: "Espero que no sea impedimento para que ustedes puedan asistir a mi fiesta.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "REGALO",
    message: "Mi mejor regalo es compartir contigo este gran día.",
    options: [
      
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu evento",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 