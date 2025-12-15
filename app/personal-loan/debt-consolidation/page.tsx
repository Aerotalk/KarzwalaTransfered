import LoanCalculator from "@/components/LoanCalculator";
import PersonalFeatures from "../components/PersonalFeatures";
import DebtHero from "./components/DebtHero";
import WhatIs from "./components/WhatIs";
import DebtFeatures from "./components/DebtFeatures";
import WhyReject from "../wedding/components/WhyReject";
import DebtFAQ from "./components/DebtFAQ";

export default function Page() {
    return (
        <main className="min-h-screen">
            <DebtHero />
            <PersonalFeatures />
            <WhatIs />
            <LoanCalculator />
            <DebtFeatures />
            <WhyReject />
            <DebtFAQ />
        </main>
    );
}