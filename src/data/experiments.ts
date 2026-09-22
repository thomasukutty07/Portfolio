import type { ExperimentItem } from '../types';

export const EXPERIMENTS: ExperimentItem[] = [
  {
    id: 'exp-01',
    num: 'LAB.01',
    title: 'Vintage Computing 3D Rig',
    type: 'WebGL & Three.js',
    description:
      'Interactive 3D model viewer and camera orbit controller examining retro hardware form factors, specular reflections, and ambient occlusion.',
    technologies: ['Three.js', 'React Three Fiber', 'WebGL', 'GLTF Loader'],
    highlight: 'Real-time GLTF rendering with custom orbit damping'
  },
  {
    id: 'exp-02',
    num: 'LAB.02',
    title: 'Church Management System',
    type: 'MERN Platform Architecture',
    description:
      'Administrative architecture managing community member rosters, family hierarchical mapping, demographic segmentation, and access controls.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'RBAC'],
    highlight: 'Hierarchical family entity graph modeling'
  },
  {
    id: 'exp-03',
    num: 'LAB.03',
    title: 'Real-Time Socket Streamer',
    type: 'Network Event Bus',
    description:
      'Low-latency bidirectional WebSocket experiment testing event broadcasts, room multiplexing, and reconnection resiliency.',
    technologies: ['Socket.IO', 'Node.js', 'Event Emitters'],
    highlight: '< 40ms payload broadcast across concurrent subscribers'
  },
  {
    id: 'exp-04',
    num: 'LAB.04',
    title: 'Kinetic Typography Engine',
    type: 'GSAP Motion Prototype',
    description:
      'Exploration of variable font weight interpolation, dynamic baseline snapping, and mouse-velocity driven skew physics.',
    technologies: ['GSAP', 'CSS Variable Fonts', 'Framer Motion'],
    highlight: 'Physics-based kinetic text responds to scroll velocity'
  }
];
