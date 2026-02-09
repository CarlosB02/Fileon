import { Link } from 'react-router-dom';
import { FileText, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">Fileon.</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Transformamos empresas através da digitalização inteligente. Segurança, rapidez e eficiência para o seu arquivo.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Serviços</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Digitalização de Documentos</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Recuperação de Arquivos</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Storage Web Seguro</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Gestão Documental</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Empresa</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
                            <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">Como Funciona</a></li>
                            <li><a href="#security" className="hover:text-blue-400 transition-colors">Segurança</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contactos</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contacts */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contactos</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center">
                                <span className="font-semibold text-white min-w-[60px]">Email:</span>
                                <a href="mailto:ola@fileon.pt" className="hover:text-blue-400">geral@fileon.pt</a>
                            </li>
                            <li className="flex items-center">
                                <span className="font-semibold text-white min-w-[60px]">Telemóvel:</span>
                                <a href="tel:+351210000000" className="hover:text-blue-400">+351 910 000 000</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Fileon. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacidade" className="hover:text-slate-300">Política de Privacidade</Link>
                        <Link to="/termos" className="hover:text-slate-300">Termos e Condições</Link>
                        <Link to="/rgpd" className="hover:text-slate-300">RGPD</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
