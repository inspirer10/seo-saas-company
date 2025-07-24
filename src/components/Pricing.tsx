import React from 'react';

function Pricing() {
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

    return (
        <section className='pricing_section'>
            <p className='overHeading'>PRICING</p>
            <h2>
                Transparent <span>Pricing</span>
            </h2>
            <p className='subHeading'>
                Explore our pricing options below and choose the plan that best
                fits your needs. No hidden fees...
            </p>

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
