export class ApiError extends Error {
    status: number;
    data: any;

    constructor(status: number, message: string, data: any = null) {
        super(message);
        this.status = status;
        this.data = data;
        this.name = 'ApiError';
    }
}

class ApiClient {
    private static instance: ApiClient;
    private baseURL: string;

    private constructor() {
        this.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
    }

    public static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    private getAuthToken(usePartnerToken: boolean = false): string | null {
        if (typeof window !== 'undefined') {
            return usePartnerToken
                ? localStorage.getItem('partnerAuthToken')
                : localStorage.getItem('authToken');
        }
        return null;
    }

    public setToken(token: string, isPartner: boolean = false): void {
        if (typeof window !== 'undefined') {
            if (isPartner) {
                localStorage.setItem('partnerAuthToken', token);
            } else {
                localStorage.setItem('authToken', token);
            }
        }
    }

    public clearTokens(): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('authToken');
            localStorage.removeItem('partnerAuthToken');
            localStorage.removeItem('partnerData');
        }
    }

    private async fetchWithInterception(
        endpoint: string,
        options: RequestInit = {},
        usePartnerToken: boolean = false
    ): Promise<any> {
        const url = new URL(`${this.baseURL}${endpoint}`);
        const token = this.getAuthToken(usePartnerToken);

        // Setup Headers
        const headers = new Headers(options.headers || {});

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        // Handle JSON vs FormData
        if (options.body && !(options.body instanceof FormData)) {
            if (!headers.has('Content-Type')) {
                headers.set('Content-Type', 'application/json');
            }
            if (typeof options.body !== 'string') {
                options.body = JSON.stringify(options.body);
            }
        }

        // Append Attribution tracking if registering
        if (typeof window !== 'undefined' && endpoint.includes('/register')) {
            const attributionStr = localStorage.getItem('lin_attribution');
            if (attributionStr) {
                try {
                    const attribution = JSON.parse(attributionStr);
                    if (attribution.partnerId) {
                        url.searchParams.append('ref', attribution.partnerId);
                    }
                } catch (e) {
                    console.error('Failed to parse attribution tracking');
                }
            }
        }

        const config: RequestInit = {
            ...options,
            headers,
        };

        try {
            const response = await fetch(url.toString(), config);

            let data;
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            if (!response.ok) {
                throw new ApiError(
                    response.status,
                    data?.message || data?.error || 'An error occurred during the request',
                    data
                );
            }

            return data;
        } catch (error: any) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(500, error.message || 'Network error');
        }
    }

    public async get<T = any>(endpoint: string, usePartnerToken = false): Promise<T> {
        return this.fetchWithInterception(endpoint, { method: 'GET' }, usePartnerToken);
    }

    public async post<T = any>(endpoint: string, body: any, usePartnerToken = false): Promise<T> {
        return this.fetchWithInterception(endpoint, { method: 'POST', body }, usePartnerToken);
    }

    public async put<T = any>(endpoint: string, body: any, usePartnerToken = false): Promise<T> {
        return this.fetchWithInterception(endpoint, { method: 'PUT', body }, usePartnerToken);
    }

    public async delete<T = any>(endpoint: string, usePartnerToken = false): Promise<T> {
        return this.fetchWithInterception(endpoint, { method: 'DELETE' }, usePartnerToken);
    }
}

export const apiClient = ApiClient.getInstance();
