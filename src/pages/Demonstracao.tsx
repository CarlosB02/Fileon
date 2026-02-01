import React, { useEffect } from 'react';
import {
    Scan,
    FileCheck,
    Search,
    ShieldCheck,
    Cloud,
    Database,
    Lock,
    Globe
} from 'lucide-react';
import Contact from '../components/Contact';

const Demonstracao = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: Scan,
            title: "Digitalização Inteligente",
            description: "Transforme documentos físicos em digitais com OCR avançado, garantindo qualidade superior e total pesquisabilidade."
        },
        {
            icon: Search,
            title: "Pesquisa Avançada",
            description: "Encontre qualquer documento em segundos através de pesquisa por conteúdo, metadados ou datas."
        },
        {
            icon: ShieldCheck,
            title: "Segurança Máxima",
            description: "Os seus dados são protegidos por criptografia avançada, com controlo de acessos e permissões."
        },
        {
            icon: Cloud,
            title: "Acesso em Qualquer Lugar",
            description: "Aceda ao seu arquivo digital a partir de qualquer dispositivo, em qualquer lugar do mundo, com total segurança."
        },
        {
            icon: FileCheck,
            title: "Gestão de Workflows",
            description: "Automatize fluxos de aprovação e distribuição de documentos para aumentar a produtividade da sua equipa."
        },
        {
            icon: Database,
            title: "Integração Flexível",
            description: "API robusta para integração perfeita com o seu ERP, CRM ou outros sistemas de gestão empresarial."
        },
        {
            icon: Lock,
            title: "Conformidade RGPD",
            description: "Ferramentas nativas para garantir que o manuseamento de dados pessoais cumpre todas as normas legais."
        },
        {
            icon: Globe,
            title: "Portal de Cliente",
            description: "Partilhe documentos com clientes e parceiros de forma segura através de um portal dedicado e personalizável."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase">Funcionalidades</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Porquê escolher o Fileon?
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                        Uma plataforma completa para gestão documental, desenhada para simplificar processos e garantir a segurança da sua informação.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Pronto para transformar a sua gestão documental?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Agende uma demonstração personalizada e descubra como o Fileon pode ajudar a sua empresa.
                    </p>
                    <a href="/contactos" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-600 bg-white rounded-full hover:bg-slate-50 transition-colors shadow-lg">
                        Agendar Demonstração
                    </a>
                </div>
            </div>

            <Contact />
        </div>
    );
};

export default Demonstracao;
