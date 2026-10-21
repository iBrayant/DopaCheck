import { Brain } from 'lucide-react';

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

export default Logo;
