import { Metadata } from "next";
import LoanCalculator from "@/components/LoanCalculator";
import {
    Calculator,
    CheckCircle2,
    HelpCircle,
    TrendingUp,
    Clock,
    CreditCard,
    AlertCircle
} from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { FAQItem } from "@/lib/types";

export const metadata: Metadata = {
    title: "Personal Loan EMI Calculator - Calculate Your Monthly EMI Online | Karzwala",
    description: "Use Karzwala's free personal loan EMI calculator to instantly calculate your monthly installments. Check EMI, total interest, and repayment amount for loans up to ₹10 lakh.",
};

export default function PersonalEmiCalculatorPage() {
    const steps = [
        { num: "1", title: "Enter the loan amount you need." },
        { num: "2", title: "Enter the interest rate." },
        { num: "3", title: "Select your loan tenure." }
    ];

    const benefits = [
        { title: "Instant Results", desc: "Get your EMI amount in seconds" },
        { title: "Plan Your Budget", desc: "Know exactly how much you'll pay each month" },
        { title: "Compare Options", desc: "Try different loan amounts and tenures" },
        { title: "No Hidden Costs", desc: "See total interest and repayment amount upfront" },
        { title: "Free to Use", desc: "Calculate unlimited times before applying" },
        { title: "Easy to Understand", desc: "Simple interface with clear breakup" },
        { title: "Make Informed Decisions", desc: "Choose the best loan tenure for your budget" }
    ];

    const examples = [
        {
            title: "Example 1: ₹3 Lakh Loan for 3 Years at 10% Interest",
            amount: "₹3,00,000",
            rate: "10% per annum",
            tenure: "3 years (36 months)",
            emi: "₹9,682",
            interest: "₹48,552",
            total: "₹3,48,552"
        },
        {
            title: "Example 2: ₹5 Lakh Loan for 5 Years at 12% Interest",
            amount: "₹5,00,000",
            rate: "12% per annum",
            tenure: "5 years (60 months)",
            emi: "₹11,122",
            interest: "₹1,67,337",
            total: "₹6,67,337"
        },
        {
            title: "Example 3: ₹10 Lakh Loan for 2 Years at 8.5% Interest",
            amount: "₹10,00,000",
            rate: "8.5% per annum",
            tenure: "2 years (24 months)",
            emi: "₹45,246",
            interest: "₹85,904",
            total: "₹10,85,904"
        }
    ];

    const faqs: FAQItem[] = [
        {
            question: "What is the EMI for a ₹5 lakh personal loan?",
            answer: "For a ₹5 lakh personal loan, EMI depends on interest rate and tenure. At 10% for 3 years, EMI is around ₹16,134. At 12% for 5 years, EMI is around ₹11,122. Use our calculator above for exact amounts based on your rate and tenure."
        },
        {
            question: "How is personal loan EMI calculated?",
            answer: "Personal loan EMI is calculated using the formula: EMI = [P x R x (1+R)^N] / [(1+R)^N-1], where P is principal, R is monthly interest rate, and N is tenure in months. Our calculator does this automatically for you."
        },
        {
            question: "Can I change my EMI amount after loan approval?",
            answer: "You cannot change EMI during the loan tenure unless you prepay to reduce principal or request tenure modification. Some lenders offer step-up or step-down EMI options at the time of loan approval."
        },
        {
            question: "What happens if I miss an EMI payment?",
            answer: "Missing EMI payments attracts late payment charges and negatively impacts your credit score. It also reduces your eligibility for future loans. Always pay EMIs on time to maintain good credit health."
        },
        {
            question: "Is EMI calculator result accurate?",
            answer: "Yes, our EMI calculator provides accurate results based on the standard EMI formula. However, your actual EMI may vary slightly based on the exact interest rate and processing fees charged by the lender."
        },
        {
            question: "Can I prepay my personal loan to reduce EMI?",
            answer: "Yes, you can prepay your personal loan anytime. Prepayment reduces your principal amount. You can either reduce your EMI amount or shorten your loan tenure. No prepayment penalty for floating rate loans."
        },
        {
            question: "What is the minimum and maximum loan tenure at Karzwala?",
            answer: "At Karzwala, personal loan tenure ranges from 1 year (12 months) to 5 years (60 months). You can choose any tenure based on your repayment capacity and affordability."
        },
        {
            question: "Does higher tenure mean lower EMI?",
            answer: "Yes, higher tenure means lower monthly EMI but you pay more total interest. For example, ₹5 lakh at 10% for 3 years = ₹16,134 EMI, but for 5 years = ₹10,624 EMI (lower EMI but ₹1,37,440 total interest vs ₹80,824)."
        },
        {
            question: "How much personal loan EMI can I afford?",
            answer: "Your EMI should not exceed 40-50% of your monthly income. If you earn ₹50,000 per month, your comfortable EMI limit is ₹20,000-₹25,000. This leaves enough for other expenses and savings."
        },
        {
            question: "Can I use this calculator for other types of loans?",
            answer: "Yes, this calculator works for any loan type - home loan, car loan, business loan, education loan - as long as it follows the standard EMI structure. Just enter the applicable interest rate and tenure."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Personal Loan <span className="text-[#F46300]">EMI Calculator</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                        Calculate Your Personal Loan EMI in Seconds
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium">
                        Plan your finances better with our free online EMI calculator. Know your monthly installment before you apply.
                    </p>
                </div>

                {/* EMI Calculator Tool */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <LoanCalculator />
                </div>

                {/* What is a Personal Loan EMI Calculator? */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <Calculator className="w-8 h-8 text-[#F46300]" /> What is it?
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                A Personal Loan EMI Calculator is a free online tool that helps you calculate your monthly loan repayment amount (EMI) instantly. Just enter your loan amount, interest rate, and tenure - the calculator shows you exactly how much you'll pay every month, total interest, and total repayment amount.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                This helps you plan your budget and choose the right loan amount and tenure before applying.
                            </p>
                        </div>

                        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">The Formula</h4>
                            <div className="bg-white p-4 rounded-xl shadow-sm mb-6 text-center border border-gray-100">
                                <p className="font-mono text-lg font-semibold text-[#F46300]">
                                    EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
                                </p>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li><strong>P</strong> = Principal loan amount</li>
                                <li><strong>R</strong> = Monthly interest rate (Annual rate/12/100)</li>
                                <li><strong>N</strong> = Loan tenure in months</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* How to Use and Why Use */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                    {/* How to Use */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">How to Use Karzwala's Calculator?</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Using our EMI calculator is simple. Follow these 3 easy steps:
                        </p>
                        <div className="space-y-4 mb-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-10 h-10 rounded-full bg-[#F46300] text-white flex items-center justify-center font-bold flex-shrink-0">
                                        {step.num}
                                    </div>
                                    <p className="text-gray-800 font-medium">{step.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
                            <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <p className="text-blue-900 leading-relaxed">
                                The calculator instantly shows your monthly EMI, total interest payable, and total amount to be repaid. You can adjust the values to see different EMI options and choose what fits your budget.
                            </p>
                        </div>
                    </div>

                    {/* Why Use */}
                    <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -z-0"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8 text-white">Why Use It?</h3>
                            <p className="text-gray-300 mb-6">Our EMI calculator helps you make smart borrowing decisions:</p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-[#F46300] flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold text-white">{benefit.title} &ndash; </span>
                                            <span className="text-gray-300">{benefit.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Understanding Your Personal Loan EMI */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Understanding Your Personal Loan EMI</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <CreditCard className="w-12 h-12 text-[#F46300] mb-6" />
                            <h4 className="text-xl font-bold text-gray-900 mb-4">What is EMI?</h4>
                            <p className="text-gray-600 leading-relaxed">
                                EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay your personal loan. It includes both principal amount and interest. Your EMI stays the same throughout the loan tenure, making it easier to budget.
                            </p>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <TrendingUp className="w-12 h-12 text-[#F46300] mb-6" />
                            <h4 className="text-xl font-bold text-gray-900 mb-4">What Affects Your EMI?</h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex gap-2"><span>&bull;</span> <span><strong>Loan Amount:</strong> Higher amount = Higher EMI</span></li>
                                <li className="flex gap-2"><span>&bull;</span> <span><strong>Interest Rate:</strong> Higher rate = Higher EMI</span></li>
                                <li className="flex gap-2"><span>&bull;</span> <span><strong>Loan Tenure:</strong> Longer tenure = Lower EMI (but higher total interest)</span></li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <Clock className="w-12 h-12 text-[#F46300] mb-6" />
                            <h4 className="text-xl font-bold text-gray-900 mb-4">EMI vs Total Interest</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Remember: Lower EMI doesn't always mean cheaper loan. Longer tenures reduce your monthly EMI but increase total interest cost significantly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Examples Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Personal Loan EMI Calculation Examples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {examples.map((ex, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-[#F46300]/50 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-[#F46300]"></div>
                                <h4 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">{ex.title}</h4>
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between"><span className="text-gray-500">Loan Amount:</span> <span className="font-semibold text-gray-900">{ex.amount}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-500">Interest Rate:</span> <span className="font-semibold text-gray-900">{ex.rate}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-500">Tenure:</span> <span className="font-semibold text-gray-900">{ex.tenure}</span></div>
                                    <div className="py-2 border-y border-gray-100 my-2">
                                        <div className="flex justify-between text-base"><span className="text-gray-600 font-medium">Monthly EMI:</span> <span className="font-bold text-[#F46300]">{ex.emi}</span></div>
                                    </div>
                                    <div className="flex justify-between"><span className="text-gray-500">Total Interest:</span> <span className="font-semibold text-gray-900">{ex.interest}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-500">Total Amount Payable:</span> <span className="font-semibold text-gray-900">{ex.total}</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <FAQSection faqData={faqs} />

            </div>
        </div>
    );
}
