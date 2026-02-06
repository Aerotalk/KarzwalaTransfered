import Image from "next/image";
import React from "react";

interface StateLoanAmountProps {
    state: string;
}

const StateLoanAmount: React.FC<StateLoanAmountProps> = ({ state }) => {
    return (
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="text-start mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Personal Loan Amount You Can <span className="text-[#FF6B2C]">Get in {state}</span>
                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <p className="text-gray-600 text-[16px]">In {state}, you can get a personal loan from <span className="text-[#FF6B2C]">₹50,000 to ₹5-7 lakhs</span> from Karzwala. The amount depends on your credit score and existing loans. We usually offer loans of 15-20 times your monthly salary. Better credit scores mean higher loan amounts at lower interest rates.

                        </p>
                    </div>

                    <div className="pl-40">
                        <Image
                            width={300}
                            height={200}
                            src="/whatispersonal.png"
                            alt="Happy team"
                        // className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StateLoanAmount;
