"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export type PartnerType = "AFFILIATE" | "DSA" | "BC" | null;

interface AuthState {
    isLoggedIn: boolean;
    isPartnerLoggedIn: boolean;
    partnerType: PartnerType;
    userInitials: string;
    dashboardPath: string;
}

export const useAuth = () => {
    const router = useRouter();
    const [authState, setAuthState] = useState<AuthState>({
        isLoggedIn: false,
        isPartnerLoggedIn: false,
        partnerType: null,
        userInitials: "",
        dashboardPath: "/dashboard",
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const authToken = localStorage.getItem("authToken");
        const partnerToken = localStorage.getItem("partnerAuthToken");
        const authUserStr = localStorage.getItem("authUser");
        const partnerDataStr = localStorage.getItem("partnerData");

        let userInitials = "";
        if (authUserStr) {
            try {
                const user = JSON.parse(authUserStr);
                const name: string = user?.name || user?.fullName || "";
                userInitials = name
                    .split(" ")
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w: string) => w[0].toUpperCase())
                    .join("");
            } catch { /* ignore */ }
        }

        let partnerType: PartnerType = null;
        let dashboardPath = "/dashboard";
        if (partnerToken && partnerDataStr) {
            try {
                const pd = JSON.parse(partnerDataStr);
                const rawType = pd?.partnerType || pd?.partner?.partnerType || null;
                if (rawType === "AFFILIATE") { partnerType = "AFFILIATE"; dashboardPath = "/affiliate-dashboard"; }
                else if (rawType === "DSA") { partnerType = "DSA"; dashboardPath = "/dsa-dashboard"; }
                else if (rawType === "BC") { partnerType = "BC"; dashboardPath = "/bc-dashboard"; }
                else if (partnerToken) { dashboardPath = "/affiliate-dashboard"; }
            } catch { /* ignore */ }
        }

        setAuthState({
            isLoggedIn: !!authToken,
            isPartnerLoggedIn: !!partnerToken,
            partnerType,
            userInitials,
            dashboardPath,
        });
    }, []);

    const logout = useCallback(() => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("authToken");
            localStorage.removeItem("authUser");
        }
        setAuthState(prev => ({ ...prev, isLoggedIn: false, userInitials: "", dashboardPath: "/dashboard" }));
        router.push("/");
    }, [router]);

    const partnerLogout = useCallback(() => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("partnerAuthToken");
            localStorage.removeItem("partnerData");
        }
        setAuthState(prev => ({ ...prev, isPartnerLoggedIn: false, partnerType: null, dashboardPath: "/dashboard" }));
        router.push("/");
    }, [router]);

    return {
        ...authState,
        logout,
        partnerLogout,
    };
};
