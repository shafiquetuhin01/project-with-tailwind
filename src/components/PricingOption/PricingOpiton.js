
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";


const PricingOpiton = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4">
      <h3 className="bg-indigo-300 p-6 text-white font-bold text-2xl rounded">
        {name}
      </h3>
      <p>
        <span className="text-6xl font-bold">{price}</span>
        <span className="text-2xl font-bold text-gray-400">/mo</span>
      </p>
      <div>
        <h4 className="text-2xl text-left">Benefits:</h4>
        {
          benefits.map(benefit=><Benefit benefit={benefit}></Benefit>)
        }
      </div>
      <button className="flex items-center w-full bg-green-500 justify-center font-bold text-white rounded p-2 mt-4 hover:text-lime-600">
        Buy Now <ArrowRightIcon className="w-6 h-6 ml-2"></ArrowRightIcon>
      </button>
      
    </div>
  );
};

export default PricingOpiton;
