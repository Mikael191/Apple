'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Eye, Zap, Gauge, Smartphone, Menu, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass">
      <div className="text-xl font-bold tracking-tighter">X-PHONE</div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
        <a href="#hero" className="hover:text-white transition-colors">Overview</a>
        <a href="#performance" className="hover:text-white transition-colors">Performance</a>
        <a href="#vision" className="hover:text-white transition-colors">Vision</a>
        <a href="#specs" className="hover:text-white transition-colors">Specs</a>
      </div>
      <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
        Buy Now
      </button>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Beyond Reality.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          The smartphone that sees what you can't.
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-lg md:max-w-2xl h-[50vh] md:h-[70vh] mt-10"
      >
        <Image
          src="/image_2.png"
          alt="X-Phone Hero"
          fill
          style={{ objectFit: 'contain' }}
          className="drop-shadow-2xl"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

// Performance Section
const Performance = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section id="performance" ref={ref} className="relative min-h-screen flex flex-col items-center justify-center bg-[#111] overflow-hidden py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Neural Engine <br/>
            <span className="text-gray-500">de Próxima Geração.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 mb-8 max-w-md"
          >
            Processamento quântico no seu bolso. O chip A18 Pro redefine os limites da física com arquitetura de 3nm.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
              Saiba mais sobre a arquitetura <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div
          style={{ scale, opacity, rotateX: rotate }}
          className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full"
        >
           {/* Particle effects simulation with CSS */}
           <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />

           {/* Animated Particles */}
           {[...Array(8)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-1 bg-blue-300 rounded-full z-20"
               style={{
                 top: `${20 + Math.random() * 60}%`,
                 left: `${20 + Math.random() * 60}%`,
               }}
               animate={{
                 y: [0, -30, 0],
                 opacity: [0, 0.8, 0],
                 scale: [0, 1.5, 0]
               }}
               transition={{
                 duration: 3 + Math.random() * 2,
                 repeat: Infinity,
                 delay: Math.random() * 2,
                 ease: "easeInOut"
               }}
             />
           ))}

          <Image
            src="/image_1.png"
            alt="A18 Pro Chip"
            fill
            style={{ objectFit: 'contain' }}
            className="z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Vision Section
const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="vision" ref={ref} className="relative min-h-screen w-full flex items-end justify-center overflow-hidden bg-black pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image_4.png"
          alt="Eye"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        {/* Radial overlay to focus on iris */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)]" />
        {/* Bottom gradient to ensure text legibility */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />
      </div>

      {/* Scanner Effect */}
      {isInView && (
        <motion.div
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute left-0 right-0 h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] z-10 opacity-70"
        />
      )}

      <div className="relative z-20 text-center max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg tracking-tighter"
        >
          Segurança que <br /> reconhece sua alma.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-cyan-400 tracking-widest font-semibold uppercase"
        >
          Iris ID Pro
        </motion.p>
      </div>
    </section>
  );
};

// Features Section (Bento Grid)
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useSpring(0, { stiffness: 100, damping: 30 });
  const y = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 20); // Tilt amount
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX: y, rotateY: x }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-heavy rounded-3xl p-8 transform-style-3d cursor-pointer transition-colors duration-300 hover:bg-white/5 ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="specs" className="min-h-screen bg-[#050505] py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Projetado para o impossível.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
           {/* Centerpiece Image - acting as the visual anchor */}
           <div className="md:col-span-3 h-[400px] relative glass-heavy rounded-3xl overflow-hidden mb-6 group">
              <Image
                src="/image_3.png"
                alt="Features Abstract"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 backdrop-blur-sm p-4 rounded-xl">
                   Design Cristalino
                 </h3>
              </div>
           </div>

          {/* Feature Card 1 */}
          <TiltCard className="flex flex-col items-start justify-between h-[300px]">
            <div className="bg-blue-500/20 p-4 rounded-full mb-4">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Privacidade Total</h3>
              <p className="text-gray-400 text-sm">Seus dados são criptografados no nível do hardware. O que acontece no seu X-Phone, fica no seu X-Phone.</p>
            </div>
          </TiltCard>

          {/* Feature Card 2 */}
          <TiltCard className="flex flex-col items-start justify-between h-[300px]">
            <div className="bg-yellow-500/20 p-4 rounded-full mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Carregamento Flash</h3>
              <p className="text-gray-400 text-sm">0 a 100% em 12 minutos. A bateria de grafeno de nova geração nunca deixa você na mão.</p>
            </div>
          </TiltCard>

          {/* Feature Card 3 */}
          <TiltCard className="flex flex-col items-start justify-between h-[300px]">
            <div className="bg-purple-500/20 p-4 rounded-full mb-4">
              <Gauge className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Performance Ilimitada</h3>
              <p className="text-gray-400 text-sm">Sem throttling. Sem atrasos. Apenas velocidade pura para jogos e tarefas profissionais.</p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-900 text-gray-500 text-sm text-center">
      <div className="container mx-auto px-6">
        <p className="mb-4">Copyright © 2024 X-Phone Inc. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Sales Policy</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30">
      <Navbar />
      <Hero />
      <Performance />
      <Vision />
      <Features />
      <Footer />
    </main>
  );
}
