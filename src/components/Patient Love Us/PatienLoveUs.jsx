import React from "react";
import PatientLove from "../../assets/patient-love.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './PatientLoveUse.css';
const PatienLoveUse = () => {
  return (
    <div>
      <div>
        <p className="text-3xl font-medium text-center mb-6">
          Patient Love <span className="text-orange-500">Us</span>
        </p>
      </div>
      <div>
        <img src={PatientLove} alt="patient-love" />
        <div>
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
          <div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Luctus orci est est
              porttitor morbi a dui. Sagittis tellus enim lectus auctor
              condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim
              ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum.
              In id in nulla euismod.
            </p>
          </div>
          <div>
            <p className="relative pl-12">Melinda Maine</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatienLoveUse;
