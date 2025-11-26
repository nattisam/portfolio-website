'use client'

import { useCallback, useState, useEffect } from 'react'
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  Panel,
  NodeTypes,
  Edge as ReactFlowEdge,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { motion } from 'framer-motion'
import { projects, Project } from '@/lib/projects'

// Custom node component
function CustomNode({ data }: { data: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="px-6 py-4 bg-background-secondary/80 backdrop-blur-sm border border-border rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-accent/50 group"
      onClick={() => data.onClick?.(data)}
    >
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
            {data.label}
          </h3>
          <p className="text-xs text-foreground-muted">{data.category}</p>
        </div>
      </div>
    </motion.div>
  )
}

const nodeTypes: NodeTypes = {
  custom: CustomNode,
}

// Use imported project data

// Create initial nodes from project data
const createInitialNodes = (): Node[] => {
  return projects.map((project: Project) => ({
    id: project.id,
    type: 'custom',
    position: project.nodePosition,
    data: {
      ...project,
      onClick: (data: any) => {
        // This will be handled by the parent component
      },
    },
  }))
}

// Create initial edges
const createInitialEdges = (): Edge[] => {
  return [
    // Main project connections
    { id: 'e1-2', source: 'toye', target: 'alikohub', animated: true },
    { id: 'e2-3', source: 'alikohub', target: 'ssgi', animated: true },
    { id: 'e3-4', source: 'ssgi', target: 'guade-ai', animated: true },
    { id: 'e4-5', source: 'guade-ai', target: 'yipper', animated: true },
    { id: 'e5-6', source: 'yipper', target: 'testvalley-clone', animated: true },

    // Infrastructure connections
    { id: 'e6-7', source: 'testvalley-clone', target: 'devops', animated: true },
    { id: 'e7-8', source: 'devops', target: 'skills', animated: true },
    { id: 'e8-9', source: 'skills', target: 'career', animated: true },

    // Cross-connections for realism
    { id: 'e-cross1', source: 'toye', target: 'devops', animated: true, style: { stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e-cross2', source: 'alikohub', target: 'skills', animated: true, style: { stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e-cross3', source: 'guade-ai', target: 'devops', animated: true, style: { stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '5,5' } },
    { id: 'e-cross4', source: 'ssgi', target: 'career', animated: true, style: { stroke: '#6366f1', strokeWidth: 2, strokeDasharray: '5,5' } },
  ]
}

interface SystemMapProps {
  onNodeClick?: (nodeData: any) => void
}

export default function SystemMap({ onNodeClick }: SystemMapProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const initialNodes = createInitialNodes()
  const initialEdges = createInitialEdges()

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds: ReactFlowEdge[]) => addEdge(params, eds)),
    [setEdges]
  )

  // Update node click handlers
  const updatedNodes = nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      onClick: onNodeClick,
    },
  }))

  if (!mounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gradient mb-2">Initializing System Map</h2>
            <p className="text-foreground-muted">Loading interactive architecture...</p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={updatedNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        className="bg-background"
      >
        <Controls className="bg-background-secondary/80 border border-border" />
        <MiniMap
          className="bg-background-secondary/80 border border-border"
          nodeColor="#6366f1"
          maskColor="rgba(0, 0, 0, 0.2)"
        />
        <Background
          color="#374151"
          gap={20}
          size={1}
        />

        <Panel position="top-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="bg-background-secondary/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg"
          >
            <h1 className="text-2xl font-bold text-gradient mb-2">System Architecture</h1>
            <p className="text-sm text-foreground-muted mb-3">
              Interactive map of projects and technologies
            </p>
            <div className="flex items-center gap-4 text-xs text-foreground-muted">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Active</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 border border-accent rounded-full"></div>
                <span>Click to explore</span>
              </div>
            </div>
          </motion.div>
        </Panel>
      </ReactFlow>
    </div>
  )
}
