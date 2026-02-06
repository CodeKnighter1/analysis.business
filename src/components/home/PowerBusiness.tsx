import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        id: 'sell',
        label: 'Sell',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
        title: 'Sell A Product',
        description: "Boost your efficiency with Webild's custom sell engine and give your customers a premium experience."
    },
    {
        id: 'book',
        label: 'Book',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80',
        title: 'Book A Service',
        description: "Boost your efficiency with Webild's custom booking engine and give your customers a premium experience."
    },
    {
        id: 'blog',
        label: 'Blog',
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80',
        title: 'Blog Content',
        description: "Boost your efficiency with Webild's custom blog engine and give your customers a premium experience."
    },
    {
        id: 'contact',
        label: 'Contact',
        image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80',
        title: 'Contact Us',
        description: "Boost your efficiency with Webild's custom contact engine and give your customers a premium experience."
    },
];

export const PowerBusiness = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Auto-carousel
    useEffect(() => {
        autoPlayRef.current = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % categories.length);
        }, 4000);

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, []);

    const handleTabClick = (newIndex: number) => {
        // Auto-play ni to'xtatish
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }

        // Yo'nalishni aniqlash
        setDirection(newIndex > index ? 1 : -1);
        setIndex(newIndex);

        // Auto-play ni qayta boshlash
        autoPlayRef.current = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % categories.length);
        }, 4000);
    };

    return (
        <section className="relative py-24 bg-[#020617] text-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="space-y-4 mb-12 text-center">
                    <p className="text-blue-500 font-medium">Everything you need to grow online.</p>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Power Your Business</h2>
                </div>

                {/* Tablar */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10">
                        {categories.map((cat, i) => (
                            <button
                                key={cat.id}
                                onClick={() => handleTabClick(i)}
                                className={`relative px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${index === i ? 'text-black' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {index === i && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Carousel Container - 3 cards visible */}
                <div className="relative w-full h-[500px] md:h-[600px] mb-12">
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        {/* Chap, Markaz va O'ng cardlar */}
                        {[-1, 0, 1].map((offset) => {
                            const slideIndex = (index + offset + categories.length) % categories.length;
                            const slide = categories[slideIndex];
                            const isCenter = offset === 0;

                            return (
                                <motion.div
                                    key={`${slideIndex}-${offset}`}
                                    initial={false}
                                    animate={{
                                        x: `${offset * 75}%`, // Har bir card 75% ga siljiydi
                                        scale: isCenter ? 1 : 0.85,
                                        opacity: isCenter ? 1 : 0.4,
                                        zIndex: isCenter ? 30 : 10,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                    className={`absolute w-[85%] md:w-[70%] h-full ${!isCenter ? 'pointer-events-none' : ''
                                        }`}
                                >
                                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                                        {/* Rasm */}
                                        <img
                                            src={slide.image}
                                            alt={slide.label}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 ${isCenter
                                            ? 'bg-linear-to-t from-black/80 via-black/30 to-transparent'
                                            : 'bg-linear-to-t from-black/60 via-black/40 to-black/20'
                                            }`} />

                                        {/* Content Card - faqat markazda */}
                                        {isCenter && (
                                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2, duration: 0.4 }}
                                                    className="bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/20 max-w-2xl"
                                                >
                                                    <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                                                        {slide.title}
                                                    </h3>
                                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                                                        {slide.description}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2">
                    {categories.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleTabClick(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-white' : 'w-2 bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};