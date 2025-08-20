'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode;
};

function OverHeading({ children }: Props) {
    return (
        <motion.p
            className='overHeading'
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.625, ease: 'easeOut', delay: 0.1 }}
            viewport={{ amount: 0.5, once: true }}
        >
            {children}
        </motion.p>
    );
}

export default OverHeading;
