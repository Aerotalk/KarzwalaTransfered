import PersonalFeatures from "../components/PersonalFeatures";
import Sal50Hero from "./components/Sal50Hero";
import LoanAmount from "./components/LoanAmount";
import LoanCalculator from "@/components/LoanCalculator";
import LoanFeatures from "./components/LoanFeatures";
import FAQ50 from "./components/FAQ50";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Sal50Hero />
            <PersonalFeatures />
            <LoanAmount />
            <LoanCalculator />
            <LoanFeatures />
            <FAQ50 />
        </main>
    );
}