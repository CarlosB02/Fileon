import { useEffect } from 'react';
import { Cloud, Lock, Server } from 'lucide-react';
import Contact from '../components/Contact';

const ServiceStorage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-indigo-600 font-semibold tracking-wide uppercase">Nuvem Segura</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Storage Web & Cloud
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                        Alojamento seguro para os seus documentos com acessibilidade 24/7.
                    </p>
                </div>

                <div className="bg-slate-900 text-white rounded-3xl overflow-hidden p-8 md:p-12 mb-20 relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">Porquê a nossa Cloud?</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <Cloud className="w-6 h-6 text-indigo-400 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg">Acesso Universal</h4>
                                        <p className="text-slate-400">Aceda aos seus ficheiros no escritório, em casa ou em viagem, via PC, tablet ou smartphone.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Lock className="w-6 h-6 text-indigo-400 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg">Criptografia Ponta-a-Ponta</h4>
                                        <p className="text-slate-400">Os seus dados são encriptados antes de saírem do seu dispositivo e só você tem a chave.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Server className="w-6 h-6 text-indigo-400 mr-4 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-lg">Redundância Geográfica</h4>
                                        <p className="text-slate-400">Backups automáticos replicados em 3 datacenters diferentes na Europa.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                            {/* Visual representation of storage tiers or dashboard could go here */}
                            <div className="text-center">
                                <p className="text-indigo-400 font-mono mb-2">UPTIME GARANTIDO</p>
                                <p className="text-6xl font-bold">99.99%</p>
                                <p className="text-slate-500 mt-4 text-sm">SLA Empresarial</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default ServiceStorage;
