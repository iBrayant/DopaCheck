import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Heart, Zap } from 'lucide-react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
      >
        {/* Navbar */}
        <nav className="border-b border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Logo />
              <div className="flex space-x-8">
                <Link to="/" className="text-neutral-200 hover:text-primary-400 transition-colors">
                  Inicio
                </Link>
                <Link to="/simulador" className="text-neutral-200 hover:text-primary-400 transition-colors">
                  Simulador
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Conoce tu mente,</span>
              <br />
              comprende tu deseo
            </h1>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Este simulador educativo utiliza un modelo matemático para estimar la liberación de dopamina 
              durante la fase de excitación sexual, ayudándote a identificar posibles señales del 
              Trastorno del Deseo Sexual Hipoactivo (TDSH).
            </p>
            <Link 
              to="/simulador"
              className="inline-flex items-center button-primary text-lg px-8 py-4 rounded-full"
            >
              Empezar el test
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-400/10 text-primary-400 mb-6">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary-400 mb-4">
                ¿Qué es el TDSH?
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Trastorno caracterizado por una disminución persistente del deseo sexual que causa malestar personal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-400/10 text-primary-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary-400 mb-4">
                ¿Por qué modelar la dopamina?
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                La dopamina es clave en el deseo y la excitación. Modelarla ayuda a detectar alteraciones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-400/10 text-primary-400 mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold text-primary-400 mb-4">
                ¿Qué mide este test?
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Tres parámetros: eficiencia dopaminérgica (α), intensidad del estímulo (E₀), y degradación (β).
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-dark-800 mt-24 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-neutral-400 text-sm">
              © 2024 <span className="font-orbitron">DopaCheck</span>. Desarrollado con fines educativos.
            </p>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home; 