'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = { text: string; delay?: number };

function SubHeading({ text, delay = 0.15 }: Props) {
    return (
        <motion.p
            className='subHeading'
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.675, ease: 'easeOut', delay }}
            viewport={{ amount: 0.5, once: true }}
        >
            {text}
        </motion.p>
    );
}

export default SubHeading;
