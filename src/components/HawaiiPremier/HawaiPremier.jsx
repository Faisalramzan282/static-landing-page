import React from "react";
import IntroVedio from "./IntroVedio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const HawaiPremier = () => {
  return (
    <div className="flex">
    {/* 60 percent width */}
    <div className="w-3/5 mx-10">
      <div className="text-4xl font-bold">
        <p>
          Hawaii's Premier concierge E-health
          <span className="text-orange-500">Service</span>
        </p>
      </div>
      <div className="text-xl my-4">
        <p>
          Your family's one stop-shop for personalized{" "}
          <span className="text-sky-500">Healthcare.</span>
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor
          morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec
          pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim
          cras vivamus consequat facilisi bibendum. In id in nulla euismod
        </p>
      </div>
      <div className="mt-5 flex flex-grow items-center relative">
        <input
          type="search"
          name="search condition"
          id="search condition"
          className="border border-gray-400 rounded-lg px-10 py-3 focus:outline-none flex flex-grow"
          placeholder="Search a medical condition"
        />
          <FontAwesomeIcon icon={faSearch} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 ml-3" />
        <button className="bg-green-500 text-white rounded-lg px-4 py-3 ml-2 transition-transform hover:scale-105 ">
          Get started
        </button>
      </div>
    </div>
    {/* 40 percent width */}
    <div className="w-2/5 mx-4">
      <IntroVedio />
    </div>
  </div>
  
  );
};
export default HawaiPremier;