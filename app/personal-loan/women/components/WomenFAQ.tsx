"use client";

import { useState } from "react";

const WomenFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the interest rate for women's personal loans?",
            answer: "Interest rates at Karzwala for wedding loans range from 8.5% to 24% per annum. Your exact rate depends on your credit score, income, and repayment history. Better credit scores get lower rates.",
        },
        {
            question: "How much CIBIL score is required for women to get a personal loan?",
            answer: "We prefer a CIBIL score of 650 or above. Scores of 750+ get the best rates and faster approval. If your score is below 650, we recommend improving it before applying.",
        },
        {
            question: "Can homemakers apply for a personal loan?",
            answer: "Homemakers without regular income may find it challenging to get approval as we need proof of income for loan eligibility. However, if you have rental income, investment income, or any other regular income source with documentation, you can apply.",
        },
        {
            question: "What documents do women need for a personal loan?",
            answer: " Salaried: PAN, Aadhaar, last 3 months' salary slips, 6 months' bank statements. Self-employed: PAN, Aadhaar, last 2 years' ITR, P&L statement, bank statements. Upload everything online.",
        },
        {
            question: "How much loan can women get?",
            answer: "Women can get loans from ₹1 lakh to ₹10 lakh. Your eligibility depends on your income, credit score, and existing liabilities. Generally, you can get a loan of 15-20 times your monthly income.",
        },
        {
            question: "Can married women apply without their husband's consent?",
            answer: "Yes! You can apply independently if you meet the eligibility criteria. You don't need your husband's or any family member's consent or signature. The loan is based on your own income and credit profile.",
        },
        {
            question: "How long does approval take for women applicants?",
            answer: " Approval typically takes 24-48 hours once we receive complete documentation. If your documents are clear and credit score is good, the process is fast.",
        },
        {
            question: "Can women entrepreneurs get business loans through this?",
            answer: "Yes, self-employed women and women entrepreneurs can apply. You'll need business documents like ITR, P&L statement, Balance Sheet, and business proof (GST registration, Shop Act License).",
        },
        {
            question: "Can I use the loan for any purpose?",
            answer: "Yes! You can use the loan for any legal purpose - business, education, medical, wedding, home renovation, debt consolidation, or personal needs. No restrictions on end use.",
        },
        {
            question: "What if I'm on maternity leave?",
            answer: "If you're on maternity leave but have a confirmed job to return to and regular salary credits before the leave, you can still apply. We evaluate each case individually.",
        },
        {
            question: "Can single women apply for personal loans?",
            answer: "Absolutely! Marital status doesn't affect loan eligibility. Single women, married women, divorced, or widowed - all can apply if they meet the income and credit score requirements.",
        },
        {
            question: "Do women get lower interest rates?",
            answer: "Interest rates are determined based on credit score, income, and repayment capacity, not gender. However, women with excellent credit profiles get the best available rates, just like any other applicant.",
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

export default WomenFAQ;
