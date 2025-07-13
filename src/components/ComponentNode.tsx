import React from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

interface ComponentData {
  label: string;
  type: 'resistor' | 'capacitor' | 'inductor' | 'diode' | 'transistor' | 'ic' | 'timer' | 'switch' | 'battery' | 'ground' | 'led' | 'speaker' | 'microphone' | 'motor' | 'relay' | 'fuse' | 'crystal' | 'potentiometer' | 'photodiode' | 'thermistor' | 'buzzer' | 'antenna';
  value?: string;
}

export function ComponentNode({ data }: NodeProps) {
  const componentData = data as unknown as ComponentData;
  const getComponentSymbol = () => {
    switch (componentData.type) {
      case 'resistor':
        return (
          <div className="w-16 h-6 border-2 border-foreground bg-component-bg flex items-center justify-center text-xs">
            <div className="w-12 h-2 bg-foreground"></div>
          </div>
        );
      case 'potentiometer':
        return (
          <div className="w-16 h-8 border-2 border-foreground bg-component-bg flex items-center justify-center text-xs relative">
            <div className="w-12 h-2 bg-foreground"></div>
            <div className="absolute top-0 w-1 h-3 bg-foreground"></div>
          </div>
        );
      case 'capacitor':
        return (
          <div className="w-8 h-12 flex items-center justify-center bg-component-bg">
            <div className="w-1 h-8 bg-foreground mr-1"></div>
            <div className="w-1 h-8 bg-foreground"></div>
          </div>
        );
      case 'inductor':
        return (
          <div className="w-16 h-8 flex items-center justify-center bg-component-bg">
            <div className="w-12 h-4 border-2 border-foreground rounded-full"></div>
          </div>
        );
      case 'diode':
        return (
          <div className="w-12 h-8 flex items-center justify-center bg-component-bg">
            <div className="w-0 h-0 border-l-4 border-l-foreground border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
            <div className="w-1 h-6 bg-foreground ml-1"></div>
          </div>
        );
      case 'led':
        return (
          <div className="w-12 h-8 flex items-center justify-center bg-component-bg">
            <div className="w-0 h-0 border-l-4 border-l-neon-green border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
            <div className="w-1 h-6 bg-neon-green ml-1"></div>
          </div>
        );
      case 'photodiode':
        return (
          <div className="w-12 h-10 flex flex-col items-center justify-center bg-component-bg">
            <div className="flex items-center">
              <div className="w-0 h-0 border-l-3 border-l-foreground border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
              <div className="w-1 h-4 bg-foreground ml-1"></div>
            </div>
            <div className="text-xs">☀️</div>
          </div>
        );
      case 'transistor':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-component-bg border border-foreground rounded">
            <span className="text-xs font-bold">T</span>
          </div>
        );
      case 'ic':
        return (
          <div className="w-16 h-12 bg-component-bg border-2 border-foreground rounded flex items-center justify-center">
            <span className="text-xs font-bold">IC</span>
          </div>
        );
      case 'timer':
        return (
          <div className="w-16 h-12 bg-component-bg border-2 border-foreground rounded flex items-center justify-center">
            <span className="text-xs font-bold">555</span>
          </div>
        );
      case 'switch':
        return (
          <div className="w-12 h-6 flex items-center justify-center bg-component-bg">
            <div className="w-8 h-1 bg-foreground"></div>
            <div className="w-2 h-4 bg-foreground rotate-45 -ml-1"></div>
          </div>
        );
      case 'battery':
        return (
          <div className="w-12 h-8 flex items-center justify-center bg-component-bg">
            <div className="w-1 h-6 bg-foreground mr-1"></div>
            <div className="w-1 h-4 bg-foreground"></div>
          </div>
        );
      case 'ground':
        return (
          <div className="w-8 h-8 flex flex-col items-center justify-center bg-component-bg">
            <div className="w-1 h-4 bg-foreground"></div>
            <div className="w-6 h-1 bg-foreground"></div>
            <div className="w-4 h-1 bg-foreground mt-1"></div>
            <div className="w-2 h-1 bg-foreground mt-1"></div>
          </div>
        );
      case 'speaker':
        return (
          <div className="w-12 h-10 flex items-center justify-center bg-component-bg border border-foreground rounded">
            <span className="text-lg">🔊</span>
          </div>
        );
      case 'microphone':
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-component-bg border border-foreground rounded-full">
            <span className="text-sm">🎤</span>
          </div>
        );
      case 'motor':
        return (
          <div className="w-12 h-12 flex items-center justify-center bg-component-bg border-2 border-foreground rounded-full">
            <span className="text-xs font-bold">M</span>
          </div>
        );
      case 'relay':
        return (
          <div className="w-14 h-10 bg-component-bg border border-foreground rounded flex items-center justify-center">
            <span className="text-xs font-bold">RLY</span>
          </div>
        );
      case 'fuse':
        return (
          <div className="w-12 h-6 border border-foreground bg-component-bg flex items-center justify-center">
            <div className="w-8 h-1 bg-foreground"></div>
            <div className="absolute w-6 h-3 border border-foreground rounded"></div>
          </div>
        );
      case 'crystal':
        return (
          <div className="w-10 h-8 border-2 border-foreground bg-component-bg flex items-center justify-center">
            <span className="text-xs">⧫</span>
          </div>
        );
      case 'thermistor':
        return (
          <div className="w-14 h-8 border border-foreground bg-component-bg flex items-center justify-center text-xs">
            <span>🌡️</span>
          </div>
        );
      case 'buzzer':
        return (
          <div className="w-12 h-10 flex items-center justify-center bg-component-bg border border-foreground rounded">
            <span className="text-sm">🔔</span>
          </div>
        );
      case 'antenna':
        return (
          <div className="w-8 h-12 flex flex-col items-center justify-center bg-component-bg">
            <div className="w-1 h-8 bg-foreground"></div>
            <div className="flex">
              <div className="w-4 h-1 bg-foreground -rotate-45"></div>
              <div className="w-4 h-1 bg-foreground rotate-45"></div>
            </div>
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