"use client";

import DoubleRing from "@/components/ui/DoubleRing";
import FloatingDot from "@/components/ui/FloatingDot";

export default function BackgroundEffects() {
    return (
        <>
            {/* Base gradient mesh */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 60% at 60% 50%, rgba(109,40,217,0.06) 0%, transparent 60%),
                        radial-gradient(ellipse 40% 40% at 90% 10%, rgba(196,181,253,0.12) 0%, transparent 50%),
                        radial-gradient(ellipse 30% 30% at 10% 90%, rgba(109,40,217,0.05) 0%, transparent 50%),
                        #ffffff
                    `,
                }}
            />

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(109,40,217,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    maskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 25%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 60% 50%, black 25%, transparent 85%)",
                    animation: "dotGridMove 20s linear infinite",
                }}
            />

            {/* Animated Orbs */}
            <div className="absolute pointer-events-none rounded-full" style={{ right: "5%", top: "10%", width: "420px", height: "420px", background: "radial-gradient(circle, rgba(109,40,217,0.15) 0%, rgba(109,40,217,0.04) 50%, transparent 70%)", filter: "blur(50px)", animation: "orbFloat1 8s ease-in-out infinite" }} />
            <div className="absolute pointer-events-none rounded-full" style={{ right: "20%", bottom: "10%", width: "280px", height: "280px", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", filter: "blur(35px)", animation: "orbFloat2 6s ease-in-out infinite" }} />
            <div className="absolute pointer-events-none rounded-full" style={{ left: "5%", top: "30%", width: "180px", height: "180px", background: "radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)", filter: "blur(25px)", animation: "orbFloat3 7s ease-in-out infinite" }} />

            {/* Double Rings - All 15 pairs from original */}
            {ringPairs.map((pair, idx) => (
                <DoubleRing key={idx} {...pair} />
            ))}

            {/* Floating Dots - All dots from original */}
            {floatingDots.map((dot, idx) => (
                <FloatingDot key={idx} {...dot} />
            ))}

            <style>{keyframes}</style>
        </>
    );
}

// Complete ring pairs configuration (all 15 from your original code)
const ringPairs = [
    // Pair 1
    { left: "5%", top: "10%", size1: 45, size2: 70, color: "primary" as const, delay1: 0, delay2: 0.4 },
    // Pair 2
    { right: "8%", top: "15%", size1: 40, size2: 62, color: "accent" as const, delay1: 0.2, delay2: 0.6 },
    // Pair 3
    { left: "50%", top: "42%", size1: 38, size2: 58, color: "secondary" as const, delay1: 0.1, delay2: 0.5 },
    // Pair 4
    { right: "15%", top: "50%", size1: 42, size2: 65, color: "accent" as const, delay1: 0.15, delay2: 0.55 },
    // Pair 5
    { left: "8%", bottom: "18%", size1: 36, size2: 56, color: "primary" as const, delay1: 0.3, delay2: 0.7 },
    // Pair 6
    { right: "10%", bottom: "15%", size1: 44, size2: 68, color: "accent" as const, delay1: 0.25, delay2: 0.65 },
    // Pair 7
    { left: "35%", top: "55%", size1: 32, size2: 50, color: "secondary" as const, delay1: 0.05, delay2: 0.45 },
    // Pair 8
    { left: "45%", top: "5%", size1: 35, size2: 55, color: "accent" as const, delay1: 0.12, delay2: 0.52 },
    // Pair 9
    { left: "30%", bottom: "8%", size1: 38, size2: 60, color: "primary" as const, delay1: 0.18, delay2: 0.58 },
    // Pair 10
    { right: "22%", top: "30%", size1: 30, size2: 48, color: "accent" as const, delay1: 0.08, delay2: 0.48 },
    // Pair 11
    { right: "28%", top: "22%", size1: 34, size2: 52, color: "secondary" as const, delay1: 0.22, delay2: 0.62 },
    // Pair 12
    { left: "18%", bottom: "35%", size1: 28, size2: 44, color: "accent" as const, delay1: 0.14, delay2: 0.54 },
    // Pair 13
    { left: "50%", top: "75%", size1: 33, size2: 51, color: "primary" as const, delay1: 0.28, delay2: 0.68 },
    // Pair 14
    { left: "2%", top: "25%", size1: 37, size2: 57, color: "accent" as const, delay1: 0.35, delay2: 0.75 },
    // Pair 15
    { right: "4%", bottom: "40%", size1: 41, size2: 63, color: "secondary" as const, delay1: 0.42, delay2: 0.82 },
];

// Complete floating dots configuration (all from original)
const floatingDots = [
    { right: "12%", top: "18%", size: 5, color: "primary" as const, opacity: 0.5, delay: 0 },
    { left: "8%", top: "68%", size: 5, color: "primary" as const, opacity: 0.2, delay: 0 },
    { right: "28%", top: "72%", size: 4, color: "primary" as const, opacity: 0.4, delay: 1 },
    { right: "55%", bottom: "20%", size: 4, color: "accent" as const, opacity: 0.4, delay: 0.7 },
    { left: "42%", top: "25%", size: 3, color: "primary" as const, opacity: 0.35, delay: 2 },
    { left: "15%", bottom: "40%", size: 4, color: "accent" as const, opacity: 0.45, delay: 0.3 },
    { right: "12%", bottom: "45%", size: 3, color: "primary" as const, opacity: 0.5, delay: 1.2 },
    { left: "60%", bottom: "15%", size: 5, color: "accent" as const, opacity: 0.3, delay: 0.5 },
];

const keyframes = `
    @keyframes orbFloat1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(-20px, 15px) scale(1.05); }
        66% { transform: translate(10px, -20px) scale(0.97); }
    }
    @keyframes orbFloat2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(-15px, -20px) scale(1.08); }
    }
    @keyframes orbFloat3 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(10px, -15px); }
    }
    @keyframes smallRingPulse {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.15); opacity: 0.2; }
    }
    @keyframes dotFloat {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
        50% { transform: translateY(-8px) scale(1.2); opacity: 0.7; }
    }
    @keyframes dotGridMove {
        from { background-position: 0 0; }
        to { background-position: 28px 28px; }
    }
`;