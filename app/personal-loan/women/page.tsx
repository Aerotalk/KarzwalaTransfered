import LoanCalculator from "@/components/LoanCalculator";
import PersonalFeatures from "../components/PersonalFeatures";
import WomenHero from "./components/WomenHero";
import WhatIs from "./components/WhatIs";
import WomenFeatures from "./components/WomenFeatures";
import WhyReject from "../wedding/components/WhyReject";
import WomenFAQ from "./components/WomenFAQ";

export default function Page() {
    return (
        <main className="min-h-screen">
            <WomenHero />
            <PersonalFeatures />
            <WhatIs />
            <LoanCalculator />
            <WomenFeatures />
            <WhyReject />
            <WomenFAQ />
        </main>
    );
}