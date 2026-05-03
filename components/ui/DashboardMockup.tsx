"use client";

import {
    BsGrid1X2Fill,
    BsHouseFill,
    BsPeopleFill,
    BsBarChartFill,
    BsBookmarkFill,
    BsFileTextFill,
    BsGearFill,
    BsBellFill,
    BsList, // Added for mobile menu feel
} from "react-icons/bs";

const sidebarLinks = [
    { icon: BsGrid1X2Fill, label: "Dashboard", active: true },
    { icon: BsHouseFill, label: "Overview", active: false },
    { icon: BsPeopleFill, label: "Clients", active: false },
    { icon: BsBarChartFill, label: "Analytics", active: false },
    { icon: BsBookmarkFill, label: "Bookmarks", active: false },
    { icon: BsFileTextFill, label: "Reports", active: false },
    { icon: BsGearFill, label: "Settings", active: false },
];

const activityUsers = [
    { name: "John Smith", role: "New client", color: "#6D28D9" },
    { name: "Mike Johnson", role: "Updated task", color: "#8B5CF6" },
    { name: "Maria Santos", role: "Project done", color: "#C4B5FD" },
];

export default function DashboardMockup() {
    return (
        <div className="relative w-full h-full pb-10 md:pb-[80px] md:pl-[40px] px-4 md:px-0">
            {/* MAIN DASHBOARD CARD */}
            <div
                className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col md:flex-row"
                style={{
                    background: "#f5f4ff",
                    boxShadow: "0 24px 60px rgba(109,40,217,0.13), 0 4px 20px rgba(0,0,0,0.07)",
                    border: "1px solid rgba(196,181,253,0.25)",
                    minHeight: "500px",
                }}
            >
                {/* Sidebar - Hidden on mobile, shown on md+ */}
                <div
                    className="hidden md:flex flex-col flex-shrink-0 py-3"
                    style={{ width: "120px", background: "#1e1b4b" }}
                >
                    <div className="flex items-center gap-1.5 px-3 mb-4">
                        <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{ background: "var(--primary)" }}>
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                                <path d="M8 2L14 6V10L8 14L2 10V6L8 2Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                                <circle cx="8" cy="8" r="2" fill="white" />
                            </svg>
                        </div>
                        <span className="text-white text-[9px] font-semibold leading-tight">FutureAxis</span>
                    </div>

                    <div className="mx-3 mb-2" style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />

                    <div className="flex flex-col gap-0.5 px-2">
                        {sidebarLinks.map(({ icon: Icon, label, active }) => (
                            <div key={label} className="flex items-center gap-2 px-2 py-1.5 rounded-lg" style={{ background: active ? "rgba(109,40,217,0.45)" : "transparent", cursor: "pointer" }}>
                                <Icon size={10} color={active ? "white" : "rgba(255,255,255,0.4)"} />
                                <span className="text-[8px] font-medium" style={{ color: active ? "white" : "rgba(255,255,255,0.4)" }}>{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto flex flex-col items-center gap-2 px-2 pb-1">
                        <BsBellFill size={10} color="rgba(255,255,255,0.35)" />
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[7px] font-bold text-white" style={{ background: "var(--primary)" }}>FA</div>
                    </div>
                </div>

                {/* Mobile Header - Only visible on small screens */}
                <div className="flex md:hidden items-center justify-between p-4 bg-[#1e1b4b] text-white">
                    <div className="flex items-center gap-2">
                        <BsList size={20} />
                        <span className="text-xs font-bold uppercase tracking-wider">FutureAxis</span>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] bg-purple-600">FA</div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-lg md:text-sm font-bold" style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}>
                            Dashboard
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="hidden sm:flex gap-1">
                                {["#e5e7eb", "#d1d5db"].map((c, i) => (
                                    <div key={i} className="w-5 h-4 rounded" style={{ background: c }} />
                                ))}
                            </div>
                            <div className="px-3 py-1.5 md:py-1 rounded text-xs font-semibold text-white shadow-lg shadow-purple-200" style={{ background: "var(--primary)" }}>
                                + Add New
                            </div>
                        </div>
                    </div>

                    {/* Stats cards row - Grid adjusts from 1 col (mobile) to 3 col (desktop) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                        {[
                            { label: "Total Users", val: "25.6K", change: "+15.4%", sub: "+25.4%" },
                            { label: "Revenue", val: "$86.4K", change: "+11.1%", sub: "+25.4%" },
                            { label: "Conversion", val: "12.3%", change: "+5.2%", sub: "+8.1%" },
                        ].map((s) => (
                            <div key={s.label} className="rounded-xl p-4 md:p-3" style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                                <div className="flex items-center justify-between mb-1">
                                    <div className="w-6 h-6 md:w-5 md:h-5 rounded flex items-center justify-center" style={{ background: "rgba(109,40,217,0.12)" }}>
                                        <div className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
                                    </div>
                                    <span className="text-[10px] md:text-[8px]" style={{ color: "#d1d5db" }}>✕</span>
                                </div>
                                <p className="text-[11px] md:text-[9px] mb-0.5" style={{ color: "var(--paragraph)" }}>{s.label}</p>
                                <p className="text-xl md:text-lg font-bold leading-tight" style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}>
                                    {s.val}
                                    <span className="text-[10px] md:text-[9px] font-medium ml-1" style={{ color: "#10b981" }}>{s.change}</span>
                                </p>
                                <p className="text-[9px] md:text-[7px] mt-0.5 font-medium" style={{ color: "#ef4444" }}>↓ {s.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* BIG GRAPH SECTION - Scrollable on very small screens */}
                    <div className="w-full rounded-xl p-4 mb-4 overflow-x-auto" style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                        <div className="min-w-[500px] md:min-w-0">
                            <div className="flex justify-between items-center mb-3">
                                <div>
                                    <p className="text-xs font-semibold" style={{ color: "var(--heading)" }}>Revenue Overview</p>
                                    <p className="text-[9px]" style={{ color: "var(--paragraph)" }}>Monthly performance vs previous period</p>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[8px] flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }}></span>This Year</span>
                                    <span className="text-[8px] flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#c4b5fd" }}></span>Last Year</span>
                                </div>
                            </div>
                            <svg viewBox="0 0 800 280" className="w-full h-[180px] md:h-[220px]">
                                <defs>
                                    <linearGradient id="mainGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgba(109,40,217,0.3)" />
                                        <stop offset="100%" stopColor="rgba(109,40,217,0)" />
                                    </linearGradient>
                                    <linearGradient id="secondaryGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgba(196,181,253,0.25)" />
                                        <stop offset="100%" stopColor="rgba(196,181,253,0)" />
                                    </linearGradient>
                                </defs>
                                {[0, 60, 120, 180, 240].map(y => (
                                    <line key={y} x1="50" y1={240 - y} x2="780" y2={240 - y} stroke="#f0edff" strokeWidth="1" strokeDasharray="4" />
                                ))}
                                {["$0", "$50K", "$100K", "$150K", "$200K"].map((label, i) => (
                                    <text key={i} x="40" y={240 - (i * 60) + 3} textAnchor="end" fontSize="9" fill="#a5b4fc">{label}</text>
                                ))}
                                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                                    <text key={month} x={65 + (i * 60)} y="260" textAnchor="middle" fontSize="9" fill="#a5b4fc">{month}</text>
                                ))}
                                <path d="M65 200 L125 185 L185 195 L245 170 L305 160 L365 175 L425 150 L485 140 L545 130 L605 135 L665 120 L725 110 L780 100 L780 240 L65 240 Z" fill="url(#secondaryGrad)" />
                                <path d="M65 200 L125 185 L185 195 L245 170 L305 160 L365 175 L425 150 L485 140 L545 130 L605 135 L665 120 L725 110 L780 100" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M65 180 L125 160 L185 170 L245 135 L305 120 L365 140 L425 100 L485 90 L545 75 L605 85 L665 60 L725 50 L780 40 L780 240 L65 240 Z" fill="url(#mainGrad)" />
                                <path d="M65 180 L125 160 L185 170 L245 135 L305 120 L365 140 L425 100 L485 90 L545 75 L605 85 L665 60 L725 50 L780 40" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                {[65, 125, 185, 245, 305, 365, 425, 485, 545, 605, 665, 725].map((x, i) => (
                                    <circle key={i} cx={x} cy={[180, 160, 170, 135, 120, 140, 100, 90, 75, 85, 60, 50][i]} r="3.5" fill="white" stroke="var(--primary)" strokeWidth="2" />
                                ))}
                                <rect x="720" y="20" width="55" height="18" rx="6" fill="var(--primary)" />
                                <text x="747" y="32" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">+32.8%</text>
                                <polygon points="747,38 742,44 752,44" fill="var(--primary)" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom row: Analytics card + Activity */}
                    <div className="flex flex-col sm:flex-row gap-3 flex-1 min-h-0">
                        <div className="flex-1 rounded-xl p-3" style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                            <p className="text-[9px] font-semibold mb-1" style={{ color: "var(--heading)" }}>Analytics Growth</p>
                            <p className="text-xl font-bold mb-0.5" style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}>+25.4%</p>
                            <p className="text-[8px] mb-2" style={{ color: "var(--paragraph)" }}>vs last month</p>
                            <svg viewBox="0 0 200 45" className="w-full h-[45px]">
                                <defs><linearGradient id="miniAreaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(109,40,217,0.2)" /><stop offset="100%" stopColor="rgba(109,40,217,0)" /></linearGradient></defs>
                                <path d="M0 36 C15 32, 30 35, 45 28 C60 21, 75 30, 90 23 C105 16, 120 25, 135 18 C150 11, 170 20, 200 8 L200 45 L0 45 Z" fill="url(#miniAreaGrad)" />
                                <path d="M0 36 C15 32, 30 35, 45 28 C60 21, 75 30, 90 23 C105 16, 120 25, 135 18 C150 11, 170 20, 200 8" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className="rounded-xl p-3 w-full sm:w-[130px] flex-shrink-0" style={{ background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                            <p className="text-[9px] font-semibold mb-2" style={{ color: "var(--heading)" }}>Recent Activity</p>
                            <div className="flex flex-row sm:flex-col gap-3 sm:gap-2 overflow-x-auto sm:overflow-visible">
                                {activityUsers.map((u) => (
                                    <div key={u.name} className="flex items-center gap-1.5 flex-shrink-0">
                                        <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[6px] font-bold text-white" style={{ background: u.color }}>{u.name[0]}</div>
                                        <div>
                                            <p className="text-[7px] font-semibold leading-tight" style={{ color: "var(--heading)" }}>{u.name}</p>
                                            <p className="text-[6px]" style={{ color: "var(--paragraph)" }}>{u.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FLOATING CARDS - Hidden on mobile/tablet to keep UI clean, visible on md+ */}
            <div
                className="hidden md:block absolute rounded-2xl p-5"
                style={{
                    bottom: "-20px",
                    left: "0px",
                    width: "220px",
                    background: "white",
                    boxShadow: "0 20px 50px rgba(109,40,217,0.18), 0 6px 20px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(196,181,253,0.25)",
                    zIndex: 10,
                }}
            >
                <p className="text-sm mb-1 font-semibold" style={{ color: "var(--paragraph)" }}>Analytics Growth</p>
                <p className="text-3xl font-bold mb-1" style={{ color: "var(--heading)" }}>+25.4%</p>
                <p className="text-[11px] mb-3" style={{ color: "var(--paragraph)" }}>vs last month</p>
                <svg viewBox="0 0 200 50" className="w-full h-[50px]">
                    <defs><linearGradient id="floatAreaGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(109,40,217,0.25)" /><stop offset="100%" stopColor="rgba(109,40,217,0)" /></linearGradient></defs>
                    <path d="M0 40 C15 35, 30 38, 45 30 C60 22, 75 32, 90 24 C105 16, 120 26, 135 18 C150 10, 170 22, 200 8 L200 50 L0 50 Z" fill="url(#floatAreaGrad)" />
                    <path d="M0 40 C15 35, 30 38, 45 30 C60 22, 75 32, 90 24 C105 16, 120 26, 135 18 C150 10, 170 22, 200 8" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>

            <div
                className="hidden md:block absolute rounded-2xl p-3"
                style={{
                    bottom: "-40px",
                    right: "0px",
                    width: "200px",
                    background: "white",
                    boxShadow: "0 20px 50px rgba(109,40,217,0.15), 0 6px 20px rgba(0,0,0,0.08)",
                    border: "1px solid rgba(196,181,253,0.25)",
                    zIndex: 10,
                }}
            >
                <p className="text-sm mb-1 font-semibold" style={{ color: "var(--paragraph)" }}>UI/UX Score</p>
                <p className="text-3xl font-bold" style={{ color: "var(--heading)" }}>98%</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "#10b981" }}>Excellent</p>
                <div className="flex justify-end">
                    <svg viewBox="0 0 80 80" style={{ width: "60px", height: "60px" }}>
                        <circle cx="40" cy="40" r="32" fill="none" stroke="#f3f0ff" strokeWidth="8" />
                        <circle cx="40" cy="40" r="32" fill="none" stroke="var(--primary)" strokeWidth="8" strokeDasharray="197 10" strokeLinecap="round" style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }} />
                        <text x="40" y="45" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--heading)">98%</text>
                    </svg>
                </div>
            </div>
        </div>
    );
}