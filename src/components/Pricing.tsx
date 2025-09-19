import React from 'react';
import { PiStarFour } from 'react-icons/pi';
import OverHeading from './OverHeading';
import Heading from './Heading';
import SubHeading from './SubHeading';

interface PricingPlan {
    id: number;
    type: string;
    price: string;
    features: string[];
    highlight?: boolean;
}

const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        type: 'Basic',
        price: '1,200',
        features: [
            'Primary and secondary logos',
            'Full brand guidebook',
            '2 weeks delivery',
            'One free color palette suggestion',
        ],
    },
    {
        id: 2,
        type: 'Standard',
        price: '1,700',
        features: [
            'Primary and secondary logos',
            'Full brand guidebook',
            '2 weeks delivery',
            'Max 3 revisions',
            'Figma files',
            'Editable social media avatar included',
        ],
        highlight: true,
    },
    {
        id: 3,
        type: 'Premium',
        price: '2,400',
        features: [
            'Primary and secondary logos',
            'Full brand guidebook',
            '1 week delivery',
            'Max 4 revisions',
            'Figma files',
            'Animated logo included',
        ],
    },
];

function Pricing() {
    return (
        <section className='pricing_section' id='pricing'>
            <OverHeading>
                <PiStarFour className='icon' />
                PRICING
            </OverHeading>

            <Heading>
                Transparent <span>Pricing</span>
            </Heading>

            <SubHeading
                text='Explore our pricing options below and choose the plan that best
                fits your needs. No hidden fees...'
            />

            <main>
                {pricingPlans.map(
                    ({ id, type, price, features, highlight }) => (
                        <div
                            key={id}
                            className={`${
                                highlight ? 'card highlight' : 'card'
                            }`}
                        >
                            <p className='type'>{type}</p>
                            <h3 className='price'>${price}</h3>
                            <ul>
                                {features.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <button
                                className={`${highlight ? 'highlight' : null}`}
                            >
                                Get Started
                            </button>
                        </div>
                    )
                )}
            </main>
        </section>
    );
}

export default Pricing;
