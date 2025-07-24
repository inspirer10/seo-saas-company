'use client';

import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <article className={`faq-item${open ? ' open' : ''}`}>
            <div className='faq-question' onClick={() => setOpen(!open)}>
                <h3>{question}</h3>
                <span className='faq-icon'>
                    <FiPlus />
                </span>
            </div>

            <div className={`faq-answer${open ? ' open' : ''}`}>
                <p>{answer}</p>
            </div>
        </article>
    );
};

export default FaqItem;
