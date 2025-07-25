"use client";
import { Canvas } from '@react-three/fiber';
import { Model } from './Product';
import { useRef } from 'react';

const Annotation = ({ title, children, position }) => (
  <div className={`absolute ${position} w-[288px]`}>
    <div className="p-4 bg-black/60 border border-white/20 rounded-lg backdrop-blur-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-white text-[18px]">{title}</h3>
        <div className="h-4 w-px bg-yellow-400"></div>
      </div>
      <div className="text-[15px] text-gray-300 [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-4 [&_ul]:space-y-1 [&_li]:marker:text-yellow-400">
        {children}
      </div>
    </div>
  </div>
);

const LightingRig = () => {
  const keyLightRef = useRef();
  const fillLightRef = useRef();
  return (
    <>
     <directionalLight
        ref={keyLightRef} 
        position={[-2, 30, 5]}
        intensity={3.3}
        color="#FFFFFF"
      />
      <directionalLight
        ref={keyLightRef}
        position={[170, 27, 95]}
        intensity={3.3}
        color="#FFFFFF"
      />
      <directionalLight
        ref={fillLightRef}
        position={[-50, -40, -55]}
        intensity={1.2}
        color="#FFCC00"
      />
    </>
  );
};


export default function HeroSection() {
  return (
    <section className="w-full min-h-[147vh] relative">
      <Canvas style={{
    position: 'sticky',
    top: 0,
    width: '100%',
    height: '120vh',
  }} dpr={[1, 2]} camera={{ fov: 30, position: [0, 0, 8] }}>
        <ambientLight intensity={0.2} />
        <LightingRig />

        <Model 
           scale={[0.70, 0.60, 1.12]}
          rotation={[-12.1, 5.5, 0]} 
          position={[0, -0.8, 0]} 
        />
      </Canvas>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-24 w-full left-1/2 -translate-x-1/2 text-center">
            <p className="text-[11px] uppercase tracking-widest text-[#FFCC00] plus-jakarta-sans-text">The Future of On-Site AI Surveillance</p>
            <h1 className="text-6xl font-bold plus-jakarta-sans-text text-white mt-1 leading-none">MandlacX Edge <span className='plus-jakarta-sans-text-italic'>Processor</span></h1>
              <div className='glow-circle absolute right-[-53%] top-[-110%]'></div>
              <div className='glow-circle absolute left-0 top-[500%]'></div>

        </div>
        
        <Annotation title="MandlacX Edge Processor" position="top-[32%] left-[15%]">
            <ul><li>A multi-domain, first-generation AI-powered device designed for real-time threat detection.</li></ul>
        </Annotation>
        <Annotation title="Key Specifications" position="top-[27%] right-[15%]">
            <ul className="list-disc list-inside space-y-1"><li>USB 3.0 Support</li><li>16 GB RAM</li><li>A7 Cortex Processor</li><li>Three multi-axis surveillance lenses</li></ul>
        </Annotation>
        <Annotation title="Real-Time Threat Detection" position="bottom-[0%] left-[13%]">
            <p className="font-semibold text-gray-200 mb-1">Detects</p><ul className="list-disc list-inside space-y-1"><li>Intrusions</li><li>Firearms & Sharp Objects</li><li>Human Falls</li><li>Unusual or Aggressive Motion</li></ul>
        </Annotation>
        <Annotation title="On-Device Intelligence" position="bottom-[1%] right-[16%]">
            <ul><li>Engineered to deliver intelligent surveillance without relying on the cloud. It gives you control, speed, and reliability right where you need it.</li></ul>
        </Annotation>
      </div>
    </section>
  );
}