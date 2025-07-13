import React from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Component {
  id: string;
  label: string;
  type: 'resistor' | 'capacitor' | 'inductor' | 'diode' | 'transistor' | 'ic' | 'timer' | 'switch' | 'battery' | 'ground' | 'led' | 'speaker' | 'microphone' | 'motor' | 'relay' | 'fuse' | 'crystal' | 'potentiometer' | 'photodiode' | 'thermistor' | 'buzzer' | 'antenna';
  category: 'passive' | 'active' | 'power' | 'logic' | 'sensors' | 'output' | 'mechanical';
  description?: string;
}

const components: Component[] = [
  // Passive Components
  { id: 'resistor', label: 'Resistor', type: 'resistor', category: 'passive', description: 'Fixed value resistor' },
  { id: 'potentiometer', label: 'Potentiometer', type: 'potentiometer', category: 'passive', description: 'Variable resistor' },
  { id: 'capacitor', label: 'Capacitor', type: 'capacitor', category: 'passive', description: 'Energy storage element' },
  { id: 'inductor', label: 'Inductor', type: 'inductor', category: 'passive', description: 'Magnetic field storage' },
  { id: 'crystal', label: 'Crystal', type: 'crystal', category: 'passive', description: 'Frequency reference' },
  { id: 'fuse', label: 'Fuse', type: 'fuse', category: 'passive', description: 'Overcurrent protection' },
  
  // Active Components
  { id: 'diode', label: 'Diode', type: 'diode', category: 'active', description: 'One-way current flow' },
  { id: 'led', label: 'LED', type: 'led', category: 'active', description: 'Light emitting diode' },
  { id: 'photodiode', label: 'Photodiode', type: 'photodiode', category: 'active', description: 'Light sensitive diode' },
  { id: 'transistor', label: 'Transistor', type: 'transistor', category: 'active', description: 'Amplifier/switch' },
  { id: 'ic', label: 'IC', type: 'ic', category: 'active', description: 'Integrated circuit' },
  
  // Logic/Timer Components
  { id: 'timer', label: '555 Timer', type: 'timer', category: 'logic', description: 'Versatile timer IC' },
  { id: 'switch', label: 'Switch', type: 'switch', category: 'logic', description: 'Manual control' },
  
  // Power Components
  { id: 'battery', label: 'Battery', type: 'battery', category: 'power', description: 'DC power source' },
  { id: 'ground', label: 'Ground', type: 'ground', category: 'power', description: 'Reference point' },
  
  // Sensors
  { id: 'thermistor', label: 'Thermistor', type: 'thermistor', category: 'sensors', description: 'Temperature sensor' },
  { id: 'microphone', label: 'Microphone', type: 'microphone', category: 'sensors', description: 'Sound input' },
  
  // Output Components
  { id: 'speaker', label: 'Speaker', type: 'speaker', category: 'output', description: 'Sound output' },
  { id: 'buzzer', label: 'Buzzer', type: 'buzzer', category: 'output', description: 'Alert sound' },
  { id: 'motor', label: 'Motor', type: 'motor', category: 'output', description: 'Mechanical motion' },
  
  // Mechanical
  { id: 'relay', label: 'Relay', type: 'relay', category: 'mechanical', description: 'Electromagnetic switch' },
  { id: 'antenna', label: 'Antenna', type: 'antenna', category: 'mechanical', description: 'RF transmission/reception' },
];

interface ComponentPaletteProps {
  onSelectComponent: (component: Component) => void;
  selectedComponent: Component | null;
}

export function ComponentPalette({ onSelectComponent, selectedComponent }: ComponentPaletteProps) {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    passive: true,
    active: false,
    logic: false,
    power: false,
    sensors: false,
    output: false,
    mechanical: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const categories = {
    passive: { name: 'Passive Components', components: components.filter(c => c.category === 'passive') },
    active: { name: 'Active Components', components: components.filter(c => c.category === 'active') },
    logic: { name: 'Logic & Timers', components: components.filter(c => c.category === 'logic') },
    power: { name: 'Power & Reference', components: components.filter(c => c.category === 'power') },
    sensors: { name: 'Sensors', components: components.filter(c => c.category === 'sensors') },
    output: { name: 'Output Devices', components: components.filter(c => c.category === 'output') },
    mechanical: { name: 'Mechanical', components: components.filter(c => c.category === 'mechanical') },
  };

  const getComponentIcon = (type: Component['type']) => {
    switch (type) {
      case 'resistor': return '⚡';
      case 'potentiometer': return '🎛️';
      case 'capacitor': return '🔋';
      case 'inductor': return '🌀';
      case 'diode': return '🔺';
      case 'led': return '💡';
      case 'photodiode': return '🔆';
      case 'transistor': return '📡';
      case 'ic': return '🖥️';
      case 'timer': return '⏰';
      case 'switch': return '🔘';
      case 'battery': return '🔋';
      case 'ground': return '⚡';
      case 'thermistor': return '🌡️';
      case 'microphone': return '🎤';
      case 'speaker': return '🔊';
      case 'buzzer': return '🔔';
      case 'motor': return '⚙️';
      case 'relay': return '🔄';
      case 'antenna': return '📶';
      case 'crystal': return '💎';
      case 'fuse': return '🛡️';
      default: return '⚙️';
    }
  };

  const handleDragStart = (event: React.DragEvent, component: Component) => {
    event.dataTransfer.setData('application/json', JSON.stringify(component));
    event.dataTransfer.effectAllowed = 'copy';
    onSelectComponent(component);
  };
  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-neon-green">Circuit Components</h2>
          <p className="text-xs text-muted-foreground mt-1">Select a component and click on canvas to place</p>
        </div>
        
        {Object.entries(categories).map(([key, category]) => (
          <Collapsible key={key} open={openSections[key]} onOpenChange={() => toggleSection(key)}>
            <CollapsibleTrigger className="w-full">
              <SidebarGroupLabel className="text-sm font-semibold text-foreground uppercase tracking-wide flex items-center justify-between hover:text-neon-green transition-colors cursor-pointer">
                <span>{category.name}</span>
                {openSections[key] ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarGroupLabel>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent className="mt-2">
              <SidebarMenu>
                {category.components.map((component) => (
                  <SidebarMenuItem key={component.id}>
                    <SidebarMenuButton
                      onClick={() => onSelectComponent(component)}
                      draggable
                      onDragStart={(e) => handleDragStart(e, component)}
                      className={`w-full justify-start transition-all duration-200 hover:shadow-[var(--shadow-neon)] ${
                        selectedComponent?.id === component.id
                          ? 'border-neon-green bg-accent text-neon-green'
                          : 'hover:border-neon-green-dim hover:bg-accent/50'
                      } cursor-grab active:cursor-grabbing`}
                      asChild
                    >
                      <div className="p-3 border border-component-border rounded-lg">
                        <div className="flex items-start space-x-3">
                          <span className="text-lg shrink-0">{getComponentIcon(component.type)}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground truncate">
                              {component.label}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                              {component.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}