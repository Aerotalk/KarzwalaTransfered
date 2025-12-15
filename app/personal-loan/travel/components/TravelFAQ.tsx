"use client";

import { useState } from "react";

const TravelFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the interest rate for travel loans?",
            answer: "Interest rates at Karzwala for travel loans range from 8.5% to 24% per annum. Your exact rate depends on your credit score, income, and repayment history. Better credit scores get lower rates.",
        },
        {
            question: "How much CIBIL score is required for travel loans?",
            answer: "We prefer a CIBIL score of 650 or above. Scores of 750+ get the best rates and faster approval. If your score is below 650, we recommend improving it before applying.",
        },
        {
            question: "Can I get an instant travel loan?",
            answer: "Yes! If you have all documents ready and a good credit score, you can get approval within 24-48 hours. Disbursal happens within 1-2 working days after approval.",
        },
        {
            question: "What documents do I need for a travel loan?",
            answer: " Salaried: PAN, Aadhaar, last 3 months' salary slips, 6 months' bank statements. Self-employed: PAN, Aadhaar, last 2 years' ITR, P&L statement, bank statements. Upload everything online.",
        },
        {
            question: "How much travel loan can I get?",
            answer: "Women can get loans from ₹1 lakh to ₹10 lakh. Your eligibility depends on your income, credit score, and existing liabilities. Generally, you can get a loan of 15-20 times your monthly income.",
        },
        {
            question: "Can I use the travel loan for international trips?",
            answer: "Yes, you can use the loan for any travel-related expense including international flights, visa fees, hotel bookings, travel insurance, adventure activities, domestic trips, or any other purpose. No restrictions on end use.",
        },
        {
            question: "How long does approval take for travel loans?",
            answer: " Approval typically takes 24-48 hours once we receive complete documentation. If your documents are clear and credit score is good, the process is fast.",
        },
        {
            question: "Can family members apply together?",
            answer: "Yes, you can apply as co-applicants. Joint applications may get higher loan amounts as combined income is considered. Both applicants need to provide documents.",
        },
        {
            question: "What if my trip is next month?",
            answer: "You can still apply! Our quick approval process ensures fast disbursal. However, apply as early as possible to account for processing time.",
        },
        {
            question: "Can I take a loan for someone else's trip?",
            answer: "IYes, you can apply if you meet the eligibility criteria (age, income, credit score). The loan will be in your name and you will be responsible for repayment.",
        },
        {
            question: "What is the maximum repayment tenure?",
            answer: "The maximum tenure is 5 years (60 months). You can choose 1, 2, 3, 4, or 5 years based on your EMI affordability.",
        },
        {
            question: "Can I prepay my travel loan?",
            answer: "Yes! You can prepay anytime. No penalty for floating rate loans (as per RBI rules). You'll save on future interest.",
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

export default TravelFAQ;
