'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = { children: React.ReactNode; delay?: number };

function Heading({ children, delay = 0.125 }: Props) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)', scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay }}
            viewport={{ amount: 0.5, once: true }}
        >
            {children}
        </motion.h2>
    );
}

export default Heading;
