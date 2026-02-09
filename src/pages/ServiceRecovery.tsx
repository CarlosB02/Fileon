
import { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Contact from '../components/Contact';
import invoiceImage from '../assets/invoice_capture.png';
import securityImage from '../assets/security-shield.png';
import originalDanificadoImage from '../assets/original_danificado.jpeg';
import upscalerExampleImage from '../assets/fileon_upscaler.png';

// Mock data representing the "Recovered" text
const recoveredText = `REPÚBLICA PORTUGUESA: Ministério do Interior 
Governo Civil de Lisboa

N.º 1 BILHETE DE IDENTIDADE

Nome: Dr. Manuel d'Arriaga

Filiação: Sebastião d'Arriaga Brum da Silveira e D. Maria Christina Pardal d'Arriaga

Naturalidade (conc. e freg.): Fayal (Açores)

Idade: 73 anos.  Data do nascimento: 8 de Julho de 1840

Estado: casado

Profissão: Presidente da República; advogado
`;

const ServiceRecovery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Animation Controls
    const scannerRef = useRef<HTMLDivElement>(null);
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
        <div className="pt-16 min-h-screen bg-slate-50 overflow-hidden">
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
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                            Restauramos o Passado,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Preservamos o Futuro</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12">
                            Não deixe que o tempo apague a sua história. Recuperamos documentos danificados,
                            convertemos suportes obsoletos e salvamos informação crítica.
                        </p>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="flex justify-center"
                        >
                            <ArrowDown className="w-8 h-8 text-emerald-600 opacity-80" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Interactive Demo Section - The "Showstopper" */}
            <div className="py-16 bg-slate-900 relative">
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent opacity-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 text-white">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4 flex items-center justify-center gap-2">
                            Veja a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500 pb-1">Magia Acontecer</span>
                        </h2>
                        <p className="text-slate-400 max-w-lg mx-auto mb-8">
                            O nosso algoritmo de restauro digital remove manchas, reconstrói texto e converte
                            documentos ilegíveis em dados estruturados.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg hover:shadow-emerald-500/25"
                            >
                                Recuperar os Meus Documentos
                            </button>
                            <button
                                onClick={() => scannerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                className="px-6 py-3 rounded-full border border-slate-600 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold transition-all"
                            >
                                Ver Demonstração
                            </button>
                        </div>
                    </div>

                    {/* Comparison Component */}
                    <div ref={scannerRef} className="relative bg-black rounded-xl p-2 md:p-4 shadow-2xl border border-emerald-500/30 max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 h-[500px] md:h-[600px] relative overflow-hidden rounded-lg bg-slate-800">

                            {/* Left Side: Two Images Stacked */}
                            <div className="flex flex-col h-full border-r border-slate-700">
                                {/* Top Image: Original Damaged */}
                                <div className="relative h-1/2 overflow-hidden group border-b border-slate-700 bg-slate-900">
                                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-red-400 border border-red-500/30">
                                        ORIGINAL DANIFICADO
                                    </div>
                                    <img
                                        src={originalDanificadoImage}
                                        alt="Original Danificado"
                                        className="w-full h-full object-contain opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-sepia mix-blend-overlay opacity-30 pointer-events-none"></div>
                                </div>

                                {/* Bottom Image: Example */}
                                <div className="relative h-1/2 overflow-hidden group bg-slate-900">
                                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                                        VERSÃO DIGITAL OTIMIZADA
                                    </div>
                                    <img
                                        src={upscalerExampleImage}
                                        alt="VERSÃO DIGITAL OTIMIZADA"
                                        className="w-full h-full object-contain opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-sepia mix-blend-overlay opacity-30 pointer-events-none"></div>
                                </div>
                            </div>




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


                            </div>
                        </div>


                    </div>


                </div>
            </div>

            {/* Creative Shared Background Section */}
            <div className="relative isolate overflow-hidden bg-slate-50 pb-24 pt-16">
                {/* Background Pattern */}
                <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-40 -mt-20 h-[600px] w-[600px] rounded-full bg-emerald-100/40 blur-3xl opacity-60" />
                    <div className="absolute bottom-0 left-0 -ml-40 -mb-20 h-[600px] w-[600px] rounded-full bg-blue-100/40 blur-3xl opacity-60" />
                    <svg
                        className="absolute inset-0 h-full w-full stroke-slate-200/100 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="shared-bg-grid"
                                width={40}
                                height={40}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 40V.5H40" fill="none" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#shared-bg-grid)" />
                    </svg>
                </div>

                {/* Services Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Cada projeto é <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">tratado como único</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Abordamos cada desafio com soluções personalizadas, garantindo a máxima eficácia e segurança na recuperação do seu património informativo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col min-h-[450px] bg-slate-900 ring-1 ring-white/10 isolate transform-gpu"
                            style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={originalDanificadoImage}
                                    alt="Background"
                                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40" />
                            </div>

                            <div className="relative z-10 p-8 flex flex-col h-full text-white">
                                <h3 className="text-2xl font-bold mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors">Tipos de Recuperação</h3>
                                <ul className="space-y-4 text-slate-300 mb-8 flex-grow">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Documentos em papel e manuscritos antigos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Arquivos históricos e patrimoniais</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Arquivos sem estrutura ou catalogação</span>
                                    </li>
                                </ul>
                                <button onClick={() => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 bg-white/5 backdrop-blur-md">
                                    Analisar o Seu Caso
                                </button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col min-h-[450px] bg-slate-900 ring-1 ring-white/10 isolate transform-gpu"
                            style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={invoiceImage}
                                    alt="Background"
                                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 grayscale mix-blend-luminosity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40" />
                            </div>

                            <div className="relative z-10 p-8 flex flex-col h-full text-white">
                                <h3 className="text-2xl font-bold mb-6 text-amber-400 group-hover:text-amber-300 transition-colors">Processo de Recuperação</h3>
                                <ul className="space-y-4 text-slate-300 mb-8 flex-grow">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Análise detalhada e diagnóstico inicial</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Recuperação técnica</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Digitalização de alta precisão</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Organização, indexação e entrega</span>
                                    </li>
                                </ul>
                                <button onClick={() => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-amber-600 hover:border-amber-600 transition-all duration-300 bg-white/5 backdrop-blur-md">
                                    Conhecer o Processo
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col min-h-[450px] bg-slate-900 ring-1 ring-white/10 isolate transform-gpu"
                            style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={securityImage}
                                    alt="Background"
                                    className="w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40" />
                            </div>

                            <div className="relative z-10 p-8 flex flex-col h-full text-white">
                                <h3 className="text-2xl font-bold mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">Segurança e Confidencialidade</h3>
                                <ul className="space-y-4 text-slate-300 mb-8 flex-grow">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Manuseamento em ambiente controlado</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Acesso restrito a pessoal autorizado</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Confidencialidade total garantida</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                                        <span className="text-lg leading-relaxed">Total conformidade com o RGPD</span>
                                    </li>
                                </ul>
                                <button onClick={() => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 bg-white/5 backdrop-blur-md">
                                    Ver Protocolos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="relative isolate overflow-hidden bg-slate-900 rounded-3xl px-6 py-20 sm:px-16 sm:py-24 lg:px-24 shadow-2xl">
                        {/* Background Elements */}
                        <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

                        <svg
                            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="cta-grid"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y={-1}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M.5 200V.5H200" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#cta-grid)" />
                        </svg>

                        <div className="mx-auto max-w-2xl text-center relative z-10">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                A história merece ser salva.
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                                Não deixe que a degradação física destrua informação vital. Contacte os nossos especialistas hoje mesmo.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button onClick={() => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' })} className="rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-emerald-500 hover:scale-105 hover:shadow-emerald-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-300">
                                    Falar com um Especialista
                                </button>
                            </div>
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
