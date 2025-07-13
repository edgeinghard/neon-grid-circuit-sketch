import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  addEdge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
  BackgroundVariant,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { ComponentNode } from './ComponentNode';
import { WireEdge } from './WireEdge';

const nodeTypes = {
  component: ComponentNode,
};

const edgeTypes = {
  wire: WireEdge,
};

interface CircuitCanvasProps {
  onAddComponent: (type: string, position: { x: number; y: number }) => void;
  nodes: Node[];
  onNodesChange: (nodes: Node[]) => void;
}

export function CircuitCanvas({ onAddComponent, nodes: externalNodes, onNodesChange: onExternalNodesChange }: CircuitCanvasProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(externalNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Connection) => {
      const edge: Edge = {
        ...params,
        id: `edge-${params.source}-${params.target}`,
        type: 'wire',
        style: { stroke: 'hsl(var(--wire-color))', strokeWidth: 2 },
      };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges],
  );

  // Sync external nodes with internal nodes
  useEffect(() => {
    setNodes(externalNodes);
  }, [externalNodes, setNodes]);

  // Notify parent of internal node changes
  useEffect(() => {
    onExternalNodesChange(nodes);
  }, [nodes, onExternalNodesChange]);

  const onCanvasClick = useCallback(
    (event: React.MouseEvent) => {
      const canvas = event.currentTarget.getBoundingClientRect();
      const position = {
        x: event.clientX - canvas.left - 100,
        y: event.clientY - canvas.top - 100,
      };
      onAddComponent('', position);
    },
    [onAddComponent],
  );

  return (
    <div className="flex-1 h-full bg-background relative circuit-canvas-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        attributionPosition="bottom-left"
        className="circuit-canvas"
        onClick={onCanvasClick}
        deleteKeyCode={["Backspace", "Delete"]}
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
        selectNodesOnDrag={false}
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        zoomOnDoubleClick={false}
      >
        <Background 
          variant={BackgroundVariant.Lines} 
          gap={20} 
          size={1}
          color="hsl(var(--grid-color))"
          style={{
            backgroundColor: 'hsl(var(--background))',
          }}
        />
        <Controls className="controls-neon" />
      </ReactFlow>
    </div>
  );
}