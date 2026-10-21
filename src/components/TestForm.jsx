import { useState } from 'react';
import { convertBetaScale } from '../utils/dopamineModel';

const TestForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    alpha: 3,
    E0: 3,
    beta: 3,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const adjustedData = {
      ...formData,
      beta: convertBetaScale(formData.beta)
    };
    onSubmit(adjustedData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block mb-4">
            <span className="block text-lg font-medium mb-1">
              1. Cuando estás en una situación sexual, ¿con qué rapidez sientes excitación o deseo?
            </span>
            <span className="text-sm text-neutral-400">
              Este valor representa la eficiencia dopaminérgica (α)
            </span>
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              name="alpha"
              min="1"
              max="5"
              step="1"
              value={formData.alpha}
              onChange={handleChange}
              className="flex-1"
            />
            <span className="w-8 text-center">{formData.alpha}</span>
          </div>
          <div className="flex justify-between text-sm text-neutral-400 mt-1">
            <span>Nunca</span>
            <span>Muy rápido</span>
          </div>
        </div>

        <div>
          <label className="block mb-4">
            <span className="block text-lg font-medium mb-1">
              2. ¿Qué tanto te estimulan las caricias, imágenes sexuales o pensamientos eróticos?
            </span>
            <span className="text-sm text-neutral-400">
              Este valor representa la intensidad del estímulo (E₀)
            </span>
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              name="E0"
              min="1"
              max="5"
              step="1"
              value={formData.E0}
              onChange={handleChange}
              className="flex-1"
            />
            <span className="w-8 text-center">{formData.E0}</span>
          </div>
          <div className="flex justify-between text-sm text-neutral-400 mt-1">
            <span>Casi nada</span>
            <span>Mucho</span>
          </div>
        </div>

        <div>
          <label className="block mb-4">
            <span className="block text-lg font-medium mb-1">
              3. ¿Cuánto tiempo te dura la sensación de deseo/excitación antes de que se desvanezca?
            </span>
            <span className="text-sm text-neutral-400">
              Este valor representa la tasa de degradación (β)
            </span>
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              name="beta"
              min="1"
              max="5"
              step="1"
              value={formData.beta}
              onChange={handleChange}
              className="flex-1"
            />
            <span className="w-8 text-center">{formData.beta}</span>
          </div>
          <div className="flex justify-between text-sm text-neutral-400 mt-1">
            <span>Se va muy rápido</span>
            <span>Permanece mucho tiempo</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full button-primary py-4 rounded-xl"
      >
        Calcular Resultados
      </button>
    </form>
  );
};

export default TestForm; 