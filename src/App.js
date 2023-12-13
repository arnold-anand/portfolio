import React, { useEffect } from "react";
import { gsap } from "gsap";
import logo from "./logo.svg";
import "./App.css";

function App() {

  return (
    <div className="">
      <div class="relative w-full h-36">
        <div class="absolute inset-0 bg-gradient-to-r from-[#f9e8ea] from-3% via-[#f09819] via-20% to-[#f793e2] to-90%">
          <div className="flex justify-center left-1/2 mt-5"><img className="w-20 md:w-32 lg:w-48" src="signature.png" alt="" /></div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>
      {/* Landing */}
      <div className="p-5 md:p-10 lg:lg:px-56 lg:py-0">
        
        <div className="flex justify-between items-center">
          <div className="font-poppins font-extrabold text-3xl w-1/2">
             <div className="text-5xl arnold md:text-7xl lg:text-8xl">Arnold</div>
             <div className="anand md:text-5xl lg:text-6xl">Anand</div>
          </div>
          <div>
            <img className="freelancer md:w-56 lg:w-96" src="freelancer.svg" alt="" />
          </div>
        </div>

        <div>
        <p className="font-poppins py-8 md:w-3/4 md:py-0 lg:w-1/2 lg:-mt-10">A Front-End Developer that takes great pleasure in conceptualizing and brining to life visually appealing products. I am always eager to broaden my horizons and accquire new skills that will allow me to do my work more efficiently. Aspiring Full-Stack Developer. A.I aficionado</p>
        </div>

      </div>
    </div>
  );
}

export default App;
