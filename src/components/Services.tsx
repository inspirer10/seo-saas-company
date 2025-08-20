import React from 'react';
import { IoSettingsOutline, IoLogoWebComponent } from 'react-icons/io5';
import { TbCloudComputing } from 'react-icons/tb';
//import { TfiMagnet } from 'react-icons/tfi';
import { SlMagnet } from 'react-icons/sl';
import { PiStarFour } from 'react-icons/pi';
import OverHeading from './OverHeading';
import Heading from './Heading';
import SubHeading from './SubHeading';

function Services() {
    interface SeoFeature {
        id: number;
        name: string;
        icon: React.ReactNode;
        text: string;
    }

    const seoFeatures: SeoFeature[] = [
        {
            id: 1,
            name: 'On-Page SEO',
            icon: <IoLogoWebComponent />,
            text: 'Optimize your website’s structure, content, and keywords to improve search engine rankings.',
        },
        {
            id: 2,
            name: 'Technical SEO',
            icon: <IoSettingsOutline />,
            text: 'Enhance site speed, mobile-friendliness, and indexing to ensure seamless performance.',
        },
        {
            id: 3,
            name: 'Link Building',
            icon: <SlMagnet />,
            text: 'Gain high-quality backlinks to boost your website’s authority and credibility.',
        },
        {
            id: 4,
            name: 'Local SEO',
            icon: <TbCloudComputing />,
            text: 'Get found by local customers with optimized Google My Business and location-based tactics.',
        },
    ];

    return (
        <section className='services_section' id='services'>
            <OverHeading>
                <PiStarFour className='icon' />
                SERVICES
            </OverHeading>

            <Heading>
                Comprehensive <span>SEO</span> Services
            </Heading>

            <SubHeading
                text='Expert SEO solutions tailored to help your business grow, drive
                more traffic, and achieve long-term success.'
            />

            <main className='cards-wrapper'>
                {seoFeatures.map(({ id, text, name, icon }) => (
                    <div className='card' key={id}>
                        <div className='icon'>{icon}</div>
                        <h4>{name}</h4>
                        <p>{text}</p>
                    </div>
                ))}
            </main>
        </section>
    );
}

export default Services;
