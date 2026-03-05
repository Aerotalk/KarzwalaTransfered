"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { X, Plus, Calculator } from "lucide-react";
import useEMIcalc from "@/hooks/useEMIcalc";

interface LoanData {
    id: number;
    principal: number;
    rate: number;
    tenure: number;
    processingFee: number;
}

export default function LoanComparisonCalc() {
    const { calculateEMI } = useEMIcalc();

    const [loans, setLoans] = useState<LoanData[]>([
        { id: 1, principal: 500000, rate: 11, tenure: 36, processingFee: 2 },
        { id: 2, principal: 500000, rate: 12, tenure: 36, processingFee: 0.5 },
    ]);

    const handleAddLoan = () => {
        if (loans.length >= 4) return; // Keep max 4 loans for good UI
        const newId = Math.max(...loans.map((l) => l.id)) + 1;
        setLoans([...loans, { id: newId, principal: 500000, rate: 12, tenure: 36, processingFee: 1 }]);
    };

    const handleRemoveLoan = (id: number) => {
        setLoans(loans.filter((loan) => loan.id !== id));
    };

    const handleUpdateLoan = (id: number, key: keyof LoanData, value: number) => {
        setLoans((prev) =>
            prev.map((loan) =>
                loan.id === id
                    ? loan[key] !== value
                        ? { ...loan, [key]: value }
                        : loan
                    : loan
            )
        );
    };

    // Compute EMI details dynamically
    const computedLoans = useMemo(() => {
        return loans.map((loan) => {
            const { emi, totalInterest, totalPayment } = calculateEMI(
                loan.principal,
                loan.rate,
                loan.tenure
            );
            const feeAmount = (loan.principal * loan.processingFee) / 100;
            const totalCost = totalPayment + feeAmount;
            return { ...loan, emi, totalInterest, totalPayment, feeAmount, totalCost };
        });
    }, [loans, calculateEMI]);

    return (
        <div className="w-full flex justify-center mt-12 mb-16">
            <div
                id="loan-comparison-calculator"
                className="flex flex-col justify-center items-center rounded-3xl overflow-hidden w-full max-w-7xl relative z-10"
            >
                {/* Loan Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 w-full">
                    {computedLoans.map((loan) => (
                        <div
                            key={loan.id}
                            className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 transition-all hover:shadow-md"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-xl text-gray-900 border-b-2 border-[#F46300] pb-1">Loan {loan.id}</h3>
                                {computedLoans.length > 2 && (
                                    <button
                                        onClick={() => handleRemoveLoan(loan.id)}
                                        className="text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 p-2 rounded-full transition-colors"
                                    >
                                        <X size={18} />
                                    </button>
                                )}
                            </div>

                            {/* Principal */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <label className="font-semibold text-gray-700 text-sm">Loan Amount</label>
                                    <Input
                                        className="w-28 bg-gray-50 border-gray-200 text-right font-semibold text-[#F46300] focus:ring-[#F46300]"
                                        type="text"
                                        value={`₹ ${loan.principal.toLocaleString("en-IN")}`}
                                        onChange={(e) =>
                                            handleUpdateLoan(
                                                loan.id,
                                                "principal",
                                                Number(e.target.value.replace(/[₹ ,]/g, ""))
                                            )
                                        }
                                    />
                                </div>
                                <Slider
                                    defaultValue={[loan.principal]}
                                    onValueChange={(v) => handleUpdateLoan(loan.id, "principal", v[0])}
                                    min={50000}
                                    max={2000000}
                                    step={10000}
                                />
                                <div className="flex justify-between text-xs mt-2 text-gray-400 font-medium tracking-wide">
                                    <span>₹50k</span>
                                    <span>₹20L</span>
                                </div>
                            </div>

                            {/* Interest Rate */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <label className="font-semibold text-gray-700 text-sm">Interest Rate (%)</label>
                                    <Input
                                        className="w-20 bg-gray-50 border-gray-200 text-right font-semibold text-[#F46300] focus:ring-[#F46300]"
                                        type="text"
                                        value={loan.rate}
                                        onChange={(e) => handleUpdateLoan(loan.id, "rate", Number(e.target.value))}
                                    />
                                </div>
                                <Slider
                                    defaultValue={[loan.rate]}
                                    onValueChange={(v) => handleUpdateLoan(loan.id, "rate", v[0])}
                                    min={8}
                                    max={24}
                                    step={0.1}
                                />
                                <div className="flex justify-between text-xs mt-2 text-gray-400 font-medium tracking-wide">
                                    <span>8%</span>
                                    <span>24%</span>
                                </div>
                            </div>

                            {/* Tenure */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-3">
                                    <label className="font-semibold text-gray-700 text-sm">Tenure (Months)</label>
                                    <Input
                                        className="w-20 bg-gray-50 border-gray-200 text-right font-semibold text-[#F46300] focus:ring-[#F46300]"
                                        type="text"
                                        value={loan.tenure}
                                        onChange={(e) => handleUpdateLoan(loan.id, "tenure", Number(e.target.value))}
                                    />
                                </div>
                                <Slider
                                    defaultValue={[loan.tenure]}
                                    onValueChange={(v) => handleUpdateLoan(loan.id, "tenure", v[0])}
                                    min={6}
                                    max={60}
                                    step={1}
                                />
                                <div className="flex justify-between text-xs mt-2 text-gray-400 font-medium tracking-wide">
                                    <span>6m</span>
                                    <span>60m</span>
                                </div>
                            </div>

                            {/* Processing Fee */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className="font-semibold text-gray-700 text-sm">Processing Fee (%)</label>
                                    <Input
                                        className="w-20 bg-gray-50 border-gray-200 text-right font-semibold text-[#F46300] focus:ring-[#F46300]"
                                        type="text"
                                        value={loan.processingFee}
                                        onChange={(e) => handleUpdateLoan(loan.id, "processingFee", Number(e.target.value))}
                                    />
                                </div>
                                <Slider
                                    defaultValue={[loan.processingFee]}
                                    onValueChange={(v) => handleUpdateLoan(loan.id, "processingFee", v[0])}
                                    min={0}
                                    max={5}
                                    step={0.1}
                                />
                                <div className="flex justify-between text-xs mt-2 text-gray-400 font-medium tracking-wide">
                                    <span>0%</span>
                                    <span>5%</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add Loan Button */}
                    {computedLoans.length < 4 && (
                        <div className="flex justify-center items-center border-dashed border-2 border-gray-200 bg-gray-50/50 rounded-2xl min-h-[400px] hover:bg-orange-50/30 transition-colors">
                            <Button
                                onClick={handleAddLoan}
                                variant="outline"
                                className="text-[#F46300] border-orange-200 hover:bg-orange-50 hover:text-orange-700 font-semibold px-6 py-6"
                            >
                                <Plus className="mr-2 h-5 w-5" /> Add Another Loan
                            </Button>
                        </div>
                    )}
                </div>

                {/* Comparison Table */}
                <div className="mt-8 bg-gray-900 rounded-3xl text-white overflow-x-auto w-full shadow-xl">
                    <div className="min-w-[700px] p-8">
                        <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(120px,1fr))] gap-6 text-center font-bold text-gray-300 uppercase tracking-wider text-sm mb-6">
                            <span className="text-left">Comparison Factors</span>
                            {computedLoans.map((loan) => (
                                <span key={loan.id} className="text-[#F46300]">Loan {loan.id}</span>
                            ))}
                        </div>

                        <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(120px,1fr))] gap-6 text-center mb-5 items-center">
                            <span className="text-left font-semibold text-lg">Monthly EMI</span>
                            {computedLoans.map((loan) => (
                                <span key={loan.id} className="text-2xl font-bold bg-white/5 py-3 rounded-xl border border-white/10">
                                    ₹{loan.emi.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                                </span>
                            ))}
                        </div>

                        <Separator className="bg-white/10 my-6" />

                        <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(120px,1fr))] gap-6 text-center mb-5 items-center">
                            <span className="text-left text-gray-400 font-medium">Total Interest</span>
                            {computedLoans.map((loan) => (
                                <span key={loan.id} className="text-gray-200 font-medium">
                                    ₹{loan.totalInterest.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(120px,1fr))] gap-6 text-center mb-5 items-center">
                            <span className="text-left text-gray-400 font-medium">Processing Fee (Amt)</span>
                            {computedLoans.map((loan) => (
                                <span key={loan.id} className="text-gray-200 font-medium">
                                    ₹{loan.feeAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                                </span>
                            ))}
                        </div>

                        <Separator className="bg-white/10 my-6" />

                        <div className="grid grid-cols-[200px_repeat(auto-fit,minmax(120px,1fr))] gap-6 text-center items-center">
                            <span className="text-left font-bold text-xl text-white">Total Cost<br /><span className="text-xs font-normal text-gray-400">(Payable + Fees)</span></span>
                            {computedLoans.map((loan) => {
                                // Find the lowest cost to highlight it
                                const lowestCost = Math.min(...computedLoans.map(l => l.totalCost));
                                const isBest = loan.totalCost === lowestCost && computedLoans.length > 1;

                                return (
                                    <span key={loan.id} className={`text-2xl font-bold py-4 rounded-xl border ${isBest ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-[#F46300] text-white border-transparent shadow-[0_4px_14px_0_rgba(244,99,0,0.39)]'}`}>
                                        ₹{loan.totalCost.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                                        {isBest && <span className="block text-xs font-bold text-green-400 mt-1 uppercase tracking-tight">Best Deal</span>}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
