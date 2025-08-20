import React from 'react';
import Image from 'next/image';
import SubHeading from './SubHeading';
import Heading from './Heading';

function Header() {
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

    return (
        <header>
            <div className='overHeading'>
                <Image
                    src={'/image1.jpg'}
                    height={75}
                    width={75}
                    quality={100}
                    alt='user avatar'
                />
                <Image
                    src={'/image2.jpg'}
                    height={75}
                    width={75}
                    quality={100}
                    alt='user avatar'
                />
                <Image
                    src={'/image3.jpg'}
                    height={75}
                    width={75}
                    quality={100}
                    alt='user avatar'
                />
                <Image
                    src={'/image4.jpg'}
                    height={75}
                    width={75}
                    quality={100}
                    alt='user avatar'
                />
                <p>300+ happy clients</p>
            </div>

            <Heading delay={0}>
                Winning <span>SEO</span> for <br /> Online Success
            </Heading>

            <SubHeading
                delay={0}
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
                    {logosData.map(({ alt, img }, idx) => (
                        <Image
                            height={50}
                            width={100}
                            src={img}
                            alt={alt}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
