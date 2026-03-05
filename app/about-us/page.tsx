import { Metadata } from "next";
import Link from "next/link";
import {
    CheckCircle2,
    Zap,
    ShieldCheck,
    HeartHandshake,
    Target,
    Users,
    Clock,
    Smile,
    Scale,
    FileText,
    Search,
    PhoneCall,
    ThumbsUp,
    Banknote,
    Heart,
    Home,
    BookOpen,
    Briefcase,
    Plane,
    CreditCard
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Karzwala - Your Trusted NBFC Partner for Personal Loans",
    description: "Karzwala is a direct NBFC lending partner offering personal loans up to ₹10 lakh at competitive rates. Simple process, transparent terms, and fast approval for all your financial needs.",
};

export default function AboutUsPage() {
    const whatWeDoList = [
        { icon: <Heart className="w-5 h-5" />, text: "Wedding expenses" },
        { icon: <Zap className="w-5 h-5" />, text: "Medical emergencies" },
        { icon: <Home className="w-5 h-5" />, text: "Home renovation" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Education fees" },
        { icon: <CreditCard className="w-5 h-5" />, text: "Debt consolidation" },
        { icon: <Plane className="w-5 h-5" />, text: "Travel and vacation" },
        { icon: <Briefcase className="w-5 h-5" />, text: "Business needs" },
        { icon: <CheckCircle2 className="w-5 h-5" />, text: "Any other requirement" }
    ];

    const whyDifferent = [
        { title: "We Keep It Simple", icon: <Smile className="w-8 h-8 text-[#F46300]" />, desc: "No jargon. No complicated terms. We explain everything in plain language because we believe you deserve to understand exactly what you're signing up for." },
        { title: "We're Fast", icon: <Zap className="w-8 h-8 text-[#F46300]" />, desc: "Online application takes 5 minutes. Approval in 24-48 hours. Funds in your account within 1-2 working days. Because we know when you need money, you need it now." },
        { title: "We're Transparent", icon: <Search className="w-8 h-8 text-[#F46300]" />, desc: "What you see is what you get. No hidden charges. No surprise fees. We tell you upfront what everything costs - interest rate, processing fee, total repayment amount. Everything." },
        { title: "We're Direct", icon: <ShieldCheck className="w-8 h-8 text-[#F46300]" />, desc: "As a direct NBFC, your money matters are in safe hands. No middlemen taking cuts. Better rates for you, faster processing for us." },
        { title: "We Actually Care", icon: <HeartHandshake className="w-8 h-8 text-[#F46300]" />, desc: "Our customer support team is here to help, not just to sell. Have a question at 10 PM? Ask. Confused about something? We'll explain it as many times as needed." }
    ];

    const values = [
        { title: "Transparency First", desc: "We believe in complete honesty. No fine print tricks. No hidden agendas. What we promise is what we deliver.", icon: <Search className="w-6 h-6 text-[#F46300]" /> },
        { title: "Customer Above Everything", desc: "Every decision we make starts with one question - \"Is this good for our customer?\" If the answer is no, we don't do it.", icon: <Users className="w-6 h-6 text-[#F46300]" /> },
        { title: "Speed Without Compromise", desc: "Fast approval doesn't mean careless lending. We move quickly but we also assess responsibly to protect both you and us.", icon: <Clock className="w-6 h-6 text-[#F46300]" /> },
        { title: "Simplicity in Everything", desc: "From our application form to our loan agreement - we keep things simple because complex doesn't mean better.", icon: <Smile className="w-6 h-6 text-[#F46300]" /> },
        { title: "Fair for Everyone", desc: "We don't play favorites. Your credit score, income, and repayment capacity decide your loan - not who you know or where you're from.", icon: <Scale className="w-6 h-6 text-[#F46300]" /> }
    ];

    const howWeWork = [
        { step: "1", title: "You Apply Online", desc: "Fill a simple form. Upload basic documents. Takes 5 minutes from your phone or laptop.", icon: <FileText className="w-6 h-6 text-[#F46300]" /> },
        { step: "2", title: "We Assess Quickly", desc: "Our team reviews your application, checks your credit profile, verifies documents. We look at your complete financial picture, not just one number.", icon: <Search className="w-6 h-6 text-[#F46300]" /> },
        { step: "3", title: "You Get an Offer", desc: "If approved, we call you within 24-48 hours with our best offer - loan amount, interest rate, tenure, everything clearly mentioned.", icon: <PhoneCall className="w-6 h-6 text-[#F46300]" /> },
        { step: "4", title: "You Decide", desc: "Take your time. Read the terms. Ask questions. Accept only when you're 100% comfortable.", icon: <ThumbsUp className="w-6 h-6 text-[#F46300]" /> },
        { step: "5", title: "Money Reaches You", desc: "Once you accept, funds are directly transferred to your bank account within 1-2 working days. That's it.", icon: <Banknote className="w-6 h-6 text-[#F46300]" /> }
    ];

    const loanProducts = [
        { title: "Personal Loans", desc: "Unsecured loans up to ₹10 lakh for any purpose. No collateral. No guarantor needed." },
        { title: "Wedding Loans", desc: "Special personal loans for wedding expenses - venue, catering, jewelry, photography, honeymoon, everything." },
        { title: "Travel Loans", desc: "Fund your dream vacation - international trips, family holidays, adventure tours, all covered." },
        { title: "Loans by Income", desc: "Customized loan offers based on your monthly salary or annual income." },
        { title: "Loans by Amount", desc: "From ₹1 lakh to ₹10 lakh - choose the amount that fits your needs and repayment capacity." }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-24">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        About <span className="text-[#F46300]">Karzwala</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                        Your Direct NBFC Lending Partner
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                        We understand that life doesn't wait for paperwork. Whether it's a wedding, medical emergency, home renovation, or just managing your finances better - you need funds quickly without the hassle. That's why we exist.
                    </p>
                </div>

                {/* Who We Are Section */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full -z-10 opacity-60"></div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Users className="w-8 h-8 text-[#F46300]" /> Who We Are
                    </h3>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                        <p>
                            Karzwala is a direct NBFC (Non-Banking Financial Company) lending partner that offers personal loans to individuals across India. We're not middlemen or brokers - we are the lenders. This means faster decisions, better rates, and complete transparency in every transaction.
                        </p>
                        <p>
                            We believe getting a loan shouldn't feel like climbing a mountain. No complex forms, no endless paperwork, no hidden surprises. Just a simple, honest lending experience that puts you first.
                        </p>
                    </div>
                </div>

                {/* What We Do Section */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Do</h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                            We offer personal loans up to ₹10 lakh for any purpose - no questions asked. Whether you need funds for:
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                        {whatWeDoList.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 shadow-sm px-6 py-4 rounded-2xl font-medium flex items-center gap-3 text-gray-700 hover:shadow-md transition-shadow hover:border-[#F46300]/30">
                                <div className="text-[#F46300] bg-orange-50 p-2 rounded-xl">
                                    {item.icon}
                                </div>
                                <span className="leading-tight">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#fff3eb] rounded-2xl p-6 md:p-8 text-center border border-orange-100 max-w-4xl mx-auto flex items-center justify-center">
                        <p className="text-lg text-gray-800 font-medium leading-relaxed">
                            We've got you covered. Our loans come with flexible repayment options, competitive interest rates starting from <span className="font-bold text-[#F46300]">8.5% p.a.</span>, and tenures up to <span className="font-bold">5 years</span>.
                        </p>
                    </div>
                </div>

                {/* Why We're Different Section */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why We're Different</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyDifferent.map((item, index) => (
                            <div key={index} className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col ${(index === 3 || index === 4) ? 'lg:col-span-1 border-t-4 border-t-orange-100' : ''}`}>
                                <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Values */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Mission */}
                    <div className="lg:col-span-5 bg-[#F46300] text-white rounded-[2.5rem] p-10 md:p-12 shadow-lg sticky top-8">
                        <Target className="w-16 h-16 text-white/80 mb-8" />
                        <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                        <p className="text-xl leading-relaxed font-medium">
                            To make personal loans accessible, affordable, and stress-free for every Indian who needs financial support. We want to be the lending partner you trust and recommend to your friends and family.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 px-2">Our Values</h3>
                        {values.map((val, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all">
                                <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    {val.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{val.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How We Work */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">How We Work</h3>
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-1 bg-gradient-to-r from-orange-50 via-orange-300 to-orange-50 rounded-full z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
                            {howWeWork.map((step, idx) => (
                                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col relative hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-orange-100 text-[#F46300] flex items-center justify-center text-xl font-bold shadow-sm">
                                        {step.step}
                                    </div>
                                    <div className="mb-6 mt-4">
                                        <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Commitment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <ShieldCheck className="w-8 h-8 text-[#F46300]" /> We Promise:
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "To always be honest about costs and terms",
                                "To process your application as fast as possible",
                                "To keep your personal information completely secure",
                                "To explain anything you don't understand",
                                "To support you throughout your loan journey",
                                "To never pressure you into borrowing more than you need",
                                "To treat your financial situation with respect and confidentiality"
                            ].map((promise, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-700">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span>{promise}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <HeartHandshake className="w-8 h-8 text-[#F46300]" /> We Expect:
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Honest information in your application",
                                "Timely EMI payments as agreed",
                                "Communication if you face any repayment difficulties",
                                "Respect for our team members"
                            ].map((expectation, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-700">
                                    <CheckCircle2 className="w-6 h-6 text-[#F46300] flex-shrink-0 mt-0.5" />
                                    <span>{expectation}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Our Loan Products & Eligibility */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Products */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Loan Products</h3>
                        <div className="space-y-4">
                            {loanProducts.map((prod, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#F46300]/50 transition-colors">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{prod.title}</h4>
                                    <p className="text-gray-600">{prod.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Eligibility */}
                    <div>
                        <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -z-0"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-8">Who Can Apply?</h3>
                                <p className="text-gray-300 mb-8 font-medium">
                                    We lend to both salaried and self-employed individuals who meet basic eligibility criteria:
                                </p>
                                <ul className="space-y-5 mb-10">
                                    {[
                                        { l: "Age", v: "21 to 60 years (up to 65 for self-employed)" },
                                        { l: "Minimum Income", v: "₹35,000 monthly (salaried) / ₹2 lakhs annually (self-employed)" },
                                        { l: "Credit Score", v: "Preferably 650 and above" },
                                        { l: "Work Experience", v: "At least 1-2 years" },
                                        { l: "Nationality", v: "Indian residents only" }
                                    ].map((crit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#F46300] mt-2.5 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-semibold text-white">{crit.l}: </span>
                                                <span className="text-gray-300">{crit.v}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-white/10 rounded-xl p-5 border border-white/10 mt-auto">
                                    <p className="text-orange-300 font-medium">
                                        Don't meet all criteria? Apply anyway - we look at each application individually.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="bg-gray-100 rounded-2xl p-6 text-center text-gray-600 text-sm max-w-5xl mx-auto">
                    <strong>Note:</strong> Karzwala is a registered NBFC. All lending decisions are based on credit assessment and internal policies. Loan approval is subject to eligibility criteria and document verification.
                </div>

                {/* CTA Section */}
                <div
                    className="relative text-center rounded-[2.5rem] p-10 md:p-20 text-white shadow-xl overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: "url('/shaking-hands-grey-wall.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/60 z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                            Join thousands of happy customers who trust Karzwala for their financial needs. Quick approval, clear terms, and money when you need it.
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
