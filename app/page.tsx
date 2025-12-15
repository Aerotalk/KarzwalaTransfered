import FAQSection from "@/components/FAQSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import HeroSection from "@/components/HeroSection"
import LoanCalculator from "@/components/LoanCalculator"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import WhyChooseUs from "@/components/WhyChooseUs"
import { homeFAQdata } from "@/lib/data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseUs />
      <LoanCalculator />
      <TestimonialsCarousel />
      <FAQSection faqData={homeFAQdata} />
    </main>
  )
}
