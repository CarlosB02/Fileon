
import { useEffect, useState } from 'react';
import { Cloud, Server, Shield, Globe, Smartphone, Key, RefreshCw, FileCheck, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from '../components/Contact';
import heroBg from '../assets/storage_hero_bg.png';
import secureServersImg from '../assets/storage_secure_servers.jpg';
import secureBackupsImg from '../assets/storage_secure_backups.jpg';
import accessControlImg from '../assets/storage_access_control.jpg';
import gdprImg from '../assets/storage_gdpr.jpg';

const ServiceStorage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeSecurityFeature, setActiveSecurityFeature] = useState(0);

    // Updated Security Features based on user request
    const securityFeatures = [
        {
            icon: Server,
            title: "Servidores Seguros",
            description: "Infraestrutura de última geração com monitorização 24/7, firewalls avançadas.",
            image: secureServersImg
        },
        {
            icon: RefreshCw,
            title: "Backups Seguros",
            description: "Cópias de segurança automáticas e encriptadas, replicadas em múltiplos locais geográficos para garantir a recuperabilidade total.",
            image: secureBackupsImg
        },
        {
            icon: Key,
            title: "Controlo de Acessos",
            description: "Gestão granular de permissões. Defina quem pode ver, editar ou partilhar cada documento com registo de auditoria completo.",
            image: accessControlImg
        },
        {
            icon: Shield,
            title: "Conformidade com RGPD",
            description: "Ferramentas nativas para gestão de dados pessoais, direito ao esquecimento e portabilidade, garantindo total legalidade.",
            image: gdprImg
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSecurityFeature((prev) => (prev + 1) % securityFeatures.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    // FAQ Data
    const faqs = [
        {
            question: "Onde ficam os dados armazenados?",
            answer: "Os seus dados são armazenados em datacenters certificados Tier IV localizados na União Europeia, garantindo a soberania dos dados e conformidade total com as leis de proteção de dados europeias."
        },
        {
            question: "Quem tem acesso aos documentos?",
            answer: "Apenas os utilizadores autorizados pela sua empresa. A nossa equipa não tem acesso ao conteúdo dos seus ficheiros graças à nossa arquitetura de encriptação 'Zero-Knowledge', onde só o cliente detém as chaves."
        },
        {
            question: "Como funciona a migração dos meus dados atuais?",
            answer: "A nossa equipa especializada acompanha todo o processo de migração. Dispomos de ferramentas para importação em massa de arquivos físicos (digitalização) ou digitais, sem interrupção do seu negócio."
        }
    ];

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-hidden font-sans">
            {/* Background Effects */}


            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6">
                                <Cloud className="w-4 h-4" />
                                <span>Storage Cloud Empresarial</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                                A sua fortaleza digital
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">na Nuvem.</span>
                            </h1>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                Mais do que simples armazenamento. Uma infraestrutura resiliente, encriptada e acessível instantaneamente de qualquer lugar do mundo.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Interactive Security Vault Section */}
            <div className="relative z-10 py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Segurança Militar.<br />
                                <span className="text-indigo-600">Sem compromissos.</span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-12">
                                A segurança dos seus dados não é uma feature opcional, é a base da nossa arquitetura.
                            </p>

                            <div className="space-y-4 lg:h-[480px]">
                                {securityFeatures.map((feature, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSecurityFeature(index)}
                                        className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${activeSecurityFeature === index
                                            ? 'bg-white border-indigo-200 shadow-xl shadow-indigo-100/50'
                                            : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200'
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-lg ${activeSecurityFeature === index ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                                <feature.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className={`font-semibold text-lg mb-2 ${activeSecurityFeature === index ? 'text-slate-900' : 'text-slate-600'}`}>
                                                    {feature.title}
                                                </h3>
                                                <AnimatePresence>
                                                    {activeSecurityFeature === index && (
                                                        <motion.p
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="text-slate-500 text-sm leading-relaxed overflow-hidden"
                                                        >
                                                            {feature.description}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Feature Specific Image Display */}
                        <div className="relative h-[600px] hidden lg:flex items-center justify-center">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-blue-100 rounded-[2rem] blur-[60px] opacity-60"></div>

                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSecurityFeature}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                        className="absolute inset-0 w-full h-full"
                                    >
                                        <img
                                            src={securityFeatures[activeSecurityFeature].image}
                                            alt={securityFeatures[activeSecurityFeature].title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Gradient Overlay for Text Readability if needed, though mostly visual here */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative z-10 py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-16 sm:px-16 sm:py-20 text-center shadow-2xl">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                                Pronto para modernizar o seu arquivo?
                            </h2>
                            <p className="mx-auto max-w-xl text-lg text-indigo-100 mb-10">
                                Junte-se a centenas de empresas que confiam a sua informação crítica à nossa infraestrutura segura.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button onClick={() => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg">
                                    Começar Agora
                                </button>
                                <button onClick={() => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-indigo-700/50 text-white border border-indigo-400/30 rounded-full font-bold text-lg hover:bg-indigo-700/70 transition-colors backdrop-blur-sm">
                                    Agendar Demo
                                </button>
                            </div>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-indigo-900/40 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Decorative Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl z-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-50 rounded-full blur-[100px] opacity-40"></div>
                </div>

                <div className="relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ecossistema Completo</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            Tudo o que a sua empresa precisa para gerir documentos em escala, numa única plataforma.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: "Acesso Global",
                                desc: "Aceda aos seus arquivos de Lisboa a Tóquio. Latência mínima garantida pela nossa CDN global.",
                                isCta: false
                            },
                            {
                                icon: Server,
                                title: "Redundância 3x",
                                desc: "Cada ficheiro é replicado em 3 localizações geográficas distintas. Perda de dados é matematicamente impossível.",
                                isCta: false
                            },
                            {
                                icon: Smartphone,
                                title: "Mobile First",
                                desc: "Apps nativas para iOS e Android que colocam o arquivo da sua empresa no seu bolso.",
                                isCta: false
                            },
                            {
                                icon: RefreshCw,
                                title: "Sincronização Real",
                                desc: "Edite um documento no PC e veja as alterações aparecerem instantaneamente no tablet do seu colega.",
                                isCta: false
                            },
                            {
                                icon: FileCheck,
                                title: "Compliance Automático",
                                desc: "Ferramentas integradas para gestão de retenção, GDPR e auditorias automáticas.",
                                isCta: false
                            },
                            {
                                icon: ArrowRight,
                                title: "Começar Agora",
                                desc: "Fale com a nossa equipa e descubra como podemos transformar o seu arquivo.",
                                isCta: true
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                onClick={feature.isCta ? () => document.getElementById('contact-wrap')?.scrollIntoView({ behavior: 'smooth' }) : undefined}
                                className={`group p-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden ${feature.isCta
                                    ? 'bg-indigo-600 border border-indigo-600 cursor-pointer hover:bg-indigo-700 ring-4 ring-indigo-50 hover:ring-indigo-100'
                                    : 'bg-white border border-slate-100 hover:border-indigo-300/50 hover:shadow-indigo-500/10'
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 shrink-0 ${feature.isCta ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                                        }`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-xl font-bold ${feature.isCta ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                                </div>

                                <p className={`leading-relaxed ${feature.isCta ? 'text-indigo-100' : 'text-slate-600'}`}>
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="relative z-10 py-16 bg-slate-50 border-y border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Dúvidas Frequentes</span>
                        <h2 className="mt-2 text-3xl md:text-5xl font-bold text-slate-900">
                            Perguntas Comuns
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${openFaqIndex === index ? 'border-indigo-500 ring-1 ring-indigo-500 shadow-md' : 'border-slate-200'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                >
                                    <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                                    {openFaqIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-indigo-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-slate-400" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section Moved Up */}

            <div id="contact-wrap" className="bg-white">
                <Contact />
            </div>
        </div >
    );
};

export default ServiceStorage;
