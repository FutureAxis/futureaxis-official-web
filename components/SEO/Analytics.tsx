'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

export default function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        // Add Google Analytics script
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
            window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');

        // Track page views
        if (pathname) {
            gtag('config', 'G-XXXXXXXXXX', {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return null;
}