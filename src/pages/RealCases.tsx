import { motion } from 'framer-motion';
import { FileText, Database, ArrowRight, History, ScanLine, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingLines from '../components/FloatingLines';

const RealCases = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <FloatingLines
                        enabledWaves={["middle", "bottom", "top"]}
                        lineCount={5}
                        lineDistance={5}
                        bendRadius={5}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                        linesGradient={['#2563eb', '#4f46e5', '#3b82f6']} // Blue 600, Indigo 600, Blue 500
                    />
                </div>
                <div className="absolute inset-0 bg-white/70"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Histórias de <span className="text-blue-600">Sucesso</span> e Inovação
                        </h1>
                        <p className="text-xl text-slate-600">
                            Descubra como transformamos desafios em eficiência através da digitalização inteligente.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Study 1: Invoice Analysis */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-100 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <ScanLine size={120} className="text-blue-600" />
                                </div>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <FileText className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">Gabinete de Contabilidade</h3>
                                        <p className="text-sm text-slate-500">Eficiência Máxima</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Faturas Processadas</span>
                                        <span className="text-lg font-bold text-blue-600">Imediatamente</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Redução de Erros</span>
                                        <span className="text-lg font-bold text-green-600">Total</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Produtividade</span>
                                        <span className="text-lg font-bold text-blue-600">Maximizada</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Análise Inteligente de Documentos
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                A solução de referência para gabinetes de contabilidade que procuram modernizar os seus processos e aumentar a rentabilidade.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Processamento rápido, acompanhando a velocidade do cliente',
                                    'Foco de recursos em tarefas mais exigentes',
                                    'Consulta rápida e 100% automatizada',
                                    'Integração fluida com outros programas de gestão'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contactos" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                                Otimizar o seu gabinete <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Case Study 2: Historical Documents */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 md:order-1"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Recuperação de Documentos Históricos
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Um projeto delicado de preservação digital de documentos históricos. Documentos antigos foram cuidadosamente digitalizados e catalogados, tornando a história acessível a todos sem comprometer a integridade dos originais.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Digitalização de alta resolução sem contato',
                                    'Restauração digital de legibilidade',
                                    'Indexação dos dados históricos',
                                    'Portal de consulta interna'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contactos" className="inline-flex items-center font-semibold text-amber-700 hover:text-amber-800 transition-colors">
                                Preservar o seu arquivo <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-1 md:order-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-amber-100 rounded-3xl transform -rotate-3 scale-105 opacity-50"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-amber-100 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <History size={120} className="text-amber-600" />
                                </div>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="p-3 bg-amber-100 rounded-lg">
                                        <Database className="w-8 h-8 text-amber-700" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">Património & Cultura</h3>
                                        <p className="text-sm text-slate-500">Preservação Digital</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-amber-50 p-4 rounded-xl text-center">
                                        <p className="text-lg font-bold text-amber-700 mb-1">Conservação</p>
                                        <p className="text-xs text-slate-600 uppercase tracking-wide">Garantida</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-xl text-center">
                                        <p className="text-lg font-bold text-amber-700 mb-1">Elevada</p>
                                        <p className="text-xs text-slate-600 uppercase tracking-wide">Qualidade</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-xl text-center">
                                        <p className="text-lg font-bold text-amber-700 mb-1">Apoio</p>
                                        <p className="text-xs text-slate-600 uppercase tracking-wide">À Cultura</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-xl text-center">
                                        <p className="text-lg font-bold text-amber-700 mb-1">Compromisso</p>
                                        <p className="text-xs text-slate-600 uppercase tracking-wide">Total</p>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 italic text-slate-600 text-sm">
                                    "Graças à Fileon, conseguimos salvar registos vitais que estavam em risco de deterioração, tornando-os eternos."
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Case Study 3: Web Storage & Indexing */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-teal-600 rounded-3xl transform rotate-3 scale-105 opacity-10"></div>
                            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-100 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Database size={120} className="text-emerald-600" />
                                </div>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="p-3 bg-emerald-100 rounded-lg">
                                        <FolderOpen className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">Gestão e Produtividade</h3>
                                        <p className="text-sm text-slate-500">Mais com Menos</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Acesso</span>
                                        <span className="text-lg font-bold text-emerald-600">Imediato</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Ciclo</span>
                                        <span className="text-lg font-bold text-emerald-600">Simplificado</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Produtividade</span>
                                        <span className="text-lg font-bold text-emerald-600">Aumentada</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Storage Web e Gestão Documental
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Uma solução adjacente e complementar que revoluciona a forma como a informação é gerida. Combinamos armazenamento web seguro com indexação inteligente, criando um ecossistema digital eficiente.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Ciclo simples e aumento de produtividade',
                                    'Equipas fazem mais com menos recursos',
                                    'Eliminação de tempos mortos na procura'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contactos" className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                                Melhorar a produtividade <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Tem um desafio semelhante?
                    </h2>
                    <p className="text-blue-100 text-xl mb-10">
                        Cada organização tem necessidades únicas. Vamos analisar o seu caso e desenhar a solução perfeita.
                    </p>
                    <Link
                        to="/contactos"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
                    >
                        Fale Connosco
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RealCases;
