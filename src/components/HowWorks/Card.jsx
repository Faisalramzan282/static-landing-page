import React from "react";
const Card = ({pic, step, title, description})=>{
   return(
        <div className="ring-2 ring-gray-200 rounded p-4 text-center ">
             <img src={pic} alt="card" className="mx-auto my-4"/>
             <p className="text-orange-500 text-lg font-medium mt-2">{step}</p>
             <p className="font-base text-3xl">{title}</p>
             <p className="text-xs py-3 font-thin">{description}</p>
        </div>
   )
}
export default Card;