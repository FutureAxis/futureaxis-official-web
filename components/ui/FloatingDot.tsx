"use client";

interface FloatingDotProps {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    size: number;
    color: "primary" | "accent";
    opacity: number;
    delay?: number;
}

export default function FloatingDot({
                                        left,
                                        right,
                                        top,
                                        bottom,
                                        size,
                                        color,
                                        opacity,
                                        delay = 0
                                    }: FloatingDotProps) {
    return (
        <div
            className="absolute pointer-events-none rounded-full"
            style={{
                left,
                right,
                top,
                bottom,
                width: `${size}px`,
                height: `${size}px`,
                background: `var(--${color})`,
                opacity,
                animation: `dotFloat 3s ease-in-out infinite ${delay}s`,
            }}
        />
    );
}