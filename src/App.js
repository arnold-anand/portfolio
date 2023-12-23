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
            <img
              className="w-20 md:w-32 lg:w-48"
              src="./images/signature.png"
              alt=""
            />
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>
      {/* Landing */}
      <div className="p-5 md:p-10 lg:px-36 lg:py-0">
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
              src="./images/freelancer.svg"
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
            <span>Projects</span>
            <img className="w-20 -mt-10" src="./images/projects.svg" alt="" />
          </div>
        </div>
        <div className="font-poppins grid md:grid-cols-2 lg:grid-cols-3 lg:px-36 ">
          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img
              className="w-full rounded"
              src="./images/chat-with-pdf.png"
              alt=""
            />
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
                  <img className="w-8" src="./images/github-mark.svg" alt="" />
                  <div>Github</div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://huggingface.co/spaces/arnold-anand/chat-with-pdf"
              >
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-8" src="./images/live.svg" alt="" />
                  <div>Live Demo</div>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img
              className="w-full h-48 rounded"
              src="./images/digit-recognition.png"
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
                  <img className="w-8" src="./images/github-mark.svg" alt="" />
                  <div>Github</div>
                </button>
              </a>
              <a
                target="_blank"
                href="https://huggingface.co/spaces/arnold-anand/chat-with-pdf"
              >
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-8" src="./images/live.svg" alt="" />
                  <div>Live Demo</div>
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img className="w-full rounded" src="./images/isu.png" alt="" />
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
                  <img className="w-5" src="./images/kaggle-icon.svg" alt="" />
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
                  <img className="w-8" src="./images/github-mark.svg" alt="" />
                  <div>Github</div>
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col p-5 my-5 max-w-sm">
            <img className="w-full rounded" src="./images/icraae.png" alt="" />
            <div className="text-xl font-roboto p-2">
              ICRAAE'24 Website{" "}
              <span className="p-[3px] px-2 bg-slate-300 text-xs rounded">
                React JS
              </span>
            </div>
            <div className="px-2 text-justify">
              Developed a multi-page web application for ICRAAE-2024 organized
              by the Dept. Aerospace Engineering at KITS
            </div>
            <div className="flex items-center justify-between py-3">
              <a target="_blank" href="https://karunya.edu/daero/icraae-24/">
                <button className="flex items-center justify-center p-2 border rounded space-x-2">
                  <img className="w-8" src="./images/live.svg" alt="" />
                  <div>Live Website</div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="w-full flex flex-col-reverse items-center justify-center">
        <div className="font-poppins text-center text-5xl font-extrabold flex justify-center mt-10">
          Skills
        </div>
        <img
          className="md:w-24 ml-60 md:ml-[80%]"
          src="./images/moon.svg"
          alt=""
        />
      </div>
      <div className=" flex items-center space-x-8 md:space-x-16 lg:space-x-32 flex-wrap justify-center p-5 md:px-20 lg:px-48">
        <img className="w-12 m-5" src="./images/html.svg" alt="" />
        <img className="w-12 m-5" src="./images/css.svg" alt="" />
        <img className="w-12 m-5" src="./images/js.svg" alt="" />
        <img className="m-5" src="./images/react.svg" alt="" />
        <img className="m-5" src="./images/tailwind.svg" alt="" />
        <img className="m-5" src="./images/supabase-icon.svg" alt="" />
        <img className="w-20 m-5" src="./images/mysql-official.svg" alt="" />
        <img className="w-12 m-5" src="./images/python-vertical.svg" alt="" />
        <img className="m-5" src="./images/flask.svg" alt="" />
        <img className="m-5" src="./images/git-scm-icon.svg" alt="" />
      </div>

      {/* Experience */}
      <div className="w-full flex flex-col-reverse items-center justify-center">
        <div className="font-poppins text-center text-5xl font-extrabold flex justify-center mt-10">
          Experience & Education
        </div>
        <img
          className="w-28 lg:w-36 mr-48 md:mr-[80%]"
          src="./images/sun.svg"
          alt=""
        />
      </div>

      <div className="py-20 font-poppins md:flex items-center justify-between w-full lg:px-36">
        <div>
          <img className="max-w-[300px]" src="./images/studying.svg" alt="" />
        </div>
        <div className="font-poppins">
          <div className="flex space-x-8 items-center p-5">
            <img className="w-10" src="./images/hitachi-icon.svg" alt="" />
            <div>
              <div className="text-xs">June 2023 - July 2023</div>
              <div>AI Intern</div>
              <div className="text-sm">Hitachi Vantara, Hyderabad</div>
            </div>
          </div>
          <div className="flex space-x-8 items-center p-5">
            <img className="w-10" src="./images/intel-icon.svg" alt="" />
            <div>
              <div className="text-xs">April 2023 - June 2023</div>
              <div>AI Intern</div>
              <div className="text-sm">
                Intel Unnati Training Program Summer 2023, Virtual
              </div>
            </div>
          </div>
          <div className="flex space-x-8 items-center p-5">
            <img
              className="w-10"
              src="https://viestories.com/wp-content/uploads/2022/05/f-72.jpg"
              alt=""
            />
            <div>
              <div className="text-xs">June 2022 - July 2022</div>
              <div>Teaching Instructor</div>
              <div className="text-sm">Camp K12, Remote</div>
            </div>
          </div>
          <div className="flex space-x-8 items-center p-5">
            <img
              className="w-10"
              src="https://karunya.edu/sites/default/files/img/home/KITS-EMBLEM.png.pagespeed.ce.hVclQGVmrR.png"
              alt=""
            />
            <div>
              <div className="text-xs">2020 - 2024</div>
              <div>B.Tech, Computer Science and Engineering</div>
              <div className="text-sm">
                Karunya Institute of Technology and Sciences, Coimbatore
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect */}
      <div>
        <div className="font-poppins text-center text-5xl font-extrabold flex justify-center md:justify-start md:px-20 mt-20">
          Let's Connect!
        </div>

        <div className="px-6 font-poppins md:flex items-center md:flex-row-reverse justify-between">
          <div>
            <img className="max-w-[300px]" src="./images/shaking-hands.svg" alt="" />
          </div>
          <div className="md:p-10 flex flex-col space-y-6">
            <div className="text-justify">
              I'm always looking to make a new connections, so drop me an email
              or shoot me a DM on Linkedin.
            </div>
            <div>
              Lets's explore the possibilities and see where it takes us!
            </div>
            <div className="flex items-center space-x-5">
              <a href="mailto:arnoldanand.work@gmail.com">
                <button className="flex space-x-3 items-center bg-[#f79709] p-2 rounded-md">
                  <span className="text-white">Contact Me</span>
                  <span className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/arnold-anand/"><img className="w-8" src="./images/linkedin.svg" alt="" /></a>
              <a target="_blank" href="https://github.com/arnold-anand"><img className="w-8" src="./images/github-mark.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full h-28 mt-10">
        <div class="absolute inset-0 bg-gradient-to-l from-[#f9e8ea] from-3% via-[#f09819] via-20% to-[#f793e2] to-90%">
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white "></div>
      </div>
    </div>
  );
}

export default App;
