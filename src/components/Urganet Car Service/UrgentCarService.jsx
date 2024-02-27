import React from "react";
import ambulance from "../../assets/ambulance.png";
const UrgentCarService = () => {
  return (
    <div className="w-4/5 mx-auto flex">
        <div>
        <img src={ambulance} alt="ambulance" />
        </div>
        <div className="flex items-center mx-auto">
          <div>
          <p className="text-2xl font-medium">
          Urgent Care Service
          </p>
          <p className="text-xs py-3 font-thin">Rapid care when you need it the most. Our doctors are available to attend on urgent basis.</p>
          <button className="bg-green-500 text-white hover:cursor-pointer rounded py-2 px-8">Get Urgent Care</button>
          </div>
        </div>
    </div>
  );
};
export default UrgentCarService;
