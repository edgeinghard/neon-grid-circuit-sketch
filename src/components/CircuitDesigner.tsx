import React, { useState, useCallback } from 'react';
import { Node } from '@xyflow/react';
import { CircuitCanvas } from './CircuitCanvas';
import { ComponentPalette } from './ComponentPalette';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trash2, Save, FolderOpen, Zap, Menu, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

interface Component {
  id: string;
  label: string;
  type: 'resistor' | 'capacitor' | 'inductor' | 'diode' | 'transistor' | 'ic' | 'timer' | 'switch' | 'battery' | 'ground' | 'led' | 'speaker' | 'microphone' | 'motor' | 'relay' | 'fuse' | 'crystal' | 'potentiometer' | 'photodiode' | 'thermistor' | 'buzzer' | 'antenna';
  category: 'passive' | 'active' | 'power' | 'logic' | 'sensors' | 'output' | 'mechanical';
  description?: string;
}

export function CircuitDesigner() {
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();

  const handleNodesChange = useCallback((newNodes: Node[]) => {
    setNodes(newNodes);
  }, []);

  const handleSelectComponent = useCallback((component: Component) => {
    setSelectedComponent(component);
    toast({
      title: "Component Selected",
      description: `${component.label} selected. Click on the canvas to place it.`,
    });
  }, [toast]);

  const handleAddComponent = useCallback((type: string, position: { x: number; y: number }) => {
    if (!selectedComponent) return;

    const newNode: Node = {
      id: `${selectedComponent.type}-${Date.now()}`,
      type: 'component',
      position,
      data: {
        label: selectedComponent.label,
        type: selectedComponent.type,
        value: selectedComponent.type === 'resistor' ? '1kΩ' : undefined,
      },
    };

    setNodes(prev => [...prev, newNode]);
    setSelectedComponent(null);
    
    toast({
      title: "Component Added",
      description: `${selectedComponent.label} added to circuit.`,
    });
  }, [selectedComponent, toast]);

  const handleCanvasDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const componentData = event.dataTransfer.getData('application/json');
    if (!componentData) return;

    try {
      const component = JSON.parse(componentData) as Component;
      const canvasRect = event.currentTarget.getBoundingClientRect();
      const position = {
        x: event.clientX - canvasRect.left - 50,
        y: event.clientY - canvasRect.top - 50,
      };

      const newNode: Node = {
        id: `${component.type}-${Date.now()}`,
        type: 'component',
        position,
        data: {
          label: component.label,
          type: component.type,
          value: component.type === 'resistor' ? '1kΩ' : undefined,
        },
      };

      setNodes(prev => [...prev, newNode]);
      
      toast({
        title: "Component Added",
        description: `${component.label} added to circuit.`,
      });
    } catch (error) {
      console.error('Error parsing dropped component:', error);
    }
  }, [toast]);

  const handleCanvasDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }, []);
  const handleClearCanvas = useCallback(() => {
    setNodes([]);
    toast({
      title: "Canvas Cleared",
      description: "All components have been removed.",
    });
  }, [toast]);

  const handleSaveCircuit = useCallback(() => {
    const circuitData = {
      nodes,
      timestamp: new Date().toISOString(),
    };
    
    // In a real app, you'd save to a backend or local storage
    console.log('Saving circuit:', circuitData);
    
    toast({
      title: "Circuit Saved",
      description: "Your circuit design has been saved.",
    });
  }, [nodes, toast]);

  return (
    <SidebarProvider>
      <div className="h-screen flex flex-col bg-background w-full">
        {/* Header */}
        <Card className="border-b border-border rounded-none">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger className="text-neon-green hover:text-neon-green-bright">
                <Menu className="w-5 h-5" />
              </SidebarTrigger>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-neon-green" />
                <h1 className="text-xl font-bold text-foreground">Circuit Designer</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleClearCanvas}>
                <Trash2 className="w-4 h-4 mr-2" />
                Clear
              </Button>
              <Button variant="outline" size="sm">
                <FolderOpen className="w-4 h-4 mr-2" />
                Open
              </Button>
              <Button variant="default" size="sm" onClick={handleSaveCircuit}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden w-full">
          <ComponentPalette 
            onSelectComponent={handleSelectComponent}
            selectedComponent={selectedComponent}
          />
          <main 
            className="flex-1"
            onDrop={handleCanvasDrop}
            onDragOver={handleCanvasDragOver}
          >
            <CircuitCanvas 
              onAddComponent={handleAddComponent}
              nodes={nodes}
              onNodesChange={handleNodesChange}
            />
          </main>
        </div>

        {/* Status Bar */}
        <Card className="border-t border-border rounded-none">
          <div className="flex items-center justify-between p-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <span>Components: {nodes.length}</span>
              {selectedComponent && (
                <span className="text-neon-green">
                  Selected: {selectedComponent.label}
                </span>
              )}
            </div>
            <div>
              Drag & drop components or click to select then place on canvas
            </div>
          </div>
        </Card>
      </div>
    </SidebarProvider>
  );
}