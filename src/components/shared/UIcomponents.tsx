import React from 'react';

// Floating Orb Component for decorative background elements
export const FloatingOrb: React.FC<{
    className?: string;
    delay?: string;
    size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', delay = '0s', size = 'md' }) => {
    const sizeClasses = {
        sm: 'w-48 h-48',
        md: 'w-72 h-72',
        lg: 'w-96 h-96'
    };

    return (
        <div
            className={`absolute rounded-full blur-3xl animate-pulse ${sizeClasses[size]} ${className}`}
            style={{ animationDelay: delay }}
        />
    );
};

// Gradient Text Component
export const GradientText: React.FC<{
    children: React.ReactNode;
    className?: string;
    gradient?: string;
}> = ({
    children,
    className = '',
    gradient = 'from-blue-600 via-purple-600 to-pink-600'
}) => {
        return (
            <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
                {children}
            </span>
        );
    };

// Glass Card Component
export const GlassCard: React.FC<{
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}> = ({ children, className = '', hover = true }) => {
    return (
        <div
            className={`
        bg-white/80 backdrop-blur-xl rounded-3xl 
        border border-gray-200/60 shadow-xl
        ${hover ? 'hover:shadow-2xl transition-all duration-300 hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};

// Badge Component
export const Badge: React.FC<{
    children: React.ReactNode;
    variant?: 'default' | 'success' | 'warning' | 'info';
    className?: string;
}> = ({ children, variant = 'default', className = '' }) => {
    const variants = {
        default: 'bg-gray-100 text-gray-700 border-gray-200',
        success: 'bg-green-100 text-green-700 border-green-200',
        warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        info: 'bg-blue-100 text-blue-700 border-blue-200'
    };

    return (
        <span
            className={`
        inline-flex items-center gap-2 px-3 py-1.5 
        rounded-full text-xs font-semibold border
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
};

// Feature Card Component
export const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient?: string;
}> = ({
    icon,
    title,
    description,
    gradient = 'from-blue-500 to-purple-500'
}) => {
        return (
            <div className="group relative">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
            </div>
        );
    };

// Stat Card Component
export const StatCard: React.FC<{
    label: string;
    value: string | number;
    trend?: 'up' | 'down' | 'neutral';
    icon?: React.ReactNode;
}> = ({ label, value, trend = 'neutral', icon }) => {
    const trendColors = {
        up: 'text-green-600',
        down: 'text-red-600',
        neutral: 'text-gray-600'
    };

    return (
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
                <p className="text-sm font-medium text-gray-600">{label}</p>
                {icon && <div className="text-gray-400">{icon}</div>}
            </div>
            <p className={`text-3xl font-bold ${trendColors[trend]}`}>{value}</p>
        </div>
    );
};

// Progress Bar Component
export const ProgressBar: React.FC<{
    value: number;
    max?: number;
    label?: string;
    gradient?: string;
    showValue?: boolean;
}> = ({
    value,
    max = 100,
    label,
    gradient = 'from-blue-500 to-purple-500',
    showValue = true
}) => {
        const percentage = Math.min((value / max) * 100, 100);

        return (
            <div className="space-y-2">
                {label && (
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{label}</span>
                        {showValue && (
                            <span className="text-sm font-bold text-gray-900">{Math.round(percentage)}%</span>
                        )}
                    </div>
                )}
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradient} rounded-full transition-all duration-500 ease-out`}
                        style={{ width: `${percentage}%` }}
                    >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                    </div>
                </div>
            </div>
        );
    };

// Timeline Item Component
export const TimelineItem: React.FC<{
    title: string;
    description: string;
    date?: string;
    icon?: React.ReactNode;
    isLast?: boolean;
}> = ({ title, description, date, icon, isLast = false }) => {
    return (
        <div className="relative flex gap-4 pb-8">
            {/* Timeline line */}
            {!isLast && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            )}

            {/* Icon */}
            <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                {icon}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
                <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-gray-900">{title}</h4>
                    {date && <span className="text-xs text-gray-500">{date}</span>}
                </div>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

// Loading Skeleton Component
export const Skeleton: React.FC<{
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
}> = ({ className = '', variant = 'rectangular' }) => {
    const variants = {
        text: 'h-4 rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-lg'
    };

    return (
        <div className={`bg-gray-200 animate-pulse ${variants[variant]} ${className}`}></div>
    );
};

// Tooltip Component
export const Tooltip: React.FC<{
    children: React.ReactNode;
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}> = ({ children, content, position = 'top' }) => {
    const [show, setShow] = React.useState(false);

    const positions = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {children}
            {show && (
                <div className={`absolute ${positions[position]} z-50 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap shadow-xl animate-fade-in`}>
                    {content}
                    <div className="absolute w-2 h-2 bg-gray-900 rotate-45 left-1/2 -translate-x-1/2 -bottom-1"></div>
                </div>
            )}
        </div>
    );
};