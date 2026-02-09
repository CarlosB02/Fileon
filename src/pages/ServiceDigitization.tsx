
import { useEffect } from 'react';
import { Scan, FileCheck, ShieldCheck, Receipt, Users, Ruler, FileSignature, Activity, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import SimplifiedProcess from '../components/SimplifiedProcess';
import IndexingDemo from '../components/IndexingDemo';
import InvoiceScanner from '../components/InvoiceScanner';

const ServiceDigitization = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Scan,
            title: "Trabalho Automatizado",
            description: "O preenchimento dos dados é feito automaticamente, aumentando a produtividade.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: FileCheck,
            title: "Você Escolhe os Dados",
            description: "Os parâmetros que você selecionar serão extraídos automaticamente.",
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            icon: ShieldCheck,
            title: "Integração Imediata",
            description: "Torne o conteúdo dos seus documentos pesquisável e pronto a integrar no seu software de gestão.",
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    const docTypes = [
        { icon: Receipt, label: 'Faturas e Contabilidade', desc: 'Faturas, recibos e guias' },
        { icon: Users, label: 'Recursos Humanos', desc: 'Processos individuais e contratos' },
        { icon: Ruler, label: 'Desenhos Técnicos', desc: 'Plantas, mapas e grandes formatos' },
        { icon: FileSignature, label: 'Contratos e Escrituras', desc: 'Documentação legal e notarial' },
        { icon: Activity, label: 'Processos Clínicos', desc: 'Exames e históricos médicos' },
        { icon: BookOpen, label: 'Todos os documentos', desc: 'Tudo o que precisar na mesma solução' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden">
            {/* Unified Hero Section */}
            <div className="relative bg-white pt-40 pb-16 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 inset-0 pointer-events-none opacity-40"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                        backgroundSize: '32px 32px'
                    }}
                />

                {/* Round Graphic Elements (Blobs) */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 w-[500px] h-[500px] bg-indigo-400/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Hero Text */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                                Digitalização <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Certificada</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">
                                Transforme o seu arquivo físico num ativo digital inteligente.
                                <br className="hidden md:block" />
                                Validade legal, acesso imediato e segurança máxima.
                            </p>
                        </motion.div>
                    </div>

                    {/* Main Features Grid (Merged) */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className={`${feature.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors relative z-10">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed relative z-10">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Invoice Digitalization Simulation */}
            <InvoiceScanner />

            {/* Process Section */}
            <div>
                <SimplifiedProcess />
            </div>


            {/* What We Digitize Grid */}
            <div className="relative py-16 bg-slate-50 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Grid Pattern with increased visibility */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

                    {/* Vibrant Blobs */}
                    <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[30rem] h-[30rem] bg-blue-400/20 rounded-full blur-[80px]"></div>
                    <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-[30rem] h-[30rem] bg-indigo-500/20 rounded-full blur-[80px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-violet-300/10 rounded-full blur-[100px]"></div>

                    {/* Geometric Shapes */}
                    <div className="absolute top-20 left-10 w-24 h-24 border-2 border-blue-200 rounded-full opacity-40"></div>
                    <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-indigo-200 rounded-2xl rotate-12 opacity-40"></div>

                    {/* Tech Markers */}
                    <div className="absolute top-10 right-10 text-blue-200 opacity-60">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5h14v14H5z" /><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                    </div>
                    <div className="absolute bottom-10 left-10 text-indigo-200 opacity-60">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">O que digitalizamos?</h2>
                        <p className="mt-4 text-slate-600">Soluções especializadas para todo o tipo de documentação</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {docTypes.map((item, i) => {
                            const isHighlight = item.label === 'Todos os documentos';
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className={`p-6 rounded-xl border transition-all duration-300 flex items-start space-x-4 group ${isHighlight
                                        ? 'bg-blue-600 border-blue-600 shadow-xl scale-105'
                                        : 'bg-white/90 backdrop-blur-sm border-slate-200 hover:border-blue-300 hover:shadow-lg'
                                        }`}
                                >
                                    <div className={`p-3 rounded-lg transition-colors ${isHighlight ? 'bg-white/10' : 'bg-slate-50 group-hover:bg-blue-50'
                                        }`}>
                                        <item.icon className={`w-6 h-6 transition-colors ${isHighlight ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'
                                            }`} />
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold mb-1 ${isHighlight ? 'text-white' : 'text-slate-900'}`}>{item.label}</h4>
                                        <p className={`text-sm ${isHighlight ? 'text-blue-100' : 'text-slate-500'}`}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Indexing Demo Section */}
            <div className="bg-slate-900 py-16 relative overflow-visible z-30">
                <div className="absolute inset-0 bg-blue-600/10 opacity-30 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
                    <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Poder da Indexação</span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white mb-6">Experimente a Pesquisa Inteligente</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        Depois de digitalizados, os seus documentos tornam-se dados pesquisáveis.
                        Veja como é fácil encontrar o que procura.
                    </p>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <IndexingDemo embedded={true} />
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-blue-600 py-16 overflow-hidden z-20">
                {/* Creative Background - Data Flow Theme */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300/40 rounded-full blur-3xl"></div>

                    {/* Concentric Circles / Radar Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-200/40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-200/40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-200/40 rounded-full"></div>

                    {/* Abstract Waveform */}
                    <svg className="absolute bottom-0 left-0 w-full h-32 text-blue-400/50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1440,112L1440,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

                    {/* Concentric Circles / Radar Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-400/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-400/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-400/10 rounded-full"></div>

                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Pronto para reduzir o trabalho manual?</h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Fale connosco hoje e receba um orçamento personalizado para as suas necessidades.
                    </p>
                    <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1">
                        Pedir Orçamento Gratuito
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>

            <div id="contact-form">
                <Contact />
            </div>
        </div >
    );
};

export default ServiceDigitization;
