import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const plansData = [
  {
    name: "Starter Pack",
    minCapital: "$1,000",
    minReturns: "5-25%",
    expectedDrawdown: "15-30%",
    joiningFee: "$49",
    monthlyFee: "20% from profits (not equity)",
    dedicatedSupport: "Not Available",
    features: [
      "Minimum Capital: $1,000",
      "Potential Monthly Returns: 5-25%",
      "Expected Drawdown: 15-30%",
      "Initial Joining Fee: $49",
      "Monthly Fee: 20% of Profits (Not Equity)",
    ],
    missingFeatures: ["Dedicated Support"],
    buttonText: "Get Started",
  },
  {
    name: "Advance Pack",
    minCapital: "$5,000",
    minReturns: "10-30%",
    expectedDrawdown: "10-25%",
    joiningFee: "$99",
    monthlyFee: "20% from profits (not equity)",
    dedicatedSupport: "24/5 Support",
    features: [
      "Minimum Capital: $5,000",
      "Potential Monthly Returns: 10-30%",
      "Expected Drawdown: 10-25%",
      "Initial Joining Fee: $99",
      "Monthly Fee: 20% of Profits (Not Equity)",
      "24/5 Dedicated Support",
    ],
    missingFeatures: [],
    highlight: true,
    buttonText: "Upgrade Now",
  },
  {
    name: "Enterprise Pack",
    minCapital: "Contact Us",
    minReturns: "Contact Us",
    expectedDrawdown: "Contact Us",
    joiningFee: "Contact Us",
    monthlyFee: "Contact Us",
    dedicatedSupport: "Contact Us",
    contactEmail: "support@forex-radar.com",
    features: [
      "Includes all features of the Advance Pack",
      "+ 15 Additional Advanced Features",
      "Priority Direct Support",
      "Custom Strategy Consultation",
      "Early Access to New Tools",
    ],
    missingFeatures: [],
    buttonText: "Contact Us",
  },
];

const PricingPage = () => {
  return (
    <section className="py-40 bg-black text-white" id="pricing">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Unlock Your Trading Potential
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Choose a plan that aligns with your investment goals. Transparent fees,
          potential growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansData.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between h-full p-8 rounded-2xl bg-[#121214] border border-[#2D2D2D] shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out ${
                plan.highlight ? "border-[#686DF7]" : ""
              }`}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-10">{plan.name}</h3>
                {/* {plan.name !== "Enterprise Pack" && (
                  <p className="text-sm text-gray-400 mb-4">
                    Minimum Capital: <span className="font-semibold">{plan.minCapital}</span>
                    <br />
                    Potential Returns/Month: <span className="font-semibold">{plan.minReturns}</span>
                    <br />
                    Expected Drawdown: <span className="font-semibold">{plan.expectedDrawdown}</span>
                  </p>
                )} */}
                <p className="text-3xl font-bold mb-4">
                  Joining Fee: <span className="text-[#705CCF]">{plan.joiningFee}</span>
                </p>
                {/* {plan.name !== "Enterprise Pack" && (
                  <p className="text-sm text-gray-400 mb-6">
                    Monthly Fee: <span className="font-semibold">{plan.monthlyFee}</span>
                  </p>
                )} */}

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <FaCheckCircle className="mt-0.5 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                  {plan.missingFeatures.length > 0 && (
                    <li className="flex items-start text-sm text-gray-600 line-through">
                      <FaTimesCircle className="mt-0.5 mr-2 text-gray-600" />
                      Dedicated Support
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-8">
                {plan.contactEmail ? (
                  <a href={`mailto:${plan.contactEmail}`} className="w-full">
                    <button className="w-full py-3 font-medium bg-[#1F1F1F] text-white rounded-lg border border-gray-700 hover:bg-[#2A2A2A] transition duration-300">
                      {plan.buttonText}
                    </button>
                  </a>
                ) : (
                  <a href="#register" className="w-full">
                    <button className="w-full py-3 font-medium bg-[#1F1F1F] text-white rounded-lg border border-gray-700 hover:bg-[#2A2A2A] transition duration-300">
                      {plan.buttonText}
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;