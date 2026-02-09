
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Edit2, FileText, Calendar, Building } from 'lucide-react';
import invoiceImage from '../assets/invoice_capture.png';

interface InvoiceItem {
    desc: string;
    qty: string;
    price: string;
    total: string;
}

interface InvoiceData {
    invoiceNo: string;
    date: string;
    vendor: string;
    total: string;
    items: InvoiceItem[];
}

const InvoiceScanner = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-20%" });
    const [scanProgress, setScanProgress] = useState(0);
    const [extractedData, setExtractedData] = useState<InvoiceData>({
        invoiceNo: "",
        date: "",
        vendor: "",
        total: "",
        items: []
    });

    // Mock final data
    const finalData: InvoiceData = {
        invoiceNo: "FT 2024/0042",
        date: "24/05/2024",
        vendor: "TechSolutions, Lda",
        total: "1.250,00 €",
        items: [
            { desc: "Serviço de Consultoria", qty: "10h", price: "50,00 €", total: "500,00 €" },
            { desc: "Licenciamento Software", qty: "5", price: "150,00 €", total: "750,00 €" }
        ]
    };

    useEffect(() => {
        if (isInView) {
            // Reset state
            setScanProgress(0);
            setExtractedData({ invoiceNo: "", date: "", vendor: "", total: "", items: [] });

            // Animate scanning process
            const duration = 2000; // 2 seconds to scan
            const startTime = Date.now();

            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                setScanProgress(progress);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Fill data at different timings to simulate extraction
                    setTimeout(() => setExtractedData(prev => ({ ...prev, vendor: finalData.vendor })), 200);
                    setTimeout(() => setExtractedData(prev => ({ ...prev, invoiceNo: finalData.invoiceNo })), 400);
                    setTimeout(() => setExtractedData(prev => ({ ...prev, date: finalData.date })), 600);
                    setTimeout(() => setExtractedData(prev => ({ ...prev, items: finalData.items })), 800);
                    setTimeout(() => setExtractedData(prev => ({ ...prev, total: finalData.total })), 1000);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView]);

    return (
        <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Column: Scanner Visualization */}
                    <div className="w-full md:w-1/2 relative group">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 aspect-[3/4] max-h-[600px] mx-auto">
                            {/* Image Placeholder */}
                            <img
                                src={invoiceImage}
                                alt="Documento para digitalizar"
                                className="w-full h-full object-cover opacity-80"
                            />

                            {/* Scanning Beam */}
                            <motion.div
                                className="absolute left-0 right-0 h-1 bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)] z-20"
                                style={{ top: `${scanProgress * 100}%`, opacity: scanProgress < 1 ? 1 : 0 }}
                                transition={{ ease: "linear", duration: 0 }}
                            />

                            {/* Scan Overlay Gradient */}
                            <motion.div
                                className="absolute inset-0 bg-blue-500/10 z-10"
                                style={{
                                    clipPath: `inset(0 0 ${(1 - scanProgress) * 100}% 0)`
                                }}
                            />

                            {/* Identification Markers (Simulated) */}
                            {scanProgress > 0.3 && (
                                <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    className="absolute top-[20%] left-[20%] w-16 h-8 border-2 border-emerald-400 bg-emerald-400/20 rounded z-20"
                                />
                            )}
                            {scanProgress > 0.5 && (
                                <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    className="absolute top-[35%] right-[20%] w-24 h-8 border-2 border-emerald-400 bg-emerald-400/20 rounded z-20"
                                />
                            )}
                            {scanProgress > 0.8 && (
                                <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    className="absolute bottom-[20%] right-[15%] w-20 h-8 border-2 border-emerald-400 bg-emerald-400/20 rounded z-20"
                                />
                            )}


                        </div>


                    </div>

                    {/* Right Column: Extracted Data / Outcome */}
                    <div className="w-full md:w-1/2">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Extração Inteligente de Dados
                            </h2>
                            <p className="text-slate-600 text-lg">
                                O nosso sistema identifica e extrai automaticamente campos relevantes, permitindo análise imediata de acordo com os parâmetros que você escolher.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                            {/* Form Header */}
                            <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-sm font-semibold text-slate-700">Dados Extraídos</span>
                                </div>
                                <span className="text-xs text-slate-400 font-mono">CONFIDENCE SCORE: 98%</span>
                            </div>

                            {/* Form Body */}
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <InputField
                                        label="Número da Fatura"
                                        icon={FileText}
                                        value={extractedData.invoiceNo}
                                        placeholder="Detectando..."
                                    />
                                    <InputField
                                        label="Data de Emissão"
                                        icon={Calendar}
                                        value={extractedData.date}
                                        placeholder="Detectando..."
                                    />
                                </div>

                                <InputField
                                    label="Fornecedor"
                                    icon={Building}
                                    value={extractedData.vendor}
                                    placeholder="Identificando entidade..."
                                    fullWidth
                                />

                                <div className="border border-slate-100 rounded-lg overflow-hidden">
                                    <div className="bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider flex justify-between">
                                        <span>Items Detectados</span>
                                        <span>{extractedData.items.length > 0 ? extractedData.items.length : 0} items</span>
                                    </div>
                                    <div className="divide-y divide-slate-100 max-h-40 overflow-y-auto">
                                        {extractedData.items.length === 0 ? (
                                            <div className="p-4 text-center text-slate-400 text-sm italic">
                                                Aguardando análise...
                                            </div>
                                        ) : (
                                            extractedData.items.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="p-3 flex justify-between items-center text-sm"
                                                >
                                                    <div>
                                                        <span className="font-medium text-slate-700">{item.desc}</span>
                                                        <div className="text-xs text-slate-400">{item.qty} x {item.price}</div>
                                                    </div>
                                                    <span className="font-semibold text-slate-900">{item.total}</span>
                                                </motion.div>
                                            ))
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <div>
                                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total a Pagar</label>
                                        <div className="flex items-center gap-2">
                                            {extractedData.total ? (
                                                <motion.span
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="text-2xl font-bold text-emerald-600"
                                                >
                                                    {extractedData.total}
                                                </motion.span>
                                            ) : (
                                                <span className="h-8 w-24 bg-slate-100 animate-pulse rounded block"></span>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
                                    >
                                        <CheckCircle2 className="w-5 h-5" />
                                        Validar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface InputFieldProps {
    label: string;
    icon: React.ElementType; // Use React.ElementType for component props
    value: string;
    placeholder: string;
    fullWidth?: boolean;
}

const InputField = ({ label, icon: Icon, value, placeholder, fullWidth = false }: InputFieldProps) => (
    <div className={fullWidth ? "col-span-2" : ""}>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{label}</label>
        <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon className={`w-4 h-4 ${value ? 'text-blue-500' : 'text-slate-400'}`} />
            </div>
            <input
                type="text"
                value={value}
                readOnly
                placeholder={placeholder}
                className={`block w-full pl-10 pr-10 py-2.5 sm:text-sm border-slate-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all ${value ? 'bg-white font-medium text-slate-900 border-blue-200' : 'bg-slate-50 text-slate-400'}`}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-slate-400 hover:text-blue-600">
                <Edit2 className="w-4 h-4" />
            </div>
        </div>
    </div>
);

export default InvoiceScanner;
