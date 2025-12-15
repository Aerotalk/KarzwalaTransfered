import Sal80Hero from "./components/Sal80Hero";
import PersonalFeatures from "../components/PersonalFeatures";
import LoanAmount from "./components/LoanAmount";
import LoanCalculator from "@/components/LoanCalculator";
import LoanFeatures from "./components/LoanFeatures";
import FAQ80 from "./components/FAQ80";


export default function Page() {
    return (
        <main className="min-h-screen">
            <Sal80Hero />
            <PersonalFeatures />
            <LoanAmount />
            <LoanCalculator />
            <LoanFeatures />
            <FAQ80 />
        </main>
    );
}