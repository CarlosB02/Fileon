import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Scan, BarChart3, Smartphone, Zap } from 'lucide-react';


const tabs = [
    { id: 'registo', label: 'Registo', icon: Smartphone },
    { id: 'leitura', label: 'Leitura', icon: Scan },
    { id: 'analise', label: 'Análise', icon: BarChart3 },
];

const SimplifiedProcess = () => {
    const [activeTab, setActiveTab] = useState('registo');

    return (
        <section className="relative py-16 bg-white overflow-hidden w-full">
            {/* Geometric Background Pattern - Dots Only */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.4,
                    backgroundAttachment: 'fixed'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="text-center">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase">Como Funciona</span>
                    <h3 className="mt-2 text-4xl font-bold text-slate-900">Processo Simplificado</h3>
                </div>

                {/* Custom Tabs */}
                <div className="flex justify-center w-full">
                    <div className="bg-white/50 backdrop-blur-sm p-1 rounded-full inline-flex relative w-full max-w-md border border-slate-200 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex-1 py-2 px-2 rounded-full text-sm font-medium transition-colors duration-200 z-10 flex justify-center items-center gap-2 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                                ${activeTab === tab.id ? 'text-blue-700' : 'text-slate-600 hover:text-slate-900'}`}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-blue-50 rounded-full shadow-inner -z-10 bg-opacity-50"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <tab.icon className="w-4 h-4 md:w-5 md:h-5" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            {activeTab === 'registo' && <RegistoContent />}
                            {activeTab === 'leitura' && <LeituraContent />}
                            {activeTab === 'analise' && <AnaliseContent />}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const RegistoContent = () => (
    <div className="grid md:grid-cols-2 h-full">
        <div className="relative h-64 md:h-full min-h-[400px] order-2 md:order-1">
            <img
                src="/src/assets/invoice_capture.png"
                alt="Invoice capture"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent md:bg-gradient-to-l md:from-white/90 md:to-transparent"></div>
        </div>
        <div className="p-6 md:p-12 flex flex-col justify-center order-1 md:order-2">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-6 w-fit">
                <Smartphone className="w-4 h-4 mr-2" />
                Captura Mobile
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Registo Instantâneo
            </h3>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Basta tirar uma foto ao documento com a nossa app. O sistema identifica automaticamente as informações relevantes para processamento.
            </p>
            <ul className="space-y-3 md:space-y-4">
                {[
                    'Deteção automática de dados',
                    'Correção de legibilidade',
                    'Otimização de qualidade',
                    'Upload imediato'
                ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 text-sm md:text-base">
                        <div className="bg-blue-50 rounded-full p-1 mr-3 flex-shrink-0">
                            <Check className="w-4 h-4 text-blue-600" />
                        </div>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const LeituraContent = () => (
    <div className="grid md:grid-cols-2 h-full">
        <div className="bg-slate-900 p-8 md:p-12 flex items-center justify-center overflow-hidden relative min-h-[400px] order-2 md:order-1">


            {/* Scanning Effect */}
            <motion.div
                className="relative bg-white rounded shadow-lg p-4 md:p-6 w-2/3 md:w-3/4 aspect-[3/4] max-w-[200px] md:max-w-[250px]"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
                <div className="space-y-3 md:space-y-4">
                    <div className="h-3 md:h-4 bg-slate-200 rounded w-1/3"></div>
                    <div className="h-1.5 md:h-2 bg-slate-100 rounded w-full"></div>
                    <div className="h-1.5 md:h-2 bg-slate-100 rounded w-full"></div>
                    <div className="h-1.5 md:h-2 bg-slate-100 rounded w-2/3"></div>
                    <div className="h-24 md:h-32 bg-slate-50 rounded w-full border border-dashed border-slate-200"></div>
                </div>

                {/* Laser Line */}
                <motion.div
                    className="absolute left-0 right-0 h-1 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
        </div>
        <div className="p-6 md:p-12 flex flex-col justify-center order-1 md:order-2">
            <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-6 w-fit">
                <Zap className="w-4 h-4 mr-2" />
                OCR Inteligente
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Leitura Automática
            </h3>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
                O nosso programa lê e interpreta o conteúdo dos documentos em segundos. Extrai dados como NIF, data, valor total e descrição, transformando imagem em dados estruturados.
            </p>
            <ul className="space-y-3 md:space-y-4">
                {[
                    'Extração de metadados',
                    'Classificação por tipo',
                    'Validação de campos relevantes',
                    'Aprendizagem contínua do sistema'
                ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 text-sm md:text-base">
                        <div className="bg-green-50 rounded-full p-1 mr-3 flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" />
                        </div>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const AnaliseContent = () => (
    <div className="grid md:grid-cols-2 h-full">
        <div className="bg-slate-50 p-8 md:p-12 flex items-center justify-center relative min-h-[400px] order-2 md:order-1">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-4 md:p-6 space-y-4 md:space-y-6 scale-90 md:scale-100 origin-center">
                <div className="flex justify-between items-center mb-2 md:mb-4">
                    <h4 className="font-bold text-slate-700">Faturação Mensal</h4>
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">+73%</span>
                </div>

                {/* Bar Chart Mockup */}
                <div className="flex items-end space-x-3 h-24 md:h-32 pb-2 border-b border-slate-100">
                    {[40, 70, 45, 90, 60, 85].map((height, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-blue-500 rounded-t-sm"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        />
                    ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">Processados</div>
                        <div className="text-xl font-bold text-slate-800">2,847</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">Pendentes</div>
                        <div className="text-xl font-bold text-green-500">0</div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-4 right-4 md:top-10 md:right-10 bg-white p-2 md:p-3 rounded-lg shadow-md flex items-center space-x-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs md:text-sm font-medium text-slate-600">Sync Ativo</span>
            </motion.div>
        </div>
        <div className="p-6 md:p-12 flex flex-col justify-center order-1 md:order-2">
            <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 mb-6 w-fit">
                <BarChart3 className="w-4 h-4 mr-2" />
                Insights em Tempo Real
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Análise e Controlo
            </h3>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Transforme documentos em suporte à decisão. Centralização e preparação de dados documentais para controlo básico, monitorização e integração com sistemas de gestão.
            </p>
            <ul className="space-y-3 md:space-y-4">
                {[
                    'Estruturação de dados para análise',
                    'Consolidação de informação',
                    'Alertas de duplicados',
                    'Exportação para ferramentas externas'
                ].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 text-sm md:text-base">
                        <div className="bg-purple-50 rounded-full p-1 mr-3 flex-shrink-0">
                            <Check className="w-4 h-4 text-purple-600" />
                        </div>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default SimplifiedProcess;
