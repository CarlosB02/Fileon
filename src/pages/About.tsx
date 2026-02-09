import { useEffect } from 'react';
import {
    Zap, Cpu, Layers, Scan, FileCheck, Search, ShieldCheck, Cloud, Database, Lock, Globe
} from 'lucide-react';
import Contact from '../components/Contact';
import ColorBends from '../components/ColorBends';



const About = () => {
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
        },
        {
            icon: Zap, // Using Zap for speed/rapid implementation
            title: "Rápida Implementação",
            description: "Comece a usar o Fileon em minutos. A nossa equipa garante uma migração suave e configuração personalizada.",
            isCTA: true // Custom flag for styling
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ColorBends
                        colors={["#2563eb"]}
                        rotation={0}
                        speed={0.2}
                        scale={1}
                        frequency={1}
                        warpStrength={1}
                        mouseInfluence={1}
                        parallax={0.5}
                        noise={0.1}
                        transparent
                        autoRotate={0}
                    />
                </div>

                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-slate-900/80 z-10 pointer-events-none"></div>

                <div className="relative z-20 max-w-7xl mx-auto text-center pointer-events-auto pt-10">
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
                            Fundada em 2025, a Fileon nasceu da necessidade urgente de modernizar os arquivos empresariais em Portugal. Observámos que muitas empresas perdiam horas valiosas à procura de documentos físicos, mas percebemos que a solução precisava de ir além.
                        </p>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            A nossa missão evoluiu para dar um novo passo na digitalização: facilitar o processamento de informação para que o seu negócio acompanhe a velocidade dos clientes. Hoje, combinamos tecnologia de ponta com inteligência operacional para transformar dados em decisões.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src="/nano_robot.png"
                            alt="Nano - O assistente inteligente da Fileon"
                            className="w-full max-w-md h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section - Creative Background & Local Scroll */}
            <section className="relative overflow-hidden py-24">
                {/* Background Decoration Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/80 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
                    <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-50/50 rounded-full blur-2xl opacity-70 mix-blend-multiply"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-70 mix-blend-multiply"></div>

                    {/* SVG Patterns */}
                    <svg className="absolute top-20 left-10 w-32 h-32 text-slate-100 opacity-50" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="40" />
                    </svg>
                    <svg className="absolute bottom-20 right-10 w-48 h-48 text-indigo-50 opacity-40" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20,100 Q100,20 180,100 T340,100" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Funcionalidades</span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                            Porquê escolher o Fileon?
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-slate-600">
                            Uma plataforma completa para gestão documental, desenhada para simplificar processos e acelerar o seu negócio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl shadow-sm border cursor-pointer transition-all duration-500 ease-out relative overflow-hidden group ${
                                    // @ts-ignore - feature.isCTA is a custom property
                                    feature.isCTA
                                        ? "bg-blue-600 border-blue-600 text-white hover:shadow-2xl hover:scale-[1.02]"
                                        : "bg-white/80 backdrop-blur-sm border-slate-100/60 hover:shadow-xl hover:scale-[1.02] hover:bg-white"
                                    }`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 transition-colors duration-300 ${
                                        // @ts-ignore
                                        feature.isCTA ? "bg-white/20 group-hover:bg-white/30" : "bg-blue-50 group-hover:bg-blue-100"
                                        }`}>
                                        <feature.icon className={`w-6 h-6 transition-colors duration-300 ${
                                            // @ts-ignore
                                            feature.isCTA ? "text-white" : "text-blue-600"
                                            }`} />
                                    </div>
                                    <h3 className={`text-xl font-bold leading-tight ${
                                        // @ts-ignore
                                        feature.isCTA ? "text-white" : "text-slate-900"
                                        }`}>{feature.title}</h3>
                                </div>
                                <p className={`text-base leading-relaxed mb-4 ${
                                    // @ts-ignore
                                    feature.isCTA ? "text-blue-100" : "text-slate-600"
                                    }`}>{feature.description}</p>

                                {/* @ts-ignore */}
                                {feature.isCTA && (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="inline-flex items-center text-sm font-bold text-white hover:text-blue-100 transition-colors group/btn mt-2"
                                    >
                                        Começar Agora
                                        <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Pillars Section */}
            <section className="py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Os Nossos Pilares</h2>
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
