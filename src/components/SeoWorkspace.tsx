'use client';

import { useState } from 'react';
import { PiStarFour } from 'react-icons/pi';
import Heading from './Heading';
import OverHeading from './OverHeading';
import SubHeading from './SubHeading';

const auditFindings = [
    {
        category: 'Indexing',
        count: '06',
        issue: 'Six product pages are excluded from Google’s index.',
        explanation: 'These URLs contain a noindex directive. That may be intentional, but pages meant to bring in search traffic need to be checked.',
        nextStep: 'Confirm which pages should appear in search, then review the noindex directive on those URLs.',
    },
    {
        category: 'Content',
        count: '03',
        issue: 'Three landing pages target the same search intent.',
        explanation: 'The pages overlap around one topic, so it is unclear which one should rank for the query.',
        nextStep: 'Choose the strongest page, make its purpose distinct and link supporting content to it.',
    },
    {
        category: 'Performance',
        count: '04',
        issue: 'Four key pages load a larger hero image than they need.',
        explanation: 'The same oversized image is used across product pages, adding weight before visitors reach the content.',
        nextStep: 'Resize and compress the shared image, then check the page experience on mobile.',
    },
];

export default function SeoWorkspace() {
    const [selectedFinding, setSelectedFinding] = useState(0);
    const finding = auditFindings[selectedFinding];

    return (
        <section className='seo-workspace' id='platform' aria-label='SEO product preview'>
            <OverHeading>
                <PiStarFour className='icon' aria-hidden='true' />
                SITE AUDIT PREVIEW
            </OverHeading>

            <Heading>
                Know what to fix <span>first.</span>
            </Heading>

            <SubHeading text='A sample audit connects each issue to the pages it affects and a clear next step.' />

            <div className='audit-preview'>
                <div className='audit-filters' role='group' aria-label='Choose an example audit category'>
                    {auditFindings.map((item, index) => (
                        <button
                            key={item.category}
                            type='button'
                            aria-pressed={selectedFinding === index}
                            className={selectedFinding === index ? 'is-selected' : ''}
                            onClick={() => setSelectedFinding(index)}
                        >
                            {item.category}
                        </button>
                    ))}
                </div>

                <article className='audit-finding' data-category={finding.category.toLowerCase()} aria-live='polite'>
                    <div className='finding-copy'>
                        <p className='finding-label'>EXAMPLE FINDING <span>·</span> {finding.category.toUpperCase()}</p>
                        <h3>{finding.issue}</h3>
                        <p className='finding-explanation'>{finding.explanation}</p>
                    </div>

                    <div className='finding-detail'>
                        <div className='affected-pages'>
                            <span>AFFECTED PAGES</span>
                            <strong>{finding.count}</strong>
                        </div>
                        <div className='finding-action'>
                            <span>NEXT STEP</span>
                            <p>{finding.nextStep}</p>
                        </div>
                    </div>
                </article>

            </div>
        </section>
    );
}
