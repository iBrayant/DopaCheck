const Disclaimer = ({ className = '' }) => (
  <p className={`text-sm text-neutral-400 border border-white/10 rounded-xl p-4 ${className}`}>
    DopaCheck es una herramienta educativa y de investigación. No es un dispositivo médico ni
    ofrece diagnósticos: el resultado no reemplaza la valoración de un profesional de la salud.
    Si tienes inquietudes sobre tu salud sexual, consulta con un profesional calificado.
  </p>
);

export default Disclaimer;
