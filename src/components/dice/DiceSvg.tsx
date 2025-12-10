import type { DiceSides } from "@/interface/Die";

interface DiceIconProps {
  className?: string;
}

export const D2Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="12"
      fill="currentColor"
      opacity="0.9"
    />
    <circle cx="50" cy="35" r="8" fill="white" />
    <circle cx="50" cy="65" r="8" fill="white" />
  </svg>
);

export const D3Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="12"
      fill="currentColor"
      opacity="0.9"
    />
    <circle cx="30" cy="30" r="7" fill="white" />
    <circle cx="50" cy="50" r="7" fill="white" />
    <circle cx="70" cy="70" r="7" fill="white" />
  </svg>
);

export const D4Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="12"
      fill="currentColor"
      opacity="0.9"
    />
    <circle cx="30" cy="30" r="7" fill="white" />
    <circle cx="70" cy="30" r="7" fill="white" />
    <circle cx="30" cy="70" r="7" fill="white" />
    <circle cx="70" cy="70" r="7" fill="white" />
  </svg>
);

export const D6Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="12"
      fill="currentColor"
      opacity="0.9"
    />
    <circle cx="30" cy="25" r="6" fill="white" />
    <circle cx="30" cy="50" r="6" fill="white" />
    <circle cx="30" cy="75" r="6" fill="white" />
    <circle cx="70" cy="25" r="6" fill="white" />
    <circle cx="70" cy="50" r="6" fill="white" />
    <circle cx="70" cy="75" r="6" fill="white" />
  </svg>
);

export const D8Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <polygon
      points="50,10 90,50 50,90 10,50"
      fill="currentColor"
      opacity="0.9"
    />
    <text
      x="50"
      y="60"
      fontSize="40"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      8
    </text>
  </svg>
);

export const D10Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <polygon
      points="50,5 85,35 75,75 25,75 15,35"
      fill="currentColor"
      opacity="0.9"
    />
    <text
      x="50"
      y="60"
      fontSize="36"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      10
    </text>
  </svg>
);

export const D12Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <polygon
      points="50,8 75,20 85,45 75,70 50,82 25,70 15,45 25,20"
      fill="currentColor"
      opacity="0.9"
    />
    <text
      x="50"
      y="60"
      fontSize="34"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      12
    </text>
  </svg>
);

export const D20Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <polygon
      points="50,5 80,25 90,50 80,75 50,95 20,75 10,50 20,25"
      fill="currentColor"
      opacity="0.9"
    />
    <text
      x="50"
      y="60"
      fontSize="32"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      20
    </text>
  </svg>
);

export const D100Icon = ({ className = "" }: DiceIconProps) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="12"
      fill="currentColor"
      opacity="0.9"
    />
    <text
      x="50"
      y="60"
      fontSize="28"
      fontWeight="bold"
      fill="white"
      textAnchor="middle"
    >
      100
    </text>
  </svg>
);

// Función helper para obtener el ícono correcto según el tipo de dado
export const getDiceIcon = (sides: DiceSides): React.FC<DiceIconProps> => {
  const iconMap: Record<DiceSides, React.FC<DiceIconProps>> = {
    2: D2Icon,
    3: D3Icon,
    4: D4Icon,
    6: D6Icon,
    8: D8Icon,
    10: D10Icon,
    12: D12Icon,
    20: D20Icon,
    100: D100Icon,
  };
  return iconMap[sides] || D6Icon;
};
