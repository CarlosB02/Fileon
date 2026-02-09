import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        company: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
            setFormState({ name: '', email: '', phone: '', subject: '', message: '', company: '' });
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-32 md:pt-30 pb-12">
            {/* Hero Section */}
            <section className="relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        Apoiamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">o Seu Crescimento</span>
                    </h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
                <div className="grid lg:grid-cols-12 gap-6 items-start">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                            <div className="flex items-start space-x-6">
                                <div className="bg-blue-50 p-2.5 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                                    <Phone className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Ligue-nos</h3>
                                    <p className="text-slate-500 mb-3 text-sm leading-relaxed">
                                        Segunda a Sexta, das 9h às 18h.<br />Fale diretamente com a nossa equipa.
                                    </p>
                                    <a href="tel:+351210000000" className="text-blue-600 font-bold hover:text-blue-800 transition-colors text-base">
                                        +351 210 000 000
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                            <div className="flex items-start space-x-6">
                                <div className="bg-indigo-50 p-2.5 rounded-2xl group-hover:bg-indigo-600 transition-colors duration-300">
                                    <Mail className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                                    <p className="text-slate-500 mb-3 text-sm leading-relaxed">
                                        Envie-nos os detalhes do seu projeto.<br />Respondemos em menos de 24h.
                                    </p>
                                    <a href="mailto:ola@fileon.pt" className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors text-base">
                                        geral@fileon.pt
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden group cursor-pointer">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MessageCircle className="w-20 h-20 transform rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <MessageCircle className="w-8 h-8 mb-4" />
                                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                                <p className="text-base text-green-100 mb-4 font-medium">Resposta imediata para questões rápidas.</p>
                                <button className="bg-white text-green-600 px-4 py-2 rounded-xl font-bold text-base flex items-center space-x-2 hover:bg-green-50 transition-colors">
                                    <span>Iniciar Conversa</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white/80 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-2xl border border-white/50 relative overflow-hidden">
                            {/* Overlay for success state */}
                            {isSuccess && (
                                <div className="absolute inset-0 bg-white/95 z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                                    <div className="bg-green-100 p-6 rounded-full mb-6">
                                        <CheckCircle2 className="w-16 h-16 text-green-600" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Mensagem Enviada!</h3>
                                    <p className="text-lg text-slate-600 max-w-md">
                                        Obrigado pelo seu contacto. A nossa equipa irá analisar o seu pedido e entrará em contacto muito em breve.
                                    </p>
                                </div>
                            )}

                            <div className="mb-10">
                                <h2 className="text-xl font-bold text-slate-900 mb-2">Vamos Digitalizar o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Seu Futuro?</span></h2>
                                <p className="text-base text-slate-500">Preencha o formulário abaixo para receber o seu orçamento gratuito.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Nome Completo</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-base"
                                            placeholder="Ex: João Silva"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-semibold text-slate-700 ml-1">Empresa</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formState.company}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-base"
                                            placeholder="Ex: Fileon Lda"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-base"
                                            placeholder="nome@empresa.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formState.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-base"
                                            placeholder="+351 900 000 000"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">Assunto</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-base"
                                        placeholder="Ex: Pedido de Orçamento"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Como podemos ajudar?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 resize-none text-base"
                                        placeholder="Descreva brevemente o seu projeto ou necessidade..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-base py-2.5 rounded-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 shadow-xl hover:shadow-2xl hover:shadow-slate-900/20 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span>Enviar Pedido de Orçamento</span>
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default ContactPage;
