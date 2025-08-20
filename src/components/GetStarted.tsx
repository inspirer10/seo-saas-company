import Image from 'next/image';
import React from 'react';
import OverHeading from './OverHeading';
import Heading from './Heading';
import SubHeading from './SubHeading';

function GetStarted() {
    return (
        <section className='getStarted_section'>
            <OverHeading>GET STARTED</OverHeading>

            <Heading>
                Ready to scale your <br />
                brand to <span>new heights?</span>
            </Heading>

            <SubHeading
                text='If you want to achieve ground-breaking growth with increased
                sales and profitability with paid ads, then you’re in the right
                place.'
            />

            <div className='cta-wrapper'>
                <button>Book a Call</button>
                <div className='founder-wrapper'>
                    <Image
                        src={'/image2.jpg'}
                        alt='user avatar'
                        height={70}
                        width={70}
                        quality={100}
                    />
                    <div className='info-wrapper'>
                        <p className='name'>Marcus Saristo</p>
                        <p className='position'>Founder of Company</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetStarted;
