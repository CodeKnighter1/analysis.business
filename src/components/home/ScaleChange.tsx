import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SplitText from '../SplitText';

export const ScaleWithoutChanging = () => {

    return (
        <section className="relative py-24 bg-[#000812] text-white overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-center max-w-7xl mx-auto mb-6">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#042cc0] text-2xl font-medium mb-3"
                        >
                            Built-In Intelligence
                        </motion.p>
                        <SplitText
                            text="Scale Without Changing Platforms"
                            className="text-3xl md:text-5xl text-white font-semibold text-center"
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
                    {/* Analytics Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group"
                    >
                        <div className='space-y-2'>
                            <img src="./features2.webp" alt="for show" className='rounded-xl border-2 border-[#495465]' />
                            <h2 className='text-xl'>
                                Track real-time visitors, and performance for every live website.
                            </h2>
                        </div>
                    </motion.div>

                    {/* Lighthouse Scores Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group"
                    >
                        <div className='space-y-2'>
                            <img src="./features1.webp" alt="" className='rounded-xl border-2 border-[#495465]' />
                            <h2 className='text-xl'>
                                SEO optimization that boosts your sites traffic and reach.
                            </h2>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};