
import React, { useEffect } from 'react';
import { Scan, FileCheck, ShieldCheck, Receipt, Users, Ruler, FileSignature, Activity, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import SimplifiedProcess from '../components/SimplifiedProcess';
import IndexingDemo from '../components/IndexingDemo';

const ServiceDigitization = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Scan,
            title: "Digitalização de Alta Resolução",
            description: "Scanners industriais de 300-600 DPI garantem a preservação perfeita de cada detalhe.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: FileCheck,
            title: "OCR e Metadados",
            description: "Torne os seus documentos pesquisáveis. Extraímos dados automaticamente para indexação inteligente.",
            color: "text-indigo-600",
            bg: "bg-indigo-50"
        },
        {
            icon: ShieldCheck,
            title: "Conformidade Legal",
            description: "Processos certificados que garantem a autenticidade e permitem a destruição do original físico.",
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
        { icon: BookOpen, label: 'Livros e Revistas', desc: 'Património histórico e cultural' }
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50 overflow-hidden">
            {/* Hero Section */}
            <div className="relative bg-white border-b border-slate-200">
                <div className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
                        backgroundSize: '32px 32px'
                    }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-4">
                            Serviço Premium
                        </span>
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
            </div>

            {/* Main Features Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 mb-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className={`${feature.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
                <SimplifiedProcess />
            </div>

            {/* What We Digitize Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">O que digitalizamos?</h2>
                    <p className="mt-4 text-slate-600">Soluções especializadas para todo o tipo de documentação</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {docTypes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex items-start space-x-4 group"
                        >
                            <div className="bg-slate-50 p-3 rounded-lg group-hover:bg-blue-50 transition-colors">
                                <item.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-1">{item.label}</h4>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Indexing Demo Section */}
            <div className="bg-slate-900 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 opacity-30">
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

                <div className="relative z-10">
                    <IndexingDemo />
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Pronto para eliminar o papel?</h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Fale connosco hoje e receba um orçamento personalizado para o seu arquivo.
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
        </div>
    );
};

export default ServiceDigitization;
