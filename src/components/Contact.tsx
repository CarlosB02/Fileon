import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
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
        <section id="contact" className="py-12 bg-slate-50 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-5">

                        {/* Contact Info & CTA */}
                        <div className="lg:col-span-2 bg-blue-700 p-8 text-white relative overflow-hidden flex flex-col justify-center">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Vamos modernizar o seu arquivo?</h3>
                                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                                    Fale com um especialista hoje e descubra quanto pode poupar.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-5 h-5 text-blue-300" />
                                        <span className="text-sm">+351 210 000 000</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-blue-300" />
                                        <span className="text-sm">ola@fileon.pt</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="w-5 h-5 text-blue-300" />
                                        <span className="text-sm">Lisboa, Portugal</span>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <p className="text-xs text-blue-300 mb-3 font-semibold uppercase tracking-wider">Prefere falar já?</p>
                                    <button className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#128C7E] text-white py-2.5 px-4 rounded-lg font-bold transition-colors shadow-lg text-sm">
                                        <MessageCircle className="w-5 h-5" />
                                        <span>WhatsApp Direto</span>
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-60 h-60 bg-blue-600 rounded-full opacity-50 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3 bg-white p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">Nome Completo</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="João Silva"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-xs font-medium text-slate-700 mb-1">Empresa</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="Fileon Lda."
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="joao@empresa.pt"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="+351 910 000 000"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">Como podemos ajudar?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                        placeholder="Tenho cerca de 500 dossiers para digitalizar..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transform hover:-translate-y-1 transition-all shadow-lg flex items-center justify-center space-x-2 text-sm">
                                    <span>Pedir Orçamento Grátis</span>
                                    <Send className="w-4 h-4 ml-2" />
                                </button>

                                <p className="text-[10px] text-center text-slate-500 mt-2">
                                    Ao submeter este formulário concorda com a nossa Política de Privacidade.
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
