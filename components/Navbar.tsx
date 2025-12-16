"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Navbar() {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    {
      label: "Personal loan",
      href: "/personal-loan",
      hasDropdown: true,
      dropdownItems: [
        { label: "Self-employed loan", href: "/personal-loan/self-employed" },
        { label: "Salaried loan", href: "/personal-loan/salaried" },
        { label: "Wedding loan", href: "/personal-loan/wedding" },
        { label: "Loan for women", href: "/personal-loan/women" },
        { label: "Travel loan", href: "/personal-loan/travel" },
        { label: "Debt consolidation", href: "/personal-loan/debt-consolidation" },
      ],
    },
    {
      label: "MSME loan",
      href: "/msme-loan",
      hasDropdown: false,
    },
    {
      label: "Loan calculators",
      href: "/loan-calculators",
      hasDropdown: true,
      dropdownItems: [
        { label: "EMI calculator", href: "/loan-calculators/emi" },
        { label: "Loan eligibility", href: "/loan-calculators/eligibility" },
        { label: "Loan comparison", href: "/loan-calculators/comparison" },
      ],
    },
    {
      label: "Learn",
      href: "/learn",
      hasDropdown: true,
      dropdownItems: [
        { label: "About us", href: "/learn/about" },
        { label: "Blogs & news", href: "/learn/blog" },
      ],
    },
    {
      label: "Contact us",
      href: "/contact",
      hasDropdown: false,
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Full Width White with Orange Text */}
      <div className="bg-white text-orange-500 text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline text-orange-500">+91 9876543210</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/investors-relation" className="text-orange-500 hover:text-orange-600 transition-colors">
              Investors relation
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/track-loan" className="text-orange-500 hover:text-orange-600 transition-colors">
              Track loan
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/enquire-now" className="text-orange-500 hover:text-orange-600 transition-colors">
              Enquire now
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/career" className="text-orange-500 hover:text-orange-600 transition-colors">
              Career
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white -mt-px">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-0 py-4">
          {/* Logo - White Background */}
          <Link href="/" className="flex items-center gap-3 pr-6 z-10 relative">
            <Image
              src="/logo.png"
              alt="Karzwala"
              width={200}
              height={75}
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Orange Navigation Section - Rounded Bottom Left */}
          <div className="flex-1 bg-orange-500 text-white rounded-bl-[2rem] px-8 py-3 flex items-center justify-between -ml-6">
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-3 flex-nowrap whitespace-nowrap">
              {navItems.map((item) => {
                const handleMouseEnter = () => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                  }
                  if (item.hasDropdown) {
                    setHoveredDropdown(item.label);
                  }
                };

                const handleMouseLeave = () => {
                  timeoutRef.current = setTimeout(() => {
                    setHoveredDropdown(null);
                  }, 200); // 200ms delay before closing
                };

                return (
                  <div
                    key={item.label}
                    className="relative flex-shrink-0"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 px-2 py-2 text-sm font-medium hover:text-orange-100 transition-colors whitespace-nowrap"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <svg
                          className={`w-4 h-4 transition-transform flex-shrink-0 ${hoveredDropdown === item.label ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && hoveredDropdown === item.label && (
                      <div
                        className="absolute left-0 top-full pt-2 bg-transparent"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-gray-100 shadow-xl rounded-xl overflow-hidden border border-gray-200">
                          <div className="p-3">
                            <div className={`grid gap-2 ${item.label === "Personal loan" ? "grid-cols-3 w-[600px]" :
                                item.label === "Loan calculators" ? "grid-cols-3 w-[500px]" :
                                  "grid-cols-2 w-[400px]"
                              }`}>
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className="flex items-center justify-between px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-all group border border-gray-100"
                                >
                                  <span className="text-sm font-medium text-gray-700">{dropdownItem.label}</span>
                                  <div className="flex-shrink-0 w-4 h-4 rounded-full border border-orange-500 flex items-center justify-center">
                                    <svg
                                      className="w-2.5 h-2.5 text-orange-500"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="hidden sm:block px-5 py-2 text-sm font-semibold bg-transparent text-white border border-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/apply-now"
                className="hidden sm:block px-5 py-2 text-sm font-semibold bg-white text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
              >
                Apply now
              </Link>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-orange-500 border-t border-orange-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-white hover:bg-orange-600 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-orange-100 hover:bg-orange-600 rounded"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2 border-t border-orange-400">
                <Link
                  href="/login"
                  className="block px-3 py-2 text-sm font-semibold bg-transparent text-white border border-white rounded-lg text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/apply-now"
                  className="block px-3 py-2 text-sm font-semibold bg-white text-orange-500 rounded-lg text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
