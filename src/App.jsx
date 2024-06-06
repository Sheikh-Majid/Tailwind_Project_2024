import "./App.css";
import { FaBars, FaArrowRight } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { LiaClosedCaptioning } from "react-icons/lia";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { useState } from "react";


const faqItems = [
  {
    id: 1,
    question: "is ToDeskTop for Me?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ipsum saepe nesciunt officia et omnis. Quae qui reprehenderit atque dolorem.",
  },
  {
    id: 2,
    question: "How to use ToDeskTop?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 3,
    question: "What are the features of ToDeskTop?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 4,
    question: "How to install ToDeskTop?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  // Add more FAQ items as needed
];

function App() {
  const [idd, setId] = useState(null);
  // toggle functionality
  function handlebtn() {
    document.getElementById("toggle").classList.toggle("hidden");
  }

  const handleClick = (id) => {
    setId(idd === id ? null : id)
  };

  return (
    <>
      <nav className= " shadow-lg z-20 fixed top-0 left-0 right-0  p-3 flex bg-lightBlue500  gap-2 text-white font-mullish font-bold text-[22px] justify-between items-center">
        <a href="#" id="brand" className="flex ">
          <img src="../public/assets/asset 0.png" alt="logo" />
          <span className="mt-1.5">ToDeskTop</span>
        </a>

        <div id="nav-menu" className="group  gap-2 hidden md:flex">
          <a
            className="font-medium hover:text-xl transition-all duration-200 hover:text-deepBlue"
            href="#"
          >
            Pricing
          </a>
          <div className="h-1 w-17 group-hover:bg-deepBlue "></div>

          <a
            className="font-medium hover:text-xl transition-all duration-200 hover:text-deepBlue"
            href="#"
          >
            Docs
          </a>
          <div className="h-1 w-17 group-hover:bg-deepBlue "></div>

          <a
            className="font-medium hover:text-xl transition-all duration-200 hover:text-deepBlue"
            href="#"
          >
            ChangeLog
          </a>
          <div className="h-1 w-17 group-hover:bg-deepBlue "></div>
          <a
            className="font-medium hover:text-xl transition-all duration-200 hover:text-deepBlue"
            href="#"
          >
            Blog
          </a>
          <div className="h-1 w-17 group-hover:bg-deepBlue "></div>

          <a
            className="font-medium hover:text-xl transition-all duration-200 hover:text-deepBlue"
            href="#"
          >
            Login
          </a>
          <div className="h-1 w-17 group-hover:bg-deepBlue "></div>
        </div>

        <div className="hidden md:flex">
          <button className="  border p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:translate-x-2">
            Electron Developer
          </button>
        </div>
        <div id="toggle" className="fixed inset-0 bg-gray-500 p-3 md:hidden">
          <div className="flex justify-between">
            <a href="#" id="brand" className="flex">
              <img src="../public/assets/asset 0.png" alt="logo" />
              <span className="mt-1.5">ToDeskTop</span>
            </a>
            <button className="p-2 md:hidden" onClick={handlebtn}>
              <MdClose />
            </button>
          </div>

          <div className="mt-6">
            <ol className=" m-3 p-3 font-serif hover:bg-slate-400 hover:border hover:rounded-lg">
              Docs
            </ol>
            <ol className=" m-3 p-3 font-serif  hover:bg-slate-400 hover:border hover:rounded-lg">
              Pricing
            </ol>
            <ol className=" m-3 p-3 font-serif  hover:bg-slate-400 hover:border hover:rounded-lg">
              ChangeLog
            </ol>
            <ol className=" m-3 p-3 font-serif  hover:bg-slate-400 hover:border hover:rounded-lg">
              Blog
            </ol>
            <ol className=" m-3 p-3 font-serif  hover:bg-slate-400 hover:border hover:rounded-lg">
              Login
            </ol>
          </div>

          <div className="mt-4 h-1 w-100% bg-slate-300"></div>

          <div>
            <button className=" mt-4 ml-4 border p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:translate-x-2">
              Electron Developer
            </button>
          </div>
        </div>
        <button className="p-2 md:hidden" onClick={handlebtn}>
          <FaBars />
        </button>
      </nav>

      {/* Herro Section */}

      <main className=" mt-16">
        {/* part-1 */}
        <div className=" min-h-screen bg-gradient-to-b from-purple-500 via-blue-400 to-transparent">
          <div
            id="hero-container"
            className=" max-w-4xl mx-auto px-6 pb-32 flex flex-col"
          >
            <div
              id="version-text"
              className="flex items-center mt-8 border p-3 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1 bg-yellow-100 transition-all duration-300 w-fit"
            >
              <div className="w-2 h-2 bg-yellow-400 border-yellow-600 rounded-full "></div>
              <p className=" ml-1 font-mullish font-bold">
                v0.21.1:{" "}
                <span className=" ml-1 mr-2">Find-page- bug fixes</span>{" "}
              </p>
              <FaArrowRight />
            </div>
            <div className="hidde  sm:flex mt-5">
              <li>Code Optional</li>
              <li> Drag & drop builder</li>
              <li> Window,Mac,Linux</li>
            </div>
            <h1 className="mt-10 text-4xl font-mullish">
              Web app to desktop app in minutes
            </h1>
            <p className="mt-10  text-xl font-mullish">
              Take your web app codebase and transform it into a cross platform
              desktop app with native functionality.
            </p>

            <div className=" gap-3 items-center justify-center flex ">
              <button className="  shadow-lg hover:bg-opacity-70 transition-all duration-300 mt-14 bg-lightBlue500 text-white p-3 font-mullish text-xl rounded-lg sm:mb-6">
                Download Now
              </button>

              <button className=" translate-y-4 lg:-translate-y-0 md:-translate-y-0 hover:bg-opacity-70 border border-yellow-400 sm:py-3 px-6 py-3  mt-7 bg-lightBlue500 p-3 font-mullish text-xl rounded-lg  text-white items-center">
                {" "}
                Docs
              </button>
            </div>
          </div>

          <div id="companies-container">
            <div
              id="companies-title"
              className="flex justify-center gap-2 mb-10"
            >
              <img
                src="../public/assets/asset 2.svg"
                alt="arrow"
                className=" translate-y-2"
              />
              <span className=" font-serif font-medium text-xl leading-tight">
                APPS POWERED BY TODESKTOP
              </span>
              <img
                src="../public/assets/asset 2.svg"
                alt="arrow"
                className=" -scale-x-100  translate-y-2 "
              />
            </div>

            <div id="line-groups" className=" mb-28  max-w-5xl mx-auto  gap-4 ">
              {/* line-1 */}
              <div
                id="line1"
                className=" gap-4 max-w-5xl mx-auto px-6 py-6 grid grid-cols-3  justify-center lg:grid-cols-6 "
              >
                <div className="flex flex-col md:min-h-32 md:min-w-24 min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 3.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 4.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Max
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 5.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Min
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 6.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Alpha
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 7.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Beta
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 8.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Gamma
                  </span>
                </div>
              </div>

              {/* line-2 */}

              <div
                id="line2"
                className="max-w-5xl mx-auto px-6 py-3 grid grid-cols-3  justify-center lg:grid-cols-6  gap-4 "
              >
                <div className="flex flex-col md:min-h-32 md:min-w-24 min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 9.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    BioTech
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 10.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    UTurn
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 11.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    BounceBack
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 12.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Knowlege
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 13.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Park
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 14.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Delta
                  </span>
                </div>
              </div>

              {/* line-3 */}

              <div
                id="line3"
                className="gap-4  max-w-5xl mx-auto px-6  py-5 grid grid-cols-3  justify-center lg:grid-cols-6 "
              >
                <div className="flex flex-col md:min-h-32 md:min-w-24 min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 15.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Kasna
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 16.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Commercial
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 17.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    BlackBox1
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 18.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Zeta
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 19.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    Apna
                  </span>
                </div>

                <div className="flex flex-col min-h-24 min-w-24 justify-center items-center bg-white rounded-xl border border-gray-400 ">
                  <img
                    src="../public/assets/asset 20.png"
                    alt="log01"
                    className="w-12 h-12 md:h-16 md-w-16"
                  />
                  <span className=" text-[12px] md:text-[16px] font-semibold">
                    SMT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* step by Step */}

          {/* box-1 */}

          <div
            id="steps"
            className="px-6 py-12 max-w-7xl mx-auto lg:px-8 lg:mt-10 "
          >
            <h2 className=" text-5xl sm:font-semibold">How It Works</h2>
            <div
              id="step1"
              className=" rounded-xl border px-8 py-12 flex flex-col lg:flex-row lg:gap-8 lg:mt-10 mt-10"
            >
              {/* left Part */}
              <div className="flex flex-col gap-6 lg:w-1/2 ">
                <span className=" border border-yellow-300  text-yellow-800 bg-yellow-50 px-3 py-2 font-medium w-fit rounded-lg">
                  Step 1
                </span>

                <h3 className=" text-4xl font-mullish">
                  Bootstrap straight from your web app
                </h3>
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  officiis placeat deleniti earum omnis obcaecati eaque at enim
                  minus, numquam repellat quam fugit, optio eos non dicta quidem
                  sint ducimus?
                </p>

                <ul className=" grid grid-cols-2 gap-4">
                  <li className="flex gap-2 items-center">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Multiple Windows
                    </span>
                  </li>
                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      MenuBar menus
                    </span>
                  </li>

                  <li className="flex gap-2 items-center">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      offline Support
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Customisable menus
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Launch on Startup
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Tab (Mack Only)
                    </span>
                  </li>
                </ul>
              </div>

              {/* right box */}

              <div className=" pt-12">
                <img src="../public/assets/asset 66.svg" alt="" />
              </div>
            </div>
          </div>

          {/* box-2 */}
          <div
            id="steps"
            className="px-6 py-12 max-w-7xl mx-auto lg:px-8 lg:mt-3 "
          >
            <div
              id="step1"
              className=" rounded-xl border px-8 py-12 flex flex-col lg:flex-row lg:gap-8 lg:mt-3 mt-3"
            >
              {/* left Part */}
              <div className="flex flex-col gap-6 lg:w-1/2 ">
                <span className=" border border-yellow-300  text-yellow-800 bg-yellow-50 px-3 py-2 font-medium w-fit rounded-lg">
                  Step 2
                </span>

                <h3 className=" text-4xl font-mullish">
                  Bootstrap straight from your web app
                </h3>
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  officiis placeat deleniti earum omnis obcaecati eaque at enim
                  minus, numquam repellat quam fugit, optio eos non dicta quidem
                  sint ducimus?
                </p>

                <ul className=" grid grid-cols-2 gap-4">
                  <li className="flex gap-2 items-center">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Multiple Windows
                    </span>
                  </li>
                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      MenuBar menus
                    </span>
                  </li>

                  <li className="flex gap-2 items-center">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      offline Support
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Customisable menus
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Launch on Startup
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Tab (Mack Only)
                    </span>
                  </li>
                </ul>
              </div>

              {/* right box */}

              <div className=" pt-12">
                <img src="../public/assets/asset 66.svg" alt="" />
              </div>
            </div>
          </div>

          {/* box-3 */}
          <div
            id="steps"
            className="px-6 py-12 max-w-7xl mx-auto lg:px-8 lg:mt-10 "
          >
            <div
              id="step1"
              className=" rounded-xl border px-8 py-12 flex flex-col lg:flex-row lg:gap-8 lg:mt-3 mt-3"
            >
              {/* left Part */}
              <div className="flex flex-col gap-6 lg:w-1/2 ">
                <span className=" border border-yellow-300  text-yellow-800 bg-yellow-50 px-3 py-2 font-medium w-fit rounded-lg">
                  Step 3
                </span>

                <h3 className=" text-4xl font-mullish">Publish</h3>
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  officiis placeat deleniti earum omnis obcaecati eaque at enim
                  minus, numquam repellat quam fugit, optio eos non dicta quidem
                  sint ducimus?
                </p>

                <ul className=" grid grid-cols-2 gap-4">
                  <li className="flex gap-2 items-center">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Multiple Windows
                    </span>
                  </li>
                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      MenuBar menus
                    </span>
                  </li>

                  <li className="flex gap-2 items-center">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      offline Support
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Customisable menus
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Launch on Startup
                    </span>
                  </li>

                  <li className="flex gap-2 items-center ">
                    <FaCheck />
                    <span className=" text-xl font-serif border-b border-black border-opacity-30 hover:border-opacity-80">
                      Tab (Mack Only)
                    </span>
                  </li>
                </ul>
              </div>

              {/* right box */}

              <div className=" pt-12">
                <img src="../public/assets/asset 66.svg" alt="" />
              </div>
            </div>
          </div>

          {/* next section */}
          <div
            id="bento-grid"
            className="px-6 py-12 max-w-7xl mx-auto lg:px-8 lg:mt-6"
          >
            <h2 className="text-5xl sm:font-semibold mb-14">
              ToDesktop Handles the details
            </h2>
            <div
              id="grid-container"
              className="flex flex-col gap-6 lg:grid lg:grid-cols-3"
            >
              <div className=" rounded-2xl bg-red-500 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-gray-300 via-purple-600 to-red-400 cursor-pointer transition-all duration-300 translate-x-3 hover:-translate-y-3">
                  <h3 className=" font-bold font-serif text-2xl">
                    Native Notification
                  </h3>
                  <img src="../public/assets/asset 37.png" alt="" />
                </div>
              </div>

              {/* box -2 */}
              <div className=" rounded-2xl bg-red-500 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-gray-300 via-purple-600 to-red-400 cursor-pointer transition-all duration-300 translate-x-3 hover:-translate-y-3">
                  <h3 className=" font-bold font-serif text-2xl">
                    Auto Updated
                  </h3>
                  <p className=" font-serif text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </p>
                  <img src="../public/assets/asset 37.png" alt="" />
                </div>
              </div>

              {/* box-3 */}
              <div className=" rounded-2xl bg-red-500 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-gray-300 via-purple-600 to-red-400 cursor-pointer transition-all duration-300 translate-x-3 hover:-translate-y-3">
                  <h3 className=" font-bold font-serif text-2xl">
                    Native Notification
                  </h3>
                  <img src="../public/assets/asset 37.png" alt="" />
                </div>
              </div>

              {/* box-4 */}
              <div className=" rounded-2xl bg-red-500 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-gray-300 via-purple-600 to-red-400 cursor-pointer transition-all duration-300 translate-x-3 hover:-translate-y-3">
                  <h3 className=" font-bold font-serif text-2xl">
                    Native Notification
                  </h3>
                  <p className=" font-serif text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </p>
                  <img src="../public/assets/asset 37.png" alt="" />
                </div>
              </div>
              {/* box-5 */}
              <div className=" rounded-2xl bg-red-500 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-gray-300 via-purple-600 to-red-400 cursor-pointer transition-all duration-300 translate-x-3 hover:-translate-y-3">
                  <h3 className=" font-bold font-serif text-2xl">
                    Auto Updated
                  </h3>
                  <img src="../public/assets/asset 37.png" alt="" />
                </div>
              </div>
              {/* box-6 */}
              <div className=" rounded-2xl bg-red-500 p-[1px]">
                <div className="bg-white rounded-2xl w-full h-full p-6 flex flex-col items-center hover:bg-gradient-to-br from-gray-300 via-purple-600 to-red-400 cursor-pointer transition-all duration-300 translate-x-3 hover:-translate-y-3">
                  <h3 className=" font-bold font-serif text-2xl">
                    Native Notification
                  </h3>
                  <p className=" font-serif text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </p>
                  <img src="../public/assets/asset 37.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* testorialmonial  */}

          <div
            id="testorimonial"
            className="px-6 py-12 max-w-7xl mx-auto lg:px-8 lg:mt-6 gap-4"
          >
            <h2 className="text-5xl sm:font-semibold mb-14">
              Customer stories
            </h2>

            <div className="rounded-xl border flex flex-col  lg:flex-row items-center pl-5">
              {/* left part */}

              <div className="flex flex-col gap-6 items-start mb-3 w-[90%]">
                <h2 className="font-bold font-serif mt-3">
                  <img src="../public/assets/asset 44.svg" alt="" />
                </h2>

                <p className=" font-serif font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, odio!
                </p>

                <div id="tasks" className="flex flex-col gap-3">
                  <div className=" flex gap-3">
                    <div className=" rounded-lg bg-yellow-50  text-yellow-700 px-6 py-3 flex items-center gap-2 border border-yellow-700">
                      <FaCheck />
                      Chromeless UI
                    </div>

                    <div className=" rounded-lg bg-yellow-50  text-yellow-700 px-6 py-3 flex items-center gap-2 border border-yellow-700">
                      <FaCheck />
                      Native speilcheck
                    </div>
                  </div>

                  <div className=" rounded-lg bg-yellow-50  text-yellow-700 px-6 py-3 flex items-center gap-2 border border-yellow-700 w-fit">
                    <FaCheck />
                    Task time in MenuBar
                  </div>

                  <div className=" rounded-lg bg-yellow-50  text-yellow-700 px-6 py-3 flex items-center gap-2 border border-yellow-700 w-fit">
                    <FaCheck />
                    Notification count in the dock
                  </div>

                  <div className=" rounded-lg bg-yellow-50  text-yellow-700 px-6 py-3 flex items-center gap-2 border border-yellow-700 w-fit">
                    <FaCheck />
                    Global hotkey to create Task
                  </div>
                </div>

                <p className=" text-xl font-light text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  ducimus optio! Dignissimos error asperiores accusamus suscipit
                  quisquam, quo rerum sint ipsa, blanditiis excepturi quaerat
                  totam facere nemo. Aperiam tempore omnis quibusdam? Distinctio
                  veniam optio officia fugit cumque? Sint dicta totam maxime
                  placeat unde velit inventore! Similique dolorum excepturi
                  accusantium deserunt?
                </p>

                <div id="ceo-card" className="flex gap-4">
                  <div className=" w-12">
                    <img
                      src="../public/assets/asset 45.jpeg"
                      alt=""
                      className=" rounded-full"
                    />
                  </div>

                  <div>
                    <h2 className="font-bold  font-serif">Zeb Evans</h2>
                    <h4 className=" font-serif ">Founder & CEO, ClickUp</h4>
                  </div>
                </div>
              </div>

              {/* right part */}

              <div className=" w-1/2">
                <img src="../public/assets/asset 46.png" alt="" />
              </div>
            </div>
          </div>

          {/* next section */}
          <div className=" flex flex-col lg:flex-row justify-between gap-4  mx-auto max-w-7xl px-6 py-10 mt-12 lg:px-8 lg:mt-16">
            <div className=" flex flex-col p-6 rounded-2xl gap-6 bg-slate-200  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
              <div className="flex  items-center gap-4">
                <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                  <LiaClosedCaptioning size={30} />
                </div>
                <h3 className="text-2xl font-semibold">Native API</h3>
              </div>
              <p className=" text-lg font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, nisi ipsa, fugit doloremque atque laboriosam ea
                voluptatibus excepturi incidunt dolore id quam praesentium magni
                aliquam tempore asperiores quis necessitatibus.
              </p>

              <div className="flex">
                {/* left part */}

                <div className="flex">
                  <div className=" w-12 h-12   flex items-center justify-center  overflow-hidden rounded-full ">
                    <img
                      src="../public/assets/asset 47.png"
                      className=" max-h-16 min-w-16"
                      alt="logo47"
                    />
                  </div>

                  <div className=" w-12 h-12  -translate-x-4">
                    <img
                      src="../public/assets/asset 48.jpeg"
                      alt="logo47"
                      className=" rounded-full"
                    />
                  </div>

                  <div className="flex-col">
                    <h3>Rick Pastoor</h3>
                    <a
                      href="#"
                      className="  w-fit text-gray-500text-xs font-serif border-b border-dotted border-y-gray-200 hover:border-solid hover:border-gray-500"
                    >
                      Rise
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col p-6 rounded-2xl gap-6 bg-slate-200  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
              <div className="flex  items-center gap-4">
                <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                  <LiaClosedCaptioning size={30} />
                </div>
                <h3 className="text-2xl font-semibold">Native API</h3>
              </div>
              <p className=" text-lg font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, nisi ipsa, fugit doloremque atque laboriosam ea
                voluptatibus excepturi incidunt dolore id quam praesentium magni
                aliquam tempore asperiores quis necessitatibus.
              </p>

              <div className="flex">
                {/* left part */}

                <div className="flex">
                  <div className=" w-12 h-12   flex items-center justify-center  overflow-hidden rounded-full ">
                    <img
                      src="../public/assets/asset 47.png"
                      className=" max-h-16 min-w-16"
                      alt="logo47"
                    />
                  </div>

                  <div className=" w-12 h-12  -translate-x-4">
                    <img
                      src="../public/assets/asset 48.jpeg"
                      alt="logo47"
                      className=" rounded-full"
                    />
                  </div>

                  <div className="flex-col">
                    <h3>Rick Pastoor</h3>
                    <a
                      href="#"
                      className="  w-fit text-gray-500text-xs font-serif border-b border-dotted border-y-gray-200 hover:border-solid hover:border-gray-500"
                    >
                      Rise
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col p-6 rounded-2xl gap-6 bg-slate-200  hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
              <div className="flex  items-center gap-4">
                <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                  <LiaClosedCaptioning size={30} />
                </div>
                <h3 className="text-2xl font-semibold">Native API</h3>
              </div>
              <p className=" text-lg font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, nisi ipsa, fugit doloremque atque laboriosam ea
                voluptatibus excepturi incidunt dolore id quam praesentium magni
                aliquam tempore asperiores quis necessitatibus.
              </p>

              <div className="flex">
                {/* left part */}

                <div className="flex">
                  <div className=" w-12 h-12   flex items-center justify-center  overflow-hidden rounded-full ">
                    <img
                      src="../public/assets/asset 47.png"
                      className=" max-h-16 min-w-16"
                      alt="logo47"
                    />
                  </div>

                  <div className=" w-12 h-12  -translate-x-4">
                    <img
                      src="../public/assets/asset 48.jpeg"
                      alt="logo47"
                      className=" rounded-full"
                    />
                  </div>

                  <div className="flex-col">
                    <h3>Rick Pastoor</h3>
                    <a
                      href="#"
                      className="  w-fit text-gray-500text-xs font-serif border-b border-dotted border-y-gray-200 hover:border-solid hover:border-gray-500"
                    >
                      Rise
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next section */}

          <div className=" lg:flex-row px-6 py-12 max-w-6xl mx-auto lg:px-8 lg:mt-6 gap-4 lg:gap-8 border border-yellow-300 bg-black flex flex-col justify-center items-center">
            {/* left Part */}

            <div className=" flex flex-col gap-3 w-1/2 lg:gap-8">
              <h3 className="  text-gray-400 font-medium">
                READY TO START BUILDING?
              </h3>
              <h1 className=" text-3xl text-white leading-tight tracking-tighter lg:text-5xl ">
                Create your desktop app for free*
              </h1>
              <p className=" italic text-gray-400 text-sm leading-tight tracking-wide">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                molestiae sed in, dolores voluptas nesciunt necessitatibus rem
                eum corrupti. Debitis.
              </p>
              {/* Button */}
              <button className=" bg-blue-700 text-white flex justify-center items-center gap-2 py-3 rounded-md border-yellow-300 border hover:opacity-90 text-[18px] font-serif tracking-wide mt-2">
                <MdOutlineFileDownload />
                Download ToDeskTop Builder
              </button>

              <p className=" text-gray-400 text-xs italic">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident ipsum saepe nesciunt officia et omnis. Quae qui
                reprehenderit atque dolorem.
              </p>
            </div>

            {/* Right Part */}

            <div className=" mt-2 w-[60%]">
              <img src="../public/assets/asset 46.png" alt="" />
            </div>
          </div>

          {/* Next section */}

          <div className=" max-w-6xl px-6 py-12 mx-auto border border-yellow-400 mt-6 flex flex-col gap-6 rounded-md">
            <h1 className=" text-3xl font-semibold tracking-wide leading-tight font-mullish">
              {" "}
              Choose a plan that fits your needs
            </h1>

            {/* card -1 */}
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
              <div className=" flex flex-col p-6 bg-slate-200 items-start justify-center gap-4 rounded-md hover:bg-gray-400 hover:text-white shadow-lg transition-all duration-300 group">
                <h2 className=" text-3xl  font-serif">Free</h2>
                <p className=" text-sm font-sans italic leading-snug tracking-wide">
                  For Personal use or tseting your app before deploying to
                  custumer
                </p>

                <h4 className=" text-xl leading-6 tracking-wide ">
                  KEY FEATURES
                </h4>

                <div>
                  <ul>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdCheckmark />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdCheckmark />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdClose />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdClose />
                      Free to personal use
                    </li>
                  </ul>
                </div>

                <button className=" border border-slate-400 shadow-lg py-2 px-12 rounded-md hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 text-xl font-serif tracking-wide group-hover:border-black group-hover:text-black group-hover:bg-white">
                  Read Docs
                </button>
              </div>

              {/* card-2 */}

              <div className=" flex flex-col p-6 bg-slate-200 items-start justify-center gap-4 rounded-md hover:bg-gray-400 hover:text-white shadow-lg transition-all duration-300 group">
                <h2 className=" text-3xl  font-serif">Essential</h2>
                <p className=" text-sm font-sans italic leading-snug tracking-wide">
                  For Personal use or tseting your app before deploying to
                  custumer
                </p>
                <h1>
                  <span className="font-bold">$99</span>/month
                </h1>
                <h4 className=" text-xl leading-6 tracking-wide ">
                  KEY FEATURES
                </h4>

                <div>
                  <ul>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdCheckmark />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdCheckmark />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdClose />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdClose />
                      Free to personal use
                    </li>
                  </ul>
                </div>

                <button className=" border border-slate-400 shadow-lg py-2 px-12 rounded-md hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 text-xl font-serif tracking-wide group-hover:border-black group-hover:text-black group-hover:bg-white">
                  Read Docs
                </button>
              </div>

              {/* card-3 */}

              <div className="flex flex-col p-6  bg-slate-200 items-start justify-center gap-4 rounded-md hover:bg-gray-400 hover:text-white shadow-lg transition-all duration-300 group">
                <div className="  bg-blue-200 rounded-2xl w-28 text-center p-1 text-blue-800 font-semibold  translate-x-48 -translate-y-10">
                  Most Popular
                </div>
                <h2 className=" text-3xl  font-serif">Professional</h2>
                <p className=" text-sm font-sans italic leading-snug tracking-wide">
                  For Personal use or tseting your app before deploying to
                  custumer
                </p>

                <h1>
                  <span className="font-bold">$240</span>/month
                </h1>
                <h4 className=" text-xl leading-6 tracking-wide ">
                  KEY FEATURES
                </h4>

                <div>
                  <ul>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdCheckmark />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdCheckmark />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdClose />
                      Free to personal use
                    </li>
                    <li className=" flex items-center gap-3 leading-10 font-mullish tracking-wide">
                      <IoMdClose />
                      Free to personal use
                    </li>
                  </ul>
                </div>

                <button className=" border border-slate-400 shadow-lg py-2 px-12 rounded-md hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 text-xl font-serif tracking-wide group-hover:border-black group-hover:text-black group-hover:bg-white">
                  Read Docs
                </button>
              </div>
            </div>
          </div>

          {/* next section -- FAQs */}

          <div className="px-6 py-12 max-w-5xl mx-auto mt-10 lg:mt-14 gap-5">
            <h1 className=" text-semibold text-2xl font-serif">FAQs</h1>

            <div className=" grid grid-cols-1  gap-4 mt-5">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-md bg-gray-200 border border-gray-400 shadow-xl cursor-pointer hover:opacity-90 "
                  onClick={() => handleClick(item.id)}
                >
                  <dt className=" justify-between flex items-center font-semibold text-xl font-serif">
                    <p>{item.question}</p>
                    <i className={`${idd === item.id ? "-rotate-180 " : ""}`}>
                      {" "}
                      <HiOutlineFolderDownload />
                    </i>
                  </dt>

                  <dd>
                    <p
                      className={`mt-4 font-sans ${
                        idd === item.id ? "" : "hidden"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 px-6  max-w-5xl mx-auto mt-5 lg:mt-5    gap-6">
        <div className=" hover:shadow-xl transition-all duration-150 items-center rounded-lg  bg-gray-300 border border-blue-300 gap-2 flex flex-col lg:flex-row-reverse py-5 px-5 lg:bg-gray-200  lg:border-none lg:hover:shadow-2xl lg:transition-all lg:duration-200 ">
          {" "}
          <a href="#" className=" text-lg font-serif font-semibold">
            Doumentation
          </a>
          <div className=" flex  gap-2">
            <i>
              <FaSquareXTwitter size={26} />
            </i>
            <i>
              <FaGithub size={26} />
            </i>
          </div>
          <a href="#" id="brand" className="flex my-2 gap-3 flex-1">
            <img src="../public/assets/asset 0.png" alt="logo" />
            <span className="mt-1.5 font-semibold text-xl ">ToDeskTop</span>
          </a>
        </div>

        <div className=" flex flex-col items-center gap-3 mt-5">
          <div className="flex gap-2 items-center">
            <img
              src="../public/assets/asset 54.svg"
              alt=""
              className="h-8 w-8 rounded-md hover:shadow-lg"
            />
            <p className=" font-serif font-medium hover:text-o">
              {" "}
              A Y Combinator Company.
            </p>
          </div>
          <p className=" font-serif  font-semibold">
            © 2024 ToDeskTop. All rights reserved.
          </p>
          <p className=" font-serif font-semibold">Made By Sheikh Majid.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
