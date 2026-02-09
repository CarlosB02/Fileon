
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Search,
    Zap,
    FileText,
    ArrowRight,
    Database,
    ScanLine,
    CheckCircle2,
    Clock,
    Filter,
    Layers,
    Share2,
    FileWarning,
    Lock,
    ShieldAlert,
    PlayCircle
} from 'lucide-react';
import Contact from '../components/Contact';
import IndexingDemo from '../components/IndexingDemo';

const ServiceManagement = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Animation variants
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
            {/* Background Decorations */}


            {/* Hero Section */}
            <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                            Deixe de procurar. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Comece a encontrar.</span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Organização não é apenas guardar ficheiros. É transformar documentos estáticos em dados vivos, pesquisáveis e acionáveis.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* THE PIPELINE VISUALIZATION */}
            <div className="relative z-10 py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">O Fluxo de Trabalho é <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Simples</span></h2>
                        <p className="text-slate-500 mt-2">Como os seus documentos ganham vida no nosso sistema</p>
                    </div>

                    <div className="relative">
                        {/* Connection Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent -translate-y-1/2 z-0" />

                        <motion.div
                            key="pipeline-grid"
                            variants={containerVars}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10"
                        >
                            {/* Step 1: Input */}
                            <motion.div variants={itemVars} className="group relative">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 text-center h-full flex flex-col items-center">
                                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                        <ScanLine className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">1. Captura</h3>
                                    <p className="text-sm text-slate-500">Digitalização ou importação direta de PDFs ou imagens.</p>
                                </div>
                            </motion.div>

                            {/* Step 2: Processing (The Magic) */}
                            <motion.div variants={itemVars} className="group relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg z-20">
                                    IA CORE
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-100 hover:border-purple-400 transition-all duration-300 text-center h-full flex flex-col items-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600 relative z-10">
                                        <Database className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 relative z-10">2. Indexação</h3>
                                    <p className="text-sm text-slate-500 relative z-10">OCR inteligente extrai metadados selecionados ou de forma automática.</p>
                                </div>
                            </motion.div>

                            {/* Step 3: Workflow */}
                            <motion.div variants={itemVars} className="group relative">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 text-center h-full flex flex-col items-center">
                                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <Layers className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">3. Processamento</h3>
                                    <p className="text-sm text-slate-500">Documentos são enviados automaticamente para o programa ou pastas específicas.</p>
                                </div>
                            </motion.div>

                            {/* Step 4: Output */}
                            <motion.div variants={itemVars} className="group relative">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-green-200 transition-all duration-300 text-center h-full flex flex-col items-center">
                                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 text-slate-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">4. Consulta</h3>
                                    <p className="text-sm text-slate-500">Tem todos os documentos num só local pronto para dinamizar o seu negócio.</p>
                                </div>
                            </motion.div>
                            {/* Step 5: Simulação */}
                            <motion.div variants={itemVars} className="group relative cursor-pointer" onClick={() => document.getElementById('indexdemo')?.scrollIntoView({ behavior: 'smooth' })}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-200 hover:shadow-xl hover:border-blue-500 transition-all duration-300 text-center h-full flex flex-col items-center group-hover:-translate-y-1">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <PlayCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Simulação</h3>
                                    <p className="text-sm text-slate-500 mb-4">Veja uma demonstração interativa de como funciona.</p>
                                    <div className="mt-auto text-blue-600 font-medium text-sm flex items-center gap-2">
                                        Experimentar <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Indexing Demo */}
            <IndexingDemo />

            {/* THE PROBLEM SECTION */}
            <div className="relative z-10 py-32 bg-slate-100">
                {/* Top Wave (White Mask) */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-white"></path>
                    </svg>
                </div>

                {/* Bottom Wave (White Mask) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="hidden"></path> {/* Dummy for viewbox reference if needed, but using direct path below */}
                        <path d="M1200,120V46.29c-47.79,22.2-103.59,32.17-158,28-70.36-5.37-136.33-33.31-206.8-37.5C761.36,32.43,687.66,53.67,617,72.05c-69.27,18-138.3,24.88-209.4,13.08-36.15-6-69.85-17.84-104.45-29.34C210.51,25,87-14.29,0,52.47V120Z" className="fill-white"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">Os Problemas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Resolvemos</span></h2>
                        <p className="text-slate-500 mt-2">Os desafios que travam o crescimento da sua empresa e que nós resolvemos.</p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {[
                            { icon: Layers, title: "Desorganização", desc: "Documentos guardados sem lógica" },
                            { icon: Clock, title: "Perda de Tempo", desc: "Tempo perdido à procura de informação" },
                            { icon: FileWarning, title: "Erros", desc: "Erros por versões desatualizadas" },
                            { icon: Lock, title: "Acesso", desc: "Falta de controlo de acessos" },
                            { icon: ShieldAlert, title: "Risco", desc: "Risco de perda ou uso indevido" },
                            { icon: ArrowRight, title: "Resolver Agora", desc: "Fale connosco e resolva estes problemas hoje.", isCta: true }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={item.isCta ? () => navigate('/contactos') : undefined}
                                className={`p-6 rounded-xl shadow-sm border transition-all text-center group cursor-default ${item.isCta
                                    ? 'bg-blue-600 border-blue-600 cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1'
                                    : 'bg-white border-slate-200 hover:shadow-md'
                                    }`}
                            >
                                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 transition-colors ${item.isCta
                                    ? 'bg-white/20 text-white group-hover:bg-white/30'
                                    : 'bg-red-50 text-red-500 group-hover:bg-red-100'
                                    }`}>
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className={`font-bold mb-2 ${item.isCta ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                                <p className={`text-sm ${item.isCta ? 'text-blue-100' : 'text-slate-500'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Highlight: Search & Indexing */}
            <div className="relative z-10 py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">
                                O Google <span className="text-purple-600">da sua empresa.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Lembra-se de onde guardou aquela fatura de 2019? Nós lembramos.
                                O nosso sistema de indexação cria uma rede de dados interligados.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Search, title: "Busca Full-Text", desc: "Pesquise por qualquer palavra dentro do documento, não apenas pelo nome do ficheiro." },
                                    { icon: Filter, title: "Metadados Inteligentes", desc: "Filtre por fornecedor, data, valor ou departamento instantaneamente." },
                                    { icon: Clock, title: "Histórico Temporal", desc: "Viaje no tempo e veja documentos desde o momento em que foram inseridos no sistema." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <button
                                    onClick={() => navigate('/contactos')}
                                    className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-0.5"
                                >
                                    Agendar Demonstração
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Abstract Representation of organized data */}
                        <div className="relative h-[500px] hidden lg:flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-[80px] opacity-70" />

                            {/* Floating "Cards" animation */}
                            <motion.div
                                className="relative z-10 w-full max-w-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {/* Center Card */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 relative z-20"
                                >
                                    <div className="flex items-center gap-4 mb-4 border-b border-slate-100 pb-4">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="h-2 w-24 bg-slate-200 rounded mb-2" />
                                            <div className="h-2 w-16 bg-slate-100 rounded" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex gap-2">
                                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md">Fatura #1029</span>
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">Aprovado</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-slate-400 mt-2">
                                            <span>Data: 12/10/2025</span>
                                            <span>Valor: € 1.250,00</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Background Cards */}
                                <motion.div
                                    animate={{
                                        y: [0, 15, 0],
                                        rotate: [-5, -7, -5],
                                        scale: [0.95, 0.9, 0.95]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-4 -left-8 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white z-10 w-full h-full"
                                />
                                <motion.div
                                    animate={{
                                        y: [0, 20, 0],
                                        rotate: [5, 8, 5],
                                        scale: [0.9, 0.85, 0.9]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute top-8 -right-8 bg-white/40 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white z-0 w-full h-full"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Workflow / ROI Section */}
            <div className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">O Fim do Caos Administrativo</h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                            Transforme horas de burocracia em minutos de produtividade estratégia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
                            <div className="text-slate-300">Menos tempo na procura de documentos</div>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                            <div className="text-slate-300">Conformidade Legal & Fiscal</div>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="text-4xl font-bold text-green-400 mb-2">0</div>
                            <div className="text-slate-300">Papel acumulado no escritório</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer / CTA */}
            <Contact />
        </div>
    );
};

export default ServiceManagement;
