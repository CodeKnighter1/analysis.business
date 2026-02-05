import React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { FaDiscord, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

interface HeaderProps {
    showReset?: boolean;
    onReset?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ showReset, onReset }) => {
    return (
        <header className="fixed top-0 left-0 right-0 max-w-[78rem] mx-auto z-50">
            <div className="mx-2 mt-6">
                {/* Asosiy konteyner: shaffofroq va to'liq yumaloq */}
                <div className="relative bg-white/40 backdrop-blur-xl rounded-lg border border-white/40 shadow-sm">
                    <div className="max-w-7xl mx-auto px-2 py-1.5">
                        <div className="flex items-center justify-between">

                            {/* Logo qismi */}
                            <div className="flex items-center pl-2">
                                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                                    Webild
                                </h1>
                            </div>

                            {/* O'ng tomon - Ikonkalar va Tugma */}
                            <div className="flex items-center gap-2">

                                {/* Social Media Icons */}
                                <div className="hidden md:flex items-center gap-1 mr-1">
                                    {[
                                        { icon: <FaDiscord />, href: "#" },
                                        { icon: <FaLinkedin />, href: "#" },
                                        { icon: <FaXTwitter />, href: "#" },
                                        { icon: <FaInstagram />, href: "#" }
                                    ].map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-700 border border-slate-200 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                                        >
                                            <span className="text-sm">{item.icon}</span>
                                        </a>
                                    ))}
                                </div>

                                {/* Reset tugmasi */}
                                {showReset && onReset && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={onReset}
                                        className="hidden sm:flex items-center gap-2 bg-white/80 border-slate-200 hover:bg-white text-slate-700 rounded-full transition-all"
                                    >
                                        <RotateCcw className="w-3.5 h-3.5" />
                                        <span className="text-xs font-medium">Yangi tahlil</span>
                                    </Button>
                                )}

                                {/* Get Early Access Tugmasi - Rasmdagidek gradient va yumaloq */}
                                <Button className="bg-[#4D94FF] hover:bg-[#3b82f6] text-white rounded-full px-6 py-5 text-sm font-medium shadow-md transition-all active:scale-95 border-0">
                                    Get Early Access
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};