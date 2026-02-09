import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formState);
        alert('Obrigado pelo seu contacto! Entraremos em contacto brevemente.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-16 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            {/* Creative Background Elements - Deep Depth */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-400/15 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-cyan-300/15 rounded-full blur-[90px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            {/* Geometric Shapes & Rings */}
            <div className="absolute top-40 left-0 w-72 h-72 border-[3px] border-blue-400/40 rounded-full -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] border-[2px] border-indigo-400/30 rounded-full translate-x-1/2 pointer-events-none"></div>
            <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

            {/* Floating Accents */}
            <div className="absolute top-1/4 left-20 w-4 h-4 bg-blue-500/50 rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-32 w-6 h-6 bg-indigo-500/40 rounded-full pointer-events-none"></div>
            <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-cyan-500/50 rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-32 h-64 bg-blue-300/30 rounded-l-full blur-xl translate-x-1/2 pointer-events-none"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-5 min-h-[500px]">

                        {/* Contact Info & CTA */}
                        {/* Contact Info & CTA */}
                        <div className="lg:col-span-2 bg-blue-700 p-8 lg:p-12 text-white relative overflow-hidden flex flex-col h-full">
                            <div className="relative z-10 flex flex-col h-full gap-8 lg:gap-0">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Vamos digitalizar o seu futuro?</h3>
                                    <p className="text-blue-100 text-lg leading-relaxed">
                                        Fale com um especialista hoje e descubra quanto pode poupar.
                                    </p>
                                </div>

                                <div className="space-y-4 my-auto">
                                    <div className="flex items-center space-x-4 bg-blue-800/30 p-4 rounded-xl border border-blue-400/20 hover:bg-blue-800/50 transition-colors">
                                        <Phone className="w-6 h-6 text-blue-300" />
                                        <span className="text-lg font-medium tracking-wide">+351 210 000 000</span>
                                    </div>
                                    <div className="flex items-center space-x-4 bg-blue-800/30 p-4 rounded-xl border border-blue-400/20 hover:bg-blue-800/50 transition-colors">
                                        <Mail className="w-6 h-6 text-blue-300" />
                                        <span className="text-lg font-medium tracking-wide">geral@fileon.pt</span>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm text-blue-300 mb-4 font-semibold uppercase tracking-wider">Prefere falar já?</p>
                                    <button className="w-full flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 rounded-xl font-bold transition-colors shadow-lg text-base">
                                        <MessageCircle className="w-6 h-6" />
                                        <span>WhatsApp Direto</span>
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Circles - Original Subtle */}
                            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-blue-600 rounded-full opacity-50 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3 bg-white p-8 lg:p-12 flex flex-col justify-center relative z-10">
                            <form id="forms" onSubmit={handleSubmit} className="space-y-6 scroll-mt-32">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome Completo</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="João Silva"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="Fileon Lda."
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="exemplo@empresa.pt"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="+351 910 000 000"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Assunto</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Digitalização de Arquivo"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Como podemos ajudar?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={2} // Reduced height
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                        placeholder="Tenho cerca de 500 dossiers para digitalizar..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transform hover:-translate-y-1 transition-all shadow-lg flex items-center justify-center space-x-2 text-base">
                                    <span>Enviar Mensagem</span>
                                    <Send className="w-5 h-5 ml-2" />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
