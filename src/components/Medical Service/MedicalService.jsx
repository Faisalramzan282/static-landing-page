import React from "react";
const MedicalService = ()=>{
  return(
    <div className=" w-3/5 mx-auto">
        <div>
            <p className="text-2xl font-medium text-center">A wide range of medical <span className="text-sky-500">services</span></p>
        </div>
        <div>
            <p className="text-xs py-2 font-thin text-center">
            Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus.
            </p>
        </div>
        <div className="flex gap-2 justify-center">
            <button className="px-3 py-2 bg-stone-200 text-gray-600 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">Medical Consultation</button>
            <button className="px-3 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">Treatment Programs</button>
            <button className="px-3 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">Lab Testing</button>
            <button className="px-3 py-2 bg-stone-200 rounded hover:bg-zinc-950 border	border-gray-300 hover:text-white">Urgent Care</button>
        </div>
    </div>
  )
}
export default MedicalService;