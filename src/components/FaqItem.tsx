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
            <div className='faq-header' onClick={() => setOpen(!open)}>
                <h3>{question}</h3>
                <span className='faq-icon'>
                    <FiPlus />
                </span>
            </div>

            {open && (
                <div className={`faq-answer${open ? ' open' : ''}`}>
                    {answer}
                </div>
            )}
        </article>
    );
};

export default FaqItem;
