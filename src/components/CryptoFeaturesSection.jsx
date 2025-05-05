import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    ArrowRightLeft,       // Changed from FaExchangeAlt
    Users,             // Changed from FaWallet to FaUsers
    TrendingUp,        // Changed from FaChartBar
    Repeat,           // Changed from FaSyncAlt to FaRepeat
} from "lucide-react";
import { desc } from "framer-motion/client";

const features = [
    {
        icon: <Repeat size={28} />,
        title: "Copy Trades",
        desc: "Automatically replicate the trades of successful traders in real-time.",
    },
    {
        icon: <Users size={28} />,
        title: "EA Trading",
        desc: "Utilize expert advisors to enhance your trading strategies and automate processes.",
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Performance Tracking",
        desc: "Monitor your copy trading performance with detailed analytics and reports.",
    },
    {
        icon: <ArrowRightLeft size={28} />,
        title: "Multi-Asset Trading",
        desc: "Copy trades across various financial instruments, including forex, stocks, and crypto.",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const CopyTradingFeaturesSection = () => {
    const centerCardRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);

    useEffect(() => {
        const setColumnHeights = () => {
            if (centerCardRef.current) {
                const centerCardHeight = centerCardRef.current.offsetHeight;
                if (leftColumnRef.current) {
                    leftColumnRef.current.style.height = `${centerCardHeight}px`;
                }
                if (rightColumnRef.current) {
                    rightColumnRef.current.style.height = `${centerCardHeight}px`;
                }
            }
        };

        setColumnHeights();
        window.addEventListener("resize", setColumnHeights);
        return () => window.removeEventListener("resize", setColumnHeights);
    }, []);

    return (
        <section className=" bg-gradient-to-r from-[#181539] via-[#282454] to-[#131128] text-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl lg:text-[60px] md:text-4xl font-bold mb-4">
                    Copy Trading Features
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-12">
                    Empowering you to follow expert traders and automate your trading strategy.
                </p>

                <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-6" ref={leftColumnRef}>
                        {features.slice(0, 2).map((feature, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#1C1A3D] p-6 rounded-2xl flex flex-col items-center text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={i + 1}
                            >
                                <div className="bg-[#6C4FFC] p-3 rounded-xl mb-4">{feature.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-400">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* App Center Card */}
                    <motion.div
                        className="flex-1 flex justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        custom={3}
                        ref={centerCardRef}
                    >
                        <div className="bg-[#6C4FFC] rounded-2xl pt-8 pr-8 pl-8 pb-0 w-full max-w-md text-center relative overflow-hidden h-[460px]">
                        <h3 className="text-white text-xl font-semibold mb-4">Test Your Strategies</h3>
  <p className="text-white text-sm mb-6">
    Backtest your trading ideas with historical data and see how they could have performed. Optimize your approach.
  </p>
                            <div className="relative h-[220px] flex justify-center items-start">
                                <img
                                    src="/phone mockup.png"
                                    alt="App Interface"
                                    className="w-[240px]"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col gap-6" ref={rightColumnRef}>
                        {features.slice(2).map((feature, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#1C1A3D] p-6 rounded-2xl flex flex-col items-center text-center"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                custom={i + 3}
                            >
                                <div className="bg-[#6C4FFC] p-3 rounded-xl mb-4">{feature.icon}</div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-400">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CopyTradingFeaturesSection;
