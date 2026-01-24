import React from 'react';
import { Check, TrendingUp, Search, Clock, Shield } from 'lucide-react';
// Remove Marquee import if not available, implementing custom CSS marquee instead

const sectors = [
    "Advocacia", "Saúde", "Banca", "Seguros", "Imobiliário", "Educação",
    "Logística", "Administração Pública", "Recursos Humanos", "Contabilidade"
];

import cardBg from '../assets/card_bg_pattern.png'; // Verify if this path is correct relative to the component


const benefits = [
    {
        title: "Redução de Custos",
        description: "Elimine custos com espaço físico, impressões e gestão manual de arquivo.",
        icon: <TrendingUp className="w-6 h-6 text-green-500" />,
        stat: "-40%",
        statDesc: "em custos operacionais"
    },
    {
        title: "Pesquisa Instantânea",
        description: "Encontre qualquer documento em segundos com pesquisa por palavras-chave (OCR).",
        icon: <Search className="w-6 h-6 text-blue-500" />,
        stat: "3s",
        statDesc: "tempo médio de busca"
    },
    {
        title: "Segurança Total",
        description: "Acabe com o risco de perda por incêndio, inundação ou extravio.",
        icon: <Shield className="w-6 h-6 text-purple-500" />,
        stat: "0%",
        statDesc: "risco de perda física"
    }
];

const SectorsAndBenefits = () => {
    return (
        <section className="pb-20 pt-0 bg-white overflow-hidden">

            {/* Sectors Marquee */}
            <div className="mb-24 bg-slate-50 py-10 border-y border-slate-100">
                <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">
                    Soluções aplicáveis a todos os setores
                </p>
                <div className="relative flex overflow-x-hidden">
                    <div className="py-2 animate-marquee whitespace-nowrap flex space-x-12 px-4">
                        {sectors.map((sector, i) => (
                            <span key={i} className={`text-2xl font-bold mx-12 ${[
                                'text-blue-300', 'text-emerald-300',
                                'text-purple-300', 'text-amber-300',
                                'text-cyan-300', 'text-rose-300'
                            ][i % 6]
                                }`}>{sector}</span>
                        ))}
                        {sectors.map((sector, i) => (
                            <span key={`dup-${i}`} className={`text-2xl font-bold mx-12 ${[
                                'text-blue-300', 'text-emerald-300',
                                'text-purple-300', 'text-amber-300',
                                'text-cyan-300', 'text-rose-300'
                            ][i % 6]
                                }`}>{sector}</span>
                        ))}
                        {sectors.map((sector, i) => (
                            <span key={`dup2-${i}`} className={`text-2xl font-bold mx-12 ${[
                                'text-blue-300', 'text-emerald-300',
                                'text-purple-300', 'text-amber-300',
                                'text-cyan-300', 'text-rose-300'
                            ][i % 6]
                                }`}>{sector}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Porquê digitalizar agora?</h2>
                    <p className="text-lg text-slate-600">Resultados reais para o seu negócio.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-all overflow-hidden group"
                        >
                            {/* Background Image with Overlay */}
                            <div
                                className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-20"
                                style={{
                                    backgroundImage: `url(${cardBg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-white rounded-lg shadow-sm">
                                        {benefit.icon}
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-3xl font-bold text-slate-900">{benefit.stat}</span>
                                        <span className="text-xs text-slate-500">{benefit.statDesc}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 mb-6">{benefit.description}</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-sm text-slate-500">
                                        <Check className="w-4 h-4 text-green-500 mr-2" />
                                        Comprovado pelo mercado
                                    </li>
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default SectorsAndBenefits;
