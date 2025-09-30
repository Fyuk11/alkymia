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
    title: "Alkymia: Transformamos Ideas en <span>Realidad</span>"
    subtitle: "Un enfoque sobrio, claro y orientado a resultados."
    background: "/assets/images/hero-alkymia.jpg"
    media: "/assets/mockup-hero.png"
    ctas:
      - text: "Hablá con nosotros en WhatsApp"
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
    title: "¿Tu negocio aún no vende online?"
    subtitle: "Muchos negocios pierden ventas por no tener presencia digital profesional"
    items:
      - title: "No tenés tienda online"
        text: "Tus clientes no pueden comprar tus productos fuera de tu local."
        icon: "/assets/icons/no-store.svg"
      - title: "Landing poco profesional"
        text: "Tus servicios no se muestran de manera atractiva ni clara."
        icon: "/assets/icons/bad-landing.svg"
      - title: "Difícil de actualizar"
        text: "Tu página es complicada de modificar y te hace perder tiempo."
        icon: "/assets/icons/hard-update.svg"



  - type: portfolio
    title: Nuestro trabajo
    subtitle: Algunos de los proyectos destacados que hemos creado para nuestros clientes.
    projects:
     - title: Proyecto A
       category: Branding
       image: /assets/images/portfolio/proyecto-a.jpg
     - title: Proyecto B
       category: Diseño Web
       image: /assets/images/portfolio/proyecto-b.jpg
     - title: Proyecto C
       category: E-commerce
       image: /assets/images/portfolio/proyecto-c.jpg
     - title: Proyecto D
       category: App Móvil
       image: /assets/images/portfolio/proyecto-d.jpg
     - title: Proyecto E
       category: Estrategia Digital
       image: /assets/images/portfolio/proyecto-e.jpg
     - title: Proyecto F
       category: UI/UX
       image: /assets/images/portfolio/proyecto-f.jpg


  - type: about
    badge: Sobre nosotros
    title: Creamos experiencias digitales memorables
    description: Nuestro equipo combina diseño, tecnología y estrategia para dar vida a proyectos digitales que impactan. Creemos en el poder de las ideas y en la ejecución impecable.
    image: /assets/images/about/about-placeholder.jpg
    floating:
      number: +50
      label: Proyectos entregados
    benefits:
      - Diseños modernos y funcionales
      - Desarrollo ágil y optimizado
      - Estrategias que generan resultados
    cta:
     text: Conversemos sobre tu proyecto
     url: "#contact"

  - type: pain
    title: "¿Te sientes identificado con alguno de estos problemas?"
    subtitle: "No estás solo. Muchos emprendedores y marketers pasan por esto antes de encontrar una solución definitiva."
    cta_text: "Pero existe una forma más fácil de hacer las cosas."
    cta_button: "Quiero conocer la solución"
    cta_link: "#solution" # Puede ser un anchor link a la siguiente sección o un link directo
    points:
    - title: "Inviertes tiempo y dinero en una landing page que no convierte"
      description: "Diseños poco atractivos, mensajes confusos y una estructura que no guía al usuario hacia la acción."
    - title: "Tu tasa de conversión es más baja de lo que esperabas"
      description: "El tráfico llega, pero se va sin dejar sus datos o comprar tu producto. Es como llenar un balde con un agujero."
    - title: "Dependes de un desarrollador para cada pequeño cambio"
      description: "Cada vez que quieres actualizar un texto, un precio o una imagen, tienes que pedir favores, pagar caro y esperar días."
    - title: "No tienes claridad sobre qué está funcionando y qué no"
      description: "Te falta data y pruebas A/B para optimizar tu página y mejorar tus resultados de forma consistente."

  - type: resources
    title: Recursos digitales
    subtitle: Guías prácticas para potenciar tu negocio online.
    items:
      - title: Guía de primeros pasos en Tiendanube
        description: Aprende a montar tu tienda en menos de una semana.
        image: /assets/images/resources/tiendanube-guide.png
        gumroad_url: https://alkymia.gumroad.com/l/primeros-pasos
        cta_text: Comprar ahora

      - title: Checklist para tu landing page
        description: Una lista rápida para que no te olvides de nada al lanzar.
        image: /assets/images/resources/checklist-landing.png
        download_url: /assets/pdfs/checklist-landing.pdf
        cta_text: Descargar gratis



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

  - type: section-divider
    invert: true
    gradient:
      - offset: 0%
        color: "#ff4a57"
        opacity: 0.6
      - offset: 100%
        color: "#ff8a72"
        opacity: 0.6


  - type: works
    title: "Nuestros Trabajos"
    subtitle: "Transformamos ideas en experiencias digitales"
    items:
      - title: "Landing Energía Escalar"
        description: "Sitio con animaciones y diseño minimalista."
        image: /assets/images/work1.jpg
      - title: "Academia Online"
        description: "Plataforma educativa con pagos integrados."
        image: /assets/images/work2.jpg



  - type: downloads
    title: "Recursos Descargables"
    subtitle: "Guías y herramientas para tu camino alquímico"
    files:
      - title: "Guía de Introducción a la Alquimia"
        description: "Un PDF con fundamentos básicos."
        url: "https://alkymia.gumroad.com/l/guia-alquimia" # Link Gumroad
      - title: "Rituales Digitales"
        description: "Manual práctico con ejercicios."
        url: "https://alkymia.gumroad.com/l/rituales"



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

  - type: contact
    title: Pedí tu landing hoy
    text: Completá el formulario y te contactamos para empezar cuanto antes.

  - type: footer
    text: © 2025 Landing Demo. Todos los derechos reservados.
    email: traduccioncreativadigital@gmail.com
    links:
      - text: Inicio
        url: "#hero"
      - text: Beneficios
        url: "#benefits"
      - text: Nosotros
        url: "#about"
      - text: Contacto
        url: "#contact"
    social:
      - type: instagram
        url: https://instagram.com/demo
      - type: whatsapp
        url: https://wa.me/5491121652703
---
