import PersonalFeatures from "../components/PersonalFeatures";
import Sal35Hero from "./components/Sal35Hero";
import LoanAmount from "./components/LoanAmount";
import LoanCalculator from "@/components/LoanCalculator";
import LoanFeatures from "./components/LoanFeatures";
import FAQ35 from "./components/FAQ35";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Sal35Hero />
            <PersonalFeatures />
            <LoanAmount />
            <LoanCalculator />
            <LoanFeatures />
            <FAQ35 />
        </main>
    );
}