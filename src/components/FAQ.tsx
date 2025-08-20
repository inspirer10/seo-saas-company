import React from 'react';
import FaqItem from './FaqItem';
import Heading from './Heading';
import SubHeading from './SubHeading';

function FAQ() {
    interface faqsDataTypes {
        id: number;
        question: string;
        answer: string;
    }

    const faqsData: faqsDataTypes[] = [
        {
            id: 1,
            question: 'What services do you offer in your branding packages?',
            answer: 'We provide custom logo design (primary and secondary versions), a comprehensive brand guidebook, and digital assets for your brand. Depending on the selected plan, you also get Figma source files, revision rounds, and bonus features like color palette suggestions or animated logos.',
        },
        {
            id: 2,
            question: 'How long does it take to complete a branding project?',
            answer: 'Most branding projects are delivered within 2 weeks after we receive your brief and requirements. Turnaround time may vary slightly based on the complexity of the project and the number of revision rounds included in your plan.',
        },
        {
            id: 3,
            question: 'What file formats will I receive?',
            answer: 'You will receive high-quality logo files in formats suitable for web and print, such as SVG, PNG, and PDF. If you purchase the Standard or Premium plans, Figma files and editable avatars are also included.',
        },
        {
            id: 4,
            question: 'How many revisions can I request?',
            answer: 'The Basic plan includes implementation based on your brief, while Standard and Premium plans allow up to 3 revisions to ensure your satisfaction.',
        },
        {
            id: 5,
            question:
                "Can I get a refund if I'm not satisfied with the design?",
            answer: 'We strive for your satisfaction at every step. If, within the scope of included revisions, we are unable to meet your expectations, we offer a partial refund according to our project policy. Details are outlined in our terms and conditions.',
        },
    ];

    return (
        <section className='faq_section' id='faq'>
            <Heading>FAQs</Heading>
            <SubHeading
                text='  Discover clear answers to the questions we’re asked most often
                about our branding and web development solutions'
            />

            <main className='faqs-container'>
                {faqsData.map(({ id, question, answer }) => (
                    <FaqItem key={id} question={question} answer={answer} />
                ))}
            </main>
        </section>
    );
}

export default FAQ;
