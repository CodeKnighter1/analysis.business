import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SplitText from '../SplitText';
import { ArrowRight } from 'lucide-react';

const steps = [
    {
        title: "Start with a single prompt",
        description: "and watch Webild turn your idea into a professional site tailored to your needs.",
        image: "/step1.png", // O'zingizdagi rasmni qo'ying
        delay: 0.2
    },
    {
        title: "Customize anything",
        description: "on your site with a single click. Edit text, swap images, and move elements so everything feels made for you.",
        image: "/step2.png",
        delay: 0.4
    },
    {
        title: "Launch your site",
        description: "in seconds with your own domain. Enjoy free built-in hosting and go live without ever leaving Webild.",
        image: "/step3.png",
        delay: 0.6
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-24 px-4 bg-[#f5f8ff] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header qismi */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-end mb-16">
                    <div className="space-y-2 flex flex-col items-center">
                        <span className="text-blue-500 font-medium text-sm">How It Works</span>
                        <SplitText
                            text="Build and launch your website in minutes"
                            className="text-3xl md:text-4xl text-black font-semibold text-center"
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

                {/* Cardlar konteyneri */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: step.delay,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            className="flex flex-col space-y-1"
                        >
                            {/* Rasm qismi - Shishasimon effekt bilan */}
                            <div className="aspect-4/3 rounded-[2rem] bg-linear-to-b from-slate-50 to-white border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center p-4 relative group">
                                <div className="absolute inset-0 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {/* Bu yerga rasm o'rniga vizual placeholder qo'ydim */}
                                <div className="w-full h-full rounded-xl border border-slate-200/50 bg-white/50 backdrop-blur-md shadow-inner flex items-center justify-center">
                                    <p className="text-slate-300 text-sm">Step Visual {index + 1}</p>
                                </div>
                            </div>

                            {/* Matn qismi */}
                            <div className="space-y-2 px-2">
                                <h3 className="flex flex-col text-lg font-bold text-slate-900">
                                    {step.title} <span className="text-slate-500 leading-relaxed text-[15px]">{step.description}</span>
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Yarim oy shaklidagi professional gradient */}
            <div className="absolute -bottom-100 left-0 right-0 h-[400px] overflow-hidden pointer-events-none z-0">
                <div
                    className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[160%] h-[600px] opacity-80"
                    style={{
                        background: 'radial-gradient(circle at center, #3b82f6 0%, #1d4ed8 30%, #050a1a 70%, transparent 100%)',
                        clipPath: 'ellipse(50% 50% at 50% 50%)', // Shaklni yarim oyga aylantiradi
                        filter: 'blur(60px)',
                    }}
                />
            </div>
        </section>
    );
};