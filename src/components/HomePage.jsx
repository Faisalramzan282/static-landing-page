import React from "react";
import Header from "./Header";
import HawaiPremier from "./HawaiiPremier/HawaiPremier";
import MedicalService from "./Medical Service/MedicalService";
import UrgentCarService from "./Urganet Car Service/UrgentCarService";
import HowIsWork from "./HowWorks/HowIsWork";
import AboutUs from './About Us/AboutUs';
import PatienLoveUse from "./Patient Love Us/PatienLoveUs";
const HomePage = ()=>{
    return (
       <div>
               <Header/>
             <div className="my-16">
               <HawaiPremier/>
             </div>
             <div className="py-5">
               <MedicalService/>
             </div>
             <div className="mb-14">
               <UrgentCarService/>
             </div>
             <div className="text-black my-10">
               <HowIsWork/>
             </div>
             <div>
               <AboutUs/>
             </div>
             <div className="border border-red-500 my-14 mx-16">
               <PatienLoveUse/>
             </div>
       </div>
    )
}
export default HomePage;