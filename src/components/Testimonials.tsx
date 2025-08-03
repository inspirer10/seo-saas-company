import Image from 'next/image';
import React from 'react';

function Testimonials() {
    interface TestimonialCard {
        id: number;
        text: string;
        image: string;
        name: string;
        username: string;
    }

    const testimonialCards: TestimonialCard[] = [
        {
            id: 1,
            text: 'We grew our organic traffic 6x in six months, and now rank #1 for over 250 keywords thanks to their SaaS platform. The reporting automation saves my team hours every week',
            image: '/image1.jpg',
            name: 'Black Marvin',
            username: 'marvin_black',
        },
        {
            id: 2,
            text: 'Onboarding took minutes. Our site’s SEO health scores skyrocketed and we tracked measurable ROI from day one. If you’re aiming for real search visibility, this is a must-have tool',
            image: '/image3.jpg',
            name: 'Flores Juanita',
            username: 'juanita_flores',
        },
        {
            id: 3,
            text: 'Their platform demystified technical SEO for our team. We doubled our inbound leads while staying on top of all Google updates automatically',
            image: '/image2.jpg',
            name: 'Cooper Kristin',
            username: 'kristin_cooper',
        },
        {
            id: 4,
            text: 'The smart keyword tracking and automated audits freed up hours of manual work. Lead quality and conversions went up almost immediately',
            image: '/image4.jpg',
            name: 'Miles Esther',
            username: 'esther_miles',
        },
        {
            id: 5,
            text: 'I was skeptical at first, but the data speaks for itself—organic traffic value up by $95,000 monthly, and demo bookings soared. We rely on this for all our SaaS growth',
            image: '/image6.jpg',
            name: 'Henry Arthur',
            username: 'arthur_henry',
        },
        {
            id: 6,
            text: 'Incredible support and actionable insights. The platform adapts to our SaaS workflows and helps us outpace much bigger competitors',
            image: '/image5.jpg',
            name: 'Nguyen Shane',
            username: 'shane_nguyen',
        },
        {
            id: 7,
            text: 'With their automation, we quickly identified SEO gaps and implemented fixes that pushed us ahead in the fintech category',
            image: '/image7.jpg',
            name: 'Taylor Morgan',
            username: 'taylor_morgan',
        },
        {
            id: 8,
            text: 'Clear dashboards, fast results, and genuine partnership. Switching to this platform was the best decision for scalable SEO',
            image: '/image8.jpg',
            name: 'Jordan Lee',
            username: 'jordan_lee',
        },
        {
            id: 9,
            text: 'Insightful recommendations every month. Their data-driven approach has made reporting to our C-suite so much easier!',
            image: '/image9.jpg',
            name: 'Casey Smith',
            username: 'casey_smith',
        },
    ];

    return (
        <section className='testimonials_section' id='testimonials'>
            <p className='overHeading'>TESTIMONIALS</p>
            <h2>
                See What Our <span>Clients</span> <br />
                Have to Say
            </h2>

            <main className='testimonials-container'>
                {testimonialCards.map(({ id, text, image, name, username }) => (
                    <div className='card' key={id}>
                        <p>{text}</p>

                        <div className='person-wrapper'>
                            <Image
                                src={image}
                                alt='user thumbnail'
                                height={65}
                                width={65}
                            />

                            <div className='details-wrapper'>
                                <p className='name'>{name}</p>
                                <p className='username'>@{username}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    );
}

export default Testimonials;
