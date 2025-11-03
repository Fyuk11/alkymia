---
layout: landing.njk
title: Landing Demo Cliente
description: Esta es una landing de prueba para mostrar secciones dinámicas.
permalink: index.html
seo:
  canonical: https://startland.netlify.app
  og_title: Startland landing page
  og_description: Startland prueba de landing dinámica con 11ty y Netlify CMS
  og_image: /assets/images/placeholder.jpg
  twitter_title: Startland Landing Demo 
  twitter_description: Startland prueba de landing dinámica con 11ty y Netlify CMS
nav:
  - text: Inicio
    url: "#hero"
  - text: Beneficios
    url: "#benefits"
  - text: Nosotros
    url: "#about"
  - text: Contacto
    url: "#contact"
  - text: WhatsApp
    url: https://wa.me/5491121652703
    external: true
sections:

  - type: hero-alkymia
    title: "Alkymia: Transformamos Ideas en <span>Realidad Digital</span>"
    subtitle: "Soluciones de e-commerce y landing pages premium que generan resultados medibles y ROI garantizado."
    background: "/assets/images/hero-bg-dark.jpg"
    media: "/assets/images/about/googlesearch.webp"
    ctas:
      - text: "Iniciar Proyecto con Nosotros"
        url: "https://wa.me/549XXXXXXXXXX"


  - type: benefits
    title: "Por qué elegir Alkymia"
    subtitle: "Impulsamos tu negocio con soluciones digitales premium"
    items:
     - title: "Ventas online"
       text: "Tus productos disponibles 24/7 en una tienda profesional."
       icon: "/assets/icons/sales.svg"
     - title: "Landing pages que convierten"
       text: "Diseños claros y atractivos que generan más leads."
       icon: "/assets/icons/landing.svg"
     - title: "Fácil de gestionar"
       text: "Podés actualizar tu contenido sin complicaciones."
       icon: "/assets/icons/easy.svg"
     - title: "Soporte y acompañamiento"
       text: "Estamos siempre disponibles para ayudarte a crecer."
       icon: "/assets/icons/support.svg"


  - type: pain
    title: "¿Te sientes identificado con alguno de estos problemas?"
    subtitle: "No estás solo. Muchos emprendedores y marketers pasan por esto antes de encontrar una solución definitiva."
    cta_text: "Pero existe una forma más fácil de hacer las cosas."
    cta_button: "Quiero conocer la solución"
    cta_link: "#solution"
    points:
      - title: "Inviertes tiempo y dinero en una landing page que no convierte"
        description: "Diseños poco atractivos, mensajes confusos y una estructura que no guía al usuario hacia la acción."
      - title: "Tu tasa de conversión es más baja de lo que esperabas"
        description: "El tráfico llega, pero se va sin dejar sus datos o comprar tu producto. Es como llenar un balde con un agujero."
      - title: "Dependes de un desarrollador para cada pequeño cambio"
        description: "Cada vez que quieres actualizar un texto, un precio o una imagen, tienes que pedir favores, pagar caro y esperar días."
      - title: "No tienes claridad sobre qué está funcionando y qué no"
        description: "Te falta data y pruebas A/B para optimizar tu página y mejorar tus resultados de forma consistente."

  - type: steps
    title: Proceso claro y humano
    steps:
      - number: 1
        title: Escuchamos
        text: Entendemos tu público y tu propuesta.
      - number: 2
        title: Diseñamos
        text: Tu mensaje y estilo pensado para ellos.
      - number: 3
        title: Creamos
        text: Transformamos tu esencia en una experiencia digital única que habla por sí sola.
      - number: 4
        title: Entregamos
        text: Lista para usar, sin estrés ni complicaciones y te enseñamos a gestionarla fácilmente.


  - type: services
    title: "Nuestros Servicios"
    subtitle: "Transformamos tu negocio en digital"
    services:
      - title: "Landing Pages"
        description: "Creamos páginas atractivas y efectivas que venden desde el primer día."
        icon: "/assets/icons/landing.svg"
      - title: "E-commerce"
        description: "Tiendas online rápidas y optimizadas con planes según la cantidad de productos."
        icon: "/assets/icons/ecommerce.svg"
        plans:
         - name: "Start"
           details: "Ideal para pequeños catálogos"
           products: 15
         - name: "Pro"
           details: "Para crecer tu negocio con más productos"
           products: 111
         - name: "Premium"
           details: "Amplio catálogo y funcionalidades avanzadas"
           products: 300
         - name: "+500"
           details: "Para grandes tiendas y proyectos ambiciosos"
           products: 500


  - type: portfolio
    title: "Nuestro Trabajo"
    subtitle: "Algunos de los proyectos destacados que hemos creado para nuestros clientes"
    projects:
     - title: "Proyecto A"
       category: "Branding"
       image: "/assets/images/portfolio/proyecto-a.jpg"
     - title: "Proyecto B"
       category: "Diseño Web"
       image: "/assets/images/portfolio/proyecto-b.jpg"
     - title: "Proyecto C"
       category: "E-commerce"
       image: "/assets/images/portfolio/proyecto-c.jpg"
     - title: "Proyecto D"
       category: "App Móvil"
       image: "/assets/images/portfolio/proyecto-d.jpg"
     - title: "Proyecto E"
       category: "Estrategia Digital"
       image: "/assets/images/portfolio/proyecto-e.jpg"
     - title: "Proyecto F"
       category: "UI/UX"
       image: "/assets/images/portfolio/proyecto-f.jpg"


  - type: testimonials
    title: "Lo que dicen nuestros clientes"
    subtitle: "Historias de éxito y confianza"
    testimonials:
     - name: "María Pérez"
       role: "CEO - Startup X"
       avatar: "/assets/images/testimonials/maria.jpg"
       text: "Alkymia transformó nuestra idea en una landing increíble, rápida y fácil de gestionar."
     - name: "Juan Rodríguez"
       role: "Founder - Proyecto Y"
       avatar: "/assets/images/testimonials/juan.jpg"
       text: "Gracias al equipo de Alkymia, nuestra tienda online está vendiendo más que nunca."
     - name: "Lucía Gómez"
       role: "Marketing Manager"
       avatar: "/assets/images/testimonials/lucia.jpg"
       text: "Profesionales, claros y muy atentos. Recomiendo Alkymia para cualquier proyecto digital."



  - type: about
    badge: "Sobre nosotros"
    title: "Creamos experiencias digitales memorables"
    description: "Nuestro equipo combina diseño, tecnología y estrategia para dar vida a proyectos digitales que impactan. Creemos en el poder de las ideas y en la ejecución impecable."
    image: "/assets/images/about/about-placeholder.jpg"
    floating:
      number: "+50"
      label: "Proyectos entregados"
    benefits:
     - "Diseños modernos y funcionales"
     - "Desarrollo ágil y optimizado"
     - "Estrategias que generan resultados"
    cta:
     text: "Conversemos sobre tu proyecto"
     url: "#contact"


  - type: downloads
    title: "Recursos Digitales"
    subtitle: "Guías, PDFs y herramientas para tu camino alquímico"
    items:
      - title: "Guía de Introducción a la Alquimia"
        description: "Un PDF con fundamentos básicos."
        gumroad_url: "https://alkymia.gumroad.com/l/guia-alquimia"
        cta_text: "Comprar en Gumroad"

      - title: "Rituales Digitales"
        description: "Manual práctico con ejercicios."
        gumroad_url: "https://alkymia.gumroad.com/l/rituales"
        cta_text: "Comprar en Gumroad"

      - title: "Checklist para tu landing page"
        description: "Una lista rápida para que no te olvides de nada al lanzar."
        download_url: "/assets/pdfs/checklist-landing.pdf"
        cta_text: "Descargar gratis"

      - title: "Guía de primeros pasos en Tiendanube"
        description: "Aprende a montar tu tienda en menos de una semana."
        image: "/assets/images/resources/tiendanube-guide.png"
        gumroad_url: "https://alkymia.gumroad.com/l/primeros-pasos"
        cta_text: "Comprar ahora"

  - type: final-cta
    whatsapp_number: "5491123456789"
    cta_title: "¿Listo para tu proyecto digital?"
    cta_subtitle: "Transformemos tu idea en una experiencia única y profesional."
    cta_button_text: "Escribinos por WhatsApp"


  - type: section-divider
    invert: true
    gradient:
      - offset: 0%
        color: "#ff4a57"
        opacity: 0.6
      - offset: 100%
        color: "#ff8a72"
        opacity: 0.6


  - type: faqs
    title: Preguntas frecuentes
    items:
      - question: "¿Puedo editar mi landing yo mismo?"
        answer: "Sí. Con nuestro CMS podés actualizar textos, imágenes y secciones sin conocimientos técnicos."
      - question: "¿Cuánto tarda la entrega?"
        answer: "En promedio entre 3 y 5 días hábiles, con SEO básico incluido. Si necesitás urgencia, podemos agilizar el proceso."
      - question: "¿Se ve bien en celular?"
        answer: "Sí, todas las landings son 100% responsivas, adaptadas a cualquier dispositivo."
      - question: "¿La optimización SEO está incluida?"
        answer: "Sí, entregamos tu página lista para indexarse en Google y con métricas conectadas a Search Console."


  - type: cta-video
    title: Mostrá tu negocio como tus clientes lo esperan
    subtitle: Tu página ya está lista para atraer y enamorar visitantes.
    ctas:
      - text: Quiero mi página
        url: https://wa.me/5491121652703


  - type: footer
    text: "© 2025 Alkymia. Todos los derechos reservados."
    email: "contacto@alkymia.digital"
    links:
      - text: Inicio
        url: "#hero"
      - text: Beneficios
        url: "#benefits"
      - text: Nosotros
        url: "#about"
      - text: Portfolio
        url: "#portfolio"
      - text: Contacto
        url: "#final-cta"
    social:
      - type: instagram
        url: "https://instagram.com/alkymia"
      - type: whatsapp
        url: "https://wa.me/5491123456789"

---
