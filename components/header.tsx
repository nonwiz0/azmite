import React from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";

export const Header = ({ data }) => {
  // If we're on an admin path, other links should also link to their admin paths
  const [prefix, setPrefix] = React.useState("");
  const [windowUrl, setUrl] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  React.useEffect(() => {
    if (window.location.pathname.startsWith("/admin")) {
      setPrefix("/admin");
    }
  });

  return (
    <div className="flex flex-row justify-between p-4">
      <div className="flex flex-row">
        <img className="h-10 w-15" src={`/assets/logo.png`} />
        <img
          className="h-10 p-1 w-15 sm:h10 transform scale-150 translate-x-5 -translate-y-2"
          src={`/assets/logo_text.png`}
        />
      </div>
      <div className="flex flex-row justify-center pt-2 gap-8">
        <a> Home </a>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button>Posts</Popover.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute inset-x-0 top-0 w-screen mt-8 bg-teal-500">
                  {({ close }) => (
                    <>
                      <button onClick={() => close()}>Close</button>

                      <div className="bg-rose-500">Testing</div>
                    </>
                  )}
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <a> About </a>
      </div>

      <div> Menu </div>
    </div>
  );
};
