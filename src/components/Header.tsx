import React from 'react';
import Image from 'next/image';

function Header() {
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
                <p>300+ happy clients</p>
            </div>
            <h1>
                Winning <span>SEO</span> for <br /> Online Success
            </h1>
            <p className='subHeading'>
                Drive more traffic, rank higher on Google, and grow your
                business with expert SEO strategics that deliver real resutls.
            </p>

            <div className='buttons-wrapper'>
                <button>Book a Call</button>
                <button className='success-button'>
                    See our Success Stores
                </button>
            </div>

            <div className='partners-container'>
                <p>You are in good hands:</p>
            </div>
        </header>
    );
}

export default Header;
