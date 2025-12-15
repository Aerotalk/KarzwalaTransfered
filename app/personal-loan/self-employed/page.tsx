import LoanCalculator from "@/components/LoanCalculator";
import PersonalFeatures from "../components/PersonalFeatures";
import SelfEmployedHero from "./components/SelfEmployedHero";
import WhatIs from "./components/WhatIs";
import SelfLoanFeatures from "./components/SelfLoanFeatures";
import WhyReject from "./components/WhyReject";
import SelfEmployedFAQ from "./components/SelfEmployedFAQ";

export default function Page() {
    return (
        <main className="min-h-screen">
            <SelfEmployedHero />
            <PersonalFeatures />
            <WhatIs />
            <LoanCalculator />
            <SelfLoanFeatures />
            <WhyReject />
            <SelfEmployedFAQ />
        </main>
    );
}
