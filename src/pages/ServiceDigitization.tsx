import { useEffect } from 'react';
import { Scan, FileCheck, ShieldCheck } from 'lucide-react';
import Contact from '../components/Contact';

const ServiceDigitization = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase">Serviço Premium</span>
                    <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Digitalização Certificada
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                        Transforme o seu arquivo físico em digital com validade legal e pesquisa inteligente.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg h-fit">
                                <Scan className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Digitalização de Alta Resolução</h3>
                                <p className="text-slate-600">Usamos scanners industriais capazes de processar milhares de páginas por hora, garantindo qualidade de imagem superior (300-600 DPI).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg h-fit">
                                <FileCheck className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">OCR e Metadados</h3>
                                <p className="text-slate-600">Tecnologia OCR (Optical Character Recognition) que torna todos os seus documentos pesquisáveis por conteúdo, não apenas pelo nome do ficheiro.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg h-fit">
                                <ShieldCheck className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Conformidade Legal</h3>
                                <p className="text-slate-600">Processos certificados que garantem a autenticidade e integridade da cópia digital, permitindo em muitos casos a destruição do original.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">O que digitalizamos?</h3>
                        <ul className="space-y-4">
                            {['Faturas e Contabilidade', 'Processos de RH', 'Desenhos Técnicos e Plantas (Grandes Formatos)', 'Contratos e Escrituras', 'Processos Clínicos', 'Livros e Revistas'].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default ServiceDigitization;
