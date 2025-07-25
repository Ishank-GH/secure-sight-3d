"use client";
import HeroSection from './components/hero-section';
import FeatureGridSection from './components/feature-grid-section';

export default function ProductPage() {
  return (
    <div className="w-full bg-[#020202] h-full relative overflow-hidden">
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[1000px] h-[600px] bg-gradient-radial from-yellow-400/20 to-transparent blur-[150px] -z-10"
        aria-hidden="true"
      />
      
      <HeroSection />
      <FeatureGridSection />
    </div>
  );
}