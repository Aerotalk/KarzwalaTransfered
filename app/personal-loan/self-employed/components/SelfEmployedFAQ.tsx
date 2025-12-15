"use client";

import { useState } from "react";

const SelfEmployedFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the interest rate for self-employed personal loans?",
            answer: "Interest rates at Karzwala for self-employed people range from 8.5% to 24% per annum. Your exact rate depends on your credit score, business income, and business stability. Better credit scores and stable businesses get lower rates.",
        },
        {
            question: "How much CIBIL score is required for self-employed to get a personal loan?",
            answer: "We prefer a CIBIL score of 650 or above for self-employed applicants. Scores of 750+ get the best rates and faster approval. If your score is below 650, work on improving it by paying all dues on time.",
        },
        {
            question: "Can self-employed individuals get instant personal loans?",
            answer: "Yes! If you have all documents ready like ITR, business proof, bank statements and a good credit score , you can get approval within 24-48 hours. Disbursal happens within 1-2 working days after approval.",
        },
        {
            question: "What documents do self-employed people need for a personal loan?",
            answer: "You need PAN, Aadhaar, last 2 years ITR, P&L statement, Balance Sheet, business bank statements, and business proof like GST registration or Shop Act License. Upload everything online through our website.",
        },
        {
            question: "How much loan can a self-employed person get?",
            answer: "Self-employed individuals can get loans from ₹1 lakh to ₹10 lakh at Karzwala. Your eligibility depends on your business income, ITR, credit score, and existing liabilities. Generally, you can get a loan of 15-20 times your monthly business income.",
        },
        {
            question: "Do I need to show profit in my business to get a loan?",
            answer: "Yes, we prefer applicants showing net profit in their ITR and P&L statements. Consistent profitability over 2-3 years increases your approval chances and helps you get better rates.",
        },
        {
            question: "Can freelancers and consultants apply for this loan?",
            answer: "Yes! Freelancers, consultants, doctors, CAs, architects, and all self-employed professionals can apply. You need to show income proof through ITR and professional registration documents.",
        },
        {
            question: "How long does approval take for self-employed applicants?",
            answer: "Approval typically takes 24-48 hours once we receive complete documentation. If your ITR and business documents are clear and verified, the process is fast. We may need additional verification for complex business structures.",
        },
        {
            question: "Can I use the loan for both business and personal needs?",
            answer: "Yes! This is a personal loan for the self-employed, which means you can use it for business purposes (working capital, equipment, expansion) or personal needs (wedding, medical, education, travel). No restrictions on end use.",
        },
        {
            question: "What if my business is less than 3 years old?",
            answer: "If your business is 1-2 years old but showing strong income and profitability, you can still apply. We consider each case individually. Having a co-applicant or higher credit score helps in such cases.",
        },
        {
            question: "Is GST registration mandatory to get a loan?",
            answer: "GST registration is preferred as it's strong business proof, but it's not always mandatory. If your business income is below the GST threshold, other business proofs like Shop Act License or Trade License also work.",
        },
        {
            question: "Can I get a loan if I don't file ITR?",
            answer: "ITR filing is mandatory for self-employed loan applications. We need it to verify your business income. If you haven't filed ITR for the last 2 years, please file them first and then apply.",
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently <span className="text-orange-500">asked questions</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our instant loan process is designed for speed and convenience
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-lg transition-colors duration-200 overflow-hidden ${openIndex === index ? "bg-orange-50" : "bg-white shadow-sm border border-gray-100"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span
                                    className={`text-lg font-semibold ${openIndex === index ? "text-orange-600" : "text-gray-900"
                                        }`}
                                >
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 ml-4">
                                    {openIndex === index ? (
                                        // Up Arrow
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-orange-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        // Down Arrow
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-gray-900"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer ? faq.answer : ""}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelfEmployedFAQ;
