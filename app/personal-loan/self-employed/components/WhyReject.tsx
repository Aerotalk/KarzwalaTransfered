import Image from "next/image";

const WhyReject = () => {
    return (
        <section className="py-16 lg:py-24 bg-[#FFF8F3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                            Why Do Loan <span className="text-[#EA580C]">Applications Get Rejected?</span>
                        </h2>

                        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                            <p>
                                Being honest here - sometimes we have to say no. Common reasons for self-employed applicants include:
                            </p>

                            <ul className="space-y-3 list-disc pl-5 marker:text-gray-400">
                                <li>
                                    <strong className="text-gray-900">Credit score below 650</strong> - Low score indicates credit risk
                                </li>
                                <li>
                                    <strong className="text-gray-900">Business continuity less than 3 years</strong> - New businesses are considered risky
                                </li>
                                <li>
                                    <strong className="text-gray-900">ITR not filed or inconsistent income</strong> - No proof of regular business income
                                </li>
                                <li>
                                    <strong className="text-gray-900">Too many existing loans</strong> - High debt burden reduces approval chances
                                </li>
                                <li>
                                    <strong className="text-gray-900">Incomplete or incorrect documentation</strong> - Missing business proof or unclear financials
                                </li>
                            </ul>

                            <p>
                                If we reject your application, we'll tell you why. You can always improve your business profile, maintain proper records, and reapply after 3-6 months.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-5/12 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[400px]">
                            <Image
                                src="/flowerinhand.png"
                                alt="Loan Application Success"
                                width={500}
                                height={500}
                                className="w-full h-auto object-contain drop-shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyReject;