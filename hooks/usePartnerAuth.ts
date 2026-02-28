import { useState } from 'react';
import { apiClient } from '../lib/api';

interface PartnerLoginPayload {
    identifier: string; // Email or Phone
    password?: string;
}

interface PartnerOtpRequestPayload {
    phone: string;
}

interface PartnerOtpVerifyPayload {
    phone: string;
    otp: string;
}

export const usePartnerAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loginPartner = async (payload: PartnerLoginPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.loginPartner(payload.identifier, payload.password);
            return response;
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'Failed to login partner');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const requestPartnerOtp = async (payload: PartnerOtpRequestPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.requestPartnerLoginOtp(payload.phone);
            return response;
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'Failed to request partner OTP');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const verifyPartnerOtp = async (payload: PartnerOtpVerifyPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.verifyPartnerLoginOtp(payload.phone, payload.otp);
            return response;
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'Failed to verify partner OTP');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPartnerDashboard = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.getPartnerDashboard();
            return response;
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'Failed to load partner dashboard');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const generateTrackingLink = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.getPartnerReferralLink();
            return response;
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'Failed to generate tracking link');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        loginPartner,
        requestPartnerOtp,
        verifyPartnerOtp,
        fetchPartnerDashboard,
        generateTrackingLink
    };
};
