import React, { useEffect } from 'react';
import { Users, Target, History, Award } from 'lucide-react';
import Contact from '../components/Contact';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">A Nossa Missão</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Ajudar empresas portuguesas a transitar para o digital, garantindo segurança, eficiência e sustentabilidade.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Quem Somos</h2>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Fundada em 2026, a Fileon nasceu da necessidade urgente de modernizar os arquivos empresariais em Portugal. Observámos que muitas empresas perdiam horas valiosas à procura de documentos físicos e corriam riscos desnecessários.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            Hoje, somos líderes em digitalização certificada, combinando tecnologia de ponta (OCR, IA) com processos rigorosos de segurança.
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

            <Contact />
        </div>
    );
};

export default About;
