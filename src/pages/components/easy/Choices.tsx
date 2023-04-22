import React from "react";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

interface ChoicesProps {
  handlePlayerChoice: (choice: string) => void;
}

function Choices({ handlePlayerChoice }: ChoicesProps) {
  return (
    <>
      <div className="mt-5 flex items-center justify-center">
        <div onClick={() => handlePlayerChoice("rock")} className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#c4a7e7] bg-[#e0def4] text-center shadow-lg shadow-black">
          <FaRegHandRock className="h-10 w-10" />
        </div>
      </div>
      <div className="mt-12 flex w-full items-center justify-between gap-5 space-x-7 text-center">
        <div
          onClick={() => handlePlayerChoice("paper")}
          className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#f6c177] bg-[#e0def4] text-center shadow-lg shadow-black"
        >
          <FaRegHandPaper className="h-10 w-10" />
        </div>
        <div
          onClick={() => handlePlayerChoice("scissors")}
          className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#eb6f92] bg-[#e0def4] text-center shadow-lg shadow-black"
        >
          <FaRegHandScissors className="h-10 w-10" />
        </div>
      </div>
    </>
  );
}

export default Choices;
