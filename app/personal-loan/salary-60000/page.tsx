import Sal60Hero from "./components/Sal60Hero";
import PersonalFeatures from "../components/PersonalFeatures";
import LoanAmount from "./components/LoanAmount";
import LoanCalculator from "@/components/LoanCalculator";
import LoanFeatures from "./components/LoanFeatures";
import FAQ60 from "./components/FAQ60";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Sal60Hero />
            <PersonalFeatures />
            <LoanAmount />
            <LoanCalculator />
            <LoanFeatures />
            <FAQ60 />
        </main>
    );
}