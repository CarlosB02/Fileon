import { motion } from 'framer-motion';
import { FileText, Database, ArrowRight, History, ScanLine } from 'lucide-react';
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
                                        <h3 className="text-lg font-bold text-slate-900">Setor Financeiro</h3>
                                        <p className="text-sm text-slate-500">Processamento Automático</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Faturas Processadas</span>
                                        <span className="text-lg font-bold text-blue-600">15.000+ / mês</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Redução de Erros</span>
                                        <span className="text-lg font-bold text-green-600">99.8%</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                        <span className="text-sm font-medium text-slate-600">Tempo Poupado</span>
                                        <span className="text-lg font-bold text-blue-600">450 horas</span>
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
                                Análise Inteligente de Faturas
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Implementamos um sistema de OCR avançado capaz de extrair dados automaticamente de faturas de diversos fornecedores. O sistema não apenas digitaliza, mas classifica, valida e exporta os dados diretamente para o software de contabilidade.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Extração automática de dados',
                                    'Validação cruzada com base de dados',
                                    'Exportação direta para Excel ou ficheiro editável',
                                    'Arquivo digital pesquisável instantaneamente'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-slate-700">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contactos" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                                Saber mais sobre esta solução <ArrowRight className="w-4 h-4 ml-2" />
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
                                Um projeto delicado de preservação digital para um arquivo municipal. Documentos do século XIX foram cuidadosamente digitalizados, restaurados digitalmente e catalogados, tornando a história acessível a todos sem comprometer a integridade dos originais.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Digitalização de alta resolução sem contato',
                                    'Restauração digital de legibilidade',
                                    'Indexação por metadados históricos',
                                    'Portal de consulta pública'
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
                                        <p className="text-3xl font-bold text-amber-700 mb-1">100+</p>
                                        <p className="text-xs text-slate-600 uppercase tracking-wide">Anos Preservados</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-xl text-center">
                                        <p className="text-3xl font-bold text-amber-700 mb-1">50k</p>
                                        <p className="text-xs text-slate-600 uppercase tracking-wide">Páginas</p>
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

            {/* CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
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
            </section>
        </div>
    );
};

export default RealCases;
