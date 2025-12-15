import LoanCalculator from "@/components/LoanCalculator";
import PersonalFeatures from "../components/PersonalFeatures";
import TravelHero from "./components/TravelHero";
import WhatIs from "./components/WhatIs";
import TravelFeatures from "./components/TravelFeatures";
import WhyReject from "../wedding/components/WhyReject";
import TravelFAQ from "./components/TravelFAQ";

export default function Page() {
    return (
        <main className="min-h-screen">
            <TravelHero />
            <PersonalFeatures />
            <WhatIs />
            <LoanCalculator />
            <TravelFeatures />
            <WhyReject />
            <TravelFAQ />
        </main>
    );
}