import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,0.9fr)] items-center">
                {/* Left content */}
                <div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-slate-900">
                                <span className="whitespace-nowrap">Get Instant Personal Loan{" "}
                                    <span className="text-orange-500"> <br />Up to ₹10 Lakhs <br />With &#x20B9;40000 Monthly Salary{" "}</span></span>
                            </h1>

                            <p className="mt-4 text-sm md:text-base text-slate-600 max-w-xl">
                                <li>Lower Interest Rate starting from <span className="text-orange-500">8.5% p.a.</span></li>
                                <li>Fast Approval With Minimal Paperwork</li>
                            </p>
                        </div>

                        {/* Illustration + badge row */}

                    </div>

                    {/* Stats bar */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 border border-orange-100 rounded-2xl overflow-hidden shadow-sm">
                        {/* Rating */}
                        <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-orange-100 flex flex-col gap-1">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                Customer rating
                            </span>
                            <div className="flex items-center gap-1 text-lg">
                                <span className="flex text-orange-400 text-xl leading-none">
                                    ★★★★★
                                </span>
                            </div>
                            <span className="text-xs text-slate-500">
                                <span className="font-semibold text-slate-800">4.2/5</span> 2839
                                Reviews
                            </span>
                        </div>

                        {/* Satisfied customers */}
                        <div className="px-6 py-4 border-b md:border-b-0 flex justify-between items-center gap-6">
                            {/* <div className="px-6 py-4 flex justify-center gap-2"> */}
                            <div className="flex flex-col w-full">
                                <span className="text-xl font-bold text-slate-900">
                                    50,000+
                                </span>
                                <span className="text-xs text-slate-500">
                                    Satisfied Customer
                                </span>
                            </div>
                            {/* Loans / cities */}
                            <div className="flex flex-col w-full">
                                <span className="text-xl font-semibold text-slate-900">
                                    ₹100Cr.+
                                </span>
                                <span className="text-xs text-slate-500">Loans Disbursed</span>
                            </div>
                            <div className="flex flex-col w-full">
                                <span className="text-xl font-semibold text-slate-900">
                                    35+
                                </span>
                                <span className="text-xs text-slate-500">Cities across India</span>
                            </div>
                            {/* </div> */}

                        </div>
                    </div>
                </div>

                {/* Right: loan application card */}
                <div className="lg:justify-self-end">
                    <div className="bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.08)] px-6 py-7 md:px-8 md:py-8 w-full max-w-lg mx-auto">
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                            <span className="text-orange-500">Apply</span> for Personal Loan online
                        </h2>

                        {/* Form */}
                        <form className="mt-6 space-y-4">
                            <div className="space-y-1">
                                <label
                                    htmlFor="mobile"
                                    className="text-xs font-medium text-slate-700"
                                >
                                    Mobile (as per adhar linked){" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="mobile"
                                    type="tel"
                                    placeholder=""
                                    className="w-full h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="loanType"
                                    className="text-xs font-medium text-slate-700"
                                >
                                    Select loan type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="loanType"
                                    className="w-full h-11 rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 bg-white"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Choose loan type
                                    </option>
                                    <option value="personal">Self-employed loan</option>
                                    <option value="salaried">Salaried loan</option>
                                    <option value="wedding">Wedding loan</option>
                                    <option value="travel">Travel loan</option>
                                    <option value="women">Loan for women</option>
                                    <option value="debt">Debt consolidation loan</option>
                                </select>
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <input
                                    id="agree"
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-400"
                                />
                                <label
                                    htmlFor="agree"
                                    className="text-[11px] text-slate-500 leading-relaxed"
                                >
                                    By continuing, you agree to our{" "}
                                    <button
                                        type="button"
                                        className="text-orange-500 font-medium underline-offset-2 hover:underline"
                                    >
                                        privacy policies
                                    </button>{" "}
                                    and{" "}
                                    <button
                                        type="button"
                                        className="text-orange-500 font-medium underline-offset-2 hover:underline"
                                    >
                                        T&amp;C
                                    </button>
                                    .
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 w-full h-11 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                            >
                                Apply now
                                <span className="text-base">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
