"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, CheckCircle, FileText, Building, CreditCard, User, Users, TrendingUp, Award, Target, Zap, Loader2, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import { useAffiliate } from '@/hooks/useAffiliate';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Suspense } from 'react';
import Image from 'next/image';
import { DSAApplicationModal } from '@/components/dsa/DSAApplicationModal';

export const dynamic = "force-dynamic";

function DSAPartnerContent() {
    const { getLinkWithRef } = useAffiliate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dsaFAQData = [
        {
            question: "How do I start with Karzwala as a DSA Partner?",
            answer: "Getting started is simple. Register online, submit your documents, and once verified, you can start referring customers and earning commissions."
        },
        {
            question: "Is there any registration fee to become a DSA partner?",
            answer: "No, there is no registration fee. Becoming a DSA partner with Karzwala is completely free."
        },
        {
            question: "Can I run/manage a current job while being a DSA Partner?",
            answer: "Yes, you can continue your current job while working as a DSA partner. It offers flexible working hours that fit your schedule."
        },
        {
            question: "How long does the registration process take to become a DSA Partner?",
            answer: "The registration process typically takes 3-5 business days after all documents are submitted and verified."
        },
        {
            question: "What Support will I receive from Karzwala as DSA Partner?",
            answer: "You'll receive comprehensive support including training materials, marketing collateral, dedicated relationship manager, and technical support."
        },
        {
            question: "Do I need prior experience in the finance industry to become a DSA Partner?",
            answer: "No prior experience is required. We provide complete training and support to help you succeed as a DSA partner."
        },
        {
            question: "How will I receive my commission payment?",
            answer: "Commissions are paid directly to your bank account on a monthly basis after the loan disbursement is completed."
        },
        {
            question: "What is the minimum referral requirement?",
            answer: "There is no minimum requirement. You can start referring customers immediately after registration."
        },
        {
            question: "Can I operate from any city in India as a Karzwala DSA Partner?",
            answer: "Yes, you can operate from any city in India. Our DSA partner program is available pan-India."
        },
        {
            question: "Who Can Become a Karzwala DSA Partner?",
            answer: "Anyone who meets the eligibility criteria including individuals, proprietors, and companies can become a DSA partner."
        }
    ];

    return (
        <div className="min-h-screen w-full pt-6">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-50 to-white pt-10 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Breadcrumb className="mb-4">
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={getLinkWithRef("/")}>Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="text-[#F46300] font-medium">
                                            DSA Partnership
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Start Your Loan Business<br />
                                <span className="text-[#F46300]">with India&apos;s Leading Digital</span><br />
                                Instant Loan Provider
                            </h1>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Are you looking forward to being a lending partner in credit services? Leading businesses require trusted credit providers to support their growth needs.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Want to start a career in the Loan Lending Industry? MSME lending credit, retail-credit lending, affordable home loans? Here at Karzwala, we help you align with modern fintech facilities to assist your customers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-[#F46300] hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-200"
                                >
                                    Become a Direct Sales Agent
                                </button>
                                <Link
                                    href="/login-agent"
                                    className="bg-white hover:bg-gray-50 text-[#F46300] border-2 border-[#F46300] px-10 py-5 rounded-xl font-bold text-lg transition-colors text-center"
                                >
                                    Partner Login
                                </Link>
                            </div>
                        </div>

                        {/* Right side placeholder */}
                        <div className="hidden md:flex items-center justify-center">
                            <div className="relative w-full h-80 md:h-[450px]">
                                <Image
                                    src="/dsa-hero.png"
                                    alt="Karzwala DSA Partner Hero"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is a Loan DSA Agent Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                        Who is a <span className="text-[#F46300]">Loan DSA Agent?</span>
                    </h2>
                    <div className="text-gray-700 space-y-6 leading-relaxed text-lg">
                        <p>
                            <strong>Loan DSA Agent</strong> (DSA) works as a main Direct Selling Agent/Channel (DSA/DSC) and platforms connecting banks to retail-creditors. As a Loan DSA agent, you&apos;ll connect millions of customers in India who may need loan assistance or lending credit access to trusted resources.
                        </p>
                        <ul className="space-y-4 ml-6">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#F46300] flex-shrink-0 mt-1" />
                                <span>Sourcing and connecting with business partners who seek lending finances.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#F46300] flex-shrink-0 mt-1" />
                                <span>Customizing market plans in services such as sourcing, skill review, and process management.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#F46300] flex-shrink-0 mt-1" />
                                <span>Creating your own dedicated business in the financial sector.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-[#F46300] flex-shrink-0 mt-1" />
                                <span>Building a career based on trust and performance.</span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            A great DSA program is like running your own store. If you are ready to facilitate credit services, you can easily establish a business with us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-4">
                        <p className="text-[#F46300] font-semibold mb-2 uppercase tracking-wide text-sm">Why choose us?</p>
                    </div>
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                        Why should I join <span className="text-[#F46300]">Karzwala as a DSA Partner?</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-[#F46300]">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Attractive Commission Structure</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Earning potential basis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Upfront + trailing commission</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>No cap on earnings</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Attractive incentive programs</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Zero Investment Required</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>No franchise or security</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Zero investment fee</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Complete support from Karzwala</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Working Hours</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Work at your own pace</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>No need for an office</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Can continue current job</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Digital Process</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>100% digital on-boarding</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Login anytime, anywhere</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Track applications easily</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Paperless documentation</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-yellow-600">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Ongoing Partner Support</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Full day partner-support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Training sessions support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Marketing material provided</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 text-teal-600">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">High Growth Industry</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Huge market demand</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Growing loan industry</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Multiple loan products</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#F46300] mt-1">•</span>
                                    <span>Pan India opportunities</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Documents Required Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                        What are the documents required for <span className="text-[#F46300]">DSA Registration?</span>
                    </h2>

                    {/* Individual Partners */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-[#F46300] pl-4">For Individual Partners</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div className="bg-yellow-50 w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <FileText className="w-10 h-10 text-yellow-600" />
                                </div>
                                <p className="font-semibold text-gray-900">PAN Card and Aadhaar Card</p>
                            </div>
                            <div className="text-center group">
                                <div className="bg-green-50 w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <Building className="w-10 h-10 text-green-600" />
                                </div>
                                <p className="font-semibold text-gray-900">Active mobile number</p>
                            </div>
                            <div className="text-center group">
                                <div className="bg-orange-50 w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <CreditCard className="w-10 h-10 text-[#F46300]" />
                                </div>
                                <p className="font-semibold text-gray-900">Valid email address</p>
                            </div>
                            <div className="text-center group">
                                <div className="bg-blue-50 w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <User className="w-10 h-10 text-blue-600" />
                                </div>
                                <p className="font-semibold text-gray-900">Bank account details</p>
                            </div>
                        </div>
                    </div>

                    {/* Firms/Companies */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-[#F46300] pl-4">For Firms/Companies</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div className="bg-purple-50 w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <FileText className="w-10 h-10 text-purple-600" />
                                </div>
                                <p className="font-semibold text-gray-900">GST, Pan/Aadhaar of director</p>
                            </div>
                            <div className="text-center group">
                                <div className="bg-cyan-50 w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <Building className="w-10 h-10 text-cyan-600" />
                                </div>
                                <p className="font-semibold text-gray-900">MoA Copy of the business entity</p>
                            </div>
                            <div className="text-center group">
                                <div className="bg-pink-50 w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <CreditCard className="w-10 h-10 text-pink-600" />
                                </div>
                                <p className="font-semibold text-gray-900">Address proof of business entity</p>
                            </div>
                            <div className="text-center group">
                                <div className="bg-indigo-50 w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                                    <User className="w-10 h-10 text-indigo-600" />
                                </div>
                                <p className="font-semibold text-gray-900">Partnership deed or certificate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria Section */}
            <section className="py-20 px-4 bg-orange-50/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-4">
                        <p className="text-gray-500 font-medium">As a way out of poverty</p>
                    </div>
                    <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
                        What are the eligibility criteria to become
                    </h2>
                    <h2 className="text-4xl font-bold text-center mb-12">
                        <span className="text-[#F46300]">Karzwala DSA Partner?</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
                        Basic requirements to get enrolled as a DSA broker for Karzwala.
                    </p>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <div className="bg-yellow-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 text-yellow-600">
                                <User className="w-10 h-10" />
                            </div>
                            <p className="font-bold text-gray-900">18 years or above of age</p>
                        </div>
                        <div className="text-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <div className="bg-green-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 text-green-600">
                                <FileText className="w-10 h-10" />
                            </div>
                            <p className="font-bold text-gray-900">Must be a Resident of India</p>
                        </div>
                        <div className="text-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <div className="bg-pink-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 text-pink-600">
                                <Award className="w-10 h-10" />
                            </div>
                            <p className="font-bold text-gray-900">Minimum qualification required</p>
                        </div>
                        <div className="text-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <div className="bg-blue-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 text-blue-600">
                                <Building className="w-10 h-10" />
                            </div>
                            <p className="font-bold text-gray-900">Business owners welcome</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#F46300] rounded-[2.5rem] p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none"></div>
                        <h2 className="text-4xl font-bold text-white mb-6 relative z-10">
                            Become a Loan DSA Partner
                        </h2>
                        <p className="text-white text-lg mb-8 opacity-90 max-w-2xl mx-auto relative z-10">
                            Start your own loan business with India&apos;s leading digital instant loan provider. Apply now!
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-[#F46300] hover:bg-orange-50 px-10 py-5 rounded-xl font-bold text-lg transition-colors shadow-lg relative z-10"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection
                faqData={dsaFAQData}
            />

            <DSAApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

export default function DSAPartnerPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-[#F46300] animate-spin" />
            </div>
        }>
            <DSAPartnerContent />
        </Suspense>
    );
}
