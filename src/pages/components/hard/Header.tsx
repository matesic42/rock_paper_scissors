import React from "react";
interface HeaderProps {
  score: number;
}

function Header({ score }: HeaderProps) {
  return (
    <div className="my-10 flex w-full items-center justify-between  rounded border border-[#e0def4] p-2">
      <div className="flex flex-col  items-start justify-center">
        <p className="text-start font-[Roboto-Slab] text-sm font-bold text-[#e0def4]">
          Rock
        </p>
        <p className="text-start font-[Roboto-Slab] text-sm font-bold text-[#e0def4]">
          Paper
        </p>
        <p className="text-start font-[Roboto-Slab] text-sm font-bold text-[#e0def4]">
          Scissors
        </p>
        <p className="text-start font-[Roboto-Slab] text-sm font-bold text-[#e0def4]">
          Lizard
        </p>
        <p className="text-start font-[Roboto-Slab] ttext-sm font-bold text-[#e0def4]">
          Spock
        </p>
        
      </div>
      <div
        style={{ backgroundColor: score >= 0 ? "#9ccfd8" : "#eb6f92" }}
        className="flex items-center justify-center rounded-lg bg-white p-4 text-center"
      >
        <h1 className="font-medium">Score: {score}</h1>
      </div>
    </div>
  );
}

export default Header;
