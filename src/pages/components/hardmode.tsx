import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandSpock } from "react-icons/fa";
import { FaRegHandLizard } from "react-icons/fa";

function HardMode() {
  return (
    <div className="mx-auto flex h-screen max-w-screen-lg flex-col my-10 items-center justify-start px-5">
      <h1 className="my-5 text-center font-[Roboto-Slab] text-3xl font-bold text-[#e0def4]">
        Rock Paper Scissors Lizard Spock
      </h1>
      <div className="w-24 mt-5 h-24 bg-[#6e6a86] shadow-lg shadow-black rounded-full flex justify-center items-center text-center">
        <FaRegHandRock className="w-10 h-10 " />
      </div>

      <div className="mt-3 flex justify-between items-center text-center gap-5 space-x-7 w-[95%] ">
        <div className="w-24 mt-5 h-24 bg-[#e0def4]  shadow-lg shadow-black rounded-full flex justify-center items-center text-center">
          <FaRegHandPaper className="w-10 h-10" />
        </div>
        <div className="w-24 mt-5 h-24 shadow-lg shadow-black bg-[#ebbcba] rounded-full flex justify-center items-center text-center">
          <FaRegHandScissors className="w-10 h-10" />
        </div>
      </div>

      <div className="mt-7 flex justify-between  items-center text-center w-[78%]  ">
        <div className="w-24 mt-5 h-24 bg-[#c4a7e7] shadow-lg shadow-black rounded-full flex justify-center items-center text-center">
          <FaRegHandSpock className="w-10 h-10" />
        </div>
        <div className="w-24 mt-5 h-24 bg-[#31748f] shadow-lg shadow-black rounded-full flex justify-center items-center text-center">
          <FaRegHandLizard className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}

export default HardMode;
