import Image from 'next/image';
import React from 'react';

function GetStarted() {
    return (
        <section className='getStarted_section'>
            <p className='overHeading'>GET STARTED</p>
            <h2>
                Ready to scale your <br />
                brand to <span>new heights?</span>
            </h2>
            <p className='subHeading'>
                If you want to achieve ground-breaking growth with increased
                sales and profitability with paid ads, then you’re in the right
                place.
            </p>

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
