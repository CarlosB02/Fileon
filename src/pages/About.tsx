import React, { useEffect } from 'react';
import { Users, Target, History, Award, Zap, Cpu, Layers } from 'lucide-react';
import Contact from '../components/Contact';

import aboutHeroBg from '../assets/about_hero_bg.png';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="relative bg-slate-900 text-white py-32 px-4 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${aboutHeroBg})` }}
            >
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-slate-900/80"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Um Novo Passo na Digitalização</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Facilitamos o processamento de informação para que o seu negócio acompanhe a velocidade dos clientes.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Quem Somos</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Fundada em 2026, a Fileon nasceu da necessidade urgente de modernizar os arquivos empresariais em Portugal. Observámos que muitas empresas perdiam horas valiosas à procura de documentos físicos, mas percebemos que a solução precisava de ir além.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            A nossa missão evoluiu para dar um novo passo na digitalização: facilitar o processamento de informação para que o seu negócio acompanhe a velocidade dos clientes. Hoje, combinamos tecnologia de ponta com inteligência operacional para transformar dados em decisões.
                        </p>
                    </div>
                    <div className="bg-slate-100 p-8 rounded-2xl grid grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Users className="w-8 h-8 text-blue-600 mb-2" />
                            <div className="font-bold text-2xl text-slate-900">50+</div>
                            <div className="text-sm text-slate-500">Especialistas</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <History className="w-8 h-8 text-emerald-600 mb-2" />
                            <div className="font-bold text-2xl text-slate-900">10+</div>
                            <div className="text-sm text-slate-500">Anos de Exp.</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Target className="w-8 h-8 text-purple-600 mb-2" />
                            <div className="font-bold text-2xl text-slate-900">500+</div>
                            <div className="text-sm text-slate-500">Clientes</div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <Award className="w-8 h-8 text-orange-600 mb-2" />
                            <div className="font-bold text-2xl text-slate-900">100%</div>
                            <div className="text-sm text-slate-500">Certificado</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars Section */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Os Nossos Pilares</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Redefinimos a gestão documental com foco em três dimensões fundamentais para o sucesso moderno.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Speed Pillar */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                                <Zap className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Velocidade de Execução</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Num mercado acelerado, a espera não é opção. As nossas soluções garantem acesso imediato e processamento em tempo real da sua informação vital.
                            </p>
                        </div>

                        {/* Facilitation Pillar */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                <Layers className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Facilitação de Processos</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Eliminamos a fricção burocrática. Transformamos workflows complexos em processos simples e fluidos, libertando a sua equipa.
                            </p>
                        </div>

                        {/* Intelligence Pillar */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                                <Cpu className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Inteligência Operacional</h3>
                            <p className="text-slate-600 leading-relaxed">
                                O próximo passo da digitalização. Não apenas guardamos dados; extraímos valor e insights que impulsionam decisões estratégicas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default About;
