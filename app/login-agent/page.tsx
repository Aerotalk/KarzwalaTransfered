"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { ArrowLeft, Loader2, Users, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { toast } from "sonner"
import { apiClient } from "@/lib/api"

type AgentRole = "affiliate" | "dsa"

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

function AgentLoginForm() {
    const router = useRouter()
    const [step, setStep] = useState(1) // 1: Role, 2: Phone entry, 5: OTP, 6: Email/Password
    const [role, setRole] = useState<AgentRole | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [phone, setPhone] = useState("")
    const [otp, setOtp] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const partnerTypeMap: Record<AgentRole, string> = {
        affiliate: "AFFILIATE",
        dsa: "DSA",
    };

    const dashboardMap: Record<AgentRole, string> = {
        affiliate: "/affiliate-dashboard",
        dsa: "/dsa-dashboard",
    };

    const handleRoleSelect = (selectedRole: AgentRole) => {
        setRole(selectedRole)
        setStep(2)
        setError(null)
    }

    const handleBack = () => {
        setStep(1)
        setError(null)
    }

    const handleSendOtp = async () => {
        if (!phone || phone.length !== 10) {
            return toast.error("Please enter a valid 10-digit number");
        }
        setIsLoading(true);
        setError(null);
        try {
            await apiClient.requestPartnerLoginOtp(`+91${phone}`);
            toast.success(`OTP sent to +91${phone}`);
            setStep(5);
        } catch (err: any) {
            setError(err.message || "Failed to send OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp || otp.length !== 6) return toast.error("Please enter a 6-digit OTP");
        setIsLoading(true);
        setError(null);
        try {
            const data = await apiClient.verifyPartnerLoginOtp(`+91${phone}`, otp);

            // apiClient.verifyPartnerLoginOtp already stores partnerAuthToken + partnerData
            const partnerType = data?.partner?.partnerType || data?.partnerType;

            // Optional structural check or manual override since apiClient merges it correctly
            if (!partnerType) {
                const generatedData = {
                    ...data,
                    partnerType: partnerTypeMap[role!]
                };
                localStorage.setItem("partnerData", JSON.stringify(generatedData));
            }

            toast.success("Welcome back!");
            router.push(dashboardMap[role!]);
        } catch (err: any) {
            setError(err.message || "Invalid OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) return toast.error("Please enter email and password");
        setIsLoading(true);
        setError(null);
        try {
            const data = await apiClient.loginPartner(email, password);
            // apiClient.loginPartner already stores partnerAuthToken + partnerData
            const partnerType = data?.partner?.partnerType || data?.partnerType;
            const actualRole: AgentRole = partnerType === "DSA" ? "dsa" : "affiliate";
            toast.success("Welcome back!");
            router.push(dashboardMap[actualRole]);
        } catch (err: any) {
            setError(err.message || "Invalid email or password.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Panel */}
                <div className="flex flex-col justify-center p-8 lg:p-16">
                    <div className="max-w-md mx-auto">
                        <div className="mb-12">
                            <Link href="/">
                                <Image src="/karzwala-logo.png" alt="Karzwala" width={180} height={60} />
                            </Link>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Agent <span className="text-[#F46300]">Partner</span> Portal —<br />
                            Grow With Us
                        </h1>
                        <p className="text-gray-600 mb-12">
                            Join our network of professionals and help people get the financial support they need while building your own success story.
                        </p>
                        <div className="flex justify-start">
                            <Image src="/signup-money.png" alt="Agent illustration" width={300} height={300} className="object-contain" />
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="bg-white flex flex-col justify-center p-8 lg:p-16">
                    <div className="max-w-md mx-auto w-full">

                        {/* Error Banner */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        {/* Step 1: Role Selection */}
                        {step === 1 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        Welcome <span className="text-[#F46300]">Partner</span>
                                    </h2>
                                    <p className="text-gray-600 text-sm">Please select your partnership type to login</p>
                                </div>
                                <div className="grid gap-4">
                                    <button onClick={() => handleRoleSelect("affiliate")} className="flex items-center p-4 border-2 border-gray-100 rounded-xl hover:border-[#F46300] hover:bg-orange-50 transition-all group text-left">
                                        <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                                            <Users className="w-6 h-6 text-[#F46300]" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-bold text-gray-900">Affiliate</p>
                                            <p className="text-sm text-gray-500">Earn through referrals</p>
                                        </div>
                                    </button>
                                    <button onClick={() => handleRoleSelect("dsa")} className="flex items-center p-4 border-2 border-gray-100 rounded-xl hover:border-[#F46300] hover:bg-orange-50 transition-all group text-left">
                                        <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                                            <Briefcase className="w-6 h-6 text-[#F46300]" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="font-bold text-gray-900">Direct Sales Agent</p>
                                            <p className="text-sm text-gray-500">Expert in loan processing</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="text-center text-sm text-gray-500">
                                    Not registered yet?{" "}
                                    <Link href="/register-agent" className="text-[#F46300] font-semibold hover:underline">
                                        Register as Agent
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Phone Entry */}
                        {step === 2 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                <button onClick={handleBack} className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    <span>Back to roles</span>
                                </button>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2 capitalize">
                                        {role === "dsa" ? "Direct Sales Agent" : "Affiliate"} <span className="text-[#F46300]">Login</span>
                                    </h2>
                                    <p className="text-gray-600 text-sm">Enter your registered mobile number to receive an OTP</p>
                                </div>
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                                    <div className="flex gap-2">
                                        <div className="w-16 h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-400">+91</div>
                                        <Input
                                            value={phone}
                                            onChange={(e) => { const v = e.target.value; if (/^\d*$/.test(v) && v.length <= 10) setPhone(v); }}
                                            placeholder="98309 12345"
                                            className="h-12 flex-1"
                                            maxLength={10}
                                        />
                                    </div>
                                    <Button
                                        onClick={handleSendOtp}
                                        className="w-full bg-[#F46300] hover:bg-orange-700 text-white h-12 rounded-lg font-semibold shadow-lg shadow-orange-100"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <Loader2 className="animate-spin mr-2" /> : "Send Login OTP"}
                                    </Button>
                                    <div className="relative py-4">
                                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
                                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-gray-400 font-bold tracking-widest">OR</span></div>
                                    </div>
                                    <button onClick={() => setStep(6)} className="w-full text-sm text-gray-500 hover:text-[#F46300] font-medium transition-colors">
                                        Login with Email & Password
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 5: OTP Verification */}
                        {step === 5 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                <button onClick={() => setStep(2)} className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    <span>Back</span>
                                </button>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Mobile</h2>
                                    <p className="text-gray-600 text-sm">Enter the 6-digit code sent to +91{phone}.</p>
                                </div>
                                <div className="space-y-8">
                                    <div className="flex justify-center py-4">
                                        <InputOTP maxLength={6} onChange={(val) => setOtp(val)}>
                                            <InputOTPGroup className="gap-2">
                                                <InputOTPSlot index={0} className="rounded-xl border-2 h-14 w-11 text-xl font-bold" />
                                                <InputOTPSlot index={1} className="rounded-xl border-2 h-14 w-11 text-xl font-bold" />
                                                <InputOTPSlot index={2} className="rounded-xl border-2 h-14 w-11 text-xl font-bold" />
                                                <InputOTPSlot index={3} className="rounded-xl border-2 h-14 w-11 text-xl font-bold" />
                                                <InputOTPSlot index={4} className="rounded-xl border-2 h-14 w-11 text-xl font-bold" />
                                                <InputOTPSlot index={5} className="rounded-xl border-2 h-14 w-11 text-xl font-bold" />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
                                    <Button
                                        onClick={handleVerifyOtp}
                                        className="w-full bg-[#F46300] hover:bg-orange-700 text-white h-14 rounded-xl font-bold text-lg shadow-xl shadow-orange-100"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <Loader2 className="animate-spin mr-2" /> : "Verify & Sign In"}
                                    </Button>
                                    <div className="text-center">
                                        <p className="text-sm text-gray-500">Didn't receive code?</p>
                                        <button onClick={() => setStep(2)} className="text-[#F46300] text-sm font-bold hover:underline">Resend OTP</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 6: Email & Password Login */}
                        {step === 6 && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                                <button onClick={() => setStep(2)} className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    <span>Back to OTP Login</span>
                                </button>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                                    <p className="text-gray-600 text-sm">Login with your email and password</p>
                                </div>
                                <form onSubmit={handleEmailLogin} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="partner@karzwala.com" className="h-12" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                        <div className="relative">
                                            <Input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="Enter your password" className="h-12 pr-10" />
                                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                                {showPassword ? "Hide" : "Show"}
                                            </button>
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full bg-[#F46300] hover:bg-orange-700 text-white h-12 rounded-lg font-semibold" disabled={isLoading}>
                                        {isLoading ? <Loader2 className="animate-spin mr-2" /> : "Login Securely"}
                                    </Button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function AgentLoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-10 h-10 text-[#F46300] animate-spin" /></div>}>
            <AgentLoginForm />
        </Suspense>
    )
}
