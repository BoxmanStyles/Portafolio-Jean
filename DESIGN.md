---
name: Synthetica Dark
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#d7ffc5'
  on-secondary: '#053900'
  secondary-container: '#2ff801'
  on-secondary-container: '#0f6d00'
  tertiary: '#fcf9f9'
  on-tertiary: '#303030'
  tertiary-container: '#e0dddc'
  on-tertiary-container: '#626161'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#79ff5b'
  secondary-fixed-dim: '#2ae500'
  on-secondary-fixed: '#022100'
  on-secondary-fixed-variant: '#095300'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1b1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

Este sistema de diseño está concebido para un portafolio de ingeniería de software que equilibra la precisión técnica con una estética refinada y minimalista. La personalidad de la marca es **autoritaria, moderna y tecnológica**, buscando evocar una respuesta de confianza y competencia técnica superior.

El estilo visual se basa en un **Minimalismo Tecnológico** con matices de **Glassmorphism** sutil. Se aleja de los adornos innecesarios para centrarse en la legibilidad del código y la jerarquía de los proyectos. La interfaz utiliza capas de profundidad tonal y acentos vibrantes para guiar la atención del usuario hacia los puntos de conversión y las métricas de rendimiento.

## Colors

La paleta se centra en un entorno de **Modo Oscuro Elegante** para reducir la fatiga visual y resaltar la sintaxis del código.

- **Fondo Primario (#121212):** Un grafito profundo que sirve como lienzo base.
- **Superficies (#1E1E1E):** Gris carbón ligeramente más claro para contenedores, tarjetas y elevaciones de capa.
- **Acento Cyan (#00F5FF):** Utilizado para llamadas a la acción (CTA) primarias, enlaces activos y estados de enfoque. Representa innovación.
- **Acento Verde Neón (#39FF14):** Reservado para indicadores de éxito, estados "online", barras de progreso y terminales. Representa ejecución y vitalidad técnica.
- **Texto:** Blanco puro para títulos y un gris suave (A0A0A0) para descripciones y metadatos, manteniendo un contraste accesible pero balanceado.

## Typography

El sistema utiliza una escala tipográfica dual para diferenciar el contenido narrativo de la información técnica.

- **Inter:** Se utiliza para toda la interfaz de usuario, encabezados y cuerpo de texto. Su diseño humanista pero geométrico garantiza claridad absoluta.
- **JetBrains Mono:** Se emplea exclusivamente para fragmentos de código, etiquetas de tecnología (tags), y micro-copy que requiera un carácter "ingenieril".

Los encabezados deben mantener un tracking (espaciado) ligeramente negativo para una apariencia más compacta y premium. El texto de cuerpo debe priorizar el espacio en blanco para facilitar la lectura de artículos técnicos largos.

## Layout & Spacing

El sistema se rige por una **rejilla fluida de 12 columnas** en escritorio y **4 columnas** en móvil. El ritmo vertical se basa en una unidad base de **8px**.

- **Desktop:** Margen lateral amplio (48px) para permitir que el contenido "respire".
- **Tablet:** Transición a márgenes de 32px con gutters de 20px.
- **Mobile:** Margen de 16px. Los elementos de ancho completo son preferibles para maximizar el espacio de lectura.

El espaciado entre secciones debe ser generoso (mínimo 80px en escritorio) para enfatizar el enfoque minimalista y evitar la saturación visual.

## Elevation & Depth

La jerarquía visual se establece mediante **Capas Tonales** y **Bordes Sutiles**, evitando sombras pesadas o realistas.

1. **Nivel 0 (Fondo):** `#121212`.
2. **Nivel 1 (Tarjetas/Contenedores):** `#1E1E1E` con un borde de 1px en `#2A2A2A` para definir el límite sin crear excesivo contraste.
3. **Nivel 2 (Modales/Popovers):** `#252525` con una sombra ambiental muy difusa: `0px 8px 24px rgba(0, 0, 0, 0.5)`.

Para elementos interactivos, se permite un efecto de **Glow** (resplandor) sutil utilizando el color primario (Cyan) con una opacidad del 10-15% para indicar estado activo o "hover".

## Shapes

El lenguaje de formas es **sobrio y preciso**. Se utiliza una redondez "Soft" (4px - 8px) para suavizar la interfaz tecnológica sin perder la estructura profesional.

- **Botones e Inputs:** Radio de 4px (`rounded-sm`).
- **Tarjetas de Proyecto:** Radio de 8px (`rounded-lg`).
- **Pills de Tecnología:** Radio de 12px o superior para contraste de formas.

Las líneas de los bordes deben ser siempre de 1px de grosor, manteniendo una estética de "plano técnico".

## Components

### Botones (Buttons)
- **Primario:** Fondo Cyan (#00F5FF), texto en negro (#121212) para máximo contraste. Sin bordes.
- **Secundario/Ghost:** Sin fondo, borde de 1px en Cyan, texto en Cyan. Efecto de fondo sutil (10% cyan) al pasar el cursor.

### Chips de Tecnología
- Fondo gris oscuro (#252525), texto mono (JetBrains Mono) en gris claro.
- Al hacer hover, el texto cambia al color del lenguaje de programación correspondiente (ej. Amarillo para JS, Azul para TS).

### Campos de Entrada (Input Fields)
- Fondo `#1E1E1E`, borde inferior de 2px en `#2A2A2A`.
- Al recibir el foco, el borde cambia a Cyan con un resplandor exterior mínimo.

### Tarjetas de Proyecto (Cards)
- Contenedor con borde sutil. La imagen del proyecto debe tener un filtro de saturación ligeramente bajo, que se normaliza al pasar el cursor.
- Los títulos dentro de la tarjeta usan `headline-sm`.

### Bloques de Código
- Fondo `#0D0D0D` con sintaxis resaltada en la paleta de acentos (Cyan, Verde, Magenta técnico).
- Esquinas redondeadas y una pequeña etiqueta con el nombre del lenguaje en la esquina superior derecha usando `label-caps`.