import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ThemeContext } from "./theme";

export const RawRenderer = ({ rawData, parentColor }) => {
 let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`bg-stone-700 text-white z-10 relative flex items-center px-5 py-2 mx-3 my-2 font-semibold shadow-sm text-sm transition duration-150 ease-out rounded transform focus:shadow-outline focus:outline-none whitespace-nowrap opacity-80 hover:opacity-100 shadow-md`}>
                  View Raw Data
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex flex-col items-center justify-center max-h-screen min-h-screen px-4 py-12 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="">
                <Dialog.Overlay className="fixed inset-0 bg-gradient-to-br from-gray-800 to-gray-1000 opacity-80" />
              </div>
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-flex flex-col flex-1 w-full max-w-3xl max-h-full p-6 overflow-hidden text-left align-middle bg-white shadow-xl prose dark:prose-dark transition-all transform dark:bg-gray-1000 rounded-xl">
                <pre className="flex-1 overflow-y-auto">
                  <code>{JSON.stringify(rawData, null, 2)}</code>
                </pre>
                <button
                  type="button"
                  className="text-lg font-semibold flex-0 transition duration-150 ease-out opacity-80 hover:opacity-100"
                  onClick={closeModal}
                >
                  Great, thanks!
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
