import React from "react";
import Link from "next/link";
import { Container } from "./container";
// @ts-ignore
import TinaIconSvg from "../public/tina.svg";
import { ThemeContext } from "./theme";
import { Icon } from "./icon";

export const Header = ({ data }) => {
  const theme = React.useContext(ThemeContext);

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
      <Container className="relative z-10 py-0 max-w-8xl">
        <div className="flex items-center justify-between">
          <h4 className="my-4 text-lg font-bold tracking-tight select-none transition duration-150 ease-out transform">
            <Link href="/" passHref>
              <a className="flex items-center">
                   Tina Starter
              </a>
            </Link>
          </h4>
          <ul className="flex gap-6 sm:gap-8 lg:gap-10">
            {data.nav &&
              data.nav.map((item, i) => {
                const activeItem =
                  item.href === ""
                    ? typeof location !== "undefined" &&
                      location.pathname == "/"
                    : windowUrl.includes(item.href);
                return (
                  <li
                    key={`${item.label}-${i}`}
                  >
                    <Link href={`${prefix}/${item.href}`} passHref>
                      <a className="inline-block py-8 text-base tracking-wide select-none font-regular transition duration-150 ease-out opacity-70 hover:opacity-100">
                        {item.label}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent bottom-0 left-4 right-4 -z-1 opacity-5`}
        ></div>
      </Container>
  );
};
