import React, { useEffect } from "react";
import { gsap } from "gsap";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="">
      <div class="relative w-full h-28">
        <div class="absolute inset-0 bg-gradient-to-r from-[#f9e8ea] from-3% via-[#f09819] via-20% to-[#f793e2] to-90%">
          <div className="flex justify-center left-1/2 mt-5">
            <img className="w-20 md:w-32 lg:w-48" src="signature.png" alt="" />
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>
      {/* Landing */}
      <div className="p-5 md:p-10 lg:lg:px-[17%] lg:py-0">
        <div className="flex justify-between items-center">
          <div className="font-poppins font-extrabold text-3xl w-1/2">
            <div className="text-5xl arnold md:text-7xl lg:text-8xl">
              Arnold
            </div>
            <div className="anand md:text-5xl lg:text-6xl">Anand</div>
          </div>
          <div>
            <img
              className="freelancer md:w-56 lg:w-96"
              src="freelancer.svg"
              alt=""
            />
          </div>
        </div>

        <div>
          <p className="font-poppins py-8 md:w-3/4 md:py-0 lg:w-[550px]">
            A Front-End Developer that takes great pleasure in conceptualizing
            and brining to life visually appealing products. I am always eager
            to broaden my horizons and accquire new skills that will allow me to
            do my work more efficiently. Aspiring Full-Stack Developer. A.I
            aficionado
          </p>
        </div>
      </div>
      {/* Projects */}
      <div className="mt-10 lg:mt-28">
        <div>
          <div className="font-poppins text-center w-full text-5xl font-extrabold flex justify-center">
            <span>Projects</span>{" "}
            <img className="w-20 -mt-10" src="projects.svg" alt="" />
          </div>
        </div>
        <div className="font-poppins grid md:grid-cols-2 lg:grid-cols-3 lg:px-36 ">
          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img className="w-full rounded" src="chat-with-pdf.png" alt="" />
            <div className="text-xl font-roboto p-2">
              {" "}
              Chat With PDF{" "}
              <span className="p-[3px] px-2 bg-slate-300 text-xs rounded">
                AI
              </span>
            </div>
            <div className="px-2 text-justify">
              {" "}
              Powering interactive conversations and retrieve information from
              uploaded PDF.
            </div>
            <div className="flex items-center justify-between py-3">
              <a
                target="_blank"
                href="https://github.com/arnold-anand/Chat-with-pdf/blob/master/chat-with-pdf.ipynb"
              >
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-8" src="github-mark.svg" alt="" />
                  <div>Github</div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://huggingface.co/spaces/arnold-anand/chat-with-pdf"
              >
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-8" src="live.svg" alt="" />
                  <div>Live Demo</div>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img
              className="w-full h-48 rounded"
              src="digit-recognition.png"
              alt=""
            />
            <div className="text-xl font-roboto p-2">
              Digit Recognition
              <span className="p-[3px] mx-2 px-2 bg-slate-300 text-xs rounded">
                AI
              </span>
            </div>
            <div className="px-2 text-justify">
              Simple web application that detects handwritten digits drawn on a
              canvas.{" "}
            </div>
            <div className="flex items-center justify-between py-3">
              <a
                target="_blank"
                href="https://github.com/arnold-anand/Chat-with-pdf/blob/master/chat-with-pdf.ipynb"
              >
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-8" src="github-mark.svg" alt="" />
                  <div>Github</div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://huggingface.co/spaces/arnold-anand/chat-with-pdf"
              >
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-8" src="live.svg" alt="" />
                  <div>Live Demo</div>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img className="w-full rounded" src="isu.png" alt="" />
            <div className="text-xl font-roboto p-2">
              Smart Phone Price Prediction
              <span className="p-[3px] px-2 bg-slate-300 text-xs rounded mx-1">
                AI
              </span>
            </div>
            <div className="px-2 text-justify py-2">
              Part of Intel Unnati Summer Internship. Using AI for better
              decision making.
            </div>
            <div className="flex items-center justify-between py-3">
              <a
                target="_blank"
                href="https://www.kaggle.com/code/arnoldanand/smart-phone-price-prediction#Hyper-parameter-Tuning"
              >
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-5" src="kaggle-icon.svg" alt="" />
                  <div>Kaggle</div>
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img
              className="w-full rounded"
              src="https://miro.medium.com/v2/resize:fit:1199/1*N8UXaiUKWurFLdmEhEHiWg.jpeg"
              alt=""
            />
            <div className="text-xl font-roboto p-2">
              Brain Tumour Detection using DL{" "}
              <span className="p-[3px] px-2 bg-slate-300 text-xs rounded">
                AI
              </span>
            </div>
            <div className="px-2 text-justify">
              Detect and segment brain tumours from MRI images. Applies a
              efficentnet b0 model by google.
            </div>
            <div className="flex items-center justify-between py-3">
              <a
                target="_blank"
                href="https://github.com/arnold-anand/Brain-Tumour-Detection"
              >
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-8" src="github-mark.svg" alt="" />
                  <div>Github</div>
                </button>
              </a>
            </div>
          </div>


          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img className="w-full rounded" src="icraae.png" alt="" />
            <div className="text-xl font-roboto p-2">ICRAAE'24 Website <span className="p-[3px] px-2 bg-slate-300 text-xs rounded">React JS</span></div>
            <div className="px-2 text-justify">Developed a multi-page web application for ICRAAE-2024 organized by the
Dept. Aerospace Engineering</div>
            <div className="flex items-center justify-between py-3">
              <a target="_blank" href="https://karunya.edu/daero/icraae-24/">
              <button className="flex items-center justify-center p-2 border rounded space-x-2">
                <img className="w-8" src="live.svg" alt="" />
                <div>Live Website</div>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
