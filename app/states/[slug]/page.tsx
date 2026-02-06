
import PersonalFeatures from "@/app/personal-loan/components/PersonalFeatures";
import LoanCalculator from "@/components/LoanCalculator";
import StateHero from "../components/StateHero";
import StateLoanAmount from "../components/StateLoanAmount";
import StateFeatures from "../components/StateFeatures";
import StateFAQ from "../components/StateFAQ";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function StateLoanPage({ params }: PageProps) {
    const { slug } = await params;

    // Helper to format state name from slug
    // e.g. payday-loan-in-gujarat -> Gujarat
    // e.g. payday-loan-in-west-bengal -> West Bengal
    const formatStateName = (slugString: string) => {
        if (!slugString) return "";
        const cleanSlug = slugString.replace("payday-loan-in-", "");
        return cleanSlug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const stateName = formatStateName(slug);

    return (
        <main className="min-h-screen">
            <StateHero state={stateName} />
            <PersonalFeatures />
            <StateLoanAmount state={stateName} />
            <LoanCalculator />
            <StateFeatures state={stateName} />
            <StateFAQ state={stateName} />
        </main>
    );
}
