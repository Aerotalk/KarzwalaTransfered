"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";


const WeddingFeatures = () => {
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
                                Personal Loan Interest Rates <span className="text-orange-500">for Weddings</span>

                            </h2>

                            <div className="text-gray-600 space-y-4 text-lg leading-relaxed">
                                <p>
                                    We decide your interest rate based on your credit score and monthly income. The better your credit profile and income stability, the lower rate you get. We believe in fair and transparent pricing - applicants with good credit history and stable income get the best rates.
                                </p>

                                <p className="font-semibold text-gray-900 mt-6">Your rate depends on:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Your credit score (650+ gets best rates)</li>
                                    <li>Your monthly income</li>
                                    <li>Your existing debts and liabilities</li>
                                    <li>Your income stability</li>
                                    <li>Quality of financial documents</li>
                                </ul>
                                <p className="font-semibold text-gray-900 mt-6">Interest rates starting from <span className="text-orange-500">8.5% to 24% per annum</span></p>
                            </div>
                        </div>

                        {/* Eligibility Criteria Section */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                What are the Eligibility Criteria to Get a

                                <span className="text-orange-500"> Wedding Loan from Karzwala?</span>

                            </h2>

                            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                                <p>
                                    Our online application process is very simple and easy and requires minimal
                                    documentation. But here are some terms that we look at before considering your
                                    application:
                                </p>
                                <div className="space-y-4">
                                    <p><strong className="text-gray-900">Credit Score:</strong> Preferably 650 and above (750+ gets best rates)</p>
                                    <p><strong className="text-gray-900">Income:</strong> At least ₹2 lakh p.a. for self-employed professionals</p>
                                    <p><strong className="text-gray-900">Salary:</strong> At least ₹35,000-₹40,000 a month for salaried individuals</p>
                                    <p><strong className="text-gray-900">Age Limit:</strong> Usually, 21-60 years. For self-employed applicants, the maximum age limit may go up to 65 years
                                    </p>
                                    <p><strong className="text-gray-900">  Employment Stability:</strong> At least 1 to 2 years of total work experience with a stable current job</p>
                                    <p><strong className="text-gray-900"> Business Continuity:</strong> Generally 3 years for self-employed</p>
                                    <p><strong className="text-gray-900"> Employer Profile:</strong> Salaried employees working with government, Public Sector Undertakings, MNCs and other reputed corporates are favoured</p>
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
                                Required for Getting A<span className="text-orange-500"> Wedding Loan From Karzwala?</span>
                            </h2>

                            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                                <p>
                                    We keep documentation simple even for self-employed applicants. Here's what you need to have ready:
                                </p>
                                <div className="space-y-4">
                                    <p>
                                        <strong className="text-gray-900">Identity Proof:</strong> Aadhaar, PAN, Passport, Voter ID, or Driving License
                                    </p>
                                    <p>
                                        <strong className="text-gray-900">Address Proof:</strong> Aadhaar, Passport, Voter ID, or recent utility bills (not older than 3 months)
                                    </p>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">Income Proof:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Last 2 years Income Tax Returns (ITR) with acknowledgment</li>
                                            <li>Profit & Loss statement</li>
                                            <li>Balance Sheet for the last 2 years</li>
                                            <li>Last 6-12 months current bank statements</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 mb-2">Business Proof:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>GST registration certificate</li>
                                            <li>Shop establishment certificate / Trade license</li>
                                            <li>Business registration documents</li>
                                            <li>Office address proof</li>
                                        </ul>
                                    </div>
                                </div>

                                <p>
                                    Most documents can be uploaded directly through our website in PDF or JPG format.
                                </p>
                            </div>
                        </div>

                        <p>
                            Most documents can be uploaded directly through our website in PDF or JPG format.
                        </p>


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
                                5 Important Tips to Increase
                                <br />
                                Your <span className="text-orange-500">Chances of Getting a</span>
                                <br />
                                <span className="text-orange-500">Wedding Loan</span>
                            </h2>

                            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                                <p>
                                    Those planning to get a wedding loan can improve their chances of approval by following these tips:
                                </p>

                                <ul className="list-disc pl-5 space-y-4">
                                    <li>Maintain your credit/CIBIL score above 750 - This is the most important factor for quick approval</li>
                                    <li>Check for mistakes in your credit report, as they might adversely impact your credit score and thereby, reduce the chances of loan approval - </li>
                                    <li> Have all documents ready - salary slips/ITR, bank statements, and ID proofs</li>
                                    <li>Apply for a realistic loan amount based on your income</li>
                                    <li>Avoid making multiple loan applications within a short span of time</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sticky Application Card */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 bg-orange-50 rounded-2xl p-8 border border-orange-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                How To Apply
                                for a <span className="text-orange-500">Wedding Loan</span> Online?
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

export default WeddingFeatures;                      