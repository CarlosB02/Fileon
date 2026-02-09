import { ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import SimplifiedProcess from './SimplifiedProcess';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Player autoplay loop src="https://lottie.host/e4755c0b-63df-443a-b129-37e3caf07bb7/23hIWnGBAT.json" style={{ height: '64px', width: '64px' }} />,
        title: 'Digitalização de Documentos',
        description: 'Transformamos os seus ficheiros físicos em digitais com rapidez.',
        features: ['Digitalização certificada', 'Indexação e organização', 'OCR para pesquisa por texto', 'Formatos PDF/A'],
        color: 'bg-blue-50 hover:border-blue-200',
        link: '/digitalizacao',
        ctaText: 'Aumentar produtividade'
    },
    {
        icon: <Player autoplay loop src="https://lottie.host/44f62130-01c5-41af-b6fe-697a9bea594d/koqdsVqZda.json" style={{ height: '64px', width: '64px' }} />,
        title: 'Recuperação de Arquivos',
        description: 'Digitalização de documentos antigos ou danificados com máximo cuidado.',
        features: ['Documentos antigos ou danificados', 'Conversão de formatos obsoletos', 'Recuperação estruturada', 'Limpeza digital'],
        color: 'bg-emerald-50 hover:border-emerald-200',
        link: '/recuperacao',
        ctaText: 'Recuperar Documentos'
    },
    {
        icon: <Player autoplay loop src="https://lottie.host/73a730a4-4d5e-445e-9b0e-1556c985b737/cO8ppopghB.json" style={{ height: '64px', width: '64px' }} />,
        title: 'Armazenamento Web Seguro',
        description: 'Aceda aos seus documentos 24/7 com total segurança e controlo.',
        features: ['Acesso 24/7 em nuvem', 'Backups automáticos', 'Controlo de permissões', 'Criptografia ponta-a-ponta'],
        color: 'bg-indigo-50 hover:border-indigo-200',
        link: '/armazenamento-web',
        ctaText: 'Ativar Armazenamento'
    },
    {
        icon: <Player autoplay loop src="https://lottie.host/e8bc6df2-c015-4b2d-90ca-3838724a3a4d/5GUFIVLudR.json" style={{ height: '64px', width: '64px' }} />,
        title: 'Indexação e Gestão Documental',
        description: 'Plataforma inteligente para gerir e indexar os seus documentos.',
        features: ['Classificação inteligente', 'Versionamento de ficheiros', 'Histórico de acessos', 'Workflows de aprovação'],
        color: 'bg-purple-50 hover:border-purple-200',
        link: '/gestao-documental',
        ctaText: 'Otimizar Processos'
    }
];

const Services = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const scrollableWidth = scrollWidth - clientWidth;
            const progress = scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id="services" className="pt-16 pb-0 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase">Nossos Serviços</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                        A Solução Completa para o Seu Arquivo
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-1xl text-slate-600">
                        Da digitalização ao armazenamento na nuvem, oferecemos tudo o que precisa para modernizar a sua empresa.
                    </p>
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="md:hidden w-full max-w-[150px] mx-auto h-1 bg-slate-100 rounded-full mb-8 relative">
                    <div
                        className="absolute top-0 h-full bg-blue-600 rounded-full w-1/4 transition-all duration-75 ease-out"
                        style={{ left: `${scrollProgress * 0.75}%` }}
                    />
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 hide-scrollbar px-4 -mx-4 md:px-0 md:mx-0"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}

                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`flex-none w-[85vw] md:w-auto snap-center rounded-2xl p-8 border border-slate-100 transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-1 ${service.color} flex flex-col`}
                        >
                            <div className="flex flex-row items-center md:block mb-6 md:mb-0">
                                <div className="bg-white rounded-xl w-24 h-24 flex items-center justify-center shadow-sm mr-4 shrink-0 md:mr-0 md:mb-6 p-2">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-0 md:mb-3">{service.title}</h3>
                            </div>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8 flex-grow">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-700">
                                        <ShieldCheck className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={service.link}
                                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group"
                            >
                                {service.ctaText}
                                <ArrowRight className="w-4 h-4 ml-2 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
            <SimplifiedProcess />
        </section >
    );
};

export default Services;
