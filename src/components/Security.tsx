import React from 'react';
import { Shield, Lock, Server, FileKey, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Security = () => {
    return (
        <section id="security" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900 border border-blue-700 text-blue-300 text-sm font-medium mb-6">
                            <Shield className="w-4 h-4 mr-2" />
                            Segurança Máxima
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Os seus dados, protegidos a <span className="text-blue-400">nível militar</span>.
                        </h2>

                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Sabemos que a confidencialidade é crítica. Por isso, implementamos protocolos rigorosos de segurança física e digital para garantir que a sua informação nunca é comprometida.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Lock className="w-6 h-6 text-emerald-400" />, title: "Encriptação AES-256", desc: "Todos os ficheiros são encriptados em repouso e em trânsito." },
                                { icon: <Server className="w-6 h-6 text-blue-400" />, title: "Servidores Redundantes", desc: "Backups automáticos em múltiplos locais geográficos." },
                                { icon: <FileKey className="w-6 h-6 text-purple-400" />, title: "Controlo de Acessos Granular", desc: "Defina quem pode ver, editar ou apagar cada documento." },
                                { icon: <CheckCircle className="w-6 h-6 text-orange-400" />, title: "Conformidade RGPD", desc: "Processos auditados e total cumprimento da legislação europeia." }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="bg-slate-800 p-3 rounded-lg mr-4 border border-slate-700 shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl bg-slate-800 border border-slate-700 p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Security Shield Visualization */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-64 h-64 border-2 border-slate-600 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_20px_rgba(59,130,246,1)]"></div>
                                    </div>
                                    <div className="w-48 h-48 border-2 border-slate-600 rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse]">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_20px_rgba(16,185,129,1)]"></div>
                                    </div>

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Shield className="w-20 h-20 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Status badges */}
                            <div className="absolute bottom-8 left-8 right-8 flex justify-between text-xs font-mono text-slate-400">
                                <span>STATUS: SECURE</span>
                                <span className="text-emerald-400">System Functional</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Security;
