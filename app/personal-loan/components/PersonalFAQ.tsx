"use client";

import { useState } from "react";

const PersonalFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the interest rate on a personal loan?",
            answer: "Interest rates at Karzwala typically range from 8.5% to 24% per annum. Your exact rate depends on your credit score, income, and repayment history. Better credit scores get lower rates.",
        },
        {
            question: "How much CIBIL score is required for a personal loan?",
            answer: "We prefer a CIBIL score of 650 or above. Scores of 750+ get the best rates and faster approval. If your score is below 650, we recommend improving it before applying.",
        },
        {
            question: "Can I take personal loans from multiple banks at the same time?",
            answer: "Yes, you can technically have multiple personal loans, but it's not recommended. Multiple loans increase your debt burden, make it harder to get new approvals, and can strain your monthly budget. Consider a top-up loan instead.",
        },
        {
            question: "How much time does it take to disburse a personal loan?",
            answer: "Once approved, we disburse funds within 1-2 working days. The complete process from application to disbursal takes 2-5 working days, depending on how quickly you submit documents.",
        },
        {
            question: "Can I top up my personal loan?",
            answer: "Yes! After 6 months of regular EMI payments, you're eligible for a top-up loan. It's additional money over your existing loan with a faster approval process.",
        },
        {
            question: "What happens if I miss an EMI payment?",
            answer: "Missing an EMI hurts your credit score and attracts late payment fees. If you're facing financial difficulty, contact us immediately before missing a payment. We may be able to help.",
        },
        {
            question: "Can I change my EMI date?",
            answer: "Yes, we allow one EMI date change during your loan tenure. Just contact our customer support with your request.",
        },
        {
            question: "Is there a prepayment penalty?",
            answer: " No penalty for floating rate loans (as per RBI rules). For fixed-rate loans, check your agreement - a small charge may apply.",
        },
        {
            question: "What is the minimum and maximum loan amount?",
            answer: "We offer loans from ₹1 lakh to ₹10 lakh. Your eligibility depends on your income and credit profile.",
        },
        {
            question: "Can I apply for a personal loan if I'm self-employed?",
            answer: "Yes! We provide loans to both salaried and self-employed individuals. You'll need ITR, business proof, and bank statements.",
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

export default PersonalFAQ;
