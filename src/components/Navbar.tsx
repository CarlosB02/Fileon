import { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setDropdownOpen(false);
    }, [location]);

    // Handle scroll for background transparency
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Update scrolled state for background
            setIsScrolled(currentScrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const services = [
        { name: 'Digitalização', href: '/digitization' },
        { name: 'Recuperação', href: '/recovery' },
        { name: 'Armazenamento Web', href: '/armazenamento-web' },
        { name: 'Gestão Documental', href: '/gestao-documental' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isOpen
                ? 'bg-transparent py-4'
                : isScrolled || (location.pathname !== '/' && location.pathname !== '/casos-reais')
                    ? 'bg-white/90 backdrop-blur-md shadow-lg py-4'
                    : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 z-50 relative">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <span className={`text-2xl font-bold tracking-tight ${location.pathname !== '/' || isOpen ? 'text-slate-900' : 'text-slate-900'}`}>
                            Fileon<span className="text-blue-600">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button className={`flex items-center text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname !== '/' ? 'text-slate-600' : 'text-slate-600'
                                }`}>
                                Serviços
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full -left-4 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 mt-2"
                                    >
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                to={service.href}
                                                className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>



                        <Link to="/casos-reais" className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname !== '/' ? 'text-slate-600' : 'text-slate-600'
                            }`}>
                            Casos Reais
                        </Link>

                        <Link to="/about" className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname !== '/' ? 'text-slate-600' : 'text-slate-600'
                            }`}>
                            Sobre Nós
                        </Link>

                        <Link to="/contactos" className={`text-sm font-medium transition-colors hover:text-blue-600 ${location.pathname !== '/' ? 'text-slate-600' : 'text-slate-600'
                            }`}>
                            Contactos
                        </Link>

                        <Link to="/contactos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg">
                            Demonstração Gratuita
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 z-50 relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-8 h-8 text-slate-900" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-20 px-6 overflow-y-auto h-[100dvh] pb-8"
                    >
                        <motion.div
                            className="flex flex-col space-y-2"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    transition: { staggerChildren: 0.1 }
                                },
                                closed: {
                                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                }
                            }}
                        >
                            <div className="space-y-2">
                                <motion.p
                                    className="text-xs font-bold text-blue-600 uppercase tracking-widest pl-2"
                                    variants={{
                                        open: { opacity: 1, x: 0 },
                                        closed: { opacity: 0, x: -20 }
                                    }}
                                >
                                    Serviços
                                </motion.p>
                                {services.map((link) => (
                                    <motion.div
                                        key={link.name}
                                        variants={{
                                            open: { opacity: 1, x: 0 },
                                            closed: { opacity: 0, x: -20 }
                                        }}
                                    >
                                        <Link
                                            to={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block text-xl font-semibold text-slate-800 hover:text-blue-600 transition-colors pl-2 border-l-4 border-transparent hover:border-blue-600"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="h-px bg-slate-200 my-4"
                                variants={{
                                    open: { opacity: 1, scaleX: 1 },
                                    closed: { opacity: 0, scaleX: 0 }
                                }}
                            />

                            <div className="space-y-2">
                                {[
                                    { name: 'Casos Reais', href: '/casos-reais', isAnchor: false },
                                    { name: 'Sobre Nós', href: '/about', isAnchor: false },
                                    { name: 'Contactos', href: '/contactos', isAnchor: false }
                                ].map((item) => (
                                    <motion.div
                                        key={item.name}
                                        variants={{
                                            open: { opacity: 1, x: 0 },
                                            closed: { opacity: 0, x: -20 }
                                        }}
                                    >
                                        {item.isAnchor ? (
                                            <a
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-lg font-medium text-slate-600 hover:text-blue-600 transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="pt-4"
                                variants={{
                                    open: { opacity: 1, y: 0 },
                                    closed: { opacity: 0, y: 20 }
                                }}
                            >
                                <Link
                                    to="/contactos"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-blue-600 text-white rounded-xl py-4 text-lg font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
                                >
                                    Demonstração Gratuita
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
