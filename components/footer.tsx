import React from "react";
import Link from "next/link";
// @ts-ignore
import TinaIconSvg from "../public/tina.svg";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "./container";
import { RawRenderer } from "./rawRenderer";
import { ThemeContext } from "./theme";
import { Icon } from "./icon";

export const Footer = ({ data, icon, rawData }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <footer className={`bg-gradient-to-br`}>
      <Container className="relative" size="small">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link href="/" passHref>
            <a className="flex items-center mx-2 font-bold tracking-tight text-gray-400 opacity-50 group dark:text-gray-300 hover:opacity-100 transition duration-150 ease-out whitespace-nowrap">
                     </a>
          </Link>
          <div className="flex gap-4">
                </div>
          <RawRenderer parentColor={data.color} rawData={rawData} />
        </div>
        <div
          className={`absolute h-1 bg-gradient-to-r from-transparent ${
            data.color === "primary" ? `via-white` : `via-black dark:via-white`
          } to-transparent top-0 left-4 right-4 opacity-5`}
        ></div>
      </Container>
    </footer>
  );
};
