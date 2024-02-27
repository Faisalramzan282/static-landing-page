import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const Card = ({num, title})=>{
      return(
           <div className=" mr-6 mb-6 text-center">
                <p className="text-xl py-4 ">{num}
                <FontAwesomeIcon icon={faPlus} style={{ color: "black" }} /></p>
                <p className="text-current pb-4 font-thin">{title}</p>
           </div>
      )
}
export default Card;