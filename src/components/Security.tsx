
import { Shield, Lock, Server, FileKey, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import securityShield from '../assets/security-shield.png';

const Security = () => {
    return (
        <section id="security" className="py-16 bg-slate-900 text-white relative overflow-hidden flex items-center">
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
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <img
                                    src={securityShield}
                                    alt="Security Shield"
                                    className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Security;
