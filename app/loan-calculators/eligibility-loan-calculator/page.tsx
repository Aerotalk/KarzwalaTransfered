import { Metadata } from "next";
import {
    Calculator,
    CheckCircle2,
    HelpCircle,
    AlertCircle,
    Briefcase,
    CreditCard,
    Calendar,
    ShieldCheck,
    TrendingUp,
    PieChart
} from "lucide-react";
import EligibilityCalculator from "@/components/EligibilityCalculator";
import FAQSection from "@/components/FAQSection";
import { FAQItem } from "@/lib/types";


export const metadata: Metadata = {
    title: "Personal Loan Eligibility Calculator - Check Your Loan Eligibility Online | Karzwala",
    description: "Check your personal loan eligibility instantly with Karzwala's free online calculator. Find out how much loan you can get based on your salary, credit score, and existing EMIs.",
};

export default function EligibilityCalculatorPage() {
    const steps = [
        { num: "1", title: "Move the monthly income slider to set your salary." },
        { num: "2", title: "Adjust the tenure slider to choose your preferred loan repayment period." },
        { num: "3", title: "Set the monthly expense slider to show what percentage of your income goes to expenses." }
    ];

    const benefits = [
        { title: "Know Your Limit", desc: "See maximum loan amount you can get before applying" },
        { title: "Avoid Rejection", desc: "Apply for realistic amounts within your eligibility" },
        { title: "Plan Better", desc: "Understand how income and EMIs affect your loan capacity" },
        { title: "Save Time", desc: "No need to apply and wait for approval to know your eligibility" },
        { title: "Free to Use", desc: "Check eligibility unlimited times with no cost" },
        { title: "Instant Results", desc: "Get your eligible amount in real-time as you adjust sliders" },
        { title: "Improve Your Profile", desc: "See what changes can increase your eligibility" }
    ];

    const factors = [
        {
            title: "Monthly Income",
            desc: "Higher income means higher loan eligibility. We generally offer loans of 15-20 times your monthly income. Move the income slider right to see eligibility increase.",
            icon: <TrendingUp className="w-8 h-8 text-[#F46300]" />
        },
        {
            title: "Existing EMIs",
            desc: "Current loan EMIs reduce your eligibility as they affect your repayment capacity. Lower existing EMIs mean higher new loan eligibility.",
            icon: <CreditCard className="w-8 h-8 text-[#F46300]" />
        },
        {
            title: "Credit Score",
            desc: "Better credit scores (750+) increase your eligibility and get you lower interest rates. Poor scores may reduce eligible amount or lead to rejection.",
            icon: <ShieldCheck className="w-8 h-8 text-[#F46300]" />
        },
        {
            title: "Age",
            desc: "Younger applicants (25-45 years) with longer working years ahead typically get higher eligibility. Eligibility reduces as you approach retirement age.",
            icon: <Calendar className="w-8 h-8 text-[#F46300]" />
        },
        {
            title: "Employment Type",
            desc: "Salaried employees from government, PSU, or MNCs often get higher eligibility compared to private sector or self-employed individuals.",
            icon: <Briefcase className="w-8 h-8 text-[#F46300]" />
        },
        {
            title: "Employment Stability",
            desc: "Longer work experience and stable job history increase your loan eligibility. Frequent job changes may reduce it.",
            icon: <CheckCircle2 className="w-8 h-8 text-[#F46300]" />
        },
        {
            title: "Debt-to-Income Ratio",
            desc: "Your total monthly EMIs (including new loan) should not exceed 50-60% of your monthly income. This is called FOIR (Fixed Obligation to Income Ratio).",
            icon: <PieChart className="w-8 h-8 text-[#F46300]" />
        }
    ];

    const examples = [
        {
            salary: "₹35,000",
            loan: "₹5-7 lakhs",
            condition: "With no existing EMIs and good credit score"
        },
        {
            salary: "₹50,000",
            loan: "₹7.5-10 lakhs",
            condition: "With minimal existing EMIs and 750+ credit score"
        },
        {
            salary: "₹75,000",
            loan: "₹10+ lakhs",
            condition: "With good credit profile"
        },
        {
            salary: "₹1,00,000+",
            loan: "₹10+ lakhs (maximum limit)",
            condition: "Subject to credit score and existing liabilities"
        }
    ];

    const faqs: FAQItem[] = [
        {
            question: "How much loan can I get on 50000 salary?",
            answer: "With ₹50,000 monthly salary, you can typically get a personal loan of ₹7.5 to ₹10 lakhs from Karzwala. The exact amount depends on your existing EMIs and credit score. If you have no other loans and a credit score above 750, you can get up to ₹10 lakhs."
        },
        {
            question: "What salary is needed for 5 lakh personal loan?",
            answer: "You need a minimum monthly salary of ₹35,000 to ₹40,000 to get a ₹5 lakh personal loan. However, if you have existing loan EMIs, you might need higher income. Use our calculator above to check your exact eligibility."
        },
        {
            question: "Can I get loan with 30000 salary?",
            answer: "At Karzwala, the minimum salary requirement is ₹35,000 per month for salaried individuals. With ₹30,000 salary, you may not be eligible. However, you can try applying with a co-applicant to increase your eligibility."
        },
        {
            question: "Does loan eligibility check affect cibil score?",
            answer: "No, checking your loan eligibility on our calculator does not affect your CIBIL score. Only when you actually apply for a loan and the lender does a hard check, it may impact your score slightly."
        },
        {
            question: "How to increase loan eligibility?",
            answer: "You can increase your loan eligibility by: paying off existing loans to reduce EMIs, improving your credit score above 750, adding a co-applicant like your spouse, showing additional income sources, or waiting for a salary increment."
        },
        {
            question: "What is maximum loan amount I can get?",
            answer: "At Karzwala, the maximum personal loan amount is ₹10 lakhs. However, your eligibility depends on your monthly income - typically you can get 15-20 times your monthly salary as loan, subject to CIBIL score and existing liabilities."
        },
        {
            question: "Why am I not eligible for personal loan?",
            answer: "Common reasons include: salary below ₹35,000, CIBIL score below 650, too many existing loan EMIs, frequent job changes, or high monthly expenses. Check these factors and improve them before applying again."
        },
        {
            question: "Can I get 10 lakh loan on 60000 salary?",
            answer: "Yes, with ₹60,000 monthly salary, you can get a ₹10 lakh loan if you have minimal or no existing EMIs and a good credit score above 750. Use the calculator to see your exact eligibility based on your expenses."
        },
        {
            question: "Do existing EMIs reduce loan eligibility?",
            answer: "Yes, existing loan EMIs directly reduce your new loan eligibility. If you're already paying ₹15,000 monthly for other loans, this amount is deducted from your available repayment capacity, reducing how much new loan you can take."
        },
        {
            question: "Loan eligibility calculator is accurate or not?",
            answer: "Our calculator gives you a close estimate of your eligibility. It's about 85-90% accurate. However, final loan approval also depends on your documents, employer profile, and our internal checks, so the actual amount may vary slightly."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Personal Loan <span className="text-[#F46300]">Eligibility Calculator</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                        Check How Much Loan You Can Get in Seconds
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                        Find out your loan eligibility before you apply. Know your maximum loan amount based on your income and profile.
                    </p>
                </div>

                {/* Calculator */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden w-full max-w-5xl mx-auto p-8 md:p-12">
                    <EligibilityCalculator />
                </div>

                {/* Disclaimer */}
                <div className="max-w-4xl mx-auto bg-orange-50 border border-orange-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm mt-8">
                    <AlertCircle className="w-6 h-6 text-[#F46300] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Disclaimer:</strong> The loan amount shown is an estimate based on the information provided. Your actual eligible loan amount may vary depending on your CIBIL score, employment profile, existing liabilities, document verification, and Karzwala's internal assessment policies.
                    </p>
                </div>

                {/* What is a Loan Eligibility Calculator? */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 mt-16 text-center max-w-5xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="bg-orange-50 p-4 rounded-full">
                            <Calculator className="w-10 h-10 text-[#F46300]" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">What is a Loan Eligibility Calculator?</h3>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
                        A Loan Eligibility Calculator is a free online tool that helps you find out how much personal loan you can get based on your monthly income, existing EMIs, and other financial factors. Simply adjust the sliders for your salary, current EMIs, and credit score - the calculator instantly shows your maximum eligible loan amount. This helps you understand your borrowing capacity before applying and avoid loan rejection.
                    </p>
                </div>

                {/* How to Use and Why Use */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                    {/* How to Use */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">How to Use the Calculator?</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Using our slider-based eligibility calculator is very simple. Just follow these easy steps:
                        </p>
                        <div className="space-y-4 mb-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F46300] flex items-center justify-center font-bold flex-shrink-0">
                                        {step.num}
                                    </div>
                                    <p className="text-gray-800 font-medium">{step.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
                            <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <p className="text-blue-900 leading-relaxed">
                                The calculator instantly shows your maximum eligible loan amount and estimated EMI based on your financial profile. You can adjust the sliders to see how changes in income, tenure, or expenses affect your eligibility.
                            </p>
                        </div>
                    </div>

                    {/* Why Use */}
                    <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -z-0"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8 text-white">Why Use It?</h3>
                            <p className="text-gray-300 mb-6">Our eligibility calculator helps you understand your loan capacity:</p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                                        <CheckCircle2 className="w-6 h-6 text-[#F46300] flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-white block mb-0.5">{benefit.title}</span>
                                            <span className="text-gray-400 text-sm leading-tight">{benefit.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Factors That Affect Your Loan Eligibility */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Factors That Affect Your Loan Eligibility</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {factors.map((factor, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-start">
                                <div className="bg-orange-50 p-3 rounded-2xl mb-5">
                                    {factor.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{factor.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{factor.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Examples Section */}
                <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Loan Eligibility Based on Monthly Income</h3>
                        <p className="text-gray-600 text-lg">Here's a general idea of loan eligibility at Karzwala based on monthly salary:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {examples.map((ex, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 relative overflow-hidden group hover:bg-white hover:border-orange-200 hover:shadow-md transition-all">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#F46300] transition-colors"></div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Monthly Salary</div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{ex.salary}</h4>

                                <div className="py-3 border-y border-gray-200 mb-4">
                                    <div className="text-sm text-gray-500 mb-1">Eligible Loan:</div>
                                    <div className="text-xl font-bold text-[#F46300]">{ex.loan}</div>
                                </div>

                                <p className="text-sm text-gray-600 italic">"{ex.condition}"</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center text-sm text-gray-500 bg-gray-50 py-3 rounded-lg">
                        <strong>Note:</strong> These are approximate ranges. Use our calculator above for your exact eligibility based on your complete profile.
                    </div>
                </div>

                {/* FAQs */}
                <FAQSection faqData={faqs} />

            </div>
        </div>
    );
}
