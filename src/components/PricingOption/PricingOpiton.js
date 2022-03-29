import React from "react";

const PricingOpiton = (props) => {
  const { name, price } = props.option;
  return (
    <div className="bg-white p-4">
      <h3 className="bg-indigo-300 p-6 text-white font-bold text-2xl rounded">
        {name}
      </h3>
      <span className="text-6xl font-bold">{price}</span>
      <span className="text-2xl font-bold text-gray-400">/mo</span>
    </div>
  );
};

export default PricingOpiton;
