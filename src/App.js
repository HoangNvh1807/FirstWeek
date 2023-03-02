import logo from "./logo.svg";
import "./App.css";
// import { FcNext } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";

function App() {
  const [numberPicter, setNumberPicture] = useState(0);
  const picture = [
    "//stunited.vn/wp-content/uploads/2019/08/1566375726229.jpeg",
    "//stunited.vn/wp-content/uploads/2019/09/01.1-Mobile-Trang-Chu-Version-01.png",
    "//stunited.vn/wp-content/uploads/2019/09/image.jpg",
    "//stunited.vn/wp-content/uploads/2019/09/startup_3.jpg",
  ];
  const logoPicture =
    "https://stunited.vn/wp-content/uploads/2019/09/stunited-e15650013362301.png";
  const nextPicture = (numPicture) => {
    if (numPicture < picture.length - 1) setNumberPicture(numberPicter + 1);
    else setNumberPicture(0);
  };
  const backPicture = (numPicture) => {
    if (numPicture > 0) setNumberPicture(numberPicter - 1);
    else setNumberPicture(picture.length - 1);
  };
  useEffect(() => {}, [numberPicter]);

  return (
    <div className="App">
      <div>
        <div className="relative">
          <div className="absolute top-0 w-[100vw] text-black font-bold">
            <div className="flex flex-row ml-[20%]  gap-10">
              <div>
                {" "}
                <img className="w-[180px] h-[180px]" src={logoPicture}></img>
              </div>
              <div className="flex flex-row  mt-[3%] gap-10">
                {" "}
                <p>HOME</p>
                <p>WHAT WE DO</p>
                <p>WHO WE ARE</p>
                <p>PORTFOLIO</p>
                <p>JOIN US</p>
                <p>LET'S TALK</p>
              </div>
            </div>
          </div>
          <div className="">
            {" "}
            <img
              className=" w-[100000px] h-[1050px] "
              src={picture[numberPicter]}
            ></img>
          </div>

          <div className=" ">
            <div
              className="border-2 rounded-full text-white absolute bottom-[540px] ml-3 "
              onClick={() => backPicture(numberPicter)}
            >
              {" "}
              <IoIosArrowBack className=" w-10 h-10  "></IoIosArrowBack>
            </div>
            <div
              className="border-2 rounded-full text-white absolute right-0 bottom-[540px] mr-3"
              onClick={() => nextPicture(numberPicter)}
            >
              {" "}
              <IoIosArrowForward className=" w-10 h-10"></IoIosArrowForward>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
