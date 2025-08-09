import Image from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { PiStarFour } from 'react-icons/pi';

function Results() {
    interface Testimonial {
        id: number;
        name: string;
        company: string;
        img: string;
        text: string;
    }

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'John Doe',
            company: 'TechBoost',
            img: '/image2.jpg',
            text: 'Thanks to Element’s SEO, we doubled our traffic in 6 months and landed on Google’s first page.',
        },
        {
            id: 2,
            name: 'Maria Dimitrova',
            company: 'GreenMarket',
            img: '/image9.jpg',
            text: 'After the optimization, we saw a 70% increase in online sales! Working with this team was the best decision for our business.',
        },
        {
            id: 3,
            name: 'George Kowalski',
            company: 'AutoPro',
            img: '/image4.jpg',
            text: 'From a local business, we became a leader in our niche. SEO optimization brought us more clients and greater visibility.',
        },
    ];

    return (
        <section className='results_section' id='results'>
            <p className='overHeading'>
                <PiStarFour className='icon' /> RESULTS
            </p>
            <h2>
                Real <span>Success</span>. Happy Clients.
            </h2>
            <p className='subHeading'>
                Our SEO strategies help businesses grow. See how our clients
                achieved higher rankings, more traffic, and increased revenue!
            </p>

            <main>
                {testimonials.map(({ id, name, company, text, img }) => (
                    <div key={id} className='card'>
                        <div className='image-wrapper'>
                            <Image
                                alt='user thumbnail'
                                src={img}
                                height={400}
                                width={400}
                            />
                            <div className='player-icon'>
                                <FaPlay />
                            </div>
                        </div>

                        <p className='user-text'>{text}</p>
                        <div className='info-wrapper'>
                            <p className='name'>{name}</p>
                            <p className='company'>{company}</p>
                        </div>
                    </div>
                ))}
            </main>

            <button className='view_more-button'>View All Results</button>
        </section>
    );
}

export default Results;
