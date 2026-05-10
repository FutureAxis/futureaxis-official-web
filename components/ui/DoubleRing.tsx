"use client";

interface DoubleRingProps {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    size1: number;
    size2: number;
    color: "primary" | "accent" | "secondary";
    delay1?: number;
    delay2?: number;
}

export default function DoubleRing({
                                       left,
                                       right,
                                       top,
                                       bottom,
                                       size1,
                                       size2,
                                       color,
                                       delay1 = 0,
                                       delay2 = 0.4
                                   }: DoubleRingProps) {
    const getColorStyle = () => {
        switch(color) {
            case "primary":
                return { border: "rgba(109, 40, 217", lightBorder: "rgba(109, 40, 217" };
            case "accent":
                return { border: "rgba(195, 179, 255", lightBorder: "rgba(195, 179, 255" };
            case "secondary":
                return { border: "rgba(48, 36, 81", lightBorder: "rgba(48, 36, 81" };
            default:
                return { border: "rgba(109, 40, 217", lightBorder: "rgba(109, 40, 217" };
        }
    };

    const colorStyle = getColorStyle();
    const marginOffset = (size2 - size1) / 2;

    return (
        <div className="absolute pointer-events-none" style={{ left, right, top, bottom }}>
            <div
                className="absolute rounded-full"
                style={{
                    width: `${size1}px`,
                    height: `${size1}px`,
                    border: `1px solid ${colorStyle.border} 0.55)`,
                    animation: `smallRingPulse 3s ease-in-out infinite ${delay1}s`,
                }}
            />
            <div
                className="absolute rounded-full"
                style={{
                    width: `${size2}px`,
                    height: `${size2}px`,
                    marginLeft: `-${marginOffset}px`,
                    marginTop: `-${marginOffset}px`,
                    border: `1px solid ${colorStyle.lightBorder} 0.35)`,
                    animation: `smallRingPulse 3s ease-in-out infinite ${delay2}s`,
                }}
            />
        </div>
    );
}