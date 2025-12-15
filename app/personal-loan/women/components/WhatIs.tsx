import Image from "next/image";

const WhatIs = () => {
    const features = [
        {
            title: "We Keep Things Simple",
            description: "We cut the fluff and tell you about taking a loan from us upfront, including the fees you'll have to pay. We're not hiding anything from you, giving you the power to make smart and clear choices."
        },
        {
            title: "Fair, Flat-Amount Fees",
            description: "Once approved, we won't cross you out. Most of our customers get the money in 24 hours if they have a bank account. We don't have 2 days or more. No, it is all back here."
        },
        {
            title: "You Choose How to Repay",
            description: "No a document signed between you and us today. Want to finish paying back after a more simple, fast period over one more visit? Pay at once?"
        },
        {
            title: "Your Security Matters to us, Forever",
            description: "Get questions? Our support team actually picks up the phone. We'll walk you through the process and help with anything you need."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">
                <div className="text-start mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        What is a personal loan for <span className="text-[#FF6B2C]">Women?</span>
                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <p className="text-gray-600 text-[16px]">A personal loan for women is offered by NBFCs like Karzwala to women customers without any collateral or guarantor to meet their urgent financial requirements. Whether you need funds for business expansion, education, home renovation, medical expenses, wedding, or any personal need, this loan helps you achieve your goals with financial independence. The loan is repaid by borrowers in equated monthly installments over a pre-decided tenure, usually ranging from 1 to 5 years. We decide the creditworthiness of applicants by assessing their credit profile (CIBIL Score), monthly income, employment stability, and repayment capacity.

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

export default WhatIs;