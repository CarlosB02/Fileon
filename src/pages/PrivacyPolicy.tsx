import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 relative z-10">
                        Política de <span className="text-blue-600">Privacidade</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto relative z-10">
                        A sua privacidade é a nossa prioridade. Saiba como protegemos e tratamos os seus dados.
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">

                        {/* Section 1 */}
                        <section className="relative group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">1. Recolha de Informação</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Recolhemos informações apenas quando estritamente necessário para a prestação dos nossos serviços de gestão documental.
                                        Isto pode incluir dados de contacto, informações empresariais e documentos fornecidos para digitalização ou armazenamento.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="relative group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">2. Segurança dos Dados</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Utilizamos protocolos de segurança avançados, incluindo encriptação de ponta a ponta para dados em trânsito e em repouso.
                                        A nossa infraestrutura é monitorizada 24/7 para prevenir acessos não autorizados.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="relative group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">3. Uso da Informação</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        As informações recolhidas são utilizadas exclusivamente para:
                                        <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
                                            <li>Prestação e melhoria dos nossos serviços</li>
                                            <li>Comunicação sobre atualizações ou alterações</li>
                                            <li>Cumprimento de obrigações legais</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="relative group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">4. Direitos do Utilizador</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Tem o direito de aceder, corrigir ou solicitar a eliminação dos seus dados a qualquer momento.
                                        Para exercer estes direitos, entre em contacto connosco através dos canais oficiais.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Footer of the card */}
                    <div className="bg-slate-50 p-8 border-t border-slate-100 text-center text-sm text-slate-500">
                        Última atualização: Julho 2024
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
