import React from 'react';
import { Truck, ScanLine, Lock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <Truck className="w-10 h-10 text-white" />,
        title: 'Recolha',
        description: 'Recolhemos os seus documentos físicos nas suas instalações com transporte seguro.',
        color: 'bg-blue-600'
    },
    {
        icon: <ScanLine className="w-10 h-10 text-white" />,
        title: 'Digitalização',
        description: 'Processamos, digitalizamos e indexamos cada página com tecnologia OCR de ponta.',
        color: 'bg-indigo-600'
    },
    {
        icon: <Lock className="w-10 h-10 text-white" />,
        title: 'Armazenamento',
        description: 'Guardamos os dados em servidores seguros prontos para consulta.',
        color: 'bg-emerald-600'
    },
    {
        icon: <Globe className="w-10 h-10 text-white" />,
        title: 'Acesso Online',
        description: 'Aceda, pesquise e partilhe os seus documentos a partir de qualquer dispositivo.',
        color: 'bg-purple-600'
    }
];

const HowItWorks = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const itemWidth = scrollContainerRef.current.clientWidth * 0.85; // Approximate width of item
            const newIndex = Math.round(scrollLeft / itemWidth);
            setActiveIndex(newIndex);
        }
    };

    return (
        <section id="how-it-works" className="py-16 bg-slate-50 relative overflow-hidden">
            {/* Decorative Line - Hidden on Mobile */}


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-12 md:mb-20">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase">Se Precisar, nós tratamos</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        Simples, Seguro e Eficiente
                    </h2>
                </div>

                {/* Container for Grid and Line */}
                <motion.div
                    className="relative w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Decorative Line - Hidden on Mobile */}
                    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-screen h-1 bg-slate-200/50 hidden lg:block -translate-y-1/2 pointer-events-none">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
                            variants={{
                                hidden: { width: "0%" },
                                visible: {
                                    width: "100%",
                                    transition: { duration: 1.5, ease: "easeInOut" }
                                }
                            }}
                        >
                            {/* Leading Edge Pulse */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
                                <div className="relative">
                                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(79,70,229,0.8)] animate-pulse"></div>
                                    <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="grid grid-flow-col auto-cols-[85vw] overflow-x-auto snap-x snap-mandatory py-10 gap-0 px-[7.5vw] md:grid-flow-row md:auto-cols-auto md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:pb-0 md:mx-0 md:px-0 md:overflow-visible scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] -mx-4"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative group text-center snap-center md:snap-align-none w-full md:w-auto px-2 md:px-0"
                            >
                                <div className={`mx-auto w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-300 ${index === activeIndex ? 'scale-110' : 'scale-95'} md:group-hover:scale-110 md:group-hover:rotate-3 ${step.color} mb-6 relative z-10`}>
                                    {step.icon}
                                </div>

                                {/* Connector line for tablet only (hidden on mobile carousel and desktop) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block lg:hidden absolute bottom-0 left-1/2 w-1 h-12 bg-slate-200 -mb-12 transform -translate-x-1/2"></div>
                                )}

                                <div className={`transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-white rounded-full blur-2xl opacity-50"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile Scroll Indicator */}
                <div className="flex justify-center gap-2 mt-4 md:hidden">
                    {steps.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
