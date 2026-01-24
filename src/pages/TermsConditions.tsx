import { Scale, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-400/20 rounded-full blur-3xl"></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 relative z-10">
                        Termos e <span className="text-indigo-600">Condições</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto relative z-10">
                        As regras que regem a nossa relação e o uso dos nossos serviços.
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">

                        {/* Section 1 */}
                        <section className="relative group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    <Scale className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">1. Aceitação dos Termos</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Ao aceder e utilizar os serviços da DigiArchive, concorda em cumprir estes Termos e Condições.
                                        Se não concordar com qualquer parte destes termos, não deverá utilizar os nossos serviços.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="relative group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">2. Serviços Prestados</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        A DigiArchive fornece serviços de digitalização, gestão e armazenamento de documentos.
                                        Reservamo-nos o direito de alterar ou descontinuar qualquer aspeto dos serviços a qualquer momento.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="relative group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    <AlertCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">3. Responsabilidades</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        O utilizador é responsável por manter a confidencialidade das suas credenciais de acesso e por todas as atividades que ocorrem na sua conta.
                                        A DigiArchive não se responsabiliza por perdas decorrentes do uso não autorizado da sua conta.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="relative group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3">4. Contacto e Suporte</h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        Para questões relacionadas com estes termos ou suporte técnico, por favor entre em contacto através do nosso formulário de contacto ou email oficial.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Footer of the card */}
                    <div className="bg-slate-50 p-8 border-t border-slate-100 text-center text-sm text-slate-500">
                        Válido a partir de: Julho 2024
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
