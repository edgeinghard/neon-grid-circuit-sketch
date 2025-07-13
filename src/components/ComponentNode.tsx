import React from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

interface ComponentData {
  label: string;
  type: 'resistor' | 'capacitor' | 'inductor' | 'diode' | 'transistor' | 'ic' | 'timer' | 'switch' | 'battery' | 'ground' | 'led' | 'speaker' | 'microphone' | 'motor' | 'relay' | 'fuse' | 'crystal' | 'potentiometer' | 'photodiode' | 'thermistor' | 'buzzer' | 'antenna' | 'and' | 'or' | 'not' | 'nand' | 'nor' | 'xor' | 'xnor' | 'buffer';
  value?: string;
}

export function ComponentNode({ data }: NodeProps) {
  const componentData = data as unknown as ComponentData;
  const getComponentSymbol = () => {
    switch (componentData.type) {
      case 'resistor':
        return (
          <div className="w-16 h-8 flex items-center justify-center bg-component-bg">
            <svg width="48" height="16" viewBox="0 0 48 16" className="stroke-foreground fill-none stroke-2">
              <path d="M0 8 L8 8 L12 2 L16 14 L20 2 L24 14 L28 2 L32 14 L36 2 L40 8 L48 8" />
            </svg>
          </div>
        );
      case 'potentiometer':
        return (
          <div className="w-16 h-10 flex items-center justify-center bg-component-bg relative">
            <svg width="48" height="20" viewBox="0 0 48 20" className="stroke-foreground fill-none stroke-2">
              <path d="M0 10 L8 10 L12 4 L16 16 L20 4 L24 16 L28 4 L32 16 L36 4 L40 10 L48 10" />
              <path d="M24 4 L24 0" />
              <polygon points="22,0 26,0 24,3" className="fill-foreground" />
            </svg>
          </div>
        );
      case 'capacitor':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-component-bg">
            <svg width="32" height="24" viewBox="0 0 32 24" className="stroke-foreground fill-none stroke-2">
              <path d="M0 12 L12 12" />
              <path d="M20 12 L32 12" />
              <path d="M12 4 L12 20" />
              <path d="M20 4 L20 20" />
            </svg>
          </div>
        );
      case 'inductor':
        return (
          <div className="w-16 h-10 flex items-center justify-center bg-component-bg">
            <svg width="48" height="20" viewBox="0 0 48 20" className="stroke-foreground fill-none stroke-2">
              <path d="M0 10 L6 10" />
              <path d="M42 10 L48 10" />
              <path d="M6 10 A4 4 0 0 1 14 10 A4 4 0 0 1 22 10 A4 4 0 0 1 30 10 A4 4 0 0 1 38 10 A4 4 0 0 1 42 10" />
            </svg>
          </div>
        );
      case 'diode':
        return (
          <div className="w-14 h-10 flex items-center justify-center bg-component-bg">
            <svg width="40" height="24" viewBox="0 0 40 24" className="stroke-foreground fill-foreground stroke-2">
              <path d="M0 12 L16 12" className="fill-none" />
              <path d="M24 12 L40 12" className="fill-none" />
              <polygon points="16,6 24,12 16,18" />
              <path d="M24 6 L24 18" className="fill-none" />
            </svg>
          </div>
        );
      case 'led':
        return (
          <div className="w-14 h-12 flex items-center justify-center bg-component-bg">
            <svg width="40" height="28" viewBox="0 0 40 28" className="stroke-neon-green fill-neon-green stroke-2">
              <path d="M0 14 L16 14" className="fill-none" />
              <path d="M24 14 L40 14" className="fill-none" />
              <polygon points="16,8 24,14 16,20" />
              <path d="M24 8 L24 20" className="fill-none" />
              <path d="M20 4 L24 0 M26 6 L30 2" className="fill-none stroke-1" />
              <polygon points="22,0 24,0 23,2" className="stroke-1" />
              <polygon points="28,2 30,2 29,4" className="stroke-1" />
            </svg>
          </div>
        );
      case 'photodiode':
        return (
          <div className="w-14 h-12 flex items-center justify-center bg-component-bg">
            <svg width="40" height="28" viewBox="0 0 40 28" className="stroke-foreground fill-foreground stroke-2">
              <path d="M0 14 L16 14" className="fill-none" />
              <path d="M24 14 L40 14" className="fill-none" />
              <polygon points="16,8 24,14 16,20" />
              <path d="M24 8 L24 20" className="fill-none" />
              <circle cx="20" cy="14" r="8" className="fill-none stroke-1" />
              <path d="M12 6 L16 10 M14 4 L18 8" className="fill-none stroke-1" />
            </svg>
          </div>
        );
      case 'transistor':
        return (
          <div className="w-14 h-14 flex items-center justify-center bg-component-bg">
            <svg width="40" height="40" viewBox="0 0 40 40" className="stroke-foreground fill-none stroke-2">
              <circle cx="20" cy="20" r="12" />
              <path d="M8 20 L14 20" />
              <path d="M26 14 L32 8" />
              <path d="M26 26 L32 32" />
              <path d="M14 16 L14 24" />
              <path d="M14 18 L20 14" />
              <path d="M14 22 L20 26" />
              <polygon points="18,13 20,14 19,16" className="fill-foreground" />
            </svg>
          </div>
        );
      case 'ic':
        return (
          <div className="w-16 h-12 bg-component-bg border-2 border-foreground rounded flex items-center justify-center relative">
            <span className="text-xs font-bold">IC</span>
            <div className="absolute left-0 top-1 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute left-0 top-3 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute left-0 bottom-3 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute left-0 bottom-1 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute right-0 top-1 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute right-0 top-3 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute right-0 bottom-3 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute right-0 bottom-1 w-1 h-1 bg-foreground rounded-full"></div>
          </div>
        );
      case 'timer':
        return (
          <div className="w-16 h-12 bg-component-bg border-2 border-foreground rounded flex items-center justify-center relative">
            <span className="text-xs font-bold">555</span>
            <div className="absolute left-0 top-1 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute left-0 top-3 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute left-0 bottom-3 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute left-0 bottom-1 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute right-0 top-1 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute right-0 top-3 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute right-0 bottom-3 w-1 h-1 bg-foreground rounded-full"></div>
            <div className="absolute right-0 bottom-1 w-1 h-1 bg-foreground rounded-full"></div>
          </div>
        );
      case 'switch':
        return (
          <div className="w-14 h-8 flex items-center justify-center bg-component-bg">
            <svg width="40" height="20" viewBox="0 0 40 20" className="stroke-foreground fill-none stroke-2">
              <path d="M0 10 L12 10" />
              <path d="M28 10 L40 10" />
              <circle cx="12" cy="10" r="2" className="fill-foreground" />
              <circle cx="28" cy="10" r="2" className="fill-foreground" />
              <path d="M14 10 L26 4" />
            </svg>
          </div>
        );
      case 'battery':
        return (
          <div className="w-12 h-10 flex items-center justify-center bg-component-bg">
            <svg width="32" height="24" viewBox="0 0 32 24" className="stroke-foreground fill-none stroke-2">
              <path d="M0 12 L8 12" />
              <path d="M24 12 L32 12" />
              <path d="M8 6 L8 18" />
              <path d="M12 8 L12 16" />
              <path d="M16 6 L16 18" />
              <path d="M20 8 L20 16" />
              <path d="M24 6 L24 18" />
              <text x="4" y="4" className="text-xs fill-foreground">+</text>
              <text x="26" y="20" className="text-xs fill-foreground">-</text>
            </svg>
          </div>
        );
      case 'ground':
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-component-bg">
            <svg width="24" height="24" viewBox="0 0 24 24" className="stroke-foreground fill-none stroke-2">
              <path d="M12 0 L12 12" />
              <path d="M4 12 L20 12" />
              <path d="M6 16 L18 16" />
              <path d="M8 20 L16 20" />
            </svg>
          </div>
        );
      case 'speaker':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-component-bg">
            <svg width="32" height="32" viewBox="0 0 32 32" className="stroke-foreground fill-foreground stroke-2">
              <path d="M4 12 L4 20 L8 20 L16 24 L16 8 L8 12 Z" />
              <path d="M20 10 A6 6 0 0 1 20 22" className="fill-none" />
              <path d="M22 8 A10 10 0 0 1 22 24" className="fill-none" />
            </svg>
          </div>
        );
      case 'microphone':
        return (
          <div className="w-10 h-12 flex items-center justify-center bg-component-bg">
            <svg width="24" height="32" viewBox="0 0 24 32" className="stroke-foreground fill-none stroke-2">
              <rect x="8" y="4" width="8" height="12" rx="4" />
              <path d="M4 14 A8 8 0 0 0 20 14" />
              <path d="M12 22 L12 28" />
              <path d="M8 28 L16 28" />
            </svg>
          </div>
        );
      case 'motor':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-component-bg">
            <svg width="32" height="32" viewBox="0 0 32 32" className="stroke-foreground fill-none stroke-2">
              <circle cx="16" cy="16" r="12" />
              <circle cx="16" cy="16" r="8" />
              <path d="M16 4 L16 8" />
              <path d="M16 24 L16 28" />
              <path d="M4 16 L8 16" />
              <path d="M24 16 L28 16" />
              <text x="16" y="20" textAnchor="middle" className="text-xs fill-foreground font-bold">M</text>
            </svg>
          </div>
        );
      case 'relay':
        return (
          <div className="w-16 h-12 bg-component-bg border-2 border-foreground rounded flex items-center justify-center relative">
            <svg width="48" height="32" viewBox="0 0 48 32" className="stroke-foreground fill-none stroke-2">
              <rect x="4" y="8" width="40" height="16" />
              <path d="M12 12 A4 4 0 0 1 20 12 A4 4 0 0 1 28 12 A4 4 0 0 1 36 12" />
              <path d="M0 16 L4 16" />
              <path d="M44 16 L48 16" />
              <path d="M24 0 L24 8" />
              <path d="M24 24 L24 32" />
            </svg>
          </div>
        );
      case 'fuse':
        return (
          <div className="w-14 h-8 flex items-center justify-center bg-component-bg">
            <svg width="40" height="20" viewBox="0 0 40 20" className="stroke-foreground fill-none stroke-2">
              <path d="M0 10 L8 10" />
              <path d="M32 10 L40 10" />
              <rect x="8" y="6" width="24" height="8" />
              <path d="M12 10 L28 10" />
            </svg>
          </div>
        );
      case 'crystal':
        return (
          <div className="w-12 h-10 flex items-center justify-center bg-component-bg">
            <svg width="32" height="24" viewBox="0 0 32 24" className="stroke-foreground fill-none stroke-2">
              <path d="M0 12 L6 12" />
              <path d="M26 12 L32 12" />
              <path d="M6 6 L6 18" />
              <path d="M26 6 L26 18" />
              <rect x="10" y="8" width="12" height="8" />
            </svg>
          </div>
        );
      case 'thermistor':
        return (
          <div className="w-16 h-10 flex items-center justify-center bg-component-bg">
            <svg width="48" height="24" viewBox="0 0 48 24" className="stroke-foreground fill-none stroke-2">
              <path d="M0 12 L8 12 L12 6 L16 18 L20 6 L24 18 L28 6 L32 18 L36 6 L40 12 L48 12" />
              <path d="M24 0 L30 6 M30 0 L36 6" className="stroke-1" />
              <text x="24" y="20" className="text-xs fill-foreground">θ</text>
            </svg>
          </div>
        );
      case 'buzzer':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-component-bg">
            <svg width="32" height="32" viewBox="0 0 32 32" className="stroke-foreground fill-none stroke-2">
              <circle cx="16" cy="16" r="12" />
              <circle cx="16" cy="16" r="8" />
              <circle cx="16" cy="16" r="4" />
              <path d="M16 4 L16 8" />
              <path d="M16 24 L16 28" />
              <text x="16" y="20" textAnchor="middle" className="text-xs fill-foreground">♪</text>
            </svg>
          </div>
        );
      case 'antenna':
        return (
          <div className="w-10 h-14 flex items-center justify-center bg-component-bg">
            <svg width="24" height="40" viewBox="0 0 24 40" className="stroke-foreground fill-none stroke-2">
              <path d="M12 40 L12 20" />
              <path d="M12 20 L6 8" />
              <path d="M12 20 L18 8" />
              <path d="M12 20 L4 16" />
              <path d="M12 20 L20 16" />
              <circle cx="12" cy="20" r="2" className="fill-foreground" />
            </svg>
          </div>
        );
      // Logic Gates
      case 'and':
        return (
          <div className="w-20 h-14 flex items-center justify-center bg-component-bg">
            <svg width="60" height="40" viewBox="0 0 60 40" className="stroke-foreground fill-none stroke-2">
              <path d="M5 5 L25 5 A15 15 0 0 1 25 35 L5 35 Z" />
              <path d="M0 12 L5 12" />
              <path d="M0 28 L5 28" />
              <path d="M40 20 L60 20" />
            </svg>
          </div>
        );
      case 'or':
        return (
          <div className="w-20 h-14 flex items-center justify-center bg-component-bg">
            <svg width="60" height="40" viewBox="0 0 60 40" className="stroke-foreground fill-none stroke-2">
              <path d="M5 5 Q15 5 20 20 Q15 35 5 35 Q10 20 5 5" />
              <path d="M20 5 Q30 5 40 20 Q30 35 20 35" />
              <path d="M0 12 L8 12" />
              <path d="M0 28 L8 28" />
              <path d="M40 20 L60 20" />
            </svg>
          </div>
        );
      case 'not':
        return (
          <div className="w-18 h-12 flex items-center justify-center bg-component-bg">
            <svg width="54" height="36" viewBox="0 0 54 36" className="stroke-foreground fill-none stroke-2">
              <path d="M5 5 L5 31 L35 18 Z" />
              <circle cx="41" cy="18" r="4" />
              <path d="M0 18 L5 18" />
              <path d="M45 18 L54 18" />
            </svg>
          </div>
        );
      case 'nand':
        return (
          <div className="w-22 h-14 flex items-center justify-center bg-component-bg">
            <svg width="66" height="40" viewBox="0 0 66 40" className="stroke-foreground fill-none stroke-2">
              <path d="M5 5 L25 5 A15 15 0 0 1 25 35 L5 35 Z" />
              <circle cx="46" cy="20" r="4" />
              <path d="M0 12 L5 12" />
              <path d="M0 28 L5 28" />
              <path d="M50 20 L66 20" />
            </svg>
          </div>
        );
      case 'nor':
        return (
          <div className="w-22 h-14 flex items-center justify-center bg-component-bg">
            <svg width="66" height="40" viewBox="0 0 66 40" className="stroke-foreground fill-none stroke-2">
              <path d="M5 5 Q15 5 20 20 Q15 35 5 35 Q10 20 5 5" />
              <path d="M20 5 Q30 5 40 20 Q30 35 20 35" />
              <circle cx="46" cy="20" r="4" />
              <path d="M0 12 L8 12" />
              <path d="M0 28 L8 28" />
              <path d="M50 20 L66 20" />
            </svg>
          </div>
        );
      case 'xor':
        return (
          <div className="w-22 h-14 flex items-center justify-center bg-component-bg">
            <svg width="66" height="40" viewBox="0 0 66 40" className="stroke-foreground fill-none stroke-2">
              <path d="M2 5 Q6 20 2 35" />
              <path d="M8 5 Q18 5 23 20 Q18 35 8 35 Q13 20 8 5" />
              <path d="M23 5 Q33 5 43 20 Q33 35 23 35" />
              <path d="M0 12 L11 12" />
              <path d="M0 28 L11 28" />
              <path d="M43 20 L66 20" />
            </svg>
          </div>
        );
      case 'xnor':
        return (
          <div className="w-24 h-14 flex items-center justify-center bg-component-bg">
            <svg width="72" height="40" viewBox="0 0 72 40" className="stroke-foreground fill-none stroke-2">
              <path d="M2 5 Q6 20 2 35" />
              <path d="M8 5 Q18 5 23 20 Q18 35 8 35 Q13 20 8 5" />
              <path d="M23 5 Q33 5 43 20 Q33 35 23 35" />
              <circle cx="49" cy="20" r="4" />
              <path d="M0 12 L11 12" />
              <path d="M0 28 L11 28" />
              <path d="M53 20 L72 20" />
            </svg>
          </div>
        );
      case 'buffer':
        return (
          <div className="w-16 h-12 flex items-center justify-center bg-component-bg">
            <svg width="48" height="36" viewBox="0 0 48 36" className="stroke-foreground fill-none stroke-2">
              <path d="M5 5 L5 31 L35 18 Z" />
              <path d="M0 18 L5 18" />
              <path d="M35 18 L48 18" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-12 h-8 bg-component-bg border border-foreground rounded flex items-center justify-center">
            <span className="text-xs">{componentData.label}</span>
          </div>
        );
    }
  };

  return (
    <div className="component-node group hover:shadow-[var(--shadow-neon)] transition-all duration-200">
      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 !bg-neon-green border-0"
      />
      
      <div className="flex flex-col items-center">
        {getComponentSymbol()}
        <div className="text-xs mt-1 text-foreground font-medium">
          {componentData.label}
        </div>
        {componentData.value && (
          <div className="text-xs text-muted-foreground">
            {componentData.value}
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 !bg-neon-green border-0"
      />
    </div>
  );
}