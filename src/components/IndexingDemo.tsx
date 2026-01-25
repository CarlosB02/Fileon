
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, Calendar, Building, MapPin, Check, Filter } from 'lucide-react';

// Mock Data for the Demo
const documents = [
    { id: 1, name: 'Fatura_A_001.pdf', date: '2023-10', company: 'TechCorp', location: 'Lisboa', type: 'invoice' },
    { id: 2, name: 'Contrato_B_102.pdf', date: '2023-11', company: 'LegalSol', location: 'Porto', type: 'contract' },
    { id: 3, name: 'Recibo_C_205.pdf', date: '2023-10', company: 'TechCorp', location: 'Porto', type: 'invoice' },
    { id: 4, name: 'Relatorio_D_404.pdf', date: '2023-12', company: 'Construct', location: 'Lisboa', type: 'report' },
    { id: 5, name: 'Fatura_E_111.pdf', date: '2023-11', company: 'TechCorp', location: 'Lisboa', type: 'invoice' },
    { id: 6, name: 'Guia_F_222.pdf', date: '2023-12', company: 'LegalSol', location: 'Coimbra', type: 'guide' },
    { id: 7, name: 'Contrato_G_333.pdf', date: '2023-10', company: 'Construct', location: 'Coimbra', type: 'contract' },
    { id: 8, name: 'Fatura_H_444.pdf', date: '2023-12', company: 'LegalSol', location: 'Lisboa', type: 'invoice' },
];

const filters = {
    dates: ['2023-10', '2023-11', '2023-12'],
    companies: ['TechCorp', 'LegalSol', 'Construct'],
    locations: ['Lisboa', 'Porto', 'Coimbra'],
};

const IndexingDemo = () => {
    const [activeFilters, setActiveFilters] = useState({
        date: 'All',
        company: 'All',
        location: 'All',
    });

    const handleFilterChange = (category: string, value: string) => {
        setActiveFilters(prev => ({
            ...prev,
            [category]: prev[category as keyof typeof prev] === value ? 'All' : value
        }));
    };

    const filteredDocs = documents.filter(doc => {
        return (activeFilters.date === 'All' || doc.date === activeFilters.date) &&
            (activeFilters.company === 'All' || doc.company === activeFilters.company) &&
            (activeFilters.location === 'All' || doc.location === activeFilters.location);
    });

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-xs">Organização Inteligente</span>
                    <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                        Encontre qualquer documento em segundos
                    </h2>
                    <p className="text-base text-slate-600 max-w-2xl mx-auto">
                        A nossa indexação avançada permite classificar documentos por múltiplos critérios.
                        Experimente a demonstração abaixo.
                    </p>
                </div>

                <div className="bg-slate-50 rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[400px]">
                    {/* Sidebar Filters */}
                    <div className="w-full md:w-64 bg-white border-r border-slate-200 p-4 flex-shrink-0">
                        <div className="flex items-center space-x-2 text-slate-800 font-bold text-base mb-4">
                            <Filter className="w-4 h-4 text-blue-600" />
                            <span>Filtros de Pesquisa</span>
                        </div>

                        <div className="space-y-4">
                            {/* Date Filter */}
                            <div>
                                <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center">
                                    <Calendar className="w-3 h-3 mr-1.5" /> Data
                                </h4>
                                <div className="space-y-1">
                                    {filters.dates.map(date => (
                                        <button
                                            key={date}
                                            onClick={() => handleFilterChange('date', date)}
                                            className={`w-full text-left px-2 py-1.5 rounded-md text-xs transition-all duration-200 flex items-center justify-between ${activeFilters.date === date
                                                    ? 'bg-blue-50 text-blue-700 font-medium ring-1 ring-blue-200'
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                                }`}
                                        >
                                            <span>{date}</span>
                                            {activeFilters.date === date && <Check className="w-3 h-3" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Company Filter */}
                            <div>
                                <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center">
                                    <Building className="w-3 h-3 mr-1.5" /> Empresa
                                </h4>
                                <div className="space-y-1">
                                    {filters.companies.map(company => (
                                        <button
                                            key={company}
                                            onClick={() => handleFilterChange('company', company)}
                                            className={`w-full text-left px-2 py-1.5 rounded-md text-xs transition-all duration-200 flex items-center justify-between ${activeFilters.company === company
                                                    ? 'bg-indigo-50 text-indigo-700 font-medium ring-1 ring-indigo-200'
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                                }`}
                                        >
                                            <span>{company}</span>
                                            {activeFilters.company === company && <Check className="w-3 h-3" />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div>
                                <h4 className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center">
                                    <MapPin className="w-3 h-3 mr-1.5" /> Localização
                                </h4>
                                <div className="space-y-1">
                                    {filters.locations.map(location => (
                                        <button
                                            key={location}
                                            onClick={() => handleFilterChange('location', location)}
                                            className={`w-full text-left px-2 py-1.5 rounded-md text-xs transition-all duration-200 flex items-center justify-between ${activeFilters.location === location
                                                    ? 'bg-emerald-50 text-emerald-700 font-medium ring-1 ring-emerald-200'
                                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                                }`}
                                        >
                                            <span>{location}</span>
                                            {activeFilters.location === location && <Check className="w-3 h-3" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={() => setActiveFilters({ date: 'All', company: 'All', location: 'All' })}
                            className="w-full mt-6 py-1.5 px-3 border border-slate-200 rounded-lg text-slate-500 text-xs hover:bg-slate-50 hover:text-slate-700 transition-colors"
                        >
                            Limpar Filtros
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 p-6 bg-slate-50/50 relative">

                        {/* Search Bar Simulation */}
                        <div className="mb-6 max-w-lg">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Pesquisar por nome do ficheiro..."
                                    className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-xs"
                                    readOnly
                                />
                            </div>
                            <div className="flex gap-2 mt-3">
                                {Object.entries(activeFilters).map(([key, value]) => (
                                    value !== 'All' && (
                                        <span key={key} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {value}
                                        </span>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Results Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            <AnimatePresence mode='popLayout'>
                                {filteredDocs.map((doc) => (
                                    <motion.div
                                        layout
                                        key={doc.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                        className="bg-white p-3 rounded-lg border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
                                    >
                                        <div className="flex justify-center mb-2">
                                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                                <FileText className="w-5 h-5 text-blue-600" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-medium text-slate-700 truncate mb-1" title={doc.name}>{doc.name}</p>
                                            <div className="flex flex-wrap justify-center gap-1 text-[9px] text-slate-400">
                                                <span className="bg-slate-100 px-1 py-0.5 rounded">{doc.date}</span>
                                                <span className="bg-slate-100 px-1 py-0.5 rounded">{doc.location}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredDocs.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 flex items-center justify-center flex-col text-slate-400"
                            >
                                <Search className="w-10 h-10 mb-2 opacity-20" />
                                <p className="text-sm">Nenhum documento encontrado.</p>
                            </motion.div>
                        )}

                        <div className="absolute bottom-4 right-6 text-[10px] text-slate-400 font-mono">
                            {filteredDocs.length} documentos encontrados
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexingDemo;
