import { Database, Lock, UserCheck, Globe } from 'lucide-react';

const GDPR = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl"></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 relative z-10">
                        Conformidade <span className="text-emerald-600">RGPD</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto relative z-10">
                        Compromisso total com o Regulamento Geral de Proteção de Dados.
                    </p>
                </div>

                {/* Content Card */}
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-8 md:p-12 space-y-12">

                        {/* Intro */}
                        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 mb-8">
                            <p className="text-emerald-800 font-medium text-center">
                                A DigiArchive assegura que todos os processos de tratamento de dados pessoais estão em estrita conformidade com o Regulamento (UE) 2016/679.
                            </p>
                        </div>

                        {/* Grid for key points */}
                        <div className="grid md:grid-cols-2 gap-8">

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                                    <Database className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Minimização de Dados</h3>
                                <p className="text-slate-600 text-sm">
                                    Recolhemos apenas os dados estritamente necessários para as finalidades determinadas, garantindo que não há excesso de informação armazenada.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Integridade e Confidencialidade</h3>
                                <p className="text-slate-600 text-sm">
                                    Os dados são tratados de forma a garantir a sua segurança, incluindo a proteção contra o tratamento não autorizado ou ilícito.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                                    <UserCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Direitos dos Titulares</h3>
                                <p className="text-slate-600 text-sm">
                                    Garantimos o exercício facilitado dos direitos de acesso, retificação, apagamento, limitação, portabilidade e oposição.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Transparência</h3>
                                <p className="text-slate-600 text-sm">
                                    Todas as informações sobre o tratamento de dados são prestadas de forma concisa, transparente, inteligível e de fácil acesso.
                                </p>
                            </div>

                        </div>

                        {/* DPO Contact */}
                        <div className="text-center mt-12 bg-slate-900 text-slate-300 p-8 rounded-2xl">
                            <h3 className="text-white text-xl font-bold mb-2">Encarregado de Proteção de Dados</h3>
                            <p className="mb-4">Para questões relacionadas com o RGPD, contacte o nosso DPO:</p>
                            <a href="mailto:dpo@digiarchive.pt" className="inline-block bg-white text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-emerald-50 transition-colors">
                                dpo@digiarchive.pt
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GDPR;
