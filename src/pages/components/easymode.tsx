import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";


function EasyMode() {
  return (
    <div className="mx-auto flex h-screen max-w-screen-lg flex-col my-10 items-center justify-start px-5">
      <h1 className="my-5 text-center font-[Roboto-Slab] text-3xl font-bold text-[#e0def4]">
        Rock Paper Scissors
      </h1>
      <div className="w-24 mt-10 h-24 shadow-lg shadow-black bg-[#6e6a86] rounded-full flex justify-center items-center text-center">
        <FaRegHandRock className="w-10 h-10" />
      </div>

      <div className="mt-3 flex justify-between items-center text-center gap-5 space-x-7 w-[95%] ">
        <div className="w-24 mt-5 h-24 bg-[#e0def4] shadow-lg shadow-black  rounded-full flex justify-center items-center text-center">
          <FaRegHandPaper className="w-10 h-10" />
        </div>
        <div className="w-24 mt-5 h-24 bg-[#ebbcba] shadow-lg shadow-black rounded-full flex justify-center items-center text-center">
        <FaRegHandScissors className="w-10 h-10"  />
        </div>
      </div>
    </div>
  );
}

export default EasyMode;
