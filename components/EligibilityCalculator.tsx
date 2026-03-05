"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function EligibilityCalculator() {
  const router = useRouter();
  const [income, setIncome] = useState(62000);
  const [tenure, setTenure] = useState(2);
  const [expense, setExpense] = useState(18);

  const [eligibleAmount, setEligibleAmount] = useState(0);
  const [emi, setEmi] = useState(0);

  // Calculate eligible loan on state change
  useEffect(() => {
    const expenseAmount = (income * expense) / 100;
    const netIncome = income - expenseAmount;
    const maxEmi = netIncome * 0.4; // 40% EMI rule
    const totalMonths = tenure * 12;
    const eligibleLoan = maxEmi * totalMonths;

    setEligibleAmount(eligibleLoan);
    setEmi(maxEmi);
  }, [income, tenure, expense]);

  const handleApplyLoan = () => {
    router.push("/apply-now");
  };

  const formatCurrencyInput = (value: string) =>
    Number(value.replace(/[₹, ]/g, ""));

  const formatPercentInput = (value: string) =>
    Number(value.replace(/[% ]/g, ""));

  return (
    <section className="w-full w-full py-8">
      <div className="flex flex-col justify-center items-center space-y-8 w-full">
        <div className="flex flex-col lg:flex-row lg:space-x-12 justify-between items-center gap-8 w-full">
          {/* Left Side Controls */}
          <div className="w-full flex flex-col space-y-6">
            {/* Monthly Income */}
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-700">Monthly Income</label>
                <Input
                  className="justify-end w-1/4 max-w-[100px] bg-gray-100 border-0 focus:ring-1 focus:ring-orange-500 font-medium"
                  type="text"
                  value={income.toLocaleString("en-IN")}
                  onChange={(e) =>
                    setIncome(formatCurrencyInput(e.target.value))
                  }
                />
              </div>
              <Slider
                value={[income]}
                onValueChange={(value) => setIncome(value[0])}
                min={15000}
                max={200000}
                step={1000}
                className="flex-1"
              />
              <div className="flex justify-between text-sm text-gray-500 font-medium">
                <span>15k</span>
                <span>2,00,000</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-700">Tenure (in years)</label>
                <Input
                  className="justify-end w-1/4 max-w-[100px] bg-gray-100 border-0 focus:ring-1 focus:ring-orange-500 font-medium"
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                />
              </div>
              <Slider
                value={[tenure]}
                onValueChange={(value) => setTenure(value[0])}
                min={1}
                max={10}
                step={1}
                className="flex-1"
              />
              <div className="flex justify-between text-sm text-gray-500 font-medium">
                <span>1</span>
                <span>10</span>
              </div>
            </div>

            {/* Monthly Expense */}
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-700">Monthly Expense (%)</label>
                <Input
                  className="justify-end w-1/4 max-w-[100px] bg-gray-100 border-0 focus:ring-1 focus:ring-orange-500 font-medium"
                  type="number"
                  value={expense}
                  onChange={(e) =>
                    setExpense(formatPercentInput(e.target.value))
                  }
                />
              </div>
              <Slider
                value={[expense]}
                onValueChange={(value) => setExpense(value[0])}
                min={0}
                max={70}
                step={1}
                className="flex-1"
              />
              <div className="flex justify-between text-sm text-gray-500 font-medium">
                <span>0</span>
                <span>70%</span>
              </div>
            </div>
          </div>

          {/* Right Side Result Card */}
          <div className="bg-[#F46300] text-white w-full lg:w-[45%] px-8 py-10 rounded-2xl shadow-lg flex flex-col space-y-6">
            <div>
                <div className="text-sm font-medium opacity-90 mb-1">
                You are eligible for loan up to
                </div>
                <h3 className="text-4xl font-bold tracking-tight">
                ₹{" "}
                {eligibleAmount.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                })}
                *
                </h3>
            </div>

            <Separator className="bg-white/30" />

            <div className="flex justify-between items-center text-lg font-medium">
              <span>EMI Amount</span>
              <span className="text-xl font-bold">
                ₹ {emi.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
              </span>
            </div>

            <Button
              onClick={handleApplyLoan}
              className="w-full mt-4 bg-white text-[#F46300] hover:bg-orange-50 font-bold py-6 text-lg rounded-xl shadow-sm transition-all"
              type="button"
            >
              Apply Now
            </Button>

            <p className="text-xs opacity-75 text-center mt-2">*This is an indicative amount and may vary based on internal policies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
