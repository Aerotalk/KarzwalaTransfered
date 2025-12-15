import Sal40Hero from "./components/Sal40Hero";
import PersonalFeatures from "../components/PersonalFeatures";
import LoanAmount from "./components/LoanAmount";
import LoanCalculator from "@/components/LoanCalculator";
import LoanFeatures from "./components/LoanFeatures";
import FAQ40 from "./components/FAQ40";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Sal40Hero />
            <PersonalFeatures />
            <LoanAmount />
            <LoanCalculator />
            <LoanFeatures />
            <FAQ40 />
        </main>
    );
}