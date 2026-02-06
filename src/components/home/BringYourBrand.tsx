import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SplitText from '../SplitText';

export const BringYourBrand = () => {
    return (
        <section className="relative py-24 bg-[#f5f8ff] overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-center max-w-7xl mx-auto mb-6">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#4d96ff] text-2xl font-medium mb-3"
                        >
                            Make it uniquely yours
                        </motion.p>
                        <SplitText
                            text="Bring Your Brand To Life"
                            className="text-3xl md:text-5xl text-black font-semibold text-center"
                            delay={50}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />

                    </div>

                    <button className="group relative transition-all duration-300 ease-in-out shadow-[0px_10px_20px_rgba(0,0,0,0.2)] py-2 px-5 bg-[rgb(0,107,179)] rounded-full flex items-center justify-center cursor-pointer text-white gap-2.5 font-bold border-[3px] border-white/30 outline-none overflow-hidden text-[15px] hover:scale-105 hover:border-white/60">
                        <span className="relative z-10 flex items-center gap-2">
                            Get Early Access
                            <ArrowRight className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                        </span>
                        <div className="absolute top-0 -left-[100px] w-[100px] h-full bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.8),transparent_70%)] opacity-60 group-hover:animate-shine" />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Image Generation Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group"
                    >
                        <div className="transition-all duration-500 h-full flex flex-col">
                            {/* Bento Grid Card */}
                            <div className="relative bg-linear-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-6 mb-4 overflow-hidden shadow-sm border border-gray-100">
                                <div>
                                    <img src="./brand1.webp" alt="for section" />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-auto px-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Create on-brand images{' '}
                                    <span className="text-gray-500 font-normal">
                                        for your website and marketing, instantly.
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Logo Generation Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group"
                    >
                        <div className="transition-all duration-500 h-full flex flex-col">
                            <div className="relative bg-linear-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-6 mb-4 overflow-hidden shadow-sm border border-gray-100">
                                <div>
                                    <img src="./brand2.webp" alt="for section" />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-auto">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Get AI-crafted logos{' '}
                                    <span className="text-gray-500 font-normal">
                                        that fit your brand's style, color, and tone.
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};