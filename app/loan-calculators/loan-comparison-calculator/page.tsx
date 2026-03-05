import { Metadata } from "next";
import {
    HelpCircle,
    Copy,
    CheckCircle2,
    Calculator,
    AlertCircle,
    TrendingDown,
    Search,
    PiggyBank
} from "lucide-react";
import LoanComparisonCalc from "@/components/LoanComparisonCalc";
import FAQSection from "@/components/FAQSection";
import { FAQItem } from "@/lib/types";

export const metadata: Metadata = {
    title: "Personal Loan Comparison Calculator - Compare Multiple Loan Offers | Karzwala",
    description: "Compare personal loan offers from multiple lenders with Karzwala's free comparison calculator. Check EMI, interest rates, processing fees, and total cost to find the best loan deal.",
};

export default function LoanComparisonCalculatorPage() {
    const steps = [
        {
            num: "1",
            title: "Set Up Loan 1",
            desc: "Move the loan amount slider to set the first loan amount. Adjust the interest rate slider and tenure slider based on what the lender is offering."
        },
        {
            num: "2",
            title: "Set Up Loan 2",
            desc: "Do the same for the second loan offer - adjust loan amount, interest rate, and tenure sliders to match the second lender's terms."
        },
        {
            num: "3",
            title: "Add More Loans (Optional)",
            desc: "Click the \"+ Add Another Loan\" button to compare a third or fourth loan offer if needed."
        },
        {
            num: "4",
            title: "Compare Results",
            desc: "The calculator instantly shows you EMI, total interest, and total payable amount for each loan side-by-side. You can see which offer costs you the least overall."
        }
    ];

    const benefits = [
        { title: "Save Thousands", desc: "Find the loan that costs you least overall" },
        { title: "See Hidden Costs", desc: "Compare total cost including processing fees and charges" },
        { title: "Easy Comparison", desc: "View all loan offers side-by-side in one place" },
        { title: "Make Smart Decisions", desc: "Don't get fooled by just low interest rates" },
        { title: "Free to Use", desc: "Compare unlimited loan offers at no cost" },
        { title: "Instant Results", desc: "See which offer is best in seconds" },
        { title: "Avoid Bad Deals", desc: "Spot expensive loans before you commit" }
    ];

    const tips = [
        {
            title: "Check Your Credit Score First",
            desc: "Score above 750 gets you better rates. Don't apply with low score - improve it first.",
            icon: <Search className="w-6 h-6 text-[#F46300]" />
        },
        {
            title: "Compare at Least 3-4 Lenders",
            desc: "Don't take the first offer. Use our calculator to compare multiple options.",
            icon: <Copy className="w-6 h-6 text-[#F46300]" />
        },
        {
            title: "Negotiate",
            desc: "If you have good credit score and income, try negotiating for lower rates or fees.",
            icon: <TrendingDown className="w-6 h-6 text-[#F46300]" />
        },
        {
            title: "Read All Terms",
            desc: "Check prepayment charges, late fees, bounce charges before signing.",
            icon: <AlertCircle className="w-6 h-6 text-[#F46300]" />
        },
        {
            title: "Choose Shorter Tenure If Possible",
            desc: "If you can afford higher EMI, choose shorter tenure to save on total interest.",
            icon: <PiggyBank className="w-6 h-6 text-[#F46300]" />
        },
        {
            title: "Avoid Add-on Products",
            desc: "Lenders often push insurance or other products. These increase your cost. Take only if you genuinely need.",
            icon: <CheckCircle2 className="w-6 h-6 text-[#F46300]" />
        },
        {
            title: "Apply During Offers",
            desc: "Many lenders give special rates during festive seasons. Time your application right.",
            icon: <CalendarIcon className="w-6 h-6 text-[#F46300]" />
        }
    ];

    const faqs: FAQItem[] = [
        {
            question: "How do I compare personal loans from different banks?",
            answer: "Enter loan details from each bank in our comparison calculator - loan amount, interest rate, tenure, and processing fee. The calculator will show you total EMI, interest, and cost for each. Choose the one with lowest total cost, not just lowest interest rate."
        },
        {
            question: "Which loan is better 10% or 12% interest?",
            answer: "Not always 10%. If the 10% loan has 3% processing fee and 12% loan has 0.5% processing fee, the 12% loan might actually be cheaper overall. Use our calculator to compare total cost including all fees."
        },
        {
            question: "Should I choose loan with lowest EMI?",
            answer: "Not necessarily. Lowest EMI usually means longest tenure, which means you pay much more total interest. Choose an EMI you can afford but keep tenure as short as possible to save money."
        },
        {
            question: "What is a good interest rate for personal loan?",
            answer: "Currently, personal loan rates range from 8.5% to 24% p.a. Rates below 12% are considered good. You get lower rates with credit score above 750 and stable income from reputed employers."
        },
        {
            question: "How much processing fee is normal?",
            answer: "Processing fees typically range from 0.5% to 3% of loan amount. Anything above 2% is on the higher side. Some lenders like Karzwala charge minimal processing fees to keep your cost low."
        },
        {
            question: "Can I negotiate loan interest rate?",
            answer: "Yes, if you have excellent credit score (750+), high stable income, or existing relationship with the lender. Compare multiple offers and use the best one to negotiate with your preferred lender."
        },
        {
            question: "What charges are included in total loan cost?",
            answer: "Total cost includes: loan principal + total interest + processing fee + documentation charges + prepayment charges (if any) + insurance (if mandatory) + GST on fees. Our calculator shows the complete picture."
        },
        {
            question: "Is it better to prepay personal loan?",
            answer: "Yes, prepaying reduces your total interest cost significantly. Always choose loans with zero prepayment penalty. Even small prepayments of ₹10,000-20,000 can save you thousands in interest."
        },
        {
            question: "How many loan offers should I compare?",
            answer: "Compare at least 3-4 lenders including banks and NBFCs. This gives you good market understanding and helps you spot the truly best deal. Use our calculator to compare side-by-side."
        },
        {
            question: "Why is total cost more important than interest rate?",
            answer: "Because a loan with lower interest rate but high processing fee and other charges can cost more than a loan with slightly higher rate but low fees. Total cost shows the complete money you'll pay back - that's what matters."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Personal Loan <span className="text-[#F46300]">Comparison Calculator</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                        Compare Loan Offers and Find the Best Deal
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                        Don't settle for the first offer. Compare multiple loan options side-by-side and choose the one that saves you the most money.
                    </p>
                </div>

                {/* The Comparison Calculator Component */}
                <LoanComparisonCalc />

                {/* What is a Loan Comparison Calculator? */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 mt-16 text-center max-w-5xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <div className="bg-orange-50 p-4 rounded-full">
                            <Calculator className="w-10 h-10 text-[#F46300]" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">What is a Loan Comparison Calculator?</h3>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
                        A Loan Comparison Calculator is a free online tool that helps you compare different personal loan offers side-by-side. Enter the loan amount, interest rates, tenure, and processing fees from different lenders - the calculator shows you which loan costs less overall. This helps you make a smart decision and avoid costly mistakes when choosing a personal loan.
                    </p>
                </div>

                {/* How to Use and Why Use */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
                    {/* How to Use */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">How to Use Karzwala's Loan Comparison Calculator?</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Using our comparison calculator is simple. Just follow these steps:
                        </p>
                        <div className="space-y-4 mb-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F46300] flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                                        <p className="text-gray-600 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
                            <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <p className="text-blue-900 leading-relaxed">
                                You can adjust any slider at any time to see how changes affect the total cost. This helps you understand which factors matter most in your loan decision.
                            </p>
                        </div>
                    </div>

                    {/* Why Use */}
                    <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -z-0"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8 text-white">Why Use It?</h3>
                            <p className="text-gray-300 mb-6">Our comparison calculator helps you save money:</p>
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

                {/* Example Section */}
                <div className="mt-20">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-3">
                            Example: Why Comparison Matters
                        </h3>
                        <p className="text-gray-600 text-lg">Let's say you need a ₹5 lakh loan for 3 years:</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-stretch">
                        <div className="flex-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col pt-10 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-2 rounded-full font-bold text-lg shadow-md">
                                Lender A
                            </div>
                            <ul className="space-y-4 text-gray-700 font-medium mt-4 flex-1">
                                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Interest Rate:</span> <span>11% p.a.</span></li>
                                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Processing Fee:</span> <span>2% (₹10,000)</span></li>
                                <li className="flex justify-between border-b border-gray-100 pb-2"><span>Monthly EMI:</span> <span>₹16,403</span></li>
                                <li className="flex justify-between border-b border-gray-100 pb-2 text-gray-500"><span>Total Interest:</span> <span>₹90,508</span></li>
                            </ul>
                            <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-800">Total Cost:</span>
                                    <span className="text-2xl font-bold text-gray-900">₹6,00,508</span>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center justify-center text-gray-400 font-bold text-2xl">
                            VS
                        </div>

                        <div className="flex-1 bg-orange-50 p-8 rounded-3xl shadow-md border border-orange-200 flex flex-col pt-10 relative transform md:-translate-y-4">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F46300] text-white px-6 py-2 rounded-full font-bold text-lg shadow-md">
                                Lender B (Better)
                            </div>
                            <ul className="space-y-4 text-orange-900 font-medium mt-4 flex-1">
                                <li className="flex justify-between border-b border-orange-200/50 pb-2"><span>Interest Rate:</span> <span>12% p.a.</span></li>
                                <li className="flex justify-between border-b border-orange-200/50 pb-2"><span>Processing Fee:</span> <span>0.5% (₹2,500)</span></li>
                                <li className="flex justify-between border-b border-orange-200/50 pb-2"><span>Monthly EMI:</span> <span>₹16,607</span></li>
                                <li className="flex justify-between border-b border-orange-200/50 pb-2 text-orange-700/70"><span>Total Interest:</span> <span>₹97,852</span></li>
                            </ul>
                            <div className="mt-6 pt-4 border-t-2 border-dashed border-orange-200">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-orange-900">Total Cost:</span>
                                    <span className="text-3xl font-bold text-[#F46300]">₹6,00,352</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                        <p className="text-lg text-green-800 font-medium">
                            <strong className="font-bold text-green-900 text-xl block mb-2">The Result</strong>
                            Even though Lender A has a 1% lower interest rate, Lender B is actually cheaper by ₹156 because of the lower processing fee! This is why you need to compare total cost, not just interest rates.
                        </p>
                    </div>
                </div>

                {/* Best Deal Tips */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">How to Get the Best Personal Loan Deal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {tips.map((tip, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
                                <div className="bg-orange-50 p-3 rounded-2xl mb-4 text-2xl font-black text-orange-200">
                                    {idx + 1}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
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

const CalendarIcon = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
    </svg>
);
