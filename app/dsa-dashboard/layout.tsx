import { Suspense } from "react";

export default function DSADashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-orange-600 border-t-transparent rounded-full animate-spin" />
                </div>
            }>
                {children}
            </Suspense>
        </main>
    );
}
