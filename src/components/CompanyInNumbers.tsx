import Image from 'next/image';
import React from 'react';
import { PiStarFour } from 'react-icons/pi';
import OverHeading from './OverHeading';
import Heading from './Heading';
import SubHeading from './SubHeading';

function CompanyInNumbers() {
    interface SeoStat {
        value: number;
        label: string;
        description: string;
    }

    const seoStats: SeoStat[] = [
        {
            value: 300,
            label: '+',
            description: 'Happy clients across various industries',
        },
        {
            value: 1200,
            label: '+',
            description: 'High-ranking SEO projects successfully delivered',
        },
        {
            value: 98,
            label: '%',
            description: 'Client satisfaction based on surveys',
        },
        {
            value: 35,
            label: '%',
            description: 'Avgerage client profit growth increase',
        },
    ];

    return (
        <section className='numbers_section' id='numbers'>
            <OverHeading>
                <PiStarFour className='icon' />
                COMPANY IN NUMBERS
            </OverHeading>

            <Heading>
                More than a <span>Service</span>. A strategic{' '}
                <span>SEO Partner</span>.
            </Heading>

            <SubHeading
                text='We empower businesses to drive more traffic, rank higher on
                Google, and achieve lasting online success.'
            />

            <article>
                <Image
                    src={'/people2.jpg'}
                    height={450}
                    width={450}
                    quality={100}
                    alt='group of people'
                />
                <div className='cards-wrapper'>
                    {seoStats.map(({ value, label, description }, id) => (
                        <div key={id} className='position'>
                            <p className='test'>[{id + 1}]</p>
                            <h3>
                                {value}
                                <span>{label}</span>
                            </h3>

                            <p className='description'>{description}</p>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
}

export default CompanyInNumbers;
