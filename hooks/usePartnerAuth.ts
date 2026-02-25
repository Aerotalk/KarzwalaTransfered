import { useState } from 'react';
import { apiClient, ApiError } from '../lib/api';

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
            const response = await apiClient.post('/api/partners/login', payload);
            if (response.token) {
                apiClient.setToken(response.token, true); // true indicates partnerToken
                if (typeof window !== 'undefined') {
                    localStorage.setItem('partnerData', JSON.stringify(response.partner || {}));
                }
            }
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to login partner');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const requestPartnerOtp = async (payload: PartnerOtpRequestPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.post('/api/partners/login/request-otp', payload);
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to request partner OTP');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const verifyPartnerOtp = async (payload: PartnerOtpVerifyPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.post('/api/partners/login/verify-otp', payload);
            if (response.token) {
                apiClient.setToken(response.token, true);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('partnerData', JSON.stringify(response.partner || {}));
                }
            }
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to verify partner OTP');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const fetchPartnerDashboard = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // usePartnerToken = true parameter passed to getter
            const response = await apiClient.get('/api/partners/dashboard', true);
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to load partner dashboard');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const generateTrackingLink = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.get('/api/partners/link', true);
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to generate tracking link');
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
