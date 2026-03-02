import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CreditCard, TrendingUp, ShieldCheck, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Karzwala",
    description: "Learn more about us and our financial services.",
};

export default function AboutUsPage() {
    const useCases = [
        "Rents",
        "Buying items",
        "Personal use",
        "Bill Payments",
        "Education Purposes",
        "Many more"
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get To Know <span className="text-[#F46300]">About Us</span>
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mt-4 mb-6">
                        Few Words About Our Company
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We are here to solve all your financial emergencies. Here we offer various types of loans whether you need them for emergency purposes or personal use. You can use our loans for various purposes such as:
                    </p>

                    {/* Use Cases List */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {useCases.map((item, index) => (
                            <span key={index} className="bg-white border border-gray-200 shadow-sm text-gray-700 px-6 py-2 rounded-full font-medium flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-[#F46300]" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* EMI Options */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start">
                        <div className="bg-[#fff3eb] p-4 rounded-2xl mb-6">
                            <CreditCard className="w-8 h-8 text-[#F46300]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Easiest EMI Options</h3>
                        <p className="text-gray-600 leading-relaxed">
                            If you are worried about paying your bills but cannot find any way then we are there for you. Not only this, we are there to give you all the necessary information to understand our offers. One of the main reasons for choosing us is that we offer the easiest EMI options so you can repay our loans.
                        </p>
                    </div>

                    {/* Credit Score */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start">
                        <div className="bg-[#fff3eb] p-4 rounded-2xl mb-6">
                            <TrendingUp className="w-8 h-8 text-[#F46300]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Improve Your Credit History With Us</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Do you know you can improve your credit score with us? Through our easiest way of loan transactions and EMI, you can easily pay off the loans. It is beneficial for people who are obtaining a loan for the first time. Having a great credit score means approval of huge amounts of loans in the future becomes easy.
                        </p>
                    </div>
                </div>

                {/* Highlight Section: Application & Eligibility */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm border border-gray-200 mb-16 overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Easy Application</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We know how much hassle you have to go through to get a loan. Various proofs, documentation may require several days or even months. Here, we not only provide you the best offers, but you can get loans very easily.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-10">
                                You can go to our website - <span className="font-bold text-[#F46300]">loaninneed.in</span> and fulfil the necessary information. After that, your loan gets easily approved in few minutes.
                            </p>

                            {/* Eligibility Box */}
                            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <ShieldCheck className="text-[#F46300] w-6 h-6" /> Eligibility of Loan
                                </h4>
                                <p className="text-gray-700 mb-5">
                                    To apply for a loan you have to be eligible in these three particular areas:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 text-gray-700 font-medium">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" /> Stable Monthly Income
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-700 font-medium">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" /> Above 21 years of age
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-700 font-medium">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" /> Citizen or Resident of India
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">

                            {/* Duration Box */}
                            <div className="bg-[#fff3eb] p-8 rounded-3xl border border-orange-100/50 hover:shadow-md transition-shadow">
                                <Calendar className="w-12 h-12 text-[#F46300] mb-6" />
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Duration of Loan</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Unlike traditional loan companies, the duration of the loans depends upon the amount. Hence, you can easily pay your loans without worrying about large EMIs. As we have said, we ensure that we offer you flexible duration. In this way, you can pay off your debt easily.
                                </p>
                            </div>

                            {/* Quick Services Box */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                                <Clock className="w-12 h-12 text-[#F46300] mb-6" />
                                <h4 className="text-2xl font-bold text-gray-900 mb-3">Quick Services</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Loan In Need is a great emerging platform that offers quick services to provide loans. Our loans are specifically constructed to help you out in any kind of emergency. Hence, you should choose us because we are here to lend you money within 30 minutes in your tough times.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="relative text-center rounded-[2.5rem] p-10 md:p-20 text-white shadow-xl overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/shaking-hands-grey-wall.jpg')" }}
                >
                    {/* Dark Overlay for Readability */}
                    <div className="absolute inset-0 bg-black/60 z-0"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                            If you are looking for financial assistance then, we are there too. Choose us because we are here to lend you money within 30 minutes in your tough times.
                        </p>
                        <Link href="/apply-now" className="inline-block bg-[#F46300] text-white hover:bg-[#d95800] focus:ring-4 focus:ring-orange-300 font-bold py-4 px-12 rounded-full transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Apply Now
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
