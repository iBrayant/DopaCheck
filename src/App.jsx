import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import TestForm from './components/TestForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ResultGraph from './components/ResultGraph';
import { Brain } from 'lucide-react';
import { 
  generateDataPoints, 
  interpretResults
} from './utils/dopamineModel';

function App() {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (formData) => {
    const { alpha, E0, beta } = formData;
    const dataPoints = generateDataPoints(alpha, E0, beta);
    
    setResults({
      data: dataPoints,
      interpretation: interpretResults(dataPoints),
      simulationParams: formData
    });
  };

  const Logo = () => (
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-xl bg-primary-400/10">
        <Brain className="w-6 h-6 text-primary-400" />
      </div>
      <span className="text-xl font-bold font-orbitron bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
        DopaCheck
      </span>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={
          <div className="min-h-screen bg-dark-950">
            <nav className="border-b border-dark-800/50 mb-8 bg-dark-950/95 backdrop-blur-sm sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <Link 
                    to="/" 
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span className="font-medium">Volver al inicio</span>
                  </Link>
                  <Logo />
                </div>
              </div>
            </nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="relative">
                {!results ? (
                  <div className="relative">
                    {/* Imagen de fondo */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="fixed top-0 right-0 w-[45%] h-screen"
                    >
                      {/* Efectos de iluminación ambiental */}
                      <div className="absolute inset-0">
                        <div className="absolute -left-48 top-1/4 w-96 h-96 bg-primary-400/10 blur-[120px] rounded-full" />
                        <div className="absolute -right-32 bottom-1/4 w-96 h-96 bg-accent-400/10 blur-[120px] rounded-full" />
                      </div>

                      {/* Contenedor de la imagen */}
                      <div className="relative h-full w-full overflow-hidden">
                        <div className="absolute inset-0 bg-dark-950/30" />
                        <img
                          src="/images/form-person.png"
                          alt="Persona reflexiva"
                          className="h-full w-full object-cover object-center scale-110"
                        />
                        {/* Gradientes mejorados para integración con el fondo */}
                        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-transparent to-dark-950/90" />
                      </div>
                    </motion.div>

                    {/* Gradiente adicional para mejorar la transición */}
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-transparent pointer-events-none" />

                    {/* Contenido principal */}
                    <div className="relative z-10 pt-8">
                      <div className="max-w-3xl text-left mb-16">
                        <div className="relative">
                          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-8 leading-tight">
                            Simulador de Respuesta<br />
                            Dopaminérgica
                          </h1>
                          <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-transparent blur-2xl opacity-50" />
                        </div>
                        
                        <p className="text-lg text-neutral-300 leading-relaxed mt-6 max-w-2xl">
                          Este test ayuda a estimar la liberación de dopamina durante la fase de excitación sexual
                          y puede ayudar a identificar posibles indicadores del Trastorno del Deseo Sexual Hipoactivo (TDSH).
                        </p>
                      </div>

                      {/* Formulario */}
                      <div className="max-w-2xl backdrop-blur-sm bg-dark-950/30 rounded-2xl p-8 border border-white/5">
                        <TestForm onSubmit={handleFormSubmit} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <ResultGraph {...results} />
                )}
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
