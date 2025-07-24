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
            text: 'Excellent conversation. Very practical, logical and motivating info. Thanks for your time Kosta! Tal',
            image: '/image1.jpg',
            name: 'Black Marvin',
            username: 'marvin_black',
        },
        {
            id: 2,
            text: 'Eden is 110% recommendable! Very friendly and accurate She brought me a lot of value in a short peri',
            image: '/image3.jpg',
            name: 'Flores Juanita',
            username: 'juanita_flores',
        },
        {
            id: 3,
            text: 'Peter was amazing! He shared wonderful tips, made the most out of our call, and was very attentive a',
            image: '/image2.jpg',
            name: 'Cooper, Kristin',
            username: 'kristin_cooper',
        },
        {
            id: 4,
            text: 'Craig was awesome. He asked great discovery questions and took time to understand my challenges and',
            image: '/image4.jpg',
            name: 'Miles Esther',
            username: 'esther_miles',
        },
        {
            id: 5,
            text: 'Great mentorship, we had really common topics on our ways of working. He gave me pretty nice insight',
            image: '/image6.jpg',
            name: 'Henry Arthur',
            username: 'arthur_henry',
        },
        {
            id: 6,
            text: 'Superb, invaluable advice from Barbara. The point-of-view statements are a lifesaver. Highly recomm',
            image: '/image5.jpg',
            name: 'Nguyen Shane',
            username: 'shane_nguyen',
        },
        {
            id: 7,
            text: 'Fantastic support and clear advice. The session gave me concrete next steps and much-needed motivation.',
            image: '/image7.jpg',
            name: 'Taylor Morgan',
            username: 'taylor_morgan',
        },
        {
            id: 8,
            text: 'Insightful and patient guidance. Helped me break down complex problems into manageable solutions.',
            image: '/image8.jpg',
            name: 'Jordan Lee',
            username: 'jordan_lee',
        },
        {
            id: 9,
            text: 'Extremely knowledgeable mentor—pointed out opportunities I hadn’t considered. Strongly recommend connecting!',
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
