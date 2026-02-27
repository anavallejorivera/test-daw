# 📚 Test de examenes de DAW 

Aplicación interactiva de test con React + Tailwind CSS para estudiar las autoevaluaciones de las asignaturas Inglés | Programación | Ampliación de planificación de empresas.

## 🚀 Características

✨ **Exámenes completos** (Semestral + Unidades)
🎯 **Sistema de comprobación** con explicaciones detalladas
📊 **Resultados visuales** con estadísticas y porcentaje
🎨 **Diseño moderno** con Tailwind CSS
📱 **Responsive** - Funciona en móvil, tablet y desktop
🔄 **Navegación completa** - Anterior/Siguiente con estado persistente

## 📦 Instalación

### Requisitos previos
- Node.js 16+ instalado
- npm o yarn

### Pasos de instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

3. **Abrir en el navegador**
```
http://localhost:5173
```

## 🛠️ Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run preview` - Vista previa de la compilación

## 📁 Estructura del proyecto

exam-test-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── ExamTestApp.jsx          ← Tu componente principal
│   ├── index.css                ← Con directivas @tailwind
│   └── main.jsx                 ← Entrada de React
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js            ← IMPORTANTE
├── tailwind.config.js           ← IMPORTANTE
├── vite.config.js
└── .gitignore

## 🎨 Tecnologías utilizadas

- **React 18** - Biblioteca UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS 3** - Framework CSS de utilidades
- **Lucide React** - Iconos modernos
- **PostCSS** - Procesamiento de CSS

## 📖 Cómo usar la aplicación

1. **Selecciona un examen** en la pantalla principal
2. **Lee cada pregunta** y selecciona una respuesta (A, B, C, D)
3. **Haz clic en "Comprobar"** para ver si acertaste
4. **Lee la explicación** para entender la respuesta correcta
5. **Navega** con los botones Anterior/Siguiente
6. **Finaliza** y ve tus resultados con estadísticas

## 🎯 Características de los exámenes

### Exámenes disponibles:
- **Prueba Semestral** - 5 preguntas
- **Unidad 1: Características del Software** - 5 preguntas
- **Unidad 2: Entornos de Desarrollo (IDE)** - 3 preguntas
- **Unidad 3: Pruebas y Calidad** - 2 preguntas

### Sistema de evaluación:
- ✅ **Aprobado**: 50% o más de respuestas correctas
- ❌ **No aprobado**: Menos del 50%
- 📊 **Estadísticas detalladas**: Correctas, incorrectas y total

## 🔧 Personalización

### Agregar más preguntas

Edita el objeto `exams` en `ExamTestApp.jsx`:

```javascript
const exams = {
  nuevaUnidad: {
    name: "Unidad 4: Nuevo Tema",
    questions: [
      {
        q: "¿Pregunta nueva?",
        options: ["Opción A", "Opción B", "Opción C", "Opción D"],
        correct: 0,
        explanation: "Explicación detallada..."
      }
    ]
  }
}
```

### Cambiar colores

Modifica `tailwind.config.js` para personalizar la paleta:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4f46e5',
      // Agrega más colores...
    }
  }
}
```

## 📝 Notas de desarrollo

- Usa solo clases de Tailwind CSS (no CSS personalizado)
- Los estados se manejan con React Hooks
- La navegación persiste el estado de las respuestas
- Compatible con todos los navegadores modernos

## 🤝 Contribuir

¿Tienes ideas para mejorar la app? ¡Genial!

1. Añade más preguntas a los exámenes existentes
2. Crea nuevas unidades de estudio
3. Mejora el diseño visual
4. Optimiza el rendimiento

## 📄 Licencia

Este proyecto es de uso educativo libre.

## ✨ Créditos

Desarrollado usando React y Tailwind CSS

---

**¡Buena suerte estudiando! 📚🎓**
