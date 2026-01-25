import { useEffect } from 'react';
import { Database, AlertTriangle, RefreshCw } from 'lucide-react';
import Contact from '../components/Contact';

const ServiceRecovery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase">Serviço Especializado</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Recuperação de Arquivos
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                        Resgatamos informação de documentos danificados, antigos ou em suportes obsoletos.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <Database className="w-12 h-12 text-emerald-600 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Mídia Obsoleta</h3>
                        <p className="text-slate-600">Recuperamos dados de disquetes, CDs, cassetes, microfilmes e fitas magnéticas antigas, convertendo para formatos modernos.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <AlertTriangle className="w-12 h-12 text-orange-500 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Documentos Danificados</h3>
                        <p className="text-slate-600">Tratamento físico e digital de papel deteriorado pela humidade, tempo ou manuseamento incorreto.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <RefreshCw className="w-12 h-12 text-blue-600 mb-6" />
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Restauro Digital</h3>
                        <p className="text-slate-600">Melhoria de imagem, remoção de ruído e manchas em documentos digitalizados para máxima legibilidade.</p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default ServiceRecovery;
