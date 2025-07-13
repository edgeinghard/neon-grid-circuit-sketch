import React, { useState, useCallback } from 'react';
import { Node } from '@xyflow/react';
import { CircuitCanvas } from './CircuitCanvas';
import { ComponentPalette } from './ComponentPalette';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trash2, Save, FolderOpen, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Component {
  id: string;
  label: string;
  type: 'resistor' | 'capacitor' | 'inductor' | 'diode' | 'transistor' | 'ic' | 'timer' | 'switch' | 'battery' | 'ground';
  category: 'passive' | 'active' | 'power' | 'logic';
}

export function CircuitDesigner() {
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);

  const handleNodesChange = useCallback((newNodes: Node[]) => {
    setNodes(newNodes);
  }, []);
  const { toast } = useToast();

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
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <Card className="border-b border-border rounded-none">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-neon-green" />
            <h1 className="text-xl font-bold text-foreground">Circuit Designer</h1>
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
      <div className="flex flex-1 overflow-hidden">
        <ComponentPalette 
          onSelectComponent={handleSelectComponent}
          selectedComponent={selectedComponent}
        />
        <CircuitCanvas 
          onAddComponent={handleAddComponent}
          nodes={nodes}
          onNodesChange={handleNodesChange}
        />
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
            Ready - Click components to select, then click canvas to place
          </div>
        </div>
      </Card>
    </div>
  );
}