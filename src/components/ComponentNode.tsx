import React from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';

interface ComponentData {
  label: string;
  type: 'resistor' | 'capacitor' | 'inductor' | 'diode' | 'transistor' | 'ic' | 'timer' | 'switch' | 'battery' | 'ground';
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