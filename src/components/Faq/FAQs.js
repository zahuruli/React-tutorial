import React, { useState } from 'react';

import { faqsData } from './data';
import Faq from './Faq';
import './Faqs.css';

const FAQs = () => {
    const [faqs, setFaqs] = useState(faqsData);

    return (
        <main className="container">
            <section className="faqs">
                <h1>FAQs</h1>
                {faqsData.map((faq) => (
                    <Faq key={faq.id} {...faq} />
                ))}
            </section>
        </main>
    );
};

export default FAQs;
