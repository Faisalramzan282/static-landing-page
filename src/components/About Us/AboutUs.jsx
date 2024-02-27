import React from "react";
import Card from "./Card";
import doctor from "../../assets/doctor.png";
import nurse from "../../assets/nurse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const AboutUs = () => {
  return (
    <div className="mx-24 flex">
      <div className="w-1/2 grid grid-cols-3">
        <div className="col-span-1"></div>
        <div className="text-center">
          <img
            src={doctor}
            alt="doctor"
            className="rounded-full w-36 h-60 top-1/2 col-span-1 mt-36"
          />
          <div className="mt-4 space-x-4">
            <FontAwesomeIcon
              className="hover-pointer"
              icon={faFacebook}
              style={{ color: "#3093df" }}
            />
            <FontAwesomeIcon
              className="hover-pointer"
              icon={faLinkedin}
              style={{ color: "#0077b5" }}
            />
            <FontAwesomeIcon
              className="hover-pointer"
              icon={faTwitter}
              style={{ color: "#0077b5" }}
            />
          </div>
          <p className="text-sm">Dr. John Doe</p>
        </div>
        <div className="text-center ">
          <img
            src={nurse}
            alt="nurse"
            className="rounded-full w-36 h-60 ml-auto mx-8 my-4 col-span-1"
          />
          <div className="mt-4 space-x-4">
            <FontAwesomeIcon
              className="hover-pointer"
              icon={faFacebook}
              style={{ color: "#3093df" }}
            />
            <FontAwesomeIcon
              className="hover-pointer"
              icon={faLinkedin}
              style={{ color: "#0077b5" }}
            />
            <FontAwesomeIcon
              className="hover-pointer"
              icon={faTwitter}
              style={{ color: "#0077b5" }}
            />
          </div>
          <p className="text-sm">Dr. Olivia Green</p>
        </div>
      </div>
      <div className="w-1/2 ml-8">
        <p className="text-3xl font-medium">
          About <span className="text-orange-500">Us</span>
        </p>
        <p className="text-xs mt-3 font-thin">
          Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor
          morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec
          pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim
          cras vivamus.
        </p>
        <p className="text-xs my-3 font-thin">
          Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor
          morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec
          pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim
          cras vivamus.
        </p>
        <div className="grid grid-cols-2 flex">
          <Card num="3650" title="Online consultations" className="flex-1 " />
          <Card num="115" title="Satisfied patients" className="flex-1 mr-4 " />
          <Card num="30" title="Doctors" className="flex-1" />
          <Card num="95" title="Staff members" className="flex-1 mr-4" />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
