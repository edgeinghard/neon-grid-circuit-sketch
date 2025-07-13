import React from 'react';
import { Card } from '@/components/ui/card';

interface Component {
  id: string;
  label: string;
  type: 'resistor' | 'capacitor' | 'inductor' | 'diode' | 'transistor' | 'ic' | 'timer' | 'switch' | 'battery' | 'ground';
  category: 'passive' | 'active' | 'power' | 'logic';
}

const components: Component[] = [
  // Passive Components
  { id: 'resistor', label: 'Resistor', type: 'resistor', category: 'passive' },
  { id: 'capacitor', label: 'Capacitor', type: 'capacitor', category: 'passive' },
  { id: 'inductor', label: 'Inductor', type: 'inductor', category: 'passive' },
  
  // Active Components
  { id: 'diode', label: 'Diode', type: 'diode', category: 'active' },
  { id: 'transistor', label: 'Transistor', type: 'transistor', category: 'active' },
  { id: 'ic', label: 'IC', type: 'ic', category: 'active' },
  
  // Logic/Timer Components
  { id: 'timer', label: '555 Timer', type: 'timer', category: 'logic' },
  { id: 'switch', label: 'Switch', type: 'switch', category: 'logic' },
  
  // Power Components
  { id: 'battery', label: 'Battery', type: 'battery', category: 'power' },
  { id: 'ground', label: 'Ground', type: 'ground', category: 'power' },
];

interface ComponentPaletteProps {
  onSelectComponent: (component: Component) => void;
  selectedComponent: Component | null;
}

export function ComponentPalette({ onSelectComponent, selectedComponent }: ComponentPaletteProps) {
  const categories = {
    passive: { name: 'Passive', components: components.filter(c => c.category === 'passive') },
    active: { name: 'Active', components: components.filter(c => c.category === 'active') },
    logic: { name: 'Logic/Timers', components: components.filter(c => c.category === 'logic') },
    power: { name: 'Power', components: components.filter(c => c.category === 'power') },
  };

  const getComponentIcon = (type: Component['type']) => {
    switch (type) {
      case 'resistor':
        return '🔧';
      case 'capacitor':
        return '⚡';
      case 'inductor':
        return '🌀';
      case 'diode':
        return '🔺';
      case 'transistor':
        return '📡';
      case 'ic':
        return '🖥️';
      case 'timer':
        return '⏰';
      case 'switch':
        return '🔘';
      case 'battery':
        return '🔋';
      case 'ground':
        return '⚡';
      default:
        return '⚙️';
    }
  };

  return (
    <div className="w-64 h-full bg-card border-r border-border p-4 overflow-y-auto">
      <h2 className="text-lg font-bold text-neon-green mb-4">Components</h2>
      
      {Object.entries(categories).map(([key, category]) => (
        <div key={key} className="mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
            {category.name}
          </h3>
          <div className="space-y-2">
            {category.components.map((component) => (
              <Card
                key={component.id}
                className={`p-3 cursor-pointer transition-all duration-200 hover:shadow-[var(--shadow-neon)] border-component-border ${
                  selectedComponent?.id === component.id
                    ? 'border-neon-green bg-accent'
                    : 'hover:border-neon-green-dim'
                }`}
                onClick={() => onSelectComponent(component)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{getComponentIcon(component.type)}</span>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      {component.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {component.type}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}