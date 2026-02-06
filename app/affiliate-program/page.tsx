"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAffiliate } from '@/hooks/useAffiliate';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import FAQSection from '@/components/FAQSection';
import { ArrowRight } from "lucide-react";
import { AffiliateApplicationModal } from '@/components/affiliate/AffiliateApplicationModal';

export const dynamic = "force-dynamic";

// Data
const steps = [
    {
        title: "Sign up & get your unique link",
        description: "Register for free as a Karzwala affiliate partner. Receive your personalized tracking link and promotional materials immediately upon approval."
    },
    {
        title: "Share your link",
        description: "Promote Karzwala loan products via your social media, website, or network. We provide banners, email templates, and marketing assets."
    },
    {
        title: "Track your earnings & get paid",
        description: "Monitor clicks, conversions, and commissions in real-time through your dedicated dashboard. Receive timely payouts directly to your bank account."
    }
];

const faqData = [
    {
        question: "What is the Karzwala Affiliate Program?",
        answer: "The Karzwala Affiliate Program is a partnership opportunity where you can earn commissions by referring customers to our instant loan services. You get paid for every successful lead or loan disbursal generated through your unique referral link."
    },
    {
        question: "Is there any fee to join?",
        answer: "No, joining our affiliate program is completely free. There are no hidden charges or registration fees."
    },
    {
        question: "How much can I earn?",
        answer: "There is no limit to your earnings! You earn a fixed commission for every valid lead and a percentage of the loan amount for every successful disbursal. The more you refer, the more you earn."
    },
    {
        question: "When do I get paid?",
        answer: "Payouts are processed monthly directly to your bank account, subject to a minimum threshold amount."
    },
    {
        question: "Do I need a website to join?",
        answer: "While having a website or blog is helpful, it's not mandatory. You can also promote your link via social media, email, or WhatsApp."
    },
    {
        question: "How do I track my performance?",
        answer: "Once you sign up, you get access to a dedicated dashboard where you can track visits, leads, conversions, and your earnings in real-time."
    }
];

// --- Sub-Components ---

function WhatIsSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                    What is the Karzwala{' '}
                    <span className="text-[#F46300]">affiliate program</span>?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed text-justify mx-auto max-w-4xl">
                    The Karzwala Affiliate Program is a performance-based partnership model where you earn commissions by referring customers who need instant loans. When visitors from your platform apply for loans through your unique affiliate link, you earn money at various stages of their journey.
                </p>
            </div>
        </section>
    );
}

function StepsCard({ steps }: { steps: { title: string; description: string }[] }) {
    return (
        <section className="items-center flex flex-col w-full my-12 max-w-7xl mx-auto py-4 px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                How it works? - <span className="text-[#F46300]">Simple 3 step process</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="bg-orange-50 py-10 px-8 rounded-2xl shadow-sm border border-orange-100 hover:-translate-y-1 transition-transform cursor-default">
                        <div className="space-y-4">
                            <h3 className="text-gray-900 leading-snug font-bold text-xl mb-4">
                                <span className='text-[#F46300]'>Step {index + 1}:</span>{" "}
                                {step.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function WhyPartnerSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                    Why partner with{' '}
                    <span className="text-[#F46300]">Karzwala?</span>
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-center">
                    <p>
                        Karzwala specializes in providing instant personal loans to individuals facing urgent financial needs. Our simple, fast, secure, and hassle-free loan process ensures customers get credit within minutes, making conversions easier for our affiliate partners. We operate 24/7 across major Indian cities including Mumbai, Bangalore, Hyderabad, Delhi, Kolkata, and Chennai.
                    </p>
                    <p>
                        Join thousands of successful affiliates who are earning consistent income by promoting our instant loan services. Whether you have a personal finance blog, YouTube channel, social media following, or email list - start monetizing your audience today!
                    </p>
                </div>
            </div>
        </section>
    );
}

function CommissionStructure() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h5 className="text-[#F46300] text-center font-bold mb-2 uppercase tracking-wide text-sm">
                    Attractive Commission Structure
                </h5>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
                    Multiple Earning Opportunities
                </h2>
                <h3 className="text-[#F46300] text-center text-xl font-semibold mb-12">
                    Get Paid at Every Stage!
                </h3>
                <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600 text-lg">
                    We believe in rewarding our partners generously. Our multi-tier commission structure ensures you earn money throughout the customer journey:
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-center">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-[#F46300] mb-4">
                            Cost Per Lead (CPL): ₹50/-
                        </h4>
                        <p className="text-gray-600">
                            Earn ₹50 for every valid lead that meets our basic eligibility criteria.
                            When a potential customer clicks your affiliate link and submits their basic information, you get paid!
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-[#F46300] mb-4">
                            Cost Per Application (CPA): ₹200/-
                        </h4>
                        <p className="text-gray-600">
                            Receive ₹200 when your referred customer completes the full loan application with all required documents.
                            This is in addition to your CPL earnings!
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-[#F46300] mb-4">
                            Cost Per Disbursal (CPD): ₹1,200/-
                        </h4>
                        <p className="text-gray-600">
                            Earn a substantial ₹1,200 commission when the loan amount is successfully disbursed to your referred customer’s bank account.
                            This is where the big earnings happen!
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="text-xl font-bold text-[#F46300] mb-4">
                            Bonus Incentive: 3%
                        </h4>
                        <p className="text-gray-600">
                            On top of all the above commissions, receive an additional 3% bonus on the total loan amount disbursed!
                            For higher loan amounts, this can significantly boost your earnings.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function EligibilityCriteria() {
    return (
        <section className="py-20 px-4">
            <h3 className="text-2xl font-semibold text-center mb-2 text-gray-900">
                What are the Eligibility Criteria for Valid
            </h3>
            <h4 className="text-[#F46300] font-bold text-center text-3xl mb-12">
                Referrals in Affiliate Program?
            </h4>
            <div className="max-w-5xl mx-auto bg-orange-50 rounded-3xl p-10 md:p-14">
                <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto text-lg">
                    To qualify for commissions, your referred customers must meet certain criteria. This ensures quality applications and higher approval rates:
                </p>
                <div className="grid md:grid-cols-2 gap-12 text-gray-800">
                    <ul className="space-y-6">
                        <li>
                            <span className="font-bold text-xl block mb-2 text-[#F46300]">Income Criteria</span>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Minimum monthly income requirement applies</li>
                                <li>Income verification through bank statements or salary slips</li>
                                <li>Regular income pattern preferred for faster approvals</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold text-xl block mb-2 text-[#F46300]">Banking Requirements</span>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Active bank account mandatory</li>
                                <li>Minimum 3-6 months banking history</li>
                                <li>Regular income credits reflected in statements</li>
                                <li>No cash-only income accepted</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold text-xl block mb-2 text-[#F46300]">Genuine Loan Requirement</span>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Applicant must have legitimate need for instant loan</li>
                                <li>Should be applying voluntarily</li>
                                <li>Must meet basic credit criteria</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="space-y-6">
                        <li>
                            <span className="font-bold text-xl block mb-2 text-[#F46300]">Age Requirement</span>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Applicants must be between 25 to 50 years old</li>
                                <li>Valid age proof required during application</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold text-xl block mb-2 text-[#F46300]">Location Coverage</span>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Customers must be from cities where Karzwala operates</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-bold text-xl block mb-2 text-[#F46300]">Employment Status</span>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Open to both salaried and self-employed individuals</li>
                                <li>Stable income source required</li>
                                <li>Business owners and entrepreneurs welcome</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function AboutFootCTA() {
    return (
        <section className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-12 my-10">
            <div className="rounded-[2.5rem] py-16 px-6 w-full bg-[#F46300] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#F46300] opacity-100"></div> {/* Placeholder for bg image if needed */}
                <div className="relative z-10 text-center flex flex-col justify-center items-center space-y-8">
                    <div className="space-y-4">
                        <span className="text-orange-100 font-bold tracking-widest text-sm uppercase">
                            Join Our Mission
                        </span>
                        <h2 className="text-white lg:text-4xl text-3xl font-bold leading-tight">
                            Ready to start earning?
                        </h2>
                    </div>
                    <p className="text-orange-50 text-lg max-w-2xl font-medium">
                        Zero investment, instant payouts, and huge market demand. Transform your traffic into income with Karzwala&apos;s Affiliate Program today.
                    </p>
                    <Link href="/signup">
                        <button className="bg-white text-[#F46300] px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-lg inline-flex items-center gap-2">
                            Connect Now <ArrowRight size={20} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// --- Main Page Component ---

export default function AffiliateProgramPage() {
    const { getLinkWithRef } = useAffiliate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen pt-12">
            {/* Hero Section Inline */}
            <section className="bg-gradient-to-br from-orange-50 to-white pt-10 pb-20 px-4 mt-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between lg:gap-16">
                    <div className="flex flex-col gap-6 w-full md:w-3/5">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={getLinkWithRef("/")}>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-[#F46300] font-medium">
                                        Affiliate Program
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="space-y-4">
                            <h1 className="lg:text-5xl text-4xl font-bold leading-tight text-gray-900">
                                <span className="text-[#F46300]">Karzwala Affiliate Program </span>
                                - Partner with Us & Earn Generous Commissions
                            </h1>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed lg:max-w-[40rem]">
                            Welcome to Karzwala&apos;s Affiliate Program, your gateway to earning substantial income by connecting people with instant financial solutions. As India&apos;s trusted digital credit provider, we offer a lucrative affiliate partnership opportunity for bloggers, content creators, influencers, and marketers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#F46300] hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-orange-200/50"
                            >
                                Become a Partner
                            </button>
                            <Link
                                href="/login-agent"
                                className="bg-white hover:bg-gray-50 text-[#F46300] border-2 border-[#F46300] px-10 py-5 rounded-xl font-bold text-lg transition-colors text-center"
                            >
                                Partner Login
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-2/5 mt-12 md:mt-0 flex items-center justify-center">
                        <div className="relative w-full aspect-square md:aspect-auto md:h-[450px]">
                            <Image
                                src="/affiliate-hero.png"
                                alt="Karzwala Affiliate Program Hero"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <WhatIsSection />
            <StepsCard steps={steps} />
            <WhyPartnerSection />
            <CommissionStructure />
            <EligibilityCriteria />
            <AboutFootCTA />
            <FAQSection faqData={faqData} />

            <AffiliateApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
