import React from 'react';
import { MotionProps } from 'framer-motion';

declare module 'framer-motion' {
    export interface MotionProps {
        className?: string;
        initial?: any;
        animate?: any;
        transition?: any;
        whileHover?: any;
        whileTap?: any;
        exit?: any;
        variants?: any;
        whileInView?: any;
        viewport?: any;
    }
}
