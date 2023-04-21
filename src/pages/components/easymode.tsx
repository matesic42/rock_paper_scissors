import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { useState, useEffect, FC } from "react";
import Image from "next/image";

function EasyMode() {
const [score, setScore] = useState(0);
const [playerChoice, setPlayerChoice] = useState("");
const [showModal, setShowModal] = useState(false);


const handlePlayerChoice = (choice: string) => {
  setPlayerChoice(choice);
};



  return (
    <div className="mx-auto flex h-screen max-w-screen-lg flex-col items-center justify-center px-9">
      <div className="my-10 flex w-full items-center justify-between rounded border border-[#e0def4] p-3">
        <div className="flex flex-col items-start justify-center">
          <p className="text-start font-[Roboto-Slab] text-xl font-bold text-[#e0def4]">
            Rock
          </p>
          <p className="text-start font-[Roboto-Slab] text-xl font-bold text-[#e0def4]">
            Paper
          </p>
          <p className="text-start font-[Roboto-Slab] text-xl font-bold text-[#e0def4]">
            Scissors
          </p>
        </div>
        <div
          style={{ backgroundColor: score >= 0 ? "#9ccfd8" : "#eb6f92" }}
          className="flex items-center justify-center rounded-lg bg-white p-4 text-center"
        >
          <h1 className="font-medium">Score: {score}</h1>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-[#c4a7e7] bg-[#e0def4] text-center shadow-lg shadow-black">
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



      <div className="flex h-[50%] flex-col items-center justify-center">
        <button
          className="mb-1 mr-1 rounded bg-[#ebbcba] px-6 py-3 text-sm font-bold uppercase text-[#191724] shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-[#f6c177]"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Rules
        </button>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden px-9  text-center outline-none focus:outline-none">
              <div className="relative mx-auto my-6 w-auto max-w-3xl">
                {/*content*/}
                <div className="relative flex w-full flex-col items-center justify-center rounded-lg border-0 bg-white px-3 shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-center rounded-t border-b border-solid border-slate-200 p-5">
                    <h3 className="text-3xl  font-medium ">Rules</h3>
                    <button
                      className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <div className="p-4">
                    <Image
                      src="../../image-rules.svg"
                      alt="Picture of the author"
                      width={300}
                      height={300}
                    />
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                    <button
                      className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-[#eb6f92] outline-none transition-all duration-150 ease-linear focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default EasyMode;
