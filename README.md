# Bizlenv Dashboard Template

Plantilla de interfaz moderna y responsiva para sistemas comerciales, diseñada para acelerar el desarrollo de aplicaciones empresariales. Este proyecto ofrece una estructura de UI/UX profesional lista para ser integrada con tu lógica de negocio y backend.

## 🚀 Características del Template

- **Diseño UI/UX Premium**: Estética limpia y moderna inspirada en aplicaciones líderes, con soporte nativo para modo oscuro/claro.
- **Layout Responsivo**: Estructura adaptable que funciona perfectamente en móviles, tablets y escritorio.
- **Componentes de Interfaz**:
  - **Dashboard**: Vistas pre-diseñadas para métricas, gráficas y tablas de datos.
  - **Punto de Venta (POS)**: Interfaz completa de caja con catálogo, carrito y modales de pago (lógica de UI implementada).
  - **Navegación Avanzada**: Sidebar colapsable con animaciones fluidas y menús anidados.
  - **Header Funcional**: Incluye selector de sucursales, notificaciones y menú de usuario.
- **Sistema de Diseño**: Configuración robusta de Tailwind CSS y variables CSS para fácil personalización de marca.

## 🛠️ Stack Tecnológico

- **Framework**: React + Vite
- **Estilos**: Tailwind CSS + CSS Variables
- **Iconos**: Lucide React
- **Routing**: React Router DOM

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd bizlenv-dashboard
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Ver el demo**
   ```bash
   pnpm dev
   ```

## 📂 Estructura

```
src/
├── components/      # Componentes UI reutilizables (Modales, Botones, etc.)
├── layout/          # Estructura base (Sidebar, Header)
├── pages/           # Vistas de ejemplo (Dashboard, POS, Productos)
└── main.css         # Definición del sistema de diseño
```

## 🎨 Personalización

Este template está construido para ser fácilmente adaptable. Puedes cambiar la paleta de colores principal editando las variables en `src/main.css` o la configuración en `tailwind.config.js`.

---
Template de UI creado para Bizlenv.
