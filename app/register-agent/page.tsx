"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Suspense } from "react"
import { Loader2, CheckCircle, Download, Users, Briefcase, ArrowLeft, Shield } from "lucide-react"
import { toast } from "sonner"
import { apiClient, ApiError } from "@/lib/api"

// ─── Schemas ────────────────────────────────────────────────────────────────

const adminSchema = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(1, "Password is required"),
})
type AdminFormData = z.infer<typeof adminSchema>

const partnerSchema = z.object({
    name: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
    panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Enter a valid PAN number").optional().or(z.literal('')),
    gstNumber: z.string().optional().or(z.literal('')),
    firmName: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    pincode: z.string().optional(),
})
type PartnerFormData = z.infer<typeof partnerSchema>

type PartnerType = "AFFILIATE" | "DSA"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function downloadCredentials(data: {
    name: string; email: string; phone: string; partnerType: PartnerType;
    generatedPassword?: string; referralCode?: string; partnerId?: string;
}) {
    const partnerTypeLabel = data.partnerType === "DSA" ? "Direct Sales Agent" : "Affiliate Partner";
    const content = `
══════════════════════════════════════════
  KARZWALA — PARTNER CREDENTIALS
══════════════════════════════════════════

Partner Type   : ${partnerTypeLabel}
Full Name      : ${data.name}
Email          : ${data.email}
Phone          : +91${data.phone}
Partner ID     : ${data.partnerId || "PENDING"}
Referral Code  : ${data.referralCode || "PENDING"}

─────────────────────────────────────────
LOGIN DETAILS
─────────────────────────────────────────
Portal URL     : https://karzwala.in/login-agent
Login Phone    : +91${data.phone}
Login Method   : Mobile OTP

─────────────────────────────────────────
⚠  KEEP THIS FILE SECURE
   Do not share your credentials with anyone.
   Generated on: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}
══════════════════════════════════════════
`.trim();

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `karzwala-partner-${data.name.toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ─── Main Component ────────────────────────────────────────────────────────

function RegisterAgentContent() {
    const router = useRouter()
    const [step, setStep] = useState<1 | 2 | 3>(1) // 1: Admin verify, 2: Type select, 3: Partner form
    const [partnerType, setPartnerType] = useState<PartnerType | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [registeredPartner, setRegisteredPartner] = useState<any | null>(null)

    const adminForm = useForm<AdminFormData>({ resolver: zodResolver(adminSchema) })
    const partnerForm = useForm<PartnerFormData>({ resolver: zodResolver(partnerSchema) })

    // Step 1: Admin Verify
    const handleAdminSubmit = async (data: AdminFormData) => {
        setIsSubmitting(true)
        try {
            await apiClient.loginAdmin(data.email, data.password)
            toast.success("Admin verified! Select partner type.")
            setStep(2)
        } catch (err: any) {
            const msg = err.message || "Invalid admin credentials"
            adminForm.setError("password", { message: msg })
            toast.error(msg)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Step 2: Partner Type Select
    const handlePartnerTypeSelect = (type: PartnerType) => {
        setPartnerType(type)
        setStep(3)
    }

    // Step 3: Partner registration
    const handlePartnerSubmit = async (data: PartnerFormData) => {
        if (!partnerType) return
        setIsSubmitting(true)
        try {
            // Frontend validation mapping for DSA backend requirements
            if (partnerType === "DSA") {
                if (!data.address || !data.city || !data.state || !data.pincode) {
                    toast.error("Address, City, State, and Pincode are required for DSA registration.");
                    return;
                }
                if (!data.panNumber && !data.gstNumber) {
                    toast.error("Either PAN Number or GST Number is required for DSA.");
                    return;
                }
            } else if (partnerType === "AFFILIATE") {
                if (!data.panNumber) {
                    toast.error("PAN Number is required for Affiliate Partner registration.");
                    return;
                }
            }

            const result = await apiClient.registerPartner({
                name: data.name,
                email: data.email,
                phone: data.phone,
                password: "", // Handled by backend auto-generation
                partnerType,
                panNumber: data.panNumber || undefined,
                gstNumber: data.gstNumber || undefined,
                firmName: data.firmName || undefined,
                address: data.address || undefined,
                city: data.city || undefined,
                state: data.state || undefined,
                pincode: data.pincode || undefined,
            })

            const partner = result?.partner || result?.data || result
            setRegisteredPartner({
                name: data.name,
                email: data.email,
                phone: data.phone,
                partnerType,
                generatedPassword: result?.rawPassword || "(Generated via OTP)",
                referralCode: partner?.referralCode,
                partnerId: partner?.id || partner?._id,
            })
            toast.success("Partner registered successfully!")
        } catch (err: any) {
            const msg = err.message || "Registration failed. Please try again."
            toast.error(msg)
            partnerForm.setError("email", { message: msg })
        } finally {
            setIsSubmitting(false)
        }
    }

    // ── Success Screen ─────────────────────────────────────────────────────
    if (registeredPartner) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center p-8">
                <div className="max-w-lg w-full text-center space-y-8">
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-14 h-14 text-green-500" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Partner Registered!</h1>
                        <p className="text-gray-500">
                            <span className="font-semibold text-[#F46300]">{registeredPartner.name}</span> has been successfully
                            registered as a{" "}
                            <span className="font-semibold">{registeredPartner.partnerType === "DSA" ? "Direct Sales Agent" : "Affiliate Partner"}</span>.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-left space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Email</span>
                            <span className="font-medium text-gray-900">{registeredPartner.email}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Phone</span>
                            <span className="font-medium text-gray-900">+91{registeredPartner.phone}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Type</span>
                            <span className="font-medium text-gray-900">{registeredPartner.partnerType === "DSA" ? "DSA" : "Affiliate"}</span>
                        </div>
                        {registeredPartner.partnerId && (
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Partner ID</span>
                                <span className="font-mono font-medium text-orange-600">{registeredPartner.partnerId}</span>
                            </div>
                        )}
                        {registeredPartner.referralCode && (
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Referral Code</span>
                                <span className="font-mono font-medium text-orange-600">{registeredPartner.referralCode}</span>
                            </div>
                        )}
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={() => downloadCredentials(registeredPartner)}
                            className="w-full flex items-center justify-center gap-2 bg-[#F46300] text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100"
                        >
                            <Download className="w-5 h-5" />
                            Download Credentials
                        </button>
                        <button
                            onClick={() => {
                                setRegisteredPartner(null)
                                setStep(2)
                                partnerForm.reset()
                            }}
                            className="w-full py-3 rounded-xl font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
                        >
                            Register Another Partner
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // ── Main Form Layout ───────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen">

                {/* Left Branding Panel */}
                <div className="hidden lg:flex lg:col-span-2 bg-gradient-to-b from-orange-500 to-orange-600 flex-col justify-between p-12">
                    <div>
                        <Link href="/">
                            <Image src="/karzwala-logo.png" alt="Karzwala" width={160} height={56} className="brightness-0 invert" />
                        </Link>
                        <div className="mt-16 space-y-4">
                            <h1 className="text-4xl font-bold text-white leading-tight">
                                Partner<br />Registration<br />Portal
                            </h1>
                            <p className="text-orange-100 text-lg">
                                Register new affiliates, direct sales agents and business consultants to grow the Karzwala network.
                            </p>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                        {[
                            "Instant partner credential generation",
                            "Automatic referral link assignment",
                            "Role-specific dashboard access",
                        ].map((f, i) => (
                            <div key={i} className="flex items-center gap-3 text-orange-100">
                                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                                <span className="text-sm">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Form Panel */}
                <div className="lg:col-span-3 bg-white flex flex-col justify-center p-8 lg:p-16">

                    {/* Logo (mobile) */}
                    <div className="lg:hidden mb-8">
                        <Link href="/">
                            <Image src="/karzwala-logo.png" alt="Karzwala" width={140} height={48} />
                        </Link>
                    </div>

                    {/* Step indicator */}
                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-6">
                            {[
                                { n: 1, label: "Admin verify" },
                                { n: 2, label: "Partner type" },
                                { n: 3, label: "Registration" },
                            ].map((s, i, arr) => (
                                <div key={s.n} className="flex items-center gap-2">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s.n ? "bg-[#F46300] text-white" : "bg-gray-100 text-gray-400"}`}>
                                        {step > s.n ? <CheckCircle className="w-4 h-4" /> : s.n}
                                    </div>
                                    <span className={`text-xs font-medium hidden sm:block ${step >= s.n ? "text-gray-900" : "text-gray-400"}`}>{s.label}</span>
                                    {i < arr.length - 1 && <div className={`w-8 h-0.5 ${step > s.n ? "bg-[#F46300]" : "bg-gray-200"}`} />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ─── Step 1: Admin Verify ──────────────────────────────── */}
                    {step === 1 && (
                        <div className="max-w-md space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div>
                                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                                    <Shield className="w-6 h-6 text-[#F46300]" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Admin Verification</h2>
                                <p className="text-gray-500 mt-1">Enter your admin credentials to unlock partner registration.</p>
                            </div>

                            <form onSubmit={adminForm.handleSubmit(handleAdminSubmit)} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                                    <input
                                        type="email"
                                        placeholder="admin@karzwala.com"
                                        {...adminForm.register("email")}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all text-sm"
                                    />
                                    {adminForm.formState.errors.email && (
                                        <p className="mt-1 text-xs text-red-500">{adminForm.formState.errors.email.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Admin Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter admin password"
                                        {...adminForm.register("password")}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all text-sm"
                                    />
                                    {adminForm.formState.errors.password && (
                                        <p className="mt-1 text-xs text-red-500">{adminForm.formState.errors.password.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#F46300] text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify & Unlock"}
                                </button>
                            </form>

                            <div className="text-center text-sm text-gray-500">
                                Already a partner?{" "}
                                <Link href="/login-agent" className="text-[#F46300] font-semibold hover:underline">Login here</Link>
                            </div>
                        </div>
                    )}

                    {/* ─── Step 2: Partner Type Select ──────────────────────── */}
                    {step === 2 && (
                        <div className="max-w-md space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Select Partner Type</h2>
                                <p className="text-gray-500 mt-1">Choose the type of partner you're registering.</p>
                            </div>

                            <div className="grid gap-4">
                                <button
                                    onClick={() => handlePartnerTypeSelect("AFFILIATE")}
                                    className="flex items-center p-5 border-2 border-gray-100 rounded-2xl hover:border-[#F46300] hover:bg-orange-50 transition-all group text-left"
                                >
                                    <div className="bg-orange-100 p-4 rounded-xl group-hover:bg-orange-200 transition-colors">
                                        <Users className="w-6 h-6 text-[#F46300]" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-gray-900">Affiliate Partner</p>
                                        <p className="text-sm text-gray-500 mt-0.5">Earns commissions through referral links. Gets access to the Affiliate Dashboard.</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handlePartnerTypeSelect("DSA")}
                                    className="flex items-center p-5 border-2 border-gray-100 rounded-2xl hover:border-[#F46300] hover:bg-orange-50 transition-all group text-left"
                                >
                                    <div className="bg-orange-100 p-4 rounded-xl group-hover:bg-orange-200 transition-colors">
                                        <Briefcase className="w-6 h-6 text-[#F46300]" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-gray-900">Direct Sales Agent (DSA)</p>
                                        <p className="text-sm text-gray-500 mt-0.5">Actively processes loan applications. Gets access to the DSA Dashboard.</p>
                                    </div>
                                </button>
                            </div>

                            <button onClick={() => setStep(1)} className="flex items-center text-gray-500 hover:text-gray-900 text-sm transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-1" />
                                Back to admin verification
                            </button>
                        </div>
                    )}

                    {/* ─── Step 3: Partner Registration Form ────────────────── */}
                    {step === 3 && (
                        <div className="max-w-2xl animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="mb-8">
                                <button onClick={() => setStep(2)} className="flex items-center text-gray-500 hover:text-gray-900 text-sm transition-colors mb-4">
                                    <ArrowLeft className="w-4 h-4 mr-1" />
                                    Back
                                </button>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-orange-100 p-2 rounded-lg">
                                        {partnerType === "DSA" ? <Briefcase className="w-5 h-5 text-[#F46300]" /> : <Users className="w-5 h-5 text-[#F46300]" />}
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Register {partnerType === "DSA" ? "Direct Sales Agent" : "Affiliate Partner"}
                                    </h2>
                                </div>
                                <p className="text-gray-500">Fill in the partner&apos;s details to create their account.</p>
                            </div>

                            <form onSubmit={partnerForm.handleSubmit(handlePartnerSubmit)} className="space-y-6">
                                {/* Required fields */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Required Information</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { id: "name" as const, label: "Full Name", placeholder: "Ramesh Kumar", type: "text" },
                                            { id: "email" as const, label: "Email Address", placeholder: "partner@email.com", type: "email", required: true },
                                            { id: "phone" as const, label: "Mobile Number", placeholder: "9876543210", type: "tel", required: true },
                                            { id: "panNumber" as const, label: "PAN Number", placeholder: "ABCDE1234F", type: "text", required: partnerType === "AFFILIATE" },
                                            { id: "gstNumber" as const, label: "GST Number", placeholder: "22AAAAA0000A1Z5", type: "text", required: false, show: partnerType === "DSA" },
                                        ].filter(f => f.show !== false).map(f => (
                                            <div key={f.id}>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    {f.label} {f.required && <span className="text-[#F46300]">*</span>}
                                                </label>
                                                <input
                                                    type={f.type}
                                                    placeholder={f.placeholder}
                                                    {...partnerForm.register(f.id)}
                                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all text-sm ${f.id === "panNumber" ? "uppercase" : ""} ${partnerForm.formState.errors[f.id] ? "border-red-300 bg-red-50" : "border-gray-200"}`}
                                                />
                                                {partnerForm.formState.errors[f.id] && (
                                                    <p className="mt-1 text-xs text-red-500">{(partnerForm.formState.errors[f.id] as any)?.message}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Optional fields (Only for DSA) */}
                                {partnerType === "DSA" && (
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Additional Information <span className="normal-case text-gray-400">(optional)</span></h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { id: "firmName" as const, label: "Firm / Company Name", placeholder: "ABC Financial Services", required: false },
                                                { id: "address" as const, label: "Address", placeholder: "15, MG Road", required: true },
                                                { id: "city" as const, label: "City", placeholder: "Mumbai", required: true },
                                                { id: "state" as const, label: "State", placeholder: "Maharashtra", required: true },
                                                { id: "pincode" as const, label: "PIN Code", placeholder: "400001", required: true },
                                            ].map(f => (
                                                <div key={f.id}>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        {f.label} {f.required && <span className="text-[#F46300]">*</span>}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder={f.placeholder}
                                                        {...partnerForm.register(f.id)}
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none transition-all text-sm"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#F46300] text-white py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-2 text-base"
                                >
                                    {isSubmitting ? (
                                        <><Loader2 className="w-5 h-5 animate-spin" /> Registering Partner...</>
                                    ) : (
                                        "Complete Registration"
                                    )}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function RegisterAgentPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-[#F46300] animate-spin" />
            </div>
        }>
            <RegisterAgentContent />
        </Suspense>
    )
}
