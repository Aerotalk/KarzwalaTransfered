import WeddingHero from "./components/WeddingHero";
import PersonalFeatures from "../components/PersonalFeatures";
import WhatIs from "./components/WhatIs";
import LoanCalculator from "@/components/LoanCalculator";
import WeddingFeatures from "./components/WeddingFeatures";
import WhyReject from "./components/WhyReject";
import WeddingFAQ from "./components/WeddingFAQ";


export default function Page() {
    return (
        <main className="min-h-screen">
            <WeddingHero />
            <PersonalFeatures />
            <WhatIs />
            <LoanCalculator />
            <WeddingFeatures />
            <WhyReject />
            <WeddingFAQ />
        </main>
    );
}
