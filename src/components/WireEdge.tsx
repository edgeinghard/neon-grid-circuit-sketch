import React from 'react';
import { BaseEdge, getBezierPath, EdgeProps } from '@xyflow/react';

export function WireEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <BaseEdge 
      path={edgePath} 
      markerEnd={markerEnd} 
      style={{
        stroke: 'hsl(var(--wire-color))',
        strokeWidth: 2,
        filter: 'drop-shadow(0 0 2px hsl(var(--neon-green) / 0.3))',
        ...style,
      }} 
    />
  );
}