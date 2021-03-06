import React from "react";
import PricingOpiton from "../PricingOption/PricingOpiton";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "regular",
      price: 20,
      benefits: [
        "Everything on regular",
        "unlimited deals",
        "localized deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
    {
      id: 2,
      name: "premium",
      price: 40,
      benefits: [
        "Everything on premium",
        "unlimited deals",
        "localized deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
    {
      id: 3,
      name: "free",
      price: 0,
      benefits: [
        "Everything on free",
        "unlimited deals",
        "localized deals",
        "crazy deals",
        "fantastic deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-200 p-3 mt-3">
      <h3 className="text-6xl mb-6">Best Deal of the town</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {pricingOption.map((option) => (
          <PricingOpiton key={option.id} option={option}></PricingOpiton>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
