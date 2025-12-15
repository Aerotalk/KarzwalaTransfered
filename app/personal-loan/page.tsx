import PersonalHeroSection from "@/app/personal-loan/components/PersonalHeroSection";
import PersonalFeatures from "@/app/personal-loan/components/PersonalFeatures";
import WhatIs from "@/app/personal-loan/components/WhatIs";
import LoanCalculator from "@/components/LoanCalculator";
import WhyReject from "@/app/personal-loan/components/WhyReject";
import PersonalLoanDetails from "@/app/personal-loan/components/PersonalLoanDetails";
import PersonalFAQ from "@/app/personal-loan/components/PersonalFAQ";

export default function Page() {
    return (
        <main className="min-h-screen">
            <PersonalHeroSection />
            <PersonalFeatures />
            <WhatIs />
            <LoanCalculator />
            <PersonalLoanDetails />
            <WhyReject />
            <PersonalFAQ />
        </main>
    );
}
