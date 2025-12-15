"use client"

import Image from "next/image"
import Link from "next/link"

export default function PersonalFeatures() {
    const loanProducts = [
        {
            id: 1,
            title: "Self-employed loan",
            icon: "/Self-employed loan.png",
            href: "/personal-loan/self-employed",
        },
        {
            id: 2,
            title: "Salaried loan",
            icon: "/money.png",
            href: "/personal-loan/salaried",
        },
        {
            id: 3,
            title: "Wedding loan",
            icon: "/wedding.png",
            href: "/personal-loan/wedding",
        },
        {
            id: 4,
            title: "Loan for women",
            icon: "/women.png",
            href: "/personal-loan/women",
        },
        {
            id: 5,
            title: "Travel loan",
            icon: "/travel.png",
            href: "/personal-loan/travel",
        },
        {
            id: 6,
            title: "Debt consolidation loan",
            icon: "/debt.png",
            href: "/personal-loan/debt-consolidation",
        },

    ]

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Explore all our <span className="text-orange-600">Personal Loan product</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">Our instant loan process is designed for speed and convenience</p>
                </div>

                {/* Loan Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {loanProducts.map((product) => (
                        <Link key={product.id} href={product.href} className="flex flex-col h-full group">
                            <div
                                className="bg-[#FFF3EA] rounded-t-2xl p-8 md:p-10 flex flex-col items-center justify-center flex-1 transition-transform group-hover:-translate-y-1"
                            >
                                <Image
                                    src={product.icon}
                                    alt={product.title}
                                    width={64}
                                    height={64}
                                    className="object-contain" />
                            </div>
                            <button className="w-full bg-orange-600 text-white py-3 rounded-b-lg font-semibold group-hover:bg-orange-700 transition flex items-center justify-center gap-2">
                                {product.title} <span>→</span>
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
