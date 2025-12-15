import Image from "next/image";

const LoanAmount = () => {
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
                        Personal Loan Amount You Can  <span className="text-[#FF6B2C]">Get with ₹35,000 Salary</span>
                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <p className="text-gray-600 text-[16px]">With a monthly salary of ₹35,000, you can get a personal loan from <span className="text-[#FF6B2C]">₹50,000 to ₹5-7 lakhs</span> from Karzwala. The amount depends on your credit score and existing loans. We usually offer loans of 15-20 times your monthly salary. Better credit scores mean higher loan amounts at lower interest rates.

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

export default LoanAmount;