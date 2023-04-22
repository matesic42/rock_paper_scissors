import Link from "next/link";

const App = () => {
  return (
    <div className="mx-auto flex h-screen max-w-screen-lg flex-col gap-5 items-center justify-center px-5">
      <h1 className="text-3xl text-white ">Rock Paper Scissor </h1>
      <div className="flex justify-between  text-white font-bold  gap-5 mt-10 ">
      <div className="bg-white rounded-lg shadow-lg shadow-black">
        <Link href="/components/easy/easymode">
          <p className="p-4 rounded bg-[#31748f] "> Easy Mode</p>
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-lg shadow-black ">
        <Link href="/components/hard/hardmode">
          <p className="p-4 rounded bg-[#eb6f92]"> Hard Mode</p>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default App;
