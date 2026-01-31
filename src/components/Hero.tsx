import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileCheck, ShieldCheck, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const Hero = () => {
    return (
        <div className="relative overflow-hidden bg-slate-50 min-h-screen lg:h-screen lg:max-h-screen flex items-start lg:items-center pt-32 lg:pt-20 pb-16 lg:pb-0">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-4">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                            Líderes em Digitalização Empresarial
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4">
                            Menos Papel. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                                Mais Controlo.
                            </span>
                        </h1>

                        <p className="text-base text-slate-600 mb-6 max-w-lg leading-relaxed">
                            Digitalização, armazenamento digital e gestão documental inteligente.
                            Aumente a produtividade da sua empresa e garanta melhores resultados.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <Link to="/contactos" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                Ver Demonstração Grátis
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link to="/contactos" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-full shadow-sm hover:bg-slate-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200">
                                Falar com um Especialista
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-6">
                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    <Counter value={15} prefix="+" suffix="M" />
                                </p>
                                <p className="text-xs text-slate-600 mt-1">Páginas Digitalizadas</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    <Counter value={100} suffix="%" />
                                </p>
                                <p className="text-xs text-slate-600 mt-1">Conformidade RGPD</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">
                                    <Counter value={24} suffix="h" />
                                </p>
                                <p className="text-xs text-slate-600 mt-1">Acesso Online</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-50 opacity-50"></div>

                            {/* Abstract document interface illustration */}
                            <div className="relative bg-white rounded-xl overflow-hidden p-4 min-h-[400px] flex flex-col">
                                {/* Header of the fake interface */}
                                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <Database className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="h-1.5 w-20 bg-slate-200 rounded-full mb-2"></div>
                                            <div className="h-1.5 w-12 bg-slate-100 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                                        <div className="w-6 h-6 rounded-full bg-blue-600"></div>
                                    </div>
                                </div>

                                {/* Grid of documents */}
                                <div className="grid grid-cols-2 gap-3 flex-1">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="group relative rounded-lg border border-slate-100 p-3 hover:shadow-md transition-shadow cursor-pointer bg-slate-50 hover:bg-white">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="p-1.5 bg-white rounded-md shadow-sm">
                                                    {i % 2 === 0 ? <FileCheck className="w-4 h-4 text-emerald-500" /> : <ShieldCheck className="w-4 h-4 text-blue-500" />}
                                                </div>
                                                <div className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${i % 2 === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                                                    {i % 2 === 0 ? 'Digitalizar' : 'Seguro'}
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
                                                <div className="h-1.5 w-2/3 bg-slate-200 rounded-full"></div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Floating Elements for 3D effect */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 bg-white rounded-lg shadow-xl p-3 border border-slate-100 animate-float">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <div className="p-1.5 bg-green-100 rounded-full">
                                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-900">Digitalização Concluída</p>
                                                <p className="text-[10px] text-slate-500">Arquivo #2938 processado</p>
                                            </div>
                                        </div>
                                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-green-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background elements under the image */}
                        <div className="absolute -z-10 top-10 -right-10 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                        <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
