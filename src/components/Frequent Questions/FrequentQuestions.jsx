import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const FrequentQuestions = () => {
  return (
    <div className="flex">
      <div className="w-1/2 ">
        <p className="text-3xl font-medium my-2">
          Frequently Asked <span className="text-green-500">Questions</span>
        </p>
        <p className="font-thin">
          Everything you might need to know about the medical services we
          provide and how it works.
        </p>
        <div className="flex flex-wrap gap-2 font-thin my-4">
          <button className="px-5 py-2 bg-stone-200 text-gray-600 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">
            General
          </button>
          <button className="px-5 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">
            Online consultation
          </button>
          <button className="px-5 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">
            Health services
          </button>
          <button className="px-5 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">
            Treatment options
          </button>
          <button className="px-5 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">
            Doctors
          </button>
          <button className="px-5 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">
            Staff
          </button>
          <button className="px-5 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">
            Payments
          </button>
        </div>
      </div>
      <div className="mx-16 w-1/2">
        <div className="flex justify-between">
        <p><strong>Q. Lorem ipsum dolor sit amet consteur</strong></p>
        <FontAwesomeIcon size="2x" icon={faMinus} style={{color: "#FFD43B",}} />
        </div>
        <p className="text-xs my-3 font-thin">
          Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor
          morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec
          pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim
          cras vivamus.
        </p>
        <p className="text-xs font-thin">
          Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor
          morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec
          pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim
          cras vivamus.
        </p>
        <p className="h-1 rounded w-full bg-gray-300 mt-4"></p>
        <div className="flex justify-between my-4">
        <p><strong>Q. Lorem ipsum dolor sit amet consteur</strong></p>
        <FontAwesomeIcon size="2x" icon={faPlus} style={{color: "#FFD43B",}} />
        </div>
        <p className="h-1 rounded w-full bg-gray-300"></p>
        <div className="flex justify-between my-4">
        <p><strong>Q. Lorem ipsum dolor sit amet consteur</strong></p>
        <FontAwesomeIcon size="2x" icon={faPlus} style={{color: "#FFD43B",}} />
        </div>
        <p className="h-1 rounded w-full bg-gray-300"></p>
        <div className="flex justify-between my-4">
        <p><strong>Q. Lorem ipsum dolor sit amet consteur</strong></p>
        <FontAwesomeIcon size="2x" icon={faPlus} style={{color: "#FFD43B",}} />
        </div>
      </div>
    </div>
  );
};
export default FrequentQuestions;
