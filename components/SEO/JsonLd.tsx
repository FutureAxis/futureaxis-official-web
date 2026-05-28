'use client';

export default function JsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Future Axis Digital",
                    "url": "https://futureaxisdigital.com",
                    "logo": "https://futureaxisdigital.com/logo.png",
                    "description": "Web development, social media marketing, and IT consulting services",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "1/21 Dennis Street",
                        "addressLocality": "Clayton",
                        "addressRegion": "VIC",
                        "postalCode": "3168",
                        "addressCountry": "AU"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+61411749417",
                        "contactType": "customer service",
                        "email": "info@futureaxisdigital.com"
                    },
                    "sameAs": [
                        "https://www.facebook.com/futureaxisdigital",
                        "https://www.instagram.com/futureaxisdigital",
                        "https://www.linkedin.com/company/futureaxisdigital"
                    ]
                })
            }}
        />
    );
}