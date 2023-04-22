import { FC } from "react";
import React from "react";
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

type GameChoicesProps = {
  playerChoice: string;
  cpu: string;
  result: string;
  handlePlayAgain: () => void;
};

const GameChoices: FC<GameChoicesProps> = ({
  playerChoice,
  cpu,
  result,
  handlePlayAgain,
}) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-5 space-x-10">
        {playerChoice === "rock" && (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#c4a7e7] bg-[#e0def4] text-center shadow-lg shadow-black">
            <FaRegHandRock className="h-10 w-10" />
          </div>
        )}

        {playerChoice === "paper" && (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#f6c177] bg-[#e0def4] text-center shadow-lg shadow-black">
            <FaRegHandPaper className="h-10 w-10" />
          </div>
        )}

        {playerChoice === "scissors" && (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#eb6f92] bg-[#e0def4] text-center shadow-lg shadow-black">
            <FaRegHandScissors className="h-10 w-10" />
          </div>
        )}

        {cpu === "rock" && (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#c4a7e7] bg-[#e0def4] text-center shadow-lg shadow-black">
            <FaRegHandRock className="h-10 w-10" />
          </div>
        )}

        {cpu === "paper" && (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#f6c177] bg-[#e0def4] text-center shadow-lg shadow-black">
            <FaRegHandPaper className="h-10 w-10" />
          </div>
        )}

        {cpu === "scissors" && (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#eb6f92] bg-[#e0def4] text-center shadow-lg shadow-black">
            <FaRegHandScissors className="h-10 w-10" />
          </div>
        )}
      </div>
      <div className="mt-10 text-2xl text-[#f6c177] font-bold ">
        <h1 >
          {result}
        </h1>
      </div>
      <div
        onClick={handlePlayAgain}
        className="mt-10 rounded-lg bg-[#ebbcba] px-5 py-3  font-bold text-[#1f1d2e]"
      >
        Play Again
      </div>
    </div>
  );
};

export default GameChoices;
