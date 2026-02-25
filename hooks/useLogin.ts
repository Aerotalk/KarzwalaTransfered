import { useState } from 'react';
import { apiClient, ApiError } from '../lib/api';

interface LoginOtpRequestPayload {
    phoneNumber: string;
    dob: string;
}

interface LoginOtpVerifyPayload {
    phoneNumber: string;
    otp: string;
}

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const requestLoginOtp = async (payload: LoginOtpRequestPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            // Assuming users/login checks validity and sends an OTP
            const response = await apiClient.post('/api/users/login', payload);
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to request login OTP');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const verifyLoginOtp = async (payload: LoginOtpVerifyPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.post('/api/auth/phone/verify-otp', payload);
            if (response.token) {
                apiClient.setToken(response.token, false);
            }
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to verify login OTP');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const fetchCompleteProfile = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.get('/api/users/profile/complete');
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to fetch complete profile');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        apiClient.clearTokens();
    };

    return {
        isLoading,
        error,
        requestLoginOtp,
        verifyLoginOtp,
        fetchCompleteProfile,
        logout
    };
};
