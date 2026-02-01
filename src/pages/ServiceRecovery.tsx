
import React, { useEffect, useState, useRef } from 'react';
import { Database, AlertTriangle, RefreshCw, ArrowRight, Wand2, FileSearch, Sparkles } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Contact from '../components/Contact';
import oldDocImage from '../assets/old_document_texture_1769744612627.png';

// Mock data representing the "Recovered" text
const recoveredText = `CONTRATO DE SERVIÇOS

ENTRE:
DIGI SOLUTIONS, LDA., adiante designada por "Primeiro Outorgante";
e
CLIENTE EXEMPLO, S.A., adiante designada por "Segundo Outorgante".

CLÁUSULA 1ª
(Objeto)
O presente contrato tem por objeto a prestação de serviços de recuperação e digitalização de arquivos históricos, garantindo a sua preservação futura.

CLÁUSULA 2ª
(Duração)
O contrato entra em vigor na data da sua assinatura e tem a duração de 12 (doze) meses, renovável automaticamente.

Lisboa, 15 de Outubro de 1923.

Assinaturas Legíveis:
[Recuperado Digitalmente]
`;

const ServiceRecovery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Animation Controls
    const scannerRef = useRef(null);
    const isInView = useInView(scannerRef, { once: true, margin: "-20%" });
    const [scanProgress, setScanProgress] = useState(0);

    // Simulate scanning effect
    useEffect(() => {
        if (isInView) {
            const duration = 4000; // 4 seconds scan
            const interval = 40;
            const steps = duration / interval;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                setScanProgress(Math.min(currentStep / steps, 1));
                if (currentStep >= steps) clearInterval(timer);
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isInView]);


    return (
        <div className="pt-24 min-h-screen bg-slate-50 overflow-hidden">
            {/* Hero Section */}
            <div className="relative bg-white border-b border-slate-200">
                <div className="absolute inset-0 bg-emerald-50/50 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#d1fae5 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-4">
                            Recuperação Histórica
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 font-serif">
                            Restauramos o Passado,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Preservamos o Futuro</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                            Não deixe que o tempo apague a sua história. Recuperamos documentos danificados,
                            convertemos suportes obsoletos e salvamos informação crítica.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Interactive Demo Section - The "Showstopper" */}
            <div className="py-24 bg-slate-900 relative">
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 text-white">
                        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                            <Sparkles className="text-emerald-400" />
                            Veja a Magia Acontecer
                        </h2>
                        <p className="text-slate-400 max-w-lg mx-auto">
                            O nosso algoritmo de restauro digital remove manchas, reconstrói texto e converte
                            documentos ilegíveis em dados estruturados.
                        </p>
                    </div>

                    {/* Comparison Component */}
                    <div ref={scannerRef} className="relative bg-black rounded-xl p-2 md:p-4 shadow-2xl border border-emerald-500/30 max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 h-[500px] md:h-[600px] relative overflow-hidden rounded-lg bg-slate-800">

                            {/* Left Side: Old Document */}
                            <div className="relative h-full overflow-hidden group">
                                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-red-400 border border-red-500/30">
                                    ORIGINAL DANIFICADO
                                </div>
                                <img
                                    src={oldDocImage}
                                    alt="Documento Antigo"
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Overlay gradient to update visual appeal */}
                                <div className="absolute inset-0 bg-sepia mix-blend-overlay opacity-30"></div>
                            </div>

                            {/* Center Scanner Bar (Absolute) */}
                            <motion.div
                                className="absolute top-0 bottom-0 w-1 bg-emerald-500 z-30 shadow-[0_0_20px_rgba(16,185,129,0.8)] hidden md:block"
                                style={{ left: `${scanProgress * 100}%` }}
                            >
                                <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg text-black">
                                    <Wand2 className="w-4 h-4 text-white animate-spin-slow" />
                                </div>
                            </motion.div>


                            {/* Right Side: Recovered Version */}
                            <div className="relative h-full bg-white p-8 md:p-12 font-mono text-sm md:text-base text-slate-800 overflow-hidden">
                                <div className="absolute top-4 right-4 z-20 bg-emerald-100 px-3 py-1 rounded-full text-xs font-bold text-emerald-700 border border-emerald-200">
                                    RESTAURO DIGITAL
                                </div>

                                {/* Masked Content based on scroll/scan progress for Desktop, always visible on Mobile after scroll? No, let's sync. */}
                                <div className="prose prose-sm max-w-none">
                                    <div className="whitespace-pre-wrap font-serif leading-relaxed text-slate-900">
                                        {recoveredText.split('').map((char, index) => (
                                            <span
                                                key={index}
                                                className="transition-opacity duration-75"
                                                style={{
                                                    opacity: (index / recoveredText.length) < scanProgress ? 1 : 0.1,
                                                    color: (index / recoveredText.length) < scanProgress ? '#0f172a' : 'transparent',
                                                    textShadow: (index / recoveredText.length) < scanProgress ? 'none' : '0 0 5px rgba(0,0,0,0.1)'
                                                }}
                                            >
                                                {char}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Watermark/Stamp effect */}
                                <motion.div
                                    className="absolute bottom-10 right-10 rotate-12 border-4 border-emerald-600 text-emerald-600 font-bold text-xl px-4 py-2 rounded-lg opacity-0"
                                    animate={{ opacity: scanProgress > 0.9 ? 0.8 : 0, scale: scanProgress > 0.9 ? 1 : 2 }}
                                    transition={{ type: "spring" }}
                                >
                                    RECUPERADO
                                </motion.div>
                            </div>
                        </div>

                        {/* Mobile Scanner Overlay (Horizontal line moving down) */}
                        <motion.div
                            className="absolute left-0 right-0 h-1 bg-emerald-500 z-30 shadow-[0_0_15px_rgba(16,185,129,0.8)] md:hidden"
                            style={{ top: `${scanProgress * 100}%` }}
                        />
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => {
                                setScanProgress(0);
                                setTimeout(() => setScanProgress(0.01), 100); // Trigger restart
                            }}
                            className="text-slate-400 hover:text-emerald-400 text-sm flex items-center gap-2 transition-colors"
                        >
                            <RefreshCw className="w-4 h-4" /> Replay Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                        <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                            <Database className="w-7 h-7 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Mídia Obsoleta</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Recuperamos dados de suportes que o tempo esqueceu. Disquetes, CDs, Cassetes, Microfilmes e fitas magnéticas convertidos para a nuvem.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>Floppy Disks & Zips</li>
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>CDs/DVDs corrompidos</li>
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>Fitas DAT/LTO</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                        <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                            <AlertTriangle className="w-7 h-7 text-amber-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Documentos Danificados</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Tratamento especializado de papel deteriorado. Removemos humidade, tratamos fungos e recuperamos texto quase invisível.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>Danos por água/humidade</li>
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>Papel quebradiço</li>
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>Tinta desvanecida</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                            <FileSearch className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Digitalização Forense</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Análise espectral para recuperar informação apagada ou rasurada intencionalmente. Recuperação de metadados digitais.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>Texto rasurado</li>
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>Assinaturas duvidosas</li>
                            <li className="flex items-center"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>Reconstrução digital</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 relative isolate overflow-hidden">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            A sua história merece ser salva.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Não deixe que a degradação física destrua informação vital. Contacte os nossos especialistas em recuperação hoje mesmo.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button onClick={() => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all">
                                Falar com um Especialista
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact-wrap">
                <Contact />
            </div>
        </div>
    );
};

export default ServiceRecovery;
