interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    position: "bottom-left" | "bottom-right";
    className?: string;
}

export default function InfoCard({ icon, title, description, position, className = "" }: InfoCardProps) {
    const positionStyles = {
        "bottom-left": "left-[-50px] bottom-4 sm:bottom-6 lg:bottom-[-20px] translate-x-0 md:-translate-x-2",
        "bottom-right": "right-[-10px] bottom-4 sm:bottom-6 lg:bottom-[-50px] translate-x-0 md:translate-x-2",
    };

    return (
        <div
            data-animate
            className={`absolute z-20 w-[180px] sm:w-[220px] lg:w-[240px] bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-lg border border-[#E8E0FF] hover:shadow-xl transition-all duration-300 ${positionStyles[position]} ${className}`}
        >
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#F3EFFE] flex items-center justify-center">
                    {icon}
                </div>
                <h3 className="font-bold text-[var(--heading)] text-xs sm:text-sm lg:text-base">{title}</h3>
            </div>
            <p className="text-[10px] sm:text-xs text-[var(--paragraph)] leading-relaxed">
                {description}
            </p>
        </div>
    );
}