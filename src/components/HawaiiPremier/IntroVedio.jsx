import React from "react";
import introVedio from "../../assets/introVedio.png";
const IntroVedio = ()=>{
    return(
        <div className="relative hover:cursor-pointer transition-transform hover:scale-105">
        <img src={introVedio} alt="intro vedio" className="absolute inset-0" style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }} />
      </div>
      
   )

}
export default IntroVedio;