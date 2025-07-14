import { Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ResultGraph = ({ data, interpretation, simulationParams }) => {
  if (!data || !interpretation || !simulationParams) {
    return <div>Error: Datos no disponibles</div>;
  }

  const maxValue = Math.max(...data.map(point => point.D));
  const peakTime = data.find(point => point.D === maxValue)?.t || 0;

  const chartData = {
    labels: data.map(point => `t=${point.t}`),
    datasets: [
      {
        label: 'Nivel de Dopamina',
        data: data.map(point => point.D.toFixed(2)),
        borderColor: '#818cf8',
        backgroundColor: '#818cf820',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Curva de Respuesta Dopaminérgica',
        color: '#d4d4d8',
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: '#27272a'
        },
        ticks: {
          color: '#d4d4d8'
        }
      },
      x: {
        grid: {
          color: '#27272a'
        },
        ticks: {
          color: '#d4d4d8'
        }
      }
    }
  };

  const statusColors = {
    critical: 'border-red-600 bg-gradient-to-br from-red-600/10 to-transparent',
    low: 'border-red-400 bg-gradient-to-br from-red-400/10 to-transparent',
    normal: 'border-green-500 bg-gradient-to-br from-green-500/10 to-transparent',
    high: 'border-yellow-500 bg-gradient-to-br from-yellow-500/10 to-transparent',
    very_high: 'border-orange-500 bg-gradient-to-br from-orange-500/10 to-transparent'
  };

  const statusTextColors = {
    critical: 'text-red-600',
    low: 'text-red-400',
    normal: 'text-green-500',
    high: 'text-yellow-500',
    very_high: 'text-orange-500'
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'critical': return 'Muy Baja';
      case 'low': return 'Baja';
      case 'normal': return 'Normal';
      case 'high': return 'Alta';
      case 'very_high': return 'Muy Alta';
      default: return 'No determinado';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'critical':
      case 'low':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>
        );
      case 'normal':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'high':
      case 'very_high':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Resumen Principal - Ahora primero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`p-6 rounded-2xl border ${statusColors[interpretation.status]}`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-lg bg-opacity-10 ${statusTextColors[interpretation.status]}`}>
            {getStatusIcon(interpretation.status)}
          </div>
          <h2 className={`text-3xl font-bold ${statusTextColors[interpretation.status]}`}>
            {getStatusLabel(interpretation.status)}
          </h2>
        </div>
        <p className="text-neutral-300 text-xl leading-relaxed mb-4">
          {interpretation.message}
        </p>
      </motion.div>

      {/* Métricas Clave - Segundo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary-400/10">
              <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-200">Intensidad Máxima</h3>
          </div>
          <p className="text-2xl font-bold text-primary-400">{interpretation.maxValue.toFixed(2)}</p>
          <p className="text-sm text-neutral-400">Nivel máximo alcanzado</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-accent-400/10">
              <svg className="w-6 h-6 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-200">Tiempo de Respuesta</h3>
          </div>
          <p className="text-2xl font-bold text-accent-400">{interpretation.peakTime} min</p>
          <p className="text-sm text-neutral-400">Tiempo hasta respuesta máxima</p>
        </motion.div>
      </div>

      {/* Detalles de Activación - Tercero, ahora más específico */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card space-y-4"
      >
        <h3 className="text-xl font-semibold text-neutral-200">
          Análisis Detallado
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-neutral-400 mb-2">Características de la Respuesta</p>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                {interpretation.activationSpeed === 'rapid' ? 
                  'Respuesta inicial rápida, indicando buena sensibilidad' :
                  interpretation.activationSpeed === 'moderate' ?
                  'Respuesta inicial moderada, dentro de rangos normales' :
                  'Respuesta inicial lenta, podría indicar sensibilidad reducida'
                }
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-400"></span>
                {interpretation.maxValue > 25 ?
                  'Intensidad máxima por encima del promedio' :
                  interpretation.maxValue > 15 ?
                  'Intensidad máxima en rango normal' :
                  'Intensidad máxima por debajo del promedio'
                }
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                {interpretation.peakTime <= 3 ?
                  'Tiempo al máximo rápido, sugiere buena reactividad' :
                  interpretation.peakTime <= 6 ?
                  'Tiempo al máximo normal' :
                  'Tiempo al máximo prolongado, sugiere reactividad reducida'
                }
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-neutral-400 mb-2">Parámetros del Sistema</p>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center justify-between">
                <span>Eficiencia del Sistema (α):</span>
                <span className="font-medium text-primary-400">{simulationParams.alpha}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sensibilidad Base (E₀):</span>
                <span className="font-medium text-primary-400">{simulationParams.E0}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Tasa de Regulación (β):</span>
                <span className="font-medium text-primary-400">{simulationParams.beta.toFixed(3)}</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Gráfica - Ahora cuarto */}
      <div className="card">
        <h2 className="text-xl font-semibold text-primary-400 mb-6">Visualización de la Respuesta</h2>
        <div className="mb-8">
          <Line options={chartOptions} data={chartData} />
        </div>
      </div>

      {/* Tabla de valores - Ahora último */}
      <div className="card">
        <h2 className="text-xl font-semibold text-primary-400 mb-6">Datos Detallados</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-dark-800">
                <th className="py-3 px-4">Tiempo (min)</th>
                <th className="py-3 px-4">Nivel de Dopamina</th>
                <th className="py-3 px-4">Tasa de Cambio</th>
              </tr>
            </thead>
            <tbody>
              {data.map((point, index) => (
                <tr key={point.t} className="border-b border-dark-800/50 hover:bg-dark-800/30">
                  <td className="py-3 px-4">{point.t}</td>
                  <td className="py-3 px-4">{point.D.toFixed(3)}</td>
                  <td className="py-3 px-4">
                    {index === 0 ? '-' : ((point.D - data[index-1].D) / 1).toFixed(3)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Botón de nuevo test */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => window.location.reload()}
        className="w-full button-primary py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Realizar Nuevo Test
      </motion.button>
    </motion.div>
  );
};

export default ResultGraph; 