import Sal100Hero from "./components/Sal100Hero";
import PersonalFeatures from "../components/PersonalFeatures";
import LoanAmount from "./components/LoanAmount";
import LoanCalculator from "@/components/LoanCalculator";
import LoanFeatures from "./components/LoanFeatures";
import FAQ100 from "./components/FAQ100";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Sal100Hero />
            <PersonalFeatures />
            <LoanAmount />
            <LoanCalculator />
            <LoanFeatures />
            <FAQ100 />

        </main>
    );
}