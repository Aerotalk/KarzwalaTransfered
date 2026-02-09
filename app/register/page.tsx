"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function RegisterPage() {
    const [step, setStep] = useState(1);

    // Step 1 fields
    const [mobileNumber, setMobileNumber] = useState("");
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Step 2 & OTP fields
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [countdown, setCountdown] = useState(30);
    const [canResend, setCanResend] = useState(false);

    // Success state
    const [showSuccess, setShowSuccess] = useState(false);

    // API states
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Validation
    const validateStep1 = () => {
        return (
            mobileNumber.length === 10 &&
            /^\d+$/.test(mobileNumber) &&
            agreedToTerms
        );
    };

    const validateStep2 = () => {
        return otp.every(digit => digit !== "");
    };

    // API Functions
    const requestOtp = async (phone: string) => {
        const response = await fetch(`${API_BASE_URL}/api/auth/phone/request-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone: `+91${phone}` })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to send OTP");
        }

        return response.json();
    };

    const verifyOtp = async (phone: string, code: string) => {
        const response = await fetch(`${API_BASE_URL}/api/auth/phone/verify-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone: `+91${phone}`, code })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Invalid OTP");
        }

        return response.json();
    };

    const handleNext = async () => {
        setError("");

        if (step === 1) {
            if (validateStep1()) {
                setLoading(true);
                try {
                    await requestOtp(mobileNumber);
                    setStep(2);
                    setCountdown(30);
                    setCanResend(false);
                } catch (err: any) {
                    setError(err.message || "Failed to send OTP. Please try again.");
                } finally {
                    setLoading(false);
                }
            } else {
                setError("Please fill in all required fields correctly.");
            }
        } else if (step === 2) {
            if (validateStep2()) {
                setLoading(true);
                try {
                    const otpCode = otp.join("");
                    const result = await verifyOtp(mobileNumber, otpCode);

                    // Store authentication token and user info
                    localStorage.setItem('authToken', result.token);
                    localStorage.setItem('authUser', JSON.stringify(result.user));

                    setShowSuccess(true);
                } catch (err: any) {
                    setError(err.message || "Invalid OTP. Please try again.");
                } finally {
                    setLoading(false);
                }
            } else {
                setError("Please enter the complete OTP.");
            }
        }
    };

    const handleResendOTP = async () => {
        setError("");
        setLoading(true);
        try {
            await requestOtp(mobileNumber);
            setCountdown(30);
            setCanResend(false);
            setOtp(["", "", "", "", "", ""]);
        } catch (err: any) {
            setError(err.message || "Failed to resend OTP. Please try again.");
        } finally {
            setLoading(false);
        }
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

    const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    // Countdown timer
    useEffect(() => {
        if (step === 2 && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            setCanResend(true);
        }
    }, [countdown, step]);

    return (
        <>
            <style jsx>{`
                @keyframes scaleIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                @keyframes drawCircle {
                    from { stroke-dasharray: 0 157; }
                    to { stroke-dasharray: 157 157; }
                }
                @keyframes drawCheck {
                    from { stroke-dasharray: 0 50; }
                    to { stroke-dasharray: 50 50; }
                }
                .animate-scaleIn { animation: scaleIn 0.4s ease-out; }
                .animate-circle { stroke-dasharray: 157 157; animation: drawCircle 0.6s ease-out forwards; }
                .animate-check { stroke-dasharray: 0 50; animation: drawCheck 0.4s 0.3s ease-out forwards; }
            `}</style>

            <div className="h-screen flex overflow-hidden">
                {/* Left Panel - Branding (Fixed) */}
                <div className="hidden lg:flex lg:w-2/5 bg-gradient-to-br from-orange-50 to-white p-12 flex-col justify-between fixed left-0 top-0 bottom-0">
                    <div>
                        <div className="mb-12">
                            <Image src="/karzwala-logo.png" alt="Karzwala" width={180} height={60} className="w-auto h-12" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                            Welcome to <br />
                            <span className="text-[#F46300]">Karzwala</span>
                        </h1>
                        <p className="text-gray-600 text-lg">Create an account to manage your loans.</p>
                    </div>

                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <defs>
                                <linearGradient id="loginGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#F46300" />
                                    <stop offset="100%" stopColor="#FF8C42" />
                                </linearGradient>
                            </defs>
                            <circle cx="100" cy="100" r="80" fill="url(#loginGradient)" opacity="0.1" />
                            <path d="M60 100 L140 100 M100 60 L100 140" stroke="url(#loginGradient)" strokeWidth="2" />
                            <rect x="70" y="70" width="60" height="60" rx="8" fill="white" stroke="#F46300" strokeWidth="2" />
                            <circle cx="100" cy="90" r="10" fill="#F46300" />
                            <path d="M80 120 C80 110, 120 110, 120 120" stroke="#F46300" strokeWidth="2" fill="none" />
                        </svg>
                    </div>

                    <div className="text-sm text-gray-500">
                        © 2024 Karzwala. All rights reserved.
                    </div>
                </div>

                {/* Right Panel - Register Form */}
                <div className="flex-1 bg-white p-8 lg:p-12 overflow-y-auto lg:ml-[40%] flex items-center justify-center">
                    <div className="w-full max-w-md mx-auto">
                        {showSuccess ? (
                            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center animate-scaleIn">
                                <div className="mb-6 flex justify-center">
                                    <div className="relative w-24 h-24">
                                        <svg className="w-24 h-24 animate-checkmark" viewBox="0 0 52 52">
                                            <circle className="animate-circle" cx="26" cy="26" r="25" fill="none" stroke="#22C55E" strokeWidth="2" />
                                            <path className="animate-check" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" d="M14 27l7 7 16-16" />
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">Registered successfully!</h2>
                                <p className="text-gray-600 mb-6">Your account has been created. You can now apply for loans.</p>
                                <Link href="/apply-now" className="w-full bg-[#F46300] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E55A00] transition-colors shadow-md hover:shadow-lg inline-block text-center">
                                    Apply for Loan
                                </Link>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                    Create <span className="text-[#F46300]">Account</span>
                                </h2>
                                <p className="text-gray-600 mb-8">Sign up to get started</p>

                                <form className="space-y-6">
                                    {step === 1 ? (
                                        <>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Enter mobile number
                                                </label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                                                        +91
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value={mobileNumber}
                                                        maxLength={10}
                                                        onChange={(e) => {
                                                            const val = e.target.value;
                                                            if (/^\d*$/.test(val)) setMobileNumber(val);
                                                            if (error) setError("");
                                                        }}
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all"
                                                        placeholder="Enter mobile number"
                                                        disabled={loading}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 mt-4">
                                                <input
                                                    type="checkbox"
                                                    id="terms"
                                                    checked={agreedToTerms}
                                                    onChange={(e) => {
                                                        setAgreedToTerms(e.target.checked);
                                                        if (error) setError("");
                                                    }}
                                                    className="w-4 h-4 mt-1 text-[#F46300] border-gray-300 rounded focus:ring-[#F46300]"
                                                    disabled={loading}
                                                />
                                                <label htmlFor="terms" className="text-xs text-gray-600">
                                                    By continuing, you agree to our <Link href="/privacy" className="text-[#F46300] hover:underline">privacy policies</Link> and <Link href="/terms" className="text-[#F46300] hover:underline">T&C</Link>. You also authorize us to <span className="text-[#F46300]">retrieve</span> & communicate with you via phone, e-mails, WhatsApp, etc.
                                                </label>
                                            </div>
                                        </>
                                    ) : (
                                        // Step 2: OTP
                                        <div className="text-center">
                                            <p className="text-sm text-gray-600 mb-6">
                                                We have sent a verification code to <br />
                                                <span className="font-semibold text-gray-900">+91 {mobileNumber}</span>
                                            </p>

                                            <div className="flex gap-3 justify-center mb-6">
                                                {otp.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        id={`otp-${index}`}
                                                        type="text"
                                                        maxLength={1}
                                                        value={digit}
                                                        onChange={(e) => {
                                                            handleOtpChange(index, e.target.value);
                                                            if (error) setError("");
                                                        }}
                                                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                                        className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-[#F46300] focus:ring-2 focus:ring-[#F46300] focus:outline-none transition-all"
                                                        disabled={loading}
                                                    />
                                                ))}
                                            </div>

                                            <div className="text-sm text-gray-600 mb-6">
                                                {canResend ? (
                                                    <button onClick={handleResendOTP} type="button" className="text-[#F46300] font-medium hover:underline" disabled={loading}>
                                                        Resend OTP
                                                    </button>
                                                ) : (
                                                    <span>Resend OTP in {countdown}sec</span>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {error && (
                                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600 text-sm animate-scaleIn">
                                            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        disabled={loading}
                                        className="w-full bg-[#F46300] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#E55A00] transition-colors shadow-md hover:shadow-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {loading && (
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        )}
                                        {step === 1 ? "Get OTP" : "Verify OTP"}
                                    </button>

                                    {step === 1 && (
                                        <div className="mt-6 text-center space-y-3">
                                            <p className="text-sm text-gray-600">
                                                Already have an account? <Link href="/login" className="text-[#F46300] font-semibold hover:underline">Login now</Link>
                                            </p>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <button type="button" onClick={() => setStep(1)} className="w-full mt-2 text-gray-500 hover:text-gray-700 text-sm" disabled={loading}>
                                            Change Number
                                        </button>
                                    )}
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
