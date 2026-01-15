'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Eye, Zap, Gauge, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Lenis from 'lenis';

// Smooth Scroll Wrapper
const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

// Navbar Component
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass transition-all duration-500 ease-in-out">
      <div className="text-xl font-bold tracking-tighter mix-blend-difference">X-PHONE</div>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
        <a href="#hero" className="hover:text-white transition-colors duration-300">Overview</a>
        <a href="#performance" className="hover:text-white transition-colors duration-300">Performance</a>
        <a href="#vision" className="hover:text-white transition-colors duration-300">Vision</a>
        <a href="#specs" className="hover:text-white transition-colors duration-300">Specs</a>
      </div>
      <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95">
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-600">
          Beyond Reality.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
          The smartphone that sees what you can't.
        </p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-lg md:max-w-2xl h-[50vh] md:h-[70vh] mt-10"
      >
        <Image
          src="/image_2.png"
          alt="X-Phone Hero"
          fill
          style={{ objectFit: 'contain' }}
          className="drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
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

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="performance" ref={ref} className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative z-20">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Neural Engine <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">de Próxima Geração.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 mb-8 max-w-md leading-relaxed"
          >
            Processamento quântico no seu bolso. O chip A18 Pro redefine os limites da física com arquitetura de 3nm e eficiência incomparável.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all group hover:tracking-wide">
              Saiba mais sobre a arquitetura <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div
          style={{ scale, opacity, rotateX: rotate, y }}
          className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full transform-style-3d perspective-1000"
        >
           {/* Particle effects simulation with CSS */}
           <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />

           {/* Animated Particles - Smoother motion */}
           {[...Array(12)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-1 bg-white/40 rounded-full z-20 blur-[1px]"
               style={{
                 top: `${20 + Math.random() * 60}%`,
                 left: `${20 + Math.random() * 60}%`,
               }}
               animate={{
                 y: [0, -40, 0],
                 opacity: [0, 0.6, 0],
                 scale: [0, 1.2, 0]
               }}
               transition={{
                 duration: 4 + Math.random() * 3,
                 repeat: Infinity,
                 delay: Math.random() * 3,
                 ease: "easeInOut"
               }}
             />
           ))}

          <Image
            src="/image_1.png"
            alt="A18 Pro Chip"
            fill
            style={{ objectFit: 'contain' }}
            className="z-10 drop-shadow-2xl"
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
    <section id="vision" ref={ref} className="relative min-h-screen w-full flex items-end justify-center overflow-hidden bg-black pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 scale-105">
        <Image
          src="/image_4.png"
          alt="Eye"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_black_80%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/90 to-transparent z-0" />
      </div>

      {/* Scanner Effect - More subtle and smooth */}
      {isInView && (
        <motion.div
          initial={{ top: '10%', opacity: 0 }}
          animate={{ top: '90%', opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.6)] z-10"
        />
      )}

      <div className="relative z-20 text-center max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ margin: "-100px" }}
          className="text-4xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg tracking-tighter"
        >
          Segurança que <br /> reconhece sua <span className="text-cyan-100">alma</span>.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ margin: "-100px" }}
          className="inline-block px-6 py-2 border border-cyan-500/30 rounded-full bg-cyan-950/20 backdrop-blur-md"
        >
          <p className="text-xl md:text-2xl text-cyan-400 tracking-[0.2em] font-light uppercase">
            Iris ID Pro
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Features Section (Bento Grid)
const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useSpring(0, { stiffness: 150, damping: 20 }); // Smoother spring
  const y = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 15);
    y.set(yPct * -15);
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
      className={`glass-heavy rounded-3xl p-8 transform-style-3d cursor-pointer transition-all duration-500 hover:bg-white/10 border border-white/5 hover:border-white/10 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <section id="specs" className="min-h-screen bg-[#050505] py-24 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white/90"
        >
          Projetado para o impossível.
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
           {/* Centerpiece Image */}
           <motion.div variants={item} className="md:col-span-3 h-[450px] relative glass-heavy rounded-3xl overflow-hidden mb-6 group border border-white/5">
              <Image
                src="/image_3.png"
                alt="Features Abstract"
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-90 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                 <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-transparent backdrop-blur-sm p-4 rounded-xl opacity-90">
                   Design Cristalino
                 </h3>
              </div>
           </motion.div>

          {/* Feature Card 1 */}
          <motion.div variants={item} className="h-full">
            <TiltCard className="flex flex-col items-start justify-between h-[320px]">
              <div className="bg-blue-500/10 p-5 rounded-2xl mb-4 border border-blue-500/20">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Privacidade Total</h3>
                <p className="text-gray-400 text-base leading-relaxed">Seus dados são criptografados no nível do hardware. O que acontece no seu X-Phone, fica no seu X-Phone.</p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div variants={item} className="h-full">
            <TiltCard className="flex flex-col items-start justify-between h-[320px]">
              <div className="bg-yellow-500/10 p-5 rounded-2xl mb-4 border border-yellow-500/20">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Carregamento Flash</h3>
                <p className="text-gray-400 text-base leading-relaxed">0 a 100% em 12 minutos. A bateria de grafeno de nova geração nunca deixa você na mão.</p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Feature Card 3 */}
          <motion.div variants={item} className="h-full">
            <TiltCard className="flex flex-col items-start justify-between h-[320px]">
              <div className="bg-purple-500/10 p-5 rounded-2xl mb-4 border border-purple-500/20">
                <Gauge className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white">Performance Ilimitada</h3>
                <p className="text-gray-400 text-base leading-relaxed">Sem throttling. Sem atrasos. Apenas velocidade pura para jogos e tarefas profissionais.</p>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 text-gray-500 text-sm text-center">
      <div className="container mx-auto px-6">
        <p className="mb-4">Copyright © 2024 X-Phone Inc. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Sales Policy</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
        <Navbar />
        <Hero />
        <Performance />
        <Vision />
        <Features />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
