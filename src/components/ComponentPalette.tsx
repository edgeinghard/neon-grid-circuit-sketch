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
      case 'resistor': 
        return (
          <svg width="20" height="12" viewBox="0 0 20 12" className="stroke-current fill-none stroke-1">
            <path d="M0 6 L4 6 L6 2 L8 10 L10 2 L12 10 L14 2 L16 6 L20 6" />
          </svg>
        );
      case 'potentiometer': 
        return (
          <svg width="20" height="14" viewBox="0 0 20 14" className="stroke-current fill-none stroke-1">
            <path d="M0 7 L4 7 L6 3 L8 11 L10 3 L12 11 L14 3 L16 7 L20 7" />
            <path d="M10 3 L10 0" />
            <polygon points="9,0 11,0 10,2" className="fill-current" />
          </svg>
        );
      case 'capacitor': 
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" className="stroke-current fill-none stroke-1">
            <path d="M0 6 L6 6" />
            <path d="M10 6 L16 6" />
            <path d="M6 2 L6 10" />
            <path d="M10 2 L10 10" />
          </svg>
        );
      case 'inductor': 
        return (
          <svg width="20" height="10" viewBox="0 0 20 10" className="stroke-current fill-none stroke-1">
            <path d="M0 5 L3 5" />
            <path d="M17 5 L20 5" />
            <path d="M3 5 A2 2 0 0 1 7 5 A2 2 0 0 1 11 5 A2 2 0 0 1 15 5 A2 2 0 0 1 17 5" />
          </svg>
        );
      case 'diode': 
        return (
          <svg width="16" height="10" viewBox="0 0 16 10" className="stroke-current fill-current stroke-1">
            <path d="M0 5 L6 5" className="fill-none" />
            <path d="M10 5 L16 5" className="fill-none" />
            <polygon points="6,2 10,5 6,8" />
            <path d="M10 2 L10 8" className="fill-none" />
          </svg>
        );
      case 'led': 
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" className="stroke-current fill-current stroke-1">
            <path d="M0 6 L6 6" className="fill-none" />
            <path d="M10 6 L16 6" className="fill-none" />
            <polygon points="6,3 10,6 6,9" />
            <path d="M10 3 L10 9" className="fill-none" />
            <path d="M8 1 L10 0 M10 2 L12 1" className="fill-none stroke-0.5" />
          </svg>
        );
      case 'photodiode': 
        return (
          <svg width="18" height="12" viewBox="0 0 18 12" className="stroke-current fill-current stroke-1">
            <path d="M0 6 L6 6" className="fill-none" />
            <path d="M10 6 L16 6" className="fill-none" />
            <polygon points="6,3 10,6 6,9" />
            <path d="M10 3 L10 9" className="fill-none" />
            <circle cx="8" cy="6" r="4" className="fill-none stroke-0.5" />
            <path d="M4 2 L6 4 M5 1 L7 3" className="fill-none stroke-0.5" />
          </svg>
        );
      case 'transistor': 
        return (
          <svg width="16" height="16" viewBox="0 0 16 16" className="stroke-current fill-none stroke-1">
            <circle cx="8" cy="8" r="6" />
            <path d="M2 8 L5 8" />
            <path d="M11 5 L14 2" />
            <path d="M11 11 L14 14" />
            <path d="M5 6 L5 10" />
            <path d="M5 7 L8 5" />
            <path d="M5 9 L8 11" />
          </svg>
        );
      case 'ic': 
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" className="stroke-current fill-none stroke-1">
            <rect x="2" y="2" width="12" height="8" />
            <circle cx="3" cy="3" r="0.5" className="fill-current" />
            <circle cx="13" cy="3" r="0.5" className="fill-current" />
            <circle cx="3" cy="9" r="0.5" className="fill-current" />
            <circle cx="13" cy="9" r="0.5" className="fill-current" />
          </svg>
        );
      case 'timer': 
        return (
          <svg width="16" height="12" viewBox="0 0 16 12" className="stroke-current fill-none stroke-1">
            <rect x="2" y="2" width="12" height="8" />
            <text x="8" y="7" textAnchor="middle" className="text-xs fill-current">555</text>
          </svg>
        );
      case 'switch': 
        return (
          <svg width="16" height="8" viewBox="0 0 16 8" className="stroke-current fill-none stroke-1">
            <path d="M0 4 L4 4" />
            <path d="M12 4 L16 4" />
            <circle cx="4" cy="4" r="1" className="fill-current" />
            <circle cx="12" cy="4" r="1" className="fill-current" />
            <path d="M5 4 L11 1" />
          </svg>
        );
      case 'battery': 
        return (
          <svg width="12" height="10" viewBox="0 0 12 10" className="stroke-current fill-none stroke-1">
            <path d="M0 5 L3 5" />
            <path d="M9 5 L12 5" />
            <path d="M3 2 L3 8" />
            <path d="M5 3 L5 7" />
            <path d="M7 2 L7 8" />
            <path d="M9 3 L9 7" />
          </svg>
        );
      case 'ground': 
        return (
          <svg width="10" height="10" viewBox="0 0 10 10" className="stroke-current fill-none stroke-1">
            <path d="M5 0 L5 5" />
            <path d="M1 5 L9 5" />
            <path d="M2 7 L8 7" />
            <path d="M3 9 L7 9" />
          </svg>
        );
      case 'thermistor': 
        return (
          <svg width="20" height="10" viewBox="0 0 20 10" className="stroke-current fill-none stroke-1">
            <path d="M0 5 L4 5 L6 2 L8 8 L10 2 L12 8 L14 2 L16 5 L20 5" />
            <text x="10" y="9" textAnchor="middle" className="text-xs fill-current">θ</text>
          </svg>
        );
      case 'microphone': 
        return (
          <svg width="10" height="12" viewBox="0 0 10 12" className="stroke-current fill-none stroke-1">
            <rect x="3" y="1" width="4" height="6" rx="2" />
            <path d="M1 6 A4 4 0 0 0 9 6" />
            <path d="M5 9 L5 11" />
            <path d="M3 11 L7 11" />
          </svg>
        );
      case 'speaker': 
        return (
          <svg width="14" height="12" viewBox="0 0 14 12" className="stroke-current fill-current stroke-1">
            <path d="M1 4 L1 8 L3 8 L7 10 L7 2 L3 4 Z" />
            <path d="M9 3 A3 3 0 0 1 9 9" className="fill-none" />
            <path d="M10 2 A5 5 0 0 1 10 10" className="fill-none" />
          </svg>
        );
      case 'buzzer': 
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" className="stroke-current fill-none stroke-1">
            <circle cx="6" cy="6" r="5" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="6" r="1" className="fill-current" />
          </svg>
        );
      case 'motor': 
        return (
          <svg width="12" height="12" viewBox="0 0 12 12" className="stroke-current fill-none stroke-1">
            <circle cx="6" cy="6" r="5" />
            <circle cx="6" cy="6" r="3" />
            <text x="6" y="8" textAnchor="middle" className="text-xs fill-current">M</text>
          </svg>
        );
      case 'relay': 
        return (
          <svg width="16" height="10" viewBox="0 0 16 10" className="stroke-current fill-none stroke-1">
            <rect x="2" y="2" width="12" height="6" />
            <path d="M4 3 A1 1 0 0 1 6 3 A1 1 0 0 1 8 3 A1 1 0 0 1 10 3" />
            <path d="M0 5 L2 5" />
            <path d="M14 5 L16 5" />
          </svg>
        );
      case 'antenna': 
        return (
          <svg width="10" height="14" viewBox="0 0 10 14" className="stroke-current fill-none stroke-1">
            <path d="M5 14 L5 8" />
            <path d="M5 8 L2 2" />
            <path d="M5 8 L8 2" />
            <path d="M5 8 L1 6" />
            <path d="M5 8 L9 6" />
            <circle cx="5" cy="8" r="1" className="fill-current" />
          </svg>
        );
      case 'crystal': 
        return (
          <svg width="12" height="8" viewBox="0 0 12 8" className="stroke-current fill-none stroke-1">
            <path d="M0 4 L2 4" />
            <path d="M10 4 L12 4" />
            <path d="M2 1 L2 7" />
            <path d="M10 1 L10 7" />
            <rect x="4" y="2" width="4" height="4" />
          </svg>
        );
      case 'fuse': 
        return (
          <svg width="16" height="8" viewBox="0 0 16 8" className="stroke-current fill-none stroke-1">
            <path d="M0 4 L3 4" />
            <path d="M13 4 L16 4" />
            <rect x="3" y="2" width="10" height="4" />
            <path d="M5 4 L11 4" />
          </svg>
        );
      default: return <span className="text-sm">⚙️</span>;
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