import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-slate-50">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-lg w-full">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileQuestion className="w-10 h-10 text-blue-600" />
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-2">404</h1>
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Página não encontrada</h2>

                <p className="text-slate-600 mb-8">
                    A página que procura não existe ou foi removida.
                    Verifique o endereço ou volte para a página inicial.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Voltar ao Início
                    </Link>

                    <Link
                        to="/contactos"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors w-full sm:w-auto"
                    >
                        Contacte-nos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
