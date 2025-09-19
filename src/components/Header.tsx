import React from 'react';
import Image from 'next/image';
import SubHeading from './SubHeading';
import Heading from './Heading';

interface LogoImage {
    alt: string;
    img: string;
}

const logosData: LogoImage[] = [
    {
        alt: 'IBM logo',
        img: '/IBM.png',
    },
    {
        alt: 'Visa logo',
        img: '/visa.png',
    },
    {
        alt: 'H&M logo',
        img: '/hm.png',
    },
    {
        alt: 'Audi logo',
        img: '/audi.png',
    },
    {
        alt: 'PGE logo',
        img: '/pge.png',
    },
    {
        alt: 'Orlen logo',
        img: '/orlen.png',
    },
    {
        alt: 'Uber logo',
        img: '/uber.png',
    },
];

function Header() {
    return (
        <header>
            <div className='overHeading'>
                <Image
                    src={'/image1.jpg'}
                    height={70}
                    width={70}
                    quality={85}
                    priority={true}
                    alt='user avatar'
                />
                <Image
                    src={'/image2.jpg'}
                    height={70}
                    width={70}
                    quality={85}
                    priority={true}
                    alt='user avatar'
                />
                <Image
                    src={'/image3.jpg'}
                    height={70}
                    width={70}
                    quality={85}
                    priority={true}
                    alt='user avatar'
                />
                <Image
                    src={'/image4.jpg'}
                    height={70}
                    width={70}
                    quality={85}
                    priority={true}
                    alt='user avatar'
                />
                <p>300+ happy clients</p>
            </div>

            <Heading delay={1.625}>
                Winning <span>SEO</span> for <br /> Online Success
            </Heading>

            <SubHeading
                delay={1.75}
                text='Drive more traffic, rank higher on Google, and grow your
                business with expert SEO strategics that deliver real resutls.'
            />

            <div className='buttons-wrapper'>
                <button className='book-button'>Book a Call</button>
                <button className='success-button'>
                    See our Success Stores
                </button>
            </div>

            <div className='partners-container'>
                <p>You are in good hands:</p>

                <div className='logos-wrapper'>
                    {logosData.map(({ alt, img }, index) => (
                        <Image
                            key={index}
                            src={img}
                            height={60}
                            width={100}
                            priority={true}
                            quality={70}
                            alt={alt}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
