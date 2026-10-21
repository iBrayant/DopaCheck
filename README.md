# DopaCheck

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?logo=vercel&logoColor=white)
![Licencia](https://img.shields.io/badge/licencia-MIT-green)

Aplicación web educativa que implementa un **modelo de ecuaciones diferenciales** de la respuesta dopaminérgica durante la fase de excitación sexual. A partir de tres parámetros, calcula y grafica la curva de dopamina en el tiempo y la interpreta como posible indicador del Trastorno del Deseo Sexual Hipoactivo (TDSH).

> Proyecto académico asociado a un artículo en revisión en la revista Tecnura. Universidad de Cundinamarca.

<!-- TODO: captura o GIF de la app (guardar en docs/img/) -->
<!-- ![Demo](docs/img/demo.png) -->
<!-- TODO: enlace a la demo desplegada en Vercel -->

## Características

- **Modelo matemático implementado:** `D(t) = (α·E₀ / β) · (1 − e^(−βt))`.
- **Curva interactiva** de la respuesta dopaminérgica con Chart.js, más una tabla de datos detallados.
- **Interpretación automática** del resultado en cinco estados, con mensaje explicativo.
- **Métricas:** intensidad máxima, tiempo hasta alcanzar el umbral de respuesta normal (D = 15) y velocidad de activación.
- **Interfaz** oscura, responsiva y con animaciones (Framer Motion).
- **Lógica separada de la interfaz:** el modelo vive en `src/utils/dopamineModel.js`.

## El modelo

```
D(t) = (α · E₀ / β) · (1 − e^(−βt))
```

| Parámetro | Significado |
|---|---|
| `α` | Eficiencia del sistema dopaminérgico |
| `E₀` | Intensidad del estímulo base |
| `β` | Tasa de degradación/regulación del sistema (la escala 1–5 del formulario se convierte a 2.0–0.5) |
| `t` | Tiempo transcurrido (se evalúa de 0 a 10) |

Es la solución de una ecuación diferencial de primer orden: la dopamina se acumula con el estímulo y se degrada a una tasa proporcional, tendiendo a un valor de equilibrio `αE₀/β`.

### Interpretación del resultado

Se clasifica según el valor máximo alcanzado de `D(t)`:

| Estado | Rango |
|---|---|
| Muy baja | `D ≤ 5` |
| Baja | `5 < D ≤ 15` |
| Normal | `15 < D ≤ 25` |
| Alta | `25 < D ≤ 35` |
| Muy alta | `D > 35` |

## Stack

React 18 · Vite · Tailwind CSS · Chart.js (react-chartjs-2) · Framer Motion · React Router · Headless UI · Lucide

## Estructura

```
src/
├── pages/Home.jsx               -> página principal
├── components/TestForm.jsx      -> formulario de parámetros
├── components/ResultGraph.jsx   -> gráfica, métricas e interpretación
└── utils/dopamineModel.js       -> modelo matemático e interpretación
```

## Cómo correrlo

```bash
git clone git@github.com:iBrayant/DopaCheck.git
cd DopaCheck
npm install
npm run dev
```

Para compilar: `npm run build` (la vista previa con `npm run preview`). El `vercel.json` incluido resuelve el enrutamiento de la SPA al desplegar en Vercel.

## Aviso

DopaCheck es una herramienta **educativa y de investigación**. No es un dispositivo médico ni ofrece diagnósticos. Si tienes inquietudes sobre tu salud sexual, consulta con un profesional de la salud calificado.

## Autor

**Brayant Vásquez Gómez** · [GitHub](https://github.com/iBrayant) · [LinkedIn](https://www.linkedin.com/in/brayant-v%C3%A1squez-g%C3%B3mez-4b483a1a1)

Licencia [MIT](LICENSE).
