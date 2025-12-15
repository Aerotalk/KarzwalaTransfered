"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";


const PersonalLoanDetails = () => {
    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column - Scrollable Content */}
                    <div className="lg:w-2/3 space-y-12">

                        {/* Interest Rates Section */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What are interest rates of <span className="text-orange-500">Karzwala Personal Loans</span>

                            </h2>

                            <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                                <p>
                                    We decide your interest rate based on your credit score and monthly salary. The
                                    better your credit profile and employment stability, the lower rate you get. We
                                    believe in fair and transparent pricing - salaried employees with good credit
                                    history and stable income get the best rates.
                                </p>

                                <p className="font-semibold text-gray-900 mt-6">Your rate depends on:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Your credit score</li>
                                    <li>Your monthly salary</li>
                                    <li>Your existing debts</li>
                                    <li>Your employment stability</li>
                                </ul>
                            </div>
                        </div>

                        {/* Eligibility Criteria Section */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What are the Eligibility Criteria to get a
                                <br />
                                <span className="text-orange-500">Personal Loan with Karzwala</span>
                            </h2>

                            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                                <p>
                                    Our online application process is very simple and easy and requires minimal
                                    documentation. But here are some terms that we look at before considering your
                                    application:
                                </p>

                                <div className="space-y-4">
                                    <p><strong className="text-gray-900">Credit Score:</strong> Preferably 750 and above </p>
                                    <p><strong className="text-gray-900">Monthly Salary:</strong> At least ₹35,000-₹40,000 per month</p>
                                    <p><strong className="text-gray-900">Income:</strong> At least Rs. 2 lakh p.a. (may vary among self-employed professionals & non-professionals)</p>
                                    <p><strong className="text-gray-900">Employment Stability:</strong> At least 1 to 2 years of total work experience with a stable current job</p>
                                    <p><strong className="text-gray-900">Work Experience:</strong> At least 1-2 years of total work experience</p>
                                    <p><strong className="text-gray-900">Business Continuity</strong> Generally 3 years</p>
                                    <p><strong className="text-gray-900">Employer Profile:</strong> Salaried employees working with government, Public Sector Undertakings, MNCs and other reputed corporates are favoured</p>
                                    <p><strong className="text-gray-900">Age Limit:</strong> Usually, 21-60 years. For self-employed applicants and pensioners, the maximum age limit may go up to 65 and 75 years respectively.
                                    </p>
                                </div>

                                <p className="text-gray-900 font-medium">Don't meet all criteria?</p>

                                <p>
                                    Apply anyway - we look at each application individually and consider your overall employment profile.
                                </p>
                            </div>
                        </div>

                        {/* Documents Required Section */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What are the Documents
                                <br />
                                Required to get <span className="text-orange-500">Personal</span>
                                <br />
                                <span className="text-orange-500">Loan with Karzwala?</span>
                            </h2>

                            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                                <p>
                                    We keep documentation simple. Here&#39;s what you need to have ready
                                </p>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-gray-900 font-bold text-xl">For Salaried People:</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong className="text-gray-900">ID Proof:</strong> Aadhaar, PAN, Passport, Voter ID, or Driving License</li>
                                            <li><strong className="text-gray-900">Address Proof:</strong> Aadhaar, Passport, Voter ID, or recent utility bills</li>
                                            <li><strong className="text-gray-900">Income Proof:</strong> Last 3 months' salary slips, 6 months bank statements, Form 16</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-gray-900 font-bold text-xl">For Self-Employed People:</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li><strong className="text-gray-900">ID Proof:</strong> Aadhaar, PAN, Passport, Voter ID, or Driving License</li>
                                            <li><strong className="text-gray-900">Address Proof:</strong> Aadhaar, Passport, Voter ID, or recent utility bills</li>
                                            <li><strong className="text-gray-900">Income Proof:</strong> Last 2 years' Income Tax Returns, P&L statement, Balance Sheet, bank statements</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Salary Based Loans Section */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Choose The Personal Loan
                                <br />
                                Amount Based On <span className="text-orange-500">Your Monthly</span>
                                <br />
                                <span className="text-orange-500">Salary</span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Explore personal loan options tailored to your monthly salary. Karzwala helps you
                                understand how much you can comfortably borrow based on your earnings, so
                                you can make a confident and informed choice. Check personalised offers,
                                eligibility, and benefits based on your monthly income.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { amount: "₹35,000", link: "/personal-loan/salary-35000" },
                                    { amount: "₹40,000", link: "/personal-loan/salary-40000" },
                                    { amount: "₹50,000", link: "/personal-loan/salary-50000" },
                                    { amount: "₹60,000", link: "/personal-loan/salary-60000" },
                                    { amount: "₹80,000", link: "/personal-loan/salary-80000" },
                                    { amount: "₹1,00,000", link: "/personal-loan/salary-100000" },
                                ].map((item, index) => (
                                    <Card key={index} className="bg-orange-50/50 border-orange-100 overflow-hidden hover:shadow-md transition-shadow h-full pb-0 gap-0">
                                        <CardContent className="p-6 text-center flex-1 flex flex-col justify-center">
                                            <p className="text-gray-500 text-sm mb-2">Personal loan for</p>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.amount}</h3>
                                            <p className="text-gray-500 text-sm">salary</p>
                                        </CardContent>
                                        <CardFooter className="p-0 mt-auto">
                                            <Link href={item.link} className="w-full bg-[#EA580C] hover:bg-[#C2410C] text-white py-3 px-4 flex items-center justify-center gap-2 font-medium transition-colors">
                                                Apply now <span>→</span>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* 5 Important Tips Section */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                5 Important Tips to
                                <br />
                                Increase Your <span className="text-orange-500">Chances of</span>
                                <br />
                                <span className="text-orange-500">Getting a Personal Loan</span>
                            </h2>

                            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                                <p>
                                    Those planning to get a personal loan can improve their chances of approval by
                                    following these tips:
                                </p>

                                <ul className="list-disc pl-5 space-y-4">
                                    <li>Maintain your credit/CIBIL score above 750</li>
                                    <li>Check for mistakes in your credit report, as they might adversely impact your credit score and thereby, reduce the chances of loan approval</li>
                                    <li>Compare the offers available from banks and NBFCs before finalising any loan deal</li>
                                    <li>Apply for the loan from a bank/NBFC where you have the highest chances of approval</li>
                                    <li>Avoid making multiple loan applications within a short span of time</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Right Column - Sticky Application Card */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 bg-orange-50 rounded-2xl p-8 border border-orange-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                How to apply
                                for a Personal Loan Online?
                            </h3>

                            <p className="text-gray-700 mb-8 font-medium">
                                Get up to <span className="text-orange-500 font-bold">₹10 Lakh</span> in 5 Simple Steps
                            </p>

                            <div className="space-y-6">
                                {[
                                    { step: "Step 1", text: "Enter your mobile number in the application form and verify it via OTP" },
                                    { step: "Step 2", text: "Enter your PAN number and upload an image of it" },
                                    { step: "Step 3", text: "Submit your salary slips, bank statements, and address proof" },
                                    { step: "Step 4", text: "Verify your Aadhaar details via Aadhaar mobile OTP" },
                                    { step: "Step 5", text: "Click Submit – You will get a callback from our executive with best offers based on your profile" }
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="mt-1 flex-shrink-0">
                                            <div className="bg-orange-500 rounded-full p-0.5">
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 text-sm">
                                            <span className="font-bold text-orange-600">{item.step}:</span> {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <a href="#" onClick={scrollToTop} className="block w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full text-center transition-colors duration-200 w-fit inline-flex items-center gap-2">
                                    Apply now <span className="text-xl">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalLoanDetails;
