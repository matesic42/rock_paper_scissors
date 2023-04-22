import React from "react";
import { useState, useEffect, FC } from "react";
import Image from "next/image";

function Modal() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex h-[50%] flex-col items-center justify-center shadow-b shadow-orange-300">
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
                      x
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
  );
}

export default Modal;
