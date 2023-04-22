import React from "react";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandSpock } from "react-icons/fa";
import { FaRegHandLizard } from "react-icons/fa";

interface ChoicesProps {
  handlePlayerChoice: (choice: string) => void;
}

function HardChoices({ handlePlayerChoice }: ChoicesProps) {
  return (
    <>
      <div
        onClick={() => handlePlayerChoice("rock")}
        className="mt-5 flex h-24 w-24 items-center justify-center rounded-full border-8  border-[#c4a7e7] bg-white text-center shadow-lg shadow-black"
      >
        <FaRegHandRock className="h-10 w-10 " />
      </div>

      <div className="mt-3 flex w-[95%] items-center justify-between gap-5 space-x-7 text-center ">
        <div
          onClick={() => handlePlayerChoice("paper")}
          className="mt-5 flex h-24 w-24  items-center justify-center rounded-full border-8 border-[#f6c177] bg-white text-center shadow-lg shadow-black"
        >
          <FaRegHandPaper className="h-10 w-10" />
        </div>
        <div
          onClick={() => handlePlayerChoice("scissors")}
          className="mt-5 flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#eb6f92] bg-white  text-center shadow-lg shadow-black"
        >
          <FaRegHandScissors className="h-10 w-10" />
        </div>
      </div>

      <div className="mt-7 flex w-[78%]  items-center justify-between text-center  ">
        <div
          onClick={() => handlePlayerChoice("spock")}
          className="mt-5 flex h-24 w-24 items-center justify-center rounded-full border-8  border-[#ebbcba] bg-white text-center shadow-lg shadow-black"
        >
          <FaRegHandSpock className="h-10 w-10" />
        </div>
        <div
          onClick={() => handlePlayerChoice("lizard")}
          className="mt-5 flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#31748f]  bg-white text-center shadow-lg shadow-black"
        >
          <FaRegHandLizard className="h-10 w-10" />
        </div>
      </div>
    </>
  );
}

export default HardChoices;
