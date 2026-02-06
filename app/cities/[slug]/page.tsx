
import PersonalFeatures from "@/app/personal-loan/components/PersonalFeatures";
import LoanCalculator from "@/components/LoanCalculator";
import CityHero from "../components/CityHero";
import CityLoanAmount from "../components/CityLoanAmount";
import CityFeatures from "../components/CityFeatures";
import CityFAQ from "../components/CityFAQ";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function CityLoanPage({ params }: PageProps) {
    const { slug } = await params;

    // Helper to format city name from slug
    // e.g. payday-loan-in-mumbai -> Mumbai
    // e.g. payday-loan-in-new-delhi -> New Delhi
    const formatCityName = (slugString: string) => {
        if (!slugString) return "";
        const cleanSlug = slugString.replace("payday-loan-in-", "");
        return cleanSlug
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const cityName = formatCityName(slug);

    // Capitalize specific cities if needed (e.g. correct casing)
    // Though the general formatter should handle most basic cases.

    return (
        <main className="min-h-screen">
            <CityHero city={cityName} />
            <PersonalFeatures />
            <CityLoanAmount city={cityName} />
            <LoanCalculator />
            <CityFeatures city={cityName} />
            <CityFAQ city={cityName} />
        </main>
    );
}
