import React from "react";
import PatientLove from "../../assets/patient-love.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./PatientLoveUse.css";
const PatienLoveUse = () => {
  return (
    <div>
      <div>
        <p className="text-3xl font-medium text-center mb-6">
          Patient Love <span className="text-orange-500">Us</span>
        </p>
      </div>
      <div className="flex ">
        <img src={PatientLove} alt="patient-love" />
        <div className="m-5">
          <div className="flex justify-between items-center">
            <div>
              <p>Awesome service</p>
            </div>
            <div class="flex space-x-1 items-center">
              <FontAwesomeIcon icon={faStar} className="text-sky-500" />
              <FontAwesomeIcon icon={faStar} className="text-sky-500" />
              <FontAwesomeIcon icon={faStar} className="text-sky-500" />
              <FontAwesomeIcon icon={faStar} className="text-sky-500" />
              <FontAwesomeIcon icon={faStar} className="text-sky-500" />
            </div>
          </div>
          <div>
            <p className="text-sm font-thin py-5">
              Lorem ipsum dolor sit amet consectetur. Luctus orci est est
              porttitor morbi a dui. Sagittis tellus enim lectus auctor
              condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim
              ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum.
              In id in nulla euismod.
            </p>
          </div>
          <div>
            <p className="relative pl-12 pt-4">Melinda Maine</p>
          </div>
        </div>
      </div>
      {/* for arrows */}
      <div className="flex  space-x-4 justify-center mb-6">
        <div className="arrow-container border-slate-500">
          <div className="arrow text-2xl text-slate-500">&larr;</div>
        </div>
        <div className="arrow-container">
          <div className="arrow text-2xl ">&rarr;</div>
        </div>
      </div>
    </div>
  );
};
export default PatienLoveUse;
