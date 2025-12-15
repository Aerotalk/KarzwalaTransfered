import Image from "next/image";

const WhyChooseUs = () => {
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
            Why we are the <span className="text-[#FF6B2C]">best for your financial need?</span>
          </h2>
          <p className="text-gray-600 text-[16px]">Our instant loan process is designed for speed and convenience</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <h3 className="text-[20px] font-bold mb-3 text-[#FF6B2C] flex items-center gap-2">
                  {/* <span className="w-2 h-2 bg-[#FF6B2C] rounded-full"></span> */}
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
              <Image
                width={800}
                height={600}
                src="/family.png"
                alt="Happy team"
                className="w-full h-auto object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;