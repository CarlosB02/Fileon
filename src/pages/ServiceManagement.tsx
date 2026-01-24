import React, { useEffect } from 'react';
import { Files, FolderGit2, Share2 } from 'lucide-react';
import Contact from '../components/Contact';

const ServiceManagement = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-purple-600 font-semibold tracking-wide uppercase">Software GED</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Gestão Documental Inteligente
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                        Mais do que guardar, organize e automatize os fluxos de trabalho da sua empresa.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl border-t-4 border-purple-500 shadow-sm hover:shadow-lg transition-all">
                        <Files className="w-10 h-10 text-purple-600 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Arquivo Vivo</h3>
                        <p className="text-slate-600">Sistema que permite classificar, etiquetar e relacionar documentos automaticamente assim que entram no sistema.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border-t-4 border-purple-500 shadow-sm hover:shadow-lg transition-all">
                        <FolderGit2 className="w-10 h-10 text-purple-600 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Versionamento</h3>
                        <p className="text-slate-600">Nunca mais perca uma alteração. Mantenha o histórico completo de todas as versões de um documento e quem as fez.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border-t-4 border-purple-500 shadow-sm hover:shadow-lg transition-all">
                        <Share2 className="w-10 h-10 text-purple-600 mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Workflows</h3>
                        <p className="text-slate-600">Aprovações digitais. Envie uma fatura para aprovação do gestor com um clique, sem papel e sem emails perdidos.</p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default ServiceManagement;
