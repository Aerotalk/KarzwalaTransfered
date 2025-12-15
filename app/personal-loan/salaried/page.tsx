
import LoanCalculator from "@/components/LoanCalculator";
import PersonalFeatures from "../components/PersonalFeatures";
import SalariedHero from "./components/SalariedHero";
import WhatIs from "./components/WhatIs";
import SalariedFeatures from "./components/SalariedFeatures";
import WhyReject from "./components/WhyReject";
import SalariedFAQ from "./components/SalariedFAQ";

export default function Page() {
    return (
        <main className="min-h-screen">
            <SalariedHero />
            <PersonalFeatures />
            <WhatIs />
            <LoanCalculator />
            <SalariedFeatures />
            <WhyReject />
            <SalariedFAQ />
        </main>
    );
}
