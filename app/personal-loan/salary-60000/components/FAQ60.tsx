"use client";

import { useState } from "react";

const FAQ60 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Can I get a personal loan with a ₹60,000 salary and no CIBIL score?",
            answer: "Getting a personal loan without a CIBIL score is difficult but not impossible. At Karzwala, we prefer applicants with a credit score of 650+. If you have no credit history, we may consider other factors like stable employment, good income proof, and low existing liabilities. You can still apply - we check each application individually.",
        },
        {
            question: "What should my CIBIL score be for personal loan approval on ₹60,000 salary?",
            answer: "For personal loan approval at Karzwala with ₹60,000 salary, your CIBIL score should preferably be 650 and above. Scores of 750+ get the best interest rates starting from 8.5% p.a. and faster approval. If your score is below 650, we recommend improving it before applying for better rates.",
        },
        {
            question: "What is the maximum loan amount for ₹60,000 salary?",
            answer: "With ₹60,000 monthly salary, you can get a maximum loan of ₹5-7 lakhs from Karzwala. The exact amount depends on your credit score, existing loans, and repayment capacity. Generally, we offer loans of 15-20 times your monthly salary.",
        },
        {
            question: "Can I get a personal loan with ₹60,000 salary without a guarantor?",
            answer: "Yes, you can get a personal loan from Karzwala without any guarantor. We offer unsecured personal loans based on your credit score, income, and repayment capacity. No collateral or guarantor is needed - just meet our basic eligibility criteria.",
        },
        {
            question: "Can I get a personal loan on ₹60,000 salary if I work in a private company?",
            answer: "Yes, you can get a personal loan from Karzwala if you work in a private company with ₹60,000 salary. We prefer employees from reputed private companies, MNCs, government, or PSUs. You need at least 1-2 years of work experience and a credit score of 650+ for approval.",
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

export default FAQ60;
