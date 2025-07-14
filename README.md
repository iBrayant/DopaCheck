# DopaCheck

DopaCheck es una aplicación web moderna diseñada para analizar y visualizar la respuesta dopaminérgica durante la fase de excitación sexual. Esta herramienta educativa ayuda a identificar posibles indicadores del Trastorno del Deseo Sexual Hipoactivo (TDSH) mediante un modelo matemático avanzado.

## 🧠 ¿Qué es DopaCheck?

DopaCheck combina la neurociencia con la tecnología para ofrecer:
- Análisis personalizado de la respuesta dopaminérgica
- Visualización interactiva de resultados
- Interpretación detallada y recomendaciones
- Interfaz intuitiva y profesional

## 🚀 Características

- Evaluación mediante parámetros científicamente validados
- Visualización en tiempo real de la curva dopaminérgica
- Análisis detallado con interpretación automática
- Interfaz moderna y responsiva
- Implementación del modelo matemático D(t) = (αE₀/β)(1 - e^(-βt))

## 🛠️ Tecnologías Utilizadas

- React 18 + Vite
- Tailwind CSS
- Chart.js para visualizaciones
- Framer Motion para animaciones
- Diseño responsivo y accesible

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 🧮 Modelo Matemático

DopaCheck utiliza un modelo matemático sofisticado basado en la ecuación:

```
D(t) = (αE₀/β)(1 - e^(-βt))
```

Donde:
- α (alpha): Eficiencia del sistema dopaminérgico
- E₀: Intensidad del estímulo base
- β (beta): Tasa de regulación del sistema
- t: Tiempo transcurrido

## 📊 Interpretación de Resultados

El sistema analiza múltiples parámetros:

- **Estado General**:
  - Crítico: D(t) ≤ 5
  - Bajo: 5 < D(t) ≤ 15
  - Normal: 15 < D(t) ≤ 25
  - Alto: 25 < D(t) ≤ 35
  - Muy Alto: D(t) > 35

- **Velocidad de Activación**:
  - Rápida: < 2 minutos
  - Moderada: 2-8 minutos
  - Lenta: > 8 minutos

## 📱 Uso

1. Ingresa los parámetros solicitados en el formulario
2. Observa la generación en tiempo real de la curva dopaminérgica
3. Recibe un análisis detallado con interpretación personalizada
4. Visualiza los resultados en gráficas interactivas
5. Obtén recomendaciones basadas en tu perfil

## ⚖️ Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ⚠️ Descargo de Responsabilidad

DopaCheck es una herramienta educativa y de investigación. No está diseñada para proporcionar diagnósticos médicos. Si tienes preocupaciones sobre tu salud sexual, consulta con un profesional de la salud calificado.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar DopaCheck:

1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios
4. Commit (`git commit -m 'Add: Amazing Feature'`)
5. Push a la rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request
