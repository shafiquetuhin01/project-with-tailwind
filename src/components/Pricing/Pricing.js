import React from "react";
import PricingOpiton from "../PricingOption/PricingOpiton";

const Pricing = () => {
  const pricingOption = [
    { id: 1, name: "regular", price: 20 },
    { id: 2, name: "premium", price: 40 },
    { id: 3, name: "free", price: 0 },
  ];
  return (
    <div className="bg-indigo-200 p-3 mt-3">
      <h3 className="text-6xl">Best Deal of the town</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam
        optio fuga. Totam, adipisci illo!
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {pricingOption.map((option) => (
          <PricingOpiton key={option.id} option={option}></PricingOpiton>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
