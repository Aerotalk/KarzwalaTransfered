import { useState } from 'react';
import { apiClient, ApiError } from '../lib/api';

interface RequestOtpPayload {
    phoneNumber: string;
}

interface VerifyOtpPayload {
    phoneNumber: string;
    otp: string;
}

interface RegisterProfilePayload {
    name: string;
    dob: string;
    email?: string;
}

interface KycPayload {
    jobStability?: string;
    address?: string;
    loanPurpose?: string;
    [key: string]: any;
}

interface LocationPayload {
    latitude: number;
    longitude: number;
}

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const requestPhoneOtp = async (payload: RequestOtpPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.post('/api/auth/phone/request-otp', payload);
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to request OTP');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const verifyPhoneOtp = async (payload: VerifyOtpPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.post('/api/auth/phone/verify-otp', payload);
            if (response.token) {
                apiClient.setToken(response.token, false);
            }
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to verify OTP');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const registerProfile = async (payload: RegisterProfilePayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const emailToUse = payload.email || `user91${Date.now()}@loaninneed.com`;
            const response = await apiClient.post('/api/users/register', { ...payload, email: emailToUse });
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to register profile');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const submitKyc = async (payload: KycPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.post('/api/kyc', payload);
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to submit KYC');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const uploadDocuments = async (files: { salarySlips?: File[], bankStatements?: File[] }) => {
        setIsLoading(true);
        setError(null);
        try {
            const formData = new FormData();
            files.salarySlips?.forEach(file => formData.append('salarySlips', file));
            files.bankStatements?.forEach(file => formData.append('bankStatements', file));

            const response = await apiClient.post('/api/document/submit', formData);
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to upload documents');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const verifyAadhaarOtp = async (payload: { aadhaarNumber?: string, otp?: string, [key: string]: any }) => {
        // Target endpoint placeholder
        setIsLoading(true);
        setError(null);
        try {
            const response = await apiClient.post('/api/auth/aadhaar/verify-otp', payload);
            return response;
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to verify Aadhaar');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const uploadSelfieAndLocation = async (selfie: File, location: LocationPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append('selfie', selfie);

            const [selfieRes, locationRes] = await Promise.all([
                apiClient.post('/api/selfie/upload', formData),
                apiClient.post('/api/users/location', location)
            ]);

            return { selfieRes, locationRes };
        } catch (err: any) {
            setError(err instanceof ApiError ? err.message : 'Failed to upload selfie / location');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        requestPhoneOtp,
        verifyPhoneOtp,
        registerProfile,
        submitKyc,
        uploadDocuments,
        verifyAadhaarOtp,
        uploadSelfieAndLocation,
    };
};
