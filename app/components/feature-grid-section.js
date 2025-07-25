"use client";
import Image from 'next/image';

import { Canvas } from '@react-three/fiber';
import { Model } from './Product';
import { useRef } from 'react';

const FeatureCard = ({ icon, title, children }) => (
    <div className="p-8 bg-black/50 border border-white/20 w-[365px] rounded-lg backdrop-blur-sm min-h-[250px]">
        <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center mb-6">
            <Image src={icon} alt={`${title} icon`} width={20} height={20} />
        </div>
        <div>
            <h3 className="font-bold text-white text-xl mb-3">{title}</h3>
            <p className="text-sm text-gray-200 leading-relaxed">{children}</p>
        </div>
    </div>
);

const LightingRig = () => {
  const keyLightRef = useRef();
  const fillLightRef = useRef();


  return (
    <>
      <directionalLight ref={keyLightRef} position={[-2, 30, 5]} intensity={3.1} color="#FFFFFF"/>
      <directionalLight ref={keyLightRef}  position={[170, 27, 95]} intensity={2.6} color="#FFFFFF"/>
      <directionalLight ref={keyLightRef}  position={[-270, 177, 495]} intensity={3.1} color="#FFFFFF"/>
      <directionalLight ref={fillLightRef} position={[-50, -40, 10]} intensity={2.2} color="#FFCC00" />
    </>
  );
};


export default function FeatureGridSection() {
    return (
        <section className="w-full relative flex flex-col justify-center items-center py-24 px-8 min-h-screen">
            <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full min-h-[130vh] bg-gradient-radial from-yellow-400/10 to-transparent blur-[150px] -z-10"
                aria-hidden="true"
            />
 <div className='glow-circle absolute right-[-50%] top-[13%]'></div>
 <div className='glow-circle absolute left-0 top-[70%]'></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px]">
                <Canvas dpr={[1, 2]} camera={{ fov: 35 }}>
                    <ambientLight intensity={0.3} />
                    <LightingRig />
                    <Model 
                       scale={[-0.80, 0.60, 1.20]}
                       rotation={[0.5, 0.6, 0]} 
                       position={[0, 0.4, 0]} 
                    />
                </Canvas>
            </div>
            
            <div className="w-full max-w-7xl mx-auto grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-8 items-start">
                <h2 className="col-start-1 plus-jakarta-sans-text row-start-1 text-5xl font-bold text-white leading-tight self-center">
                    <span className='plus-jakarta-sans-text-italic'>MandlacX Over</span> <br/>
                    <span className="">Cloud-Only Video Analytics</span>
                </h2>
                   

                <div className="col-start-2 row-start-1">
                    <FeatureCard icon="/icons/weapon-icon.svg" title="Bullet-Proof Weapon Detection">
                        MandlacX is trained to detect firearms, knives, and other sharp threats with precision—no internet required.
                    </FeatureCard>
                </div>
                <div className="col-start-3 row-start-1">
                    <FeatureCard icon="/icons/bandwidth-icon.svg" title="Bandwidth You Can Actually Afford">
                        No continuous streaming. No heavy uploads. Just efficient edge computing that saves your network.
                    </FeatureCard>
                </div>
                <div className="col-start-1 row-start-2">
                    <FeatureCard icon="/icons/privacy-icon.svg" title="Privacy by Design">
                        Your footage stays on-site. No cloud syncs, no external servers—just full control over your data.
                    </FeatureCard>
                </div>
                
                
                <div className="col-start-2 row-start-2 w-[365px] min-h-[250px]"></div>
                
                <div className="col-start-3 row-start-2">
                    <FeatureCard icon="/icons/ai-stack-icon.svg" title="Future-Proof AI Stack">
                        With modular AI models and local firmware updates, MandlacX is built to evolve with your needs.
                    </FeatureCard>
                </div>
                <div className="col-start-2 row-start-3 justify-self-center">
                    <FeatureCard icon="/icons/latency-icon.svg" title="Latency That Saves Seconds—and Lives">
                        Instant on-device processing means faster alerts and quicker interventions during critical moments.
                    </FeatureCard>
                </div>
                <div className="col-start-3 plus-jakarta-sans-text row-start-3 w-96 p-2  self-center justify-self-end">
                    <h3 className="text-[46px] font-bold text-white leading-tight">
                         <span className='plus-jakarta-sans-text-italic'>Built for Speed.</span><br/>Designed for <span className="">Action.</span>
                    </h3>
                </div>
            </div>
        </section>
    );
}