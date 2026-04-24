import { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Video, Rocket, BrainCircuit, LineChart } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Environment, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import Reveal, { RevealItem } from './Reveal';

// 3D Exploding Core Implementation
function ExplodingQuadrant({ index, position, explodedPosition, isExploded, title, desc, activePart, setActivePart }) {
  const meshRef = useRef();
  const vec = new THREE.Vector3();
  const isHovered = activePart === index;
  
  useFrame((state, delta) => {
    // Determine the position
    const targetPos = isExploded ? explodedPosition : position;
    meshRef.current.position.lerp(new THREE.Vector3(...targetPos), delta * 5);
    
    // Scale on hover
    const targetScale = (isExploded && isHovered) ? 1.03 : 1;
    meshRef.current.scale.lerp(vec.set(targetScale, targetScale, targetScale), delta * 5);
    
    // Slight separate rotation
    if (isExploded) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    } else {
      // Return to baseline rotation quickly
      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, 0, 4, delta);
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, 0, 4, delta);
    }
  });

  // Minimal aesthetic: Dark grey cube, white/red minimal glow on hover
  const glowColor = isHovered ? "#FF5357" : "#ffffff";
  const emissiveIntensity = isExploded && isHovered ? 0.3 : 0.05;

  return (
    <group>
      <mesh 
        ref={meshRef} 
        position={position}
        onPointerOver={(e) => { e.stopPropagation(); if(isExploded) setActivePart(index); }}
        onPointerOut={(e) => { e.stopPropagation(); setActivePart(null); }}
      >
         <boxGeometry args={[1, 1, 1]} />
         <meshStandardMaterial 
            color="#111111" 
            roughness={0.1} 
            metalness={0.9} 
            emissive={glowColor} 
            emissiveIntensity={emissiveIntensity} 
         />
         {/* Subtle wireframe glow edge */}
         <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
            <lineBasicMaterial color={isHovered ? "#FF5357" : "#333333"} linewidth={2} transparent opacity={isExploded ? 0.8 : 0.3} />
         </lineSegments>
      </mesh>
      
      {isExploded && (
        <Html position={explodedPosition} center distanceFactor={18} className={`pointer-events-none transition-all duration-500 ${isHovered ? 'opacity-100 scale-100 z-50' : 'opacity-40 scale-95 z-10'}`}>
          <div className="w-56 bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl pointer-events-auto group">
             <div className="flex items-center gap-3 mb-2">
               <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isHovered ? 'bg-primary shadow-[0_0_10px_rgba(255,83,87,1)]' : 'bg-white/20'}`}></div>
               <h4 className="text-white font-headline text-lg font-bold leading-tight uppercase tracking-wide text-[10px]">{title}</h4>
             </div>
             <p className="text-zinc-400 font-body text-xs leading-relaxed">{desc}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

function DarkCoreScene({ services }) {
  const [isExploded, setIsExploded] = useState(false);
  const [activePart, setActivePart] = useState(null);
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Clean, slow rotation for the entire group
    if (!isExploded) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.1;
    } else {
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, 0, 3, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, 0, 3, delta);
    }
  });

  // Base positions form a 2x2 cube matrix. Exploded positions expand outward cleanly along X/Y.
  const parts = useMemo(() => [
    { pos: [-0.55, 0.55, 0], exp: [-3.5, 2, 0], ...services[0] }, // Top-Left
    { pos: [0.55, 0.55, 0], exp: [3.5, 2, 0], ...services[1] },  // Top-Right
    { pos: [-0.55, -0.55, 0], exp: [-3.5, -2, 0], ...services[2] }, // Bottom-Left
    { pos: [0.55, -0.55, 0], exp: [3.5, -2, 0], ...services[3] }, // Bottom-Right
  ], [services]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#FF5357" />
      <Environment preset="city" />
      
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <group 
          onPointerOver={() => setIsExploded(true)} 
          onPointerOut={() => setIsExploded(false)}
        >
          {/* Hitbox bounding volume */}
          <mesh visible={false}>
            <boxGeometry args={[10, 8, 4]} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>

          <group ref={groupRef}>
            {parts.map((part, i) => (
              <ExplodingQuadrant 
                key={i}
                index={i}
                position={part.pos}
                explodedPosition={part.exp}
                isExploded={isExploded}
                title={part.title}
                desc={part.desc}
                activePart={activePart}
                setActivePart={setActivePart}
              />
            ))}
          </group>
        </group>
      </Float>
      
      {/* Very stark, subtle background atmosphere instead of massive sparkles */}
      <Sparkles count={30} scale={12} size={0.5} speed={0.2} opacity={0.06} color="#ffffff" />
    </>
  );
}

export default function Services() {
  const services = [
    {
      title: "High-Retention Editing",
      desc: "Psychologically engineered pacing utilizing pattern interrupts."
    },
    {
      title: "Viral Architecture",
      desc: "Systems engineered for the infinite scroll, maximizing algorithmic reach."
    },
    {
      title: "AI Ad Generation",
      desc: "Hyper-personalized structural testing using advanced generative models."
    },
    {
      title: "Content Strategy",
      desc: "Data-driven roadmaps to position your brand purely above competitors."
    }
  ];

  return (
    <section id="services" className="py-24 bg-transparent relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        
        <Reveal className="flex flex-col items-center text-center mb-12">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] font-bold text-primary mb-4">Core Competency</p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white text-center">
            Systematic Mechanics
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-body leading-relaxed mx-auto">
            Hover to inspect our structural pillars. We don't just edit; we engineer retention systems.
          </p>
        </Reveal>

        {/* 3D Exploding Core Area */}
        <Reveal delay={0.2} className="w-full h-[600px] relative mb-12 border border-white/5 rounded-3xl bg-black/20 backdrop-blur-sm overflow-hidden">
           <div className="absolute top-6 left-6 z-10 flex items-center gap-3 opacity-50">
             <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
             <span className="text-white text-[9px] font-body uppercase tracking-[0.2em]">Interactive Object • Standby</span>
           </div>
           
           <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
             <DarkCoreScene services={services} />
           </Canvas>
        </Reveal>

      </div>
    </section>
  );
}
