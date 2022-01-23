import React from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, MenuAlt3Icon, XIcon } from "@heroicons/react/outline";

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
    <div className="flex flex-row justify-between p-4 lg:px-24">
      <div className="flex flex-row">
        <img className="h-10 w-15" src={`/assets/logo.png`} />
        <img
          className="h-10 p-1 w-15 sm:h10 transform scale-150 translate-x-5 -translate-y-2"
          src={`/assets/logo_text.png`}
        />
      </div>
      <div className="flex flex-row justify-center hidden gap-8 sm:flex">
        <a className="p-2"> Home </a>
        <Popover className="relative">
          {/* Posts menu */}
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex px-2 py-1 border-2 border-transparent rounded-lg active:border-solid focus:border-stone-500">
                Posts{" "}
                <span className="inline-block">
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-6 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
                </span>
              </Popover.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel
                  className="absolute w-screen max-w-sm mt-2 text-white rounded-lg bg-stone-500 -translate-x-1/2 left-1/2"
                  static
                >
                  <div className="flex flex-col p-4 gap-4 ">
                    {data.posts?.map((item, id) => (
                      <a
                        key={id}
                        className="p-2 rounded-lg hover:bg-rose-50 hover:text-stone-600"
                      >
                        {" "}
                        {item.label}{" "}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col p-4 rounded-bl-lg rounded-br-lg gap-4 bg-gray-50">
                    <a className="p-2 rounded-lg text-stone-600 hover:bg-stone-500 hover:text-stone-50">
                      All Posts
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

 <Popover className="relative">
   {/* About us menu */}
          {({ open }) => (
            <>
              <Popover.Button className="inline-flex px-2 py-1 border-2 border-transparent rounded-lg active:border-solid focus:border-stone-500">
                About
                <span className="inline-block">
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-6 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
                </span>
              </Popover.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel
                  className="absolute w-screen max-w-sm mt-2 text-white rounded-lg bg-stone-500 -translate-x-1/2 left-1/2"
                  static
                >
                  <div className="flex flex-col p-4 gap-4 ">
                    {data.nav?.map((item, id) => (
                      <a
                        key={id}
                        className="p-2 rounded-lg hover:bg-rose-50 hover:text-stone-600"
                      >
                        {" "}
                        {item.label}{" "}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col p-4 rounded-bl-lg rounded-br-lg gap-4 bg-gray-50">
                    <a className="p-2 rounded-lg text-stone-600 hover:bg-stone-500 hover:text-stone-50">
                      All Posts
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

      </div>

      <div>
        <a className="hidden sm:block"> Selector </a>
        <Popover className="relative p-2 sm:hidden">
          {({ open }) => (
            <>
              <Popover.Button><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
</svg></Popover.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                 <Popover.Panel
                  className="absolute w-screen max-w-sm mt-2 text-white rounded-lg bg-stone-500 -translate-x-1/2 left-1/2"
                  static
                >
                  <div className="flex flex-col p-4 gap-4 ">
                    {data.nav?.map((item, id) => (
                      <a
                        key={id}
                        className="p-2 rounded-lg hover:bg-rose-50 hover:text-stone-600"
                      >
                        {" "}
                        {item.label}{" "}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col p-4 rounded-bl-lg rounded-br-lg gap-4 bg-gray-50">
                    <a className="p-2 rounded-lg text-stone-600 hover:bg-stone-500 hover:text-stone-50">
                      All Posts
                    </a>
                  </div>
                </Popover.Panel>

              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};
