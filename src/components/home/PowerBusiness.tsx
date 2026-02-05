import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
    { id: 'sell', label: 'Sell', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
    { id: 'book', label: 'Book', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80' },
    { id: 'blog', label: 'Blog', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80' },
    { id: 'contact', label: 'Contact', image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&q=80' },
];

export const PowerBusiness = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // 4 soniyalik taymer
    useEffect(() => {
        const timer = setInterval(() => {
            nextStep();
        }, 4000);
        return () => clearInterval(timer);
    }, [index]);

    const nextStep = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % categories.length);
    };

    const handleTabClick = (newIndex: number) => {
        setDirection(newIndex > index ? 1 : -1);
        setIndex(newIndex);
    };

    return (
        <section className="relative py-24 bg-[#020617] text-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                {/* Header qismi */}
                <div className="space-y-4 mb-12">
                    <p className="text-blue-500 font-medium">Everything you need to grow online.</p>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Power Your Business</h2>
                </div>

                {/* Tablar (Sell, Book, Blog, Contact) */}
                <div className="inline-flex bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 mb-16">
                    {categories.map((cat, i) => (
                        <button
                            key={cat.id}
                            onClick={() => handleTabClick(i)}
                            className={`relative px-8 py-2.5 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 ${index === i ? 'text-black' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {index === i && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white rounded-full z-[-1]"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Carousel qismi */}
                <div className="relative h-[600px] w-full max-w-6xl mx-auto flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            initial={{ opacity: 0, x: direction > 0 ? 300 : -300, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: direction > 0 ? -300 : 300, scale: 0.9 }}
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 50 },
                                opacity: { duration: 0.4 }
                            }}
                            className="absolute w-full h-full flex items-center justify-center p-4"
                        >
                            {/* Markaziy Card */}
                            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={categories[index].image}
                                    alt={categories[index].label}
                                    className="w-full h-full object-cover"
                                />

                                {/* Rasmdagi overlay elementlar (Placeholder sifatida) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
                                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 w-full max-w-md text-left">
                                        <h3 className="text-3xl font-bold mb-2">{categories[index].label} A Table</h3>
                                        <p className="text-gray-300">Boost your efficiency with Webild's custom {categories[index].label.toLowerCase()} engine.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Yon tomondagi Cardlar (Ko'rinib turadigan chekkalar) */}
                    <div className="absolute -left-[40%] w-[35%] h-[570px] opacity-100 rounded-xl overflow-hidden pointer-events-none lg:block">
                        <img src={categories[(index - 1 + categories.length) % categories.length].image} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -right-[40%] w-[35%] h-[570px] opacity-100 rounded-xl overflow-hidden pointer-events-none lg:block">
                        <img src={categories[(index + 1) % categories.length].image} className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Carousel Dots indicator */}
                <div className="flex justify-center gap-2 mt-12">
                    {categories.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-white' : 'w-2 bg-gray-600'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};