"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Helper function to truncate long filenames
function truncateFileName(fileName: string, maxLength: number): string {
    if (fileName.length <= maxLength) return fileName;

    const extension = fileName.substring(fileName.lastIndexOf('.'));
    const nameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const truncatedName = nameWithoutExt.substring(0, maxLength - extension.length - 3);

    return `${truncatedName}...${extension}`;
}

function ApplyNowContent() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState(1);

    // Step 1 form fields
    const [mobileNumber, setMobileNumber] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanPurpose, setLoanPurpose] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [monthlySalary, setMonthlySalary] = useState("");
    const [jobStability, setJobStability] = useState("");
    const [currentAddress, setCurrentAddress] = useState("");
    const [addressType, setAddressType] = useState("");
    const [permanentAddress, setPermanentAddress] = useState("");
    const [sameAsCurrentAddress, setSameAsCurrentAddress] = useState(false);
    const [addressProofFile, setAddressProofFile] = useState<File | null>(null);
    const [pinCode, setPinCode] = useState("");

    // Step 2 form fields
    const [paySlipFile, setPaySlipFile] = useState<File | null>(null);
    const [bankStatementFile, setBankStatementFile] = useState<File | null>(null);
    const [panNumber, setPanNumber] = useState("");
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Step 3 - OTP verification
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [countdown, setCountdown] = useState(30);
    const [canResend, setCanResend] = useState(false);

    // Step 4 - Photo & Location
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [autoDetectLocation, setAutoDetectLocation] = useState(false);
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [locationError, setLocationError] = useState("");

    // Success state
    const [showSuccess, setShowSuccess] = useState(false);

    // Initialize from URL params
    useEffect(() => {
        const mobile = searchParams.get("mobile");
        const type = searchParams.get("loanType");

        if (mobile) {
            setMobileNumber(mobile);
        }

        if (type) {
            // Map loan type to loan purpose or similar logic
            if (type === "personal") setLoanPurpose("Personal expenses");
            else if (type === "business") setLoanPurpose("Business");
            else if (type === "msme") setLoanPurpose("Business");
        }
    }, [searchParams]);

    // Countdown timer effect
    useEffect(() => {
        if (step === 3 && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            setCanResend(true);
        }
    }, [countdown, step]);

    // Auto-detect location effect
    useEffect(() => {
        if (autoDetectLocation) {
            handleLocationDetect();
        }
    }, [autoDetectLocation]);

    // Validation function for step 1
    const validateStep1 = () => {
        return (
            mobileNumber !== "" && mobileNumber.length === 10 &&
            loanAmount !== "" &&
            loanPurpose !== "" && loanPurpose !== "Describe your purpose" &&
            companyName !== "" &&
            companyAddress !== "" &&
            monthlySalary !== "" &&
            jobStability !== "" && jobStability !== "Select" &&
            currentAddress !== "" &&
            addressType !== "" && addressType !== "Select" &&
            permanentAddress !== "" &&
            addressProofFile !== null &&
            pinCode !== ""
        );
    };

    // Validation function for step 2
    const validateStep2 = () => {
        return (
            paySlipFile !== null &&
            bankStatementFile !== null &&
            panNumber !== "" &&
            aadhaarNumber !== "" &&
            agreedToTerms === true
        );
    };

    // Validation function for step 3
    const validateStep3 = () => {
        return otp.every(digit => digit !== "");
    };

    // Validation function for step 4
    const validateStep4 = () => {
        return photoFile !== null && location !== null;
    };

    // Handle geolocation
    const handleLocationDetect = () => {
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser");
            return;
        }

        setLocationError("Detecting location...");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                setLocationError("");
            },
            (error) => {
                setLocationError("Please enable location permissions in your browser to auto-detect your current location");
                setAutoDetectLocation(false);
            }
        );
    };

    const handleNext = () => {
        if (step === 1 && validateStep1()) {
            setStep(2);
        } else if (step === 1) {
            alert("Please fill in all required fields before proceeding.");
        } else if (step === 2 && validateStep2()) {
            // Reset countdown when moving to step 3
            setCountdown(30);
            setCanResend(false);
            setStep(3);
        } else if (step === 2) {
            alert("Please fill in all required fields and agree to terms before proceeding.");
        } else if (step === 3 && validateStep3()) {
            setStep(4);
        } else if (step === 3) {
            alert("Please enter the complete 6-digit OTP.");
        } else if (step === 4 && validateStep4()) {
            setShowSuccess(true);
        } else if (step === 4) {
            alert("Please upload your photo and enable location detection.");
        }
    };

    const handleResendOTP = () => {
        setCountdown(30);
        setCanResend(false);
        setOtp(["", "", "", "", "", ""]);
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Auto-focus next input
            if (value && index < 5) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    return (
        <>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                @keyframes drawCircle {
                    from {
                        stroke-dasharray: 0 157;
                    }
                    to {
                        stroke-dasharray: 157 157;
                    }
                }
                
                @keyframes drawCheck {
                    from {
                        stroke-dasharray: 0 50;
                    }
                    to {
                        stroke-dasharray: 50 50;
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-scaleIn {
                    animation: scaleIn 0.4s ease-out;
                }
                
                .animate-circle {
                    stroke-dasharray: 157 157;
                    animation: drawCircle 0.6s ease-out forwards;
                }
                
                .animate-check {
                    stroke-dasharray: 0 50;
                    animation: drawCheck 0.4s 0.3s ease-out forwards;
                }
            `}</style>
            <div className="h-screen flex overflow-hidden">

                {/* Left Panel - Branding (Fixed) */}
                <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-orange-50 to-white p-12 flex-col justify-between fixed left-0 top-0 bottom-0">
                    <div>
                        {/* Logo */}
                        <div className="mb-12">
                            <Image
                                src="/karzwala-logo.png"
                                alt="Karzwala"
                                width={180}
                                height={64}
                                className="h-16 w-auto object-contain"
                            />
                        </div>

                        {/* Heading */}
                        <div className="space-y-4 mb-8">
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                                Get Instant Financial Support
                                <br />
                                You Can Rely On
                            </h1>
                            <p className="text-gray-600 text-lg">
                                No paperwork. No waiting. Just quick approvals and easy
                                <br />
                                access to instant funds, anytime, anywhere.
                            </p>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <svg
                                width="240"
                                height="200"
                                viewBox="0 0 240 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Wallet */}
                                <rect
                                    x="40"
                                    y="80"
                                    width="160"
                                    height="100"
                                    rx="8"
                                    fill="#8B4513"
                                />
                                <rect
                                    x="40"
                                    y="80"
                                    width="160"
                                    height="100"
                                    rx="8"
                                    fill="url(#walletGradient)"
                                />
                                <rect
                                    x="50"
                                    y="95"
                                    width="140"
                                    height="70"
                                    rx="4"
                                    fill="#A0522D"
                                />
                                <circle cx="120" cy="130" r="20" fill="#F46300" opacity="0.3" />
                                <text
                                    x="120"
                                    y="138"
                                    fontSize="24"
                                    fontWeight="bold"
                                    fill="#F46300"
                                    textAnchor="middle"
                                >
                                    ₹
                                </text>

                                {/* Money bills */}
                                <g transform="translate(80, 40)">
                                    <rect
                                        x="0"
                                        y="0"
                                        width="70"
                                        height="40"
                                        rx="4"
                                        fill="#B19CD9"
                                    />
                                    <rect
                                        x="5"
                                        y="5"
                                        width="60"
                                        height="30"
                                        rx="2"
                                        fill="#D8BFD8"
                                        opacity="0.5"
                                    />
                                </g>
                                <g transform="translate(100, 20)">
                                    <rect
                                        x="0"
                                        y="0"
                                        width="70"
                                        height="40"
                                        rx="4"
                                        fill="#9370DB"
                                    />
                                    <rect
                                        x="5"
                                        y="5"
                                        width="60"
                                        height="30"
                                        rx="2"
                                        fill="#DDA0DD"
                                        opacity="0.5"
                                    />
                                </g>

                                {/* Coins */}
                                <circle cx="60" cy="150" r="18" fill="#F46300" />
                                <circle cx="60" cy="150" r="14" fill="#FF8C00" />
                                <text
                                    x="60"
                                    y="156"
                                    fontSize="16"
                                    fontWeight="bold"
                                    fill="white"
                                    textAnchor="middle"
                                >
                                    ₹
                                </text>

                                <circle cx="45" cy="165" r="16" fill="#F46300" />
                                <circle cx="45" cy="165" r="12" fill="#FF8C00" />
                                <text
                                    x="45"
                                    y="170"
                                    fontSize="14"
                                    fontWeight="bold"
                                    fill="white"
                                    textAnchor="middle"
                                >
                                    ₹
                                </text>

                                <defs>
                                    <linearGradient
                                        id="walletGradient"
                                        x1="40"
                                        y1="80"
                                        x2="200"
                                        y2="180"
                                    >
                                        <stop offset="0%" stopColor="#654321" />
                                        <stop offset="100%" stopColor="#8B4513" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form (Scrollable) */}
                <div className="flex-1 bg-white p-8 lg:p-12 overflow-y-auto lg:ml-[40%]">
                    <div className="max-w-2xl mx-auto">
                        {showSuccess ? (
                            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-scaleIn">
                                <div className="mb-6 flex justify-center">
                                    <div className="relative w-24 h-24">
                                        <svg className="w-24 h-24 animate-checkmark" viewBox="0 0 52 52">
                                            <circle className="animate-circle" cx="26" cy="26" r="25" fill="none" stroke="#22C55E" strokeWidth="2" />
                                            <path className="animate-check" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" d="M14 27l7 7 16-16" />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted Successfully!</h2>
                                <p className="text-gray-600 mb-8">Your loan application has been received. We'll review it and get back to you shortly.</p>
                                <button onClick={() => window.location.href = '/'} className="w-full bg-[#F46300] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E55A00] transition-colors shadow-md hover:shadow-lg">Back to Home</button>
                            </div>
                        ) : (
                            <>
                                {/* Progress Header */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-semibold text-[#F46300]">
                                            {step === 1 ? "Basic details" : step === 2 ? "Verifying documents" : step === 3 ? "Aadhaar verification" : "Photo & Location"}
                                        </h2>
                                        <span className="text-sm text-gray-500">{step}/4</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1">
                                        <div
                                            className="bg-[#F46300] h-1 rounded-full transition-all duration-300"
                                            style={{ width: `${(step / 4) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Back Button */}
                                {step > 1 && (
                                    <button
                                        onClick={() => setStep(step - 1)}
                                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                        Back
                                    </button>
                                )}

                                {/* Form Sections */}
                                {step === 1 && (
                                    <div className="space-y-8">
                                        {/* Loan Details */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                Loan details
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Mobile Number <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        placeholder="Enter 10-digit mobile number"
                                                        value={mobileNumber}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            if (/^\d*$/.test(value) && value.length <= 10) {
                                                                setMobileNumber(value);
                                                            }
                                                        }}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Loan amount <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                                            ₹
                                                        </span>
                                                        <input
                                                            type="text"
                                                            placeholder="0"
                                                            value={loanAmount}
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                if (/^\d*$/.test(value)) {
                                                                    setLoanAmount(value);
                                                                }
                                                            }}
                                                            className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Purpose of loan <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <select
                                                        value={loanPurpose}
                                                        onChange={(e) => setLoanPurpose(e.target.value)}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all appearance-none bg-white"
                                                    >
                                                        <option>Describe your purpose</option>
                                                        <option>Personal expenses</option>
                                                        <option>Wedding</option>
                                                        <option>Travel</option>
                                                        <option>Debt consolidation</option>
                                                        <option>Business</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Employment Details */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                Employment details (Salaried)
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Company name <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your company name"
                                                        value={companyName}
                                                        onChange={(e) => setCompanyName(e.target.value)}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Company address <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your company address"
                                                        value={companyAddress}
                                                        onChange={(e) => setCompanyAddress(e.target.value)}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Monthly salary <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                                                            ₹
                                                        </span>
                                                        <input
                                                            type="text"
                                                            placeholder="0"
                                                            value={monthlySalary}
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                if (/^\d*$/.test(value)) {
                                                                    setMonthlySalary(value);
                                                                }
                                                            }}
                                                            className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                        />
                                                    </div>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        *Net take home salary
                                                    </p>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Stability in current job <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <select
                                                        value={jobStability}
                                                        onChange={(e) => setJobStability(e.target.value)}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all appearance-none bg-white"
                                                    >
                                                        <option>Select</option>
                                                        <option>Stable</option>
                                                        <option>Somewhat stable</option>
                                                        <option>Unstable</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Address Details */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                                Address details
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Current address with landmarks{" "}
                                                        <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your current address"
                                                        value={currentAddress}
                                                        onChange={(e) => setCurrentAddress(e.target.value)}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Current address type <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <select
                                                        value={addressType}
                                                        onChange={(e) => setAddressType(e.target.value)}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all appearance-none bg-white"
                                                    >
                                                        <option>Select</option>
                                                        <option>Owned</option>
                                                        <option>Rented</option>
                                                        <option>Company provided</option>
                                                        <option>Parental</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Permanent address <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your permanent address"
                                                        value={sameAsCurrentAddress ? currentAddress : permanentAddress}
                                                        onChange={(e) => {
                                                            setPermanentAddress(e.target.value);
                                                            if (sameAsCurrentAddress) {
                                                                setSameAsCurrentAddress(false);
                                                            }
                                                        }}
                                                        disabled={sameAsCurrentAddress}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                                                    />
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <input
                                                            type="checkbox"
                                                            id="sameAddress"
                                                            checked={sameAsCurrentAddress}
                                                            onChange={(e) => {
                                                                setSameAsCurrentAddress(e.target.checked);
                                                                if (e.target.checked) {
                                                                    setPermanentAddress(currentAddress);
                                                                }
                                                            }}
                                                            className="w-4 h-4 text-[#F46300] border-gray-300 rounded focus:ring-[#F46300]"
                                                        />
                                                        <label htmlFor="sameAddress" className="text-sm text-gray-600 cursor-pointer">
                                                            Same as current address
                                                        </label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Current address proof <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={addressProofFile ? truncateFileName(addressProofFile.name, 30) : ""}
                                                            placeholder="Current Rent agreement..."
                                                            className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all cursor-pointer"
                                                            onClick={() => document.getElementById('addressProofInput')?.click()}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('addressProofInput')?.click()}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                        >
                                                            <svg
                                                                className="w-5 h-5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <input
                                                            id="addressProofInput"
                                                            type="file"
                                                            accept=".pdf,.jpg,.jpeg,.png"
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0];
                                                                if (file) {
                                                                    setAddressProofFile(file);
                                                                }
                                                            }}
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        PIN <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your PIN code"
                                                        value={pinCode}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            if (/^\d*$/.test(value) && value.length <= 6) {
                                                                setPinCode(value);
                                                            }
                                                        }}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Document Verification */}
                                {step === 2 && (
                                    <div className="space-y-8">
                                        {/* Salary Details */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#F46300] mb-4">
                                                Salary details
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Last 3 months pay slip <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={paySlipFile ? truncateFileName(paySlipFile.name, 30) : ""}
                                                            placeholder="Click to upload pdf here"
                                                            className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all cursor-pointer"
                                                            onClick={() => document.getElementById('paySlipInput')?.click()}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('paySlipInput')?.click()}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                        >
                                                            <svg
                                                                className="w-5 h-5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <input
                                                            id="paySlipInput"
                                                            type="file"
                                                            accept=".pdf"
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0];
                                                                if (file) {
                                                                    setPaySlipFile(file);
                                                                }
                                                            }}
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Last 3 months bank statement <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={bankStatementFile ? truncateFileName(bankStatementFile.name, 30) : ""}
                                                            placeholder="Click to upload pdf here"
                                                            className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all cursor-pointer"
                                                            onClick={() => document.getElementById('bankStatementInput')?.click()}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => document.getElementById('bankStatementInput')?.click()}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                        >
                                                            <svg
                                                                className="w-5 h-5"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                                />
                                                            </svg>
                                                        </button>
                                                        <input
                                                            id="bankStatementInput"
                                                            type="file"
                                                            accept=".pdf"
                                                            onChange={(e) => {
                                                                const file = e.target.files?.[0];
                                                                if (file) {
                                                                    setBankStatementFile(file);
                                                                }
                                                            }}
                                                            className="hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Documents */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#F46300] mb-4">
                                                Documents
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        PAN number <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your PAN number"
                                                        value={panNumber}
                                                        onChange={(e) => {
                                                            const value = e.target.value.toUpperCase();
                                                            if (/^[A-Z0-9]*$/.test(value) && value.length <= 10) {
                                                                setPanNumber(value);
                                                            }
                                                        }}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Aadhaar number <span className="text-[#F46300]">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your Aadhaar number"
                                                        value={aadhaarNumber}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            if (/^\d*$/.test(value) && value.length <= 12) {
                                                                setAadhaarNumber(value);
                                                            }
                                                        }}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Terms and Conditions */}
                                        <div className="space-y-4">
                                            <p className="text-sm text-gray-600">
                                                Secure, transparent, and RBI-compliant personal loans — designed to help you when you need it most.
                                            </p>
                                            <div className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    id="terms"
                                                    checked={agreedToTerms}
                                                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                                                    className="mt-1 w-4 h-4 text-[#F46300] border-gray-300 rounded focus:ring-[#F46300]"
                                                />
                                                <label htmlFor="terms" className="text-sm text-gray-700">
                                                    By continuing, you agree to our{" "}
                                                    <a href="#" className="text-[#F46300] underline">privacy policies</a> and{" "}
                                                    <a href="#" className="text-[#F46300] underline">T&C</a>. You also authorize us to{" "}
                                                    <a href="#" className="text-[#F46300] underline">retrieve your credit report</a> & communicate with you via phone, e-mails, WhatsApp, etc.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Aadhaar Verification - OTP */}
                                {step === 3 && (
                                    <div className="space-y-8">
                                        <div className="text-center space-y-6">
                                            <h3 className="text-2xl font-semibold text-gray-900">
                                                Verify Aadhaar number
                                            </h3>

                                            <p className="text-gray-600">
                                                OTP sent on registered mobile number linked with your Aadhaar
                                            </p>

                                            <div className="text-sm text-gray-600">
                                                {canResend ? (
                                                    <button
                                                        onClick={handleResendOTP}
                                                        className="text-[#F46300] font-medium hover:underline"
                                                    >
                                                        Resend OTP
                                                    </button>
                                                ) : (
                                                    <span>Resend OTP in {countdown}sec</span>
                                                )}
                                            </div>

                                            <div className="mt-8">
                                                <label className="block text-sm font-medium text-gray-700 mb-4 text-left">
                                                    Enter OTP
                                                </label>
                                                <div className="flex gap-3 justify-center">
                                                    {otp.map((digit, index) => (
                                                        <input
                                                            key={index}
                                                            id={`otp-${index}`}
                                                            type="text"
                                                            maxLength={1}
                                                            value={digit}
                                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                                            onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                            className="w-14 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-[#F46300] focus:ring-2 focus:ring-[#F46300] focus:outline-none transition-all"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Photo & Location */}
                                {step === 4 && (
                                    <div className="space-y-8">
                                        {/* Photo Upload */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Upload your recent photo <span className="text-[#F46300]">*</span>
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    readOnly
                                                    value={photoFile ? truncateFileName(photoFile.name, 40) : ""}
                                                    placeholder="Click to upload or take photo"
                                                    className="w-full px-4 py-2.5 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all cursor-pointer"
                                                    onClick={() => document.getElementById('photoInput')?.click()}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => document.getElementById('photoInput')?.click()}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                                        />
                                                    </svg>
                                                </button>
                                                <input
                                                    id="photoInput"
                                                    type="file"
                                                    accept="image/*"
                                                    capture="environment"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            setPhotoFile(file);
                                                        }
                                                    }}
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>

                                        {/* Auto-detect Location */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    id="autoLocation"
                                                    checked={autoDetectLocation}
                                                    onChange={(e) => setAutoDetectLocation(e.target.checked)}
                                                    className="w-4 h-4 text-[#F46300] border-gray-300 rounded focus:ring-[#F46300]"
                                                />
                                                <label htmlFor="autoLocation" className="text-sm font-medium text-gray-700 cursor-pointer">
                                                    Auto-detect location <span className="text-[#F46300]">*</span>
                                                </label>
                                            </div>

                                            {(locationError || location) && (
                                                <div className="flex items-start gap-2 text-sm">
                                                    <svg
                                                        className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                    <p className={location ? "text-green-600" : "text-gray-600"}>
                                                        {location
                                                            ? `Location detected: ${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}`
                                                            : locationError
                                                        }
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Next Button */}
                                <div className="mt-8">
                                    <button
                                        onClick={handleNext}
                                        type="button"
                                        className="w-full bg-[#F46300] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E55A00] transition-colors shadow-md hover:shadow-lg"
                                    >
                                        {step === 4 ? "Submit application" : step === 3 ? "Verify OTP" : step === 2 ? "Get OTP" : "Next"}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div >
        </>
    );
}

export default function ApplyNowPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ApplyNowContent />
        </Suspense>
    );
}
