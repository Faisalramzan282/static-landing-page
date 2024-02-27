import React from "react";
import Card from "./Card";
import VisitAndSchedule from '../../assets/visitAndSchedule.png';
import Pay from '../../assets/pay.png';
import Consult from '../../assets/consult.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const HowIsWork = ()=>{
     return (
          <div className="md:mx-14 mx-4">
          <div className="text-center py-5 text-2xl font-medium">
            <p>How it <span className="text-green-500">works</span></p>
          </div>
          <div className="flex gap-6">
          <div className="flex-1">
            <Card pic={VisitAndSchedule} step="Step 1" title="Visit & Schedule" description="Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus." />
          </div>
          <div className="flex-1">
            <Card pic={Pay} step="Step 2" title="Pay & Confirm" description="Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus." />
          </div>
          <div className="flex-1">
            <Card pic={Consult} step="Step 3" title="Consult" description="Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus." />
          </div>
          </div>
          <div className="rounded-lg text-center bg-sky-500 py-4 w-full mt-8 flex items-center justify-center">
               <button className="text-white font-medium ">Get started</button>
               <FontAwesomeIcon className=" bg-green-500 ml-4 p-2 hover:cursor-pointer" icon={faArrowRight} style={{ color: "#dbdbdc" }} />
          </div>
        </div>
     );
}
export default HowIsWork; 