// Función para convertir la escala de beta (1-5) a valores de degradación (2.0-0.5)
export const convertBetaScale = (value) => {
  // Convierte escala 1-5 a 2.0-0.5 de manera lineal
  return 2.0 - (value - 1) * 0.375;
};

// Función para calcular la liberación de dopamina usando la ecuación D(t)=(αE₀/β)(1-e^(-βt))
export const calculateDopamine = (alpha, E0, beta, t) => {
  const result = (alpha * E0 / beta) * (1 - Math.exp(-beta * t));
  console.log(`Calculando D(${t}):`, { alpha, E0, beta, result });
  return result;
};

// Función para generar puntos para la gráfica
export const generateDataPoints = (alpha, E0, beta) => {
  console.log('Generando puntos con:', { alpha, E0, beta });
  const timePoints = Array.from({ length: 10 }, (_, i) => i + 1);
  return timePoints.map(t => ({
    t,
    D: calculateDopamine(alpha, E0, beta, t)
  }));
};

// Función para encontrar el tiempo en que se supera un umbral
export const findThresholdCrossingTime = (points, threshold = 15) => {
  const crossingPoint = points.find(point => point.D >= threshold);
  return crossingPoint ? crossingPoint.t : Infinity;
};

// Función para analizar la velocidad de activación
export const analyzeActivationSpeed = (crossingTime, maxTime) => {
  if (crossingTime < 2) {
    return 'rapid';
  } else if (crossingTime > maxTime - 1 || crossingTime === Infinity) {
    return 'slow';
  } else {
    return 'moderate';
  }
};

// Función para interpretar los resultados
export const interpretResults = (dataPoints) => {
  const maxD = Math.max(...dataPoints.map(point => point.D));
  
  // Determinar el estado basado en el valor máximo de D(t)
  let status;
  let message = '';
  
  if (maxD <= 5) {
    status = 'critical';
    message = 'La respuesta dopaminérgica es muy baja, lo que podría indicar una alta probabilidad de TDSH. La liberación de dopamina es mínima o su degradación es muy rápida, resultando en una respuesta sexual ausente o muy tenue.';
  } else if (maxD <= 15) {
    status = 'low';
    message = 'La respuesta dopaminérgica está por debajo del promedio, lo que podría ser un indicio de TDSH. Se observa una baja liberación o sensibilidad reducida, que puede manifestarse como dificultad para iniciar la fase de excitación sexual.';
  } else if (maxD <= 25) {
    status = 'normal';
    message = 'La respuesta dopaminérgica está en un rango normal, mostrando una activación adecuada y autorregulada. Este patrón sugiere una respuesta sexual funcional.';
  } else if (maxD <= 35) {
    status = 'high';
    message = 'La respuesta dopaminérgica es elevada, caracterizada por una excitación rápida o intensa. Si bien esto no es típico del TDSH, podría indicar hipersensibilidad a estímulos sexuales.';
  } else {
    status = 'very_high';
    message = 'La respuesta dopaminérgica es muy alta, con una acumulación dopaminérgica significativa. Esto sugiere una excitación muy rápida e intensa que, aunque no es típica del TDSH, podría indicar alguna forma de desregulación.';
  }

  // Calcular tasas de cambio
  const rateOfChange = dataPoints.map((point, i) => {
    if (i === 0) return null;
    return (point.D - dataPoints[i-1].D) / 1; // cambio por unidad de tiempo
  }).filter(rate => rate !== null);
  
  const avgRateOfChange = rateOfChange.reduce((a, b) => a + b, 0) / rateOfChange.length;

  return {
    status,
    message,
    maxValue: maxD,
    avgRateOfChange,
    peakTime: dataPoints.findIndex(point => point.D === maxD) + 1
  };
}; 