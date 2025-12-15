"use client";

import { useState } from "react";

const SalariedFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the interest rate for salaried personal loans?",
            answer: "Interest rates at Karzwala for salaried employees range from 8.5% to 24% per annum. Your exact rate depends on your credit score, monthly salary, and employment stability. Better credit scores and higher salaries get lower rates.",
        },
        {
            question: "How much CIBIL score is required for salaried to get a personal loan?",
            answer: "We prefer a CIBIL score of 650 or above for salaried applicants. Scores of 750+ get the best rates and faster approval. If your score is below 650, work on improving it by paying all dues on time.",
        },
        {
            question: "Can salaried individuals get instant personal loans?",
            answer: "Yes! If you have all documents ready like salary slips, bank statements and a good credit score, you can get approval within 24-48 hours. Disbursal happens within 1-2 working days after approval.",
        },
        {
            question: "What documents do salaried people need for a personal loan?",
            answer: "You need PAN, Aadhaar, last 2 years ITR, P&L statement, Balance Sheet, business bank statements, and business proof like GST registration or Shop Act License. Upload everything online through our website.",
        },
        {
            question: "How much loan can a self-employed person get?",
            answer: "You need PAN, Aadhaar, last 3 months' salary slips, last 6 months' bank statements, and employment proof like ID card or appointment letter. Upload everything online through our website.",
        },
        {
            question: "How much loan can a salaried employee get?",
            answer: "Salaried employees can get loans from ₹1 lakh to ₹10 lakh at Karzwala. Your eligibility depends on your monthly salary, credit score, and existing liabilities. Generally, you can get a loan of 15-20 times your monthly salary.",
        },
        {
            question: "What is the minimum salary required to get a personal loan?",
            answer: " The minimum monthly salary required is ₹35,000-₹40,000. However, if you have an excellent credit score or work with a reputed company, we may consider lower salaries on a case-by-case basis.",
        },
        {
            question: "How long does approval take for salaried applicants?",
            answer: "Approval typically takes 24-48 hours once we receive complete documentation. If your salary slips and bank statements are clear, the process is very fast. Most salaried applicants get quick decisions.",
        },
        {
            question: "Can employees on probation apply for a personal loan?",
            answer: "We prefer employees who have completed their probation period and have received at least 3-6 months of confirmed salary. Probationary employees may face challenges in approval.",
        },
        {
            question: "What if my business is less than 3 years old?",
            answer: "If your business is 1-2 years old but showing strong income and profitability, you can still apply. We consider each case individually. Having a co-applicant or higher credit score helps in such cases.",
        },
        {
            question: "Can I use the loan for both personal and family needs?",
            answer: "Yes! This is a personal loan for salaried employees, which means you can use it for any personal purpose - medical bills, wedding, education, home renovation, travel, debt consolidation. No restrictions on end use.",
        },
        {
            question: "What if I recently changed my job?",
            answer: "If you recently changed jobs, we prefer that you've completed at least 3-6 months in your new role with regular salary credits. If you're in the notice period or have just joined, approval becomes difficult.",
        },
        {
            question: "Do government employees get better rates?",
            answer: "Yes, government employees, PSU staff, and employees of reputed MNCs often get preferential rates due to employment stability and lower risk profile. They also get faster approvals.",
        },
        {
            question: "Can I get a loan if my salary is paid in cash?",
            answer: "No, we need to see regular salary credits in your bank account. Cash salary payments cannot be verified, so we require proper banking records showing monthly salary deposits.",
        },
        {
            question: "What is the maximum loan tenure for salaried employees?",
            answer: "The maximum loan tenure is 5 years (60 months). You can choose shorter tenures like 1, 2, or 3 years based on your EMI affordability and preference.",
        },
        {
            question: "Can I apply if I work for a startup or small company?",
            answer: "Yes, you can apply even if you work for a startup or small company. However, employees of established companies, MNCs, or government organizations get preference due to perceived employment stability.",
        },
        {
            question: "What happens if I lose my job during the loan tenure?",
            answer: " If you lose your job, you must inform us immediately. You're still required to pay EMIs. We may work with you to find a solution, but non-payment will affect your credit score. Consider having an emergency fund for such situations.",
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

export default SalariedFAQ;
