import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'What is Webild?',
        answer: "Webild is an AI-powered platform for creating and running professional websites. Describe your idea, and Webild designs the layout, writes the content, adds visuals, and brings everything together in one seamless experience.",
    },
    {
        question: 'What can I build with Webild?',
        answer: 'You can build professional websites, online stores, portfolios, blogs, landing pages, and much more. Webild provides all the tools you need to create a stunning online presence without any coding knowledge.',
    },
    {
        question: 'Can I use Webild for my business, not just a website?',
        answer: 'Absolutely! Webild is designed for businesses of all sizes. You can manage your online store, accept payments, track analytics, and grow your business all from one platform.',
    },
    {
        question: 'Do I need design or coding experience to use Webild?',
        answer: 'Not at all! Webild is built for everyone. Our AI handles the technical stuff while you focus on your content and business goals. Simply describe what you want, and Webild brings it to life.',
    },
    {
        question: 'Can I buy my own domain with Webild?',
        answer: 'Yes! You can connect your existing domain or purchase a new one directly through Webild. We make domain management simple and integrated into your workflow.',
    },
    {
        question: 'Can I edit or update my site after publishing?',
        answer: 'Of course! You have full control to edit and update your site anytime. Make changes to content, design, or features whenever you need - your site evolves with your business.',
    },
    {
        question: 'Can I sell products or services with Webild?',
        answer: 'Yes! Webild includes powerful e-commerce features. You can sell physical products, digital goods, services, subscriptions, and more. Accept payments, manage inventory, and handle shipping all in one place.',
    },
    {
        question: 'Who is Bob?',
        answer: "Bob is Webild's AI assistant who helps you build and manage your website. Bob understands your needs, suggests improvements, and makes the entire website building process feel like chatting with a helpful friend.",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 bg-[#f5f8ff] overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-medium mb-3"
                    >
                        Frequently Asked Questions
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900"
                    >
                        Still have questions about Webild?
                    </motion.h2>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-2">
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <div
                                className={`bg-[#f8faff] rounded-2xl border transition-all duration-300 overflow-hidden ${
                                    openIndex === index
                                        ? 'border-blue-200 shadow-lg shadow-blue-100/50'
                                        : 'border-gray-200/60 hover:border-gray-300 shadow-sm'
                                }`}
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-3 md:p-4 text-left transition-colors duration-200"
                                >
                                    <span className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                                        {faq.question}
                                    </span>
                                    
                                    {/* Icon */}
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                                            openIndex === index
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-[#f8faff] text-blue-600 group-hover:bg-blue-200'
                                        }`}
                                    >
                                        {openIndex === index ? (
                                            <X className="w-5 h-5" strokeWidth={2.5} />
                                        ) : (
                                            <Plus className="w-5 h-5" strokeWidth={2.5} />
                                        )}
                                    </motion.div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ 
                                                height: 'auto', 
                                                opacity: 1,
                                                transition: {
                                                    height: {
                                                        duration: 0.4,
                                                        ease: [0.4, 0, 0.2, 1], // Custom easing for smooth animation
                                                    },
                                                    opacity: {
                                                        duration: 0.3,
                                                        delay: 0.1,
                                                    },
                                                }
                                            }}
                                            exit={{ 
                                                height: 0, 
                                                opacity: 0,
                                                transition: {
                                                    height: {
                                                        duration: 0.3,
                                                        ease: [0.4, 0, 0.2, 1],
                                                    },
                                                    opacity: {
                                                        duration: 0.2,
                                                    },
                                                }
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-7 pb-2 pt-0">
                                                <motion.div
                                                    initial={{ y: -10 }}
                                                    animate={{ y: 0 }}
                                                    exit={{ y: -10 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="border-t border-gray-100"
                                                >
                                                    <p className="text-gray-600 text-base md:text-lg">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA (optional) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        Still have more questions?
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-200">
                        Contact Support
                    </button>
                </motion.div>
            </div>
        </section>
    );
};